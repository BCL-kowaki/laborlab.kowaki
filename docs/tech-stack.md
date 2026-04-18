# 技術スタック詳細

本プロジェクトで採用する技術の選定理由と使用ガイドライン。

---

## なぜ Next.js 14 + Vercel なのか

### WordPress (AIDER) ではなく Next.js を選ぶ理由

| 観点 | WordPress + AIDER | Next.js + Vercel |
|---|---|---|
| 開発効率 | テーマ買えば爆速 | カスタム実装で時間かかる |
| 保守性 | PHPエコシステムに依存 | モダンJSエコシステム |
| パフォーマンス | プラグイン次第 | SSG/ISRで超高速 |
| セキュリティ | 攻撃対象になりやすい | サーバーレスで攻撃面小 |
| カスタマイズ | テーマカスタマイズに限界 | 完全に自由 |
| **Takuyaさんとの親和性** | **既存プロジェクトと不一致** | **既存スタックと完全一致** |
| 運用コスト | レンタルサーバー代 | Vercel無料枠で十分 |

Takuyaさんは既に多数のNext.js 14プロジェクト（nodeRoumu、助成金レーダー、AdSync、RankGuard、ヤマトサイト、BioVault等）をCLAUDE.md駆動で進めているため、**技術スタックの一貫性**を最優先。

AIDERは**デザイン参考**として活用し、実装はNext.jsで再現する。

---

## コア技術

### Next.js 14 (App Router)

- **バージョン**: 14.2.x（または 15.x の安定版）
- **ルーティング**: App Router（Pages Routerは使わない）
- **レンダリング戦略**:
  - 静的ページ（About、Pricing、FAQ等）: SSG
  - お知らせ・ブログ: SSG + ISR（再検証30分〜1時間）
  - お問い合わせフォーム: Route Handler（Server Action可）
- **画像最適化**: `next/image` を徹底使用

### TypeScript

- **設定**: `strict: true`
- **tsconfig.json 推奨**:
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": false,
      "skipLibCheck": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [{ "name": "next" }],
      "paths": { "@/*": ["./src/*"] }
    }
  }
  ```

### Tailwind CSS v3.4

- **設定**: `tailwind.config.ts`（TypeScript）
- **カスタムカラー**: CSS変数経由で定義（ダークモード対応が容易）
- **プラグイン**:
  - `@tailwindcss/typography`（MDX記事のデフォルトスタイル）
  - `@tailwindcss/forms`（フォーム要素の統一）
- **Tailwind v4 への移行**: 安定版になってから検討

---

## UIレイヤー

### shadcn/ui

公式の `@/components/ui/` 配下にコピーしていく方式。以下を採用：

- Button
- Input / Textarea / Label
- Card
- Accordion（FAQ用）
- Dialog（モーダル）
- Form（react-hook-form統合）
- Toast（通知）

**採用理由**: 依存パッケージを最小化、ソースコードが手元に来るのでカスタマイズ自由。

### Framer Motion

- **用途**: スクロール連動アニメーション、ページトランジション、インタラクション
- **バンドル対策**: `motion` だけをインポート（バンドルサイズに注意）
- **代替案**: シンプルなフェードインだけなら CSS `@keyframes` で十分

### Lucide React

アイコンライブラリ。tree-shaking が効くので、使うアイコンだけバンドルに含まれる。

---

## コンテンツレイヤー

### MDX の選定

- **選択肢1**: `@next/mdx` + `next-mdx-remote`
- **選択肢2**: `contentlayer2`（contentlayerのメンテ版）

**推奨**: シンプルに `@next/mdx` + gray-matter で十分。contentlayer はビルドが遅くなる傾向あり。

### ディレクトリ構造

```
content/
├── copy.md              ← ページコピー素材（非MDX）
├── brand.md             ← ブランドガイドライン
├── services/
│   ├── advisor.mdx
│   ├── work-rules.mdx
│   └── ...
├── cases/
│   └── *.mdx
├── staff/
│   └── *.mdx
├── news/
│   └── *.mdx
└── blog/
    └── *.mdx
```

### MDX frontmatter 例

```mdx
---
title: 顧問契約
slug: advisor
order: 1
icon: Briefcase
excerpt: 月額固定で労務相談・法改正情報提供・基本手続きが使い放題。
publishedAt: 2026-04-20
---

# 顧問契約

