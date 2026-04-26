import { NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * お問い合わせフォームの送信先 API。
 *
 * 実装方針:
 * - 受信したフォームデータをサーバーサイドで再バリデーション
 * - GAS Web App（環境変数 GAS_WEBHOOK_URL）に転送
 * - GAS 側でスプレッドシート追記 + メール通知（管理者宛 + ユーザー自動返信）
 *
 * 簡易ボット対策:
 * - 'website' フィールド（honeypot）に値があれば即拒否
 * - 共有トークン GAS_SHARED_TOKEN を付与し GAS 側で照合
 */

const schema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().min(1).max(200),
  employees: z.string().min(1).max(50),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional().default(''),
  subject: z.string().min(1).max(100),
  message: z.string().min(10).max(5000),
  /** Honeypot: 通常ユーザーは空のままだが、ボットは埋めがち */
  website: z.string().max(0).optional().default(''),
});

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json' },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'invalid_input' },
      { status: 400 },
    );
  }

  // Honeypot 引っかかったら成功扱いで静かに棄却
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const webhookUrl = process.env.GAS_WEBHOOK_URL;
  const sharedToken = process.env.GAS_SHARED_TOKEN ?? '';
  if (!webhookUrl) {
    console.error('[contact] GAS_WEBHOOK_URL is not configured');
    return NextResponse.json(
      { ok: false, error: 'server_misconfigured' },
      { status: 500 },
    );
  }

  // 受信時刻を付与
  const payload = {
    token: sharedToken,
    receivedAt: new Date().toISOString(),
    name: parsed.data.name,
    company: parsed.data.company,
    employees: parsed.data.employees,
    email: parsed.data.email,
    phone: parsed.data.phone ?? '',
    subject: parsed.data.subject,
    message: parsed.data.message,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // GAS 側で 30 秒以内に応答しなければ失敗扱い
      signal: AbortSignal.timeout(30_000),
    });

    if (!res.ok) {
      console.error('[contact] GAS responded with', res.status);
      return NextResponse.json(
        { ok: false, error: 'upstream_error' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] failed to forward to GAS', err);
    return NextResponse.json(
      { ok: false, error: 'upstream_unreachable' },
      { status: 502 },
    );
  }
}
