# OG画像について

本フォルダには、各ページの OGP 画像（1200 × 630 px PNG）を配置します。

## 必要なファイル

- `home.png` - トップページ
- `about.png` - 事務所について
- `services.png` - サービス
- `pricing.png` - 料金プラン
- `contact.png` - お問い合わせ
- `default.png` - 上記以外のデフォルト

## 作成方法

### 案1: 静的に作成

Figma / Photoshop などで、以下の仕様で作成：

- サイズ: 1200 × 630 px
- 背景: ネイビーグラデーション (#0A2540 → #061A2E)
- 中央: 屋号ロゴ（白 + ゴールド）
- 下部: ページタイトル + Labor Lab. スローガン
- フォーマット: PNG

詳細なプロンプトは `docs/logo-design-brief.md` の「8. AI画像生成ツール用プロンプト」を参照。

### 案2: 動的に生成（Phase 2で検討）

Next.js の `ImageResponse` API で動的生成：

```typescript
// src/app/og/route.tsx
import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A2540, #061A2E)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>
          小脇社会保険労務士事務所
        </div>
        <div style={{ fontSize: 32, color: '#C9A961', fontStyle: 'italic', marginTop: 16 }}>
          Labor Lab.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

## 現状

このフォルダには、本番のOGP画像がまだ配置されていません。
開業前に必ず用意してください。