ここから本文...
```

---

## フォーム・バックエンド

### お問い合わせフォーム

**スタック**:
- フロント: `react-hook-form` + `zod`（バリデーション）
- サーバー: Next.js Route Handler（`app/api/contact/route.ts`）
- 送信: Resend API
- スパム対策: Cloudflare Turnstile（reCAPTCHAより軽量）

**実装例**:

```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(100),
  email: z.string().email(),
  phone: z.string().max(20),
  message: z.string().min(1).max(2000),
  turnstileToken: z.string(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  // Turnstile検証
  // ...

  // メール送信
  await resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM!,
    to: process.env.CONTACT_EMAIL_TO!,
    subject: `【お問い合わせ】${parsed.data.name}様より`,
    html: `...`,
  });

  return Response.json({ ok: true });
}
```

---

## SEO / メタデータ

### Next.js の Metadata API

各ページで `generateMetadata` を実装：

```typescript
// src/app/(marketing)/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '事務所について | 小脇社会保険労務士事務所',
  description: '...',
  openGraph: {
    title: '事務所について | 小脇社会保険労務士事務所',
    description: '...',
    images: ['/og/about.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

### sitemap.xml / robots.txt

Next.js 14 のファイルベースルーティングで：

- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`

### 構造化データ（JSON-LD）

`src/components/seo/structured-data.tsx` にコンポーネント化：

- Organization: 全ページ
- LocalBusiness: About、Contact
- Service: Services詳細
- Article: Blog記事
- FAQPage: FAQページ
- BreadcrumbList: 全ページ

---

## 解析・計測

### Vercel Analytics

無料枠で十分。`@vercel/analytics` と `@vercel/speed-insights` を追加。

### Google Analytics 4（任意）

必要に応じて。`app/layout.tsx` に Script で読み込み。

---

## パフォーマンス目標

| 指標 | 目標値 |
|---|---|
| Lighthouse Performance | 90点以上 |
| Lighthouse Accessibility | 95点以上 |
| Lighthouse Best Practices | 95点以上 |
| Lighthouse SEO | 100点 |
| First Contentful Paint | < 1.5秒 |
| Largest Contentful Paint | < 2.5秒 |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |

---

## 開発環境

### パッケージマネージャ

**pnpm** を採用。理由：
- npm より高速
- ディスク容量効率
- `node_modules` のフラット化を避ける

### Node.js バージョン

- 推奨: Node.js 20 LTS（Vercelデフォルト）
- `.nvmrc` を配置

### エディタ設定

- **VS Code** + 以下の拡張機能:
  - Tailwind CSS IntelliSense
  - Prettier
  - ESLint
  - MDX

### Linter / Formatter

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

ESLint: `eslint-config-next` の標準設定 + 追加ルール。

---

## デプロイフロー

### Git フロー

```
main (本番)
  ↑
  develop (開発統合)
    ↑
    feature/* (機能別ブランチ)
```

### Vercel との連携

- `main` ブランチ → Production（laborlab.kowackey.com）
- `develop` ブランチ → Preview
- `feature/*` → Preview URL を自動生成

### 環境変数

Vercel Dashboard で管理：

- Production: `laborlab.kowackey.com` 用の本番値
- Preview: 開発用のテスト値
- Development: ローカル `.env.local`

---

## Phase 2以降の拡張技術

### 会員機能を追加する場合

- 認証: `NextAuth.js` or `Clerk`
- データベース: Neon PostgreSQL + Prisma
- セッション管理: JWT or Cookie-based

### 予約管理機能

- カレンダーUI: `react-calendar` or `FullCalendar`
- 予約データ: Neon PostgreSQL
- 通知: Resend + Slack Webhook

### CMS化

- Headless CMS: Sanity or Contentful
- 管理画面の独自実装は避ける（工数対効果が悪い）

---

## 判断に迷うケースへのガイドライン

### 新しいライブラリを入れるか？

以下の場合は**入れない**：

- 標準APIで代替可能（`fetch` / `Intl.NumberFormat` 等）
- shadcn-ui のコンポーネントで代替可能
- 使用箇所が1〜2箇所のみ
- 最終更新が1年以上前
- GitHub スターが 500 未満

### ロジックをServer ComponentかClient Componentか

- デフォルト: Server Component
- Client化する条件:
  - `useState` / `useEffect` が必要
  - イベントハンドラが必要（`onClick` 等）
  - Browser API が必要（`localStorage`, `window` 等）
  - `framer-motion` の `motion` を使う

### CSS-in-JS vs Tailwind

- **基本**: Tailwindのユーティリティクラス
- **例外**: 動的な値（スクロール位置に応じた透明度等）は `style` 属性で
- **避ける**: CSS-in-JSライブラリ（Emotion / styled-components）は使わない
