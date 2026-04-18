# 実装計画

小脇社会保険労務士事務所 公式サイトの、フェーズ別実装ロードマップ。

---

## 全体スケジュール目安

```
Week 1: セットアップ + トップページ Hero
Week 2: トップページ残りセクション
Week 3: 下層ページ（サービス系）
Week 4: 下層ページ（コンテンツ系）
Week 5: 仕上げ + デプロイ
```

---

## Phase 1: セットアップ & ヒーロー（優先度: 最高）

### 1.1 Next.js 14 プロジェクト初期化

```bash
pnpm create next-app@latest kowaki-sr \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-pnpm

cd kowaki-sr
```

### 1.2 依存パッケージの追加

```bash
# UI
pnpm add framer-motion clsx tailwind-merge class-variance-authority
pnpm add @radix-ui/react-slot lucide-react

# Forms
pnpm add react-hook-form zod @hookform/resolvers

# Fonts (Next.js built-in)
# Noto Sans JP / Noto Serif JP / Manrope / Inter

# Meta / SEO
pnpm add -D @types/node

# Linting
pnpm add -D prettier prettier-plugin-tailwindcss
```

### 1.3 初期セットアップ作業

- [ ] `tailwind.config.ts` にブランドトークン設定
- [ ] `src/styles/tokens.css` 作成（`skills/brand-system/SKILL.md` 参照）
- [ ] `src/app/layout.tsx` でフォント設定
- [ ] `src/lib/utils.ts` に `cn()` ヘルパー追加
- [ ] `src/lib/copy.ts` に `content/copy.md` の内容を定数化
- [ ] `src/lib/motion.ts` にアニメーションプリセット作成
- [ ] `.env.example` と `.env.local` 準備

### 1.4 共通コンポーネント実装

- [ ] `src/components/ui/button.tsx`（CVAで variant 管理）
- [ ] `src/components/ui/container.tsx`（幅制約用）
- [ ] `src/components/layout/header.tsx`
- [ ] `src/components/layout/footer.tsx`
- [ ] `src/components/layout/mobile-menu.tsx`

### 1.5 トップページ Hero 実装（最優先）

```tsx
// src/components/sections/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { HERO, SLOGAN } from '@/lib/copy';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-5 select-none pointer-events-none flex items-end justify-end pr-8 pb-8">
        <span className="text-[20vw] font-bold italic text-accent">Labor Lab.</span>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm tracking-widest font-mono mb-4"
        >
          GROW YOUR BUSINESS
        </motion.p>

        <h1 className="text-white font-serif text-display-xl leading-heading mb-8">
          {HERO.mainHeading.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/80 text-body-lg leading-body max-w-2xl mb-12 whitespace-pre-line"
        >
          {HERO.subHeading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="accent" size="xl">{HERO.ctaPrimary}</Button>
          <Button variant="secondary" size="xl" className="text-white border-white">{HERO.ctaSecondary}</Button>
        </motion.div>
      </div>
    </section>
  );
}
```

### Phase 1 完了判定

- [ ] `pnpm dev` で起動、トップページの Hero が表示される
- [ ] モバイル表示が崩れていない
- [ ] テキストのアニメーションが自然に動く
- [ ] Lighthouse Performance が 90点以上

---

## Phase 2: トップページの残りセクション

以下を順に実装。各セクションは独立した `src/components/sections/*.tsx` として作成：

### 2.1 Strong Proof（3つの強み）

`src/components/sections/strong-proof.tsx`

3カラムグリッド、アイコン + タイトル + サブテキスト

### 2.2 Issue Section（課題提起）

`src/components/sections/issue-section.tsx`

4つの課題カード、スクロール連動でフェードイン

### 2.3 Concept Section（Labor Lab コンセプト）

`src/components/sections/concept.tsx`

ブランドの姿勢を語るセクション

### 2.4 Why Us（選ばれる理由）

`src/components/sections/why-us.tsx`

3つの大きな理由、アコーディオン or タブ形式

### 2.5 Services Overview（サービス一覧）

`src/components/sections/services-overview.tsx`

7サービスをカード形式で、詳細ページへのリンク

### 2.6 Target Customers（こんな方におすすめ）

`src/components/sections/target.tsx`

5項目、シンプルなリスト形式

### 2.7 Pricing Section（料金プラン）

`src/components/sections/pricing.tsx`

4プランの比較表、スポット料金表

### 2.8 CTA Section

`src/components/sections/cta.tsx`

ページ末尾の大きなCTA

### 2.9 トップページの統合

`src/app/(marketing)/page.tsx` で全セクションを並べる。

---

## Phase 3: 下層ページ

### 3.1 About（事務所について）

- `/about`（概要ページ）
- `/about/greeting`（代表挨拶）
- `/about/overview`（事務所概要）
- `/about/access`（アクセス）

### 3.2 Services（サービス）

- `/services`（一覧）
- `/services/[slug]`（詳細、動的ルート）

MDX で各サービスを管理：
```
content/services/
  advisor.mdx           顧問契約
  work-rules.mdx        就業規則
  payroll.mdx           給与計算
  insurance.mdx         社会保険
  grants.mdx            助成金
  audit.mdx             労務監査
  troubles.mdx          労働トラブル
```

### 3.3 Pricing（料金）

- `/pricing`（詳細版料金ページ）

### 3.4 Cases（お客様の声）

- `/cases`（一覧）
- `/cases/[slug]`（詳細）

MDX で管理。

### 3.5 Staff（スタッフ）

- `/staff`（一覧）
- `/staff/[slug]`（詳細）

MDX で管理。

### 3.6 News / Blog

- `/news`, `/news/[slug]`
- `/blog`, `/blog/[slug]`, `/blog/category/[category]`

MDX + Contentlayer or next-mdx-remote。

### 3.7 FAQ

- `/faq`

アコーディオン形式。

### 3.8 Contact

- `/contact`

react-hook-form + zod でフォーム実装。
Resend で送信通知。

### 3.9 法務ページ

- `/privacy`
- `/terms`

---

## Phase 4: 仕上げ

### 4.1 SEO

- [ ] 各ページに `generateMetadata` を実装
- [ ] OGP画像を各ページ分作成（1200x630）
- [ ] `src/app/sitemap.ts` 実装
- [ ] `src/app/robots.ts` 実装
- [ ] JSON-LD 構造化データ実装（Organization / LocalBusiness / FAQPage / Article）

### 4.2 アクセシビリティ

- [ ] セマンティックHTML（`<main>`, `<nav>`, `<article>` 等）
- [ ] aria-label の適切な付与
- [ ] フォーカス可視化（focus:ring）
- [ ] キーボード操作確認
- [ ] スクリーンリーダーでの読み上げ確認
- [ ] コントラスト比 WCAG AA 準拠

### 4.3 パフォーマンス

- [ ] `next/image` で画像最適化
- [ ] フォントのサブセット化
- [ ] 不要なライブラリ削除
- [ ] Lighthouse Performance 90点以上
- [ ] Core Web Vitals 全項目 Good

### 4.4 解析・計測

- [ ] Google Analytics 4 導入（任意）
- [ ] お問い合わせコンバージョン計測
- [ ] Vercel Analytics 有効化

### 4.5 デプロイ

- [ ] Vercel にプロジェクト連携
- [ ] カスタムドメイン `laborlab.kowackey.com` 設定
- [ ] DNS設定（CNAME or A レコード）
- [ ] SSL証明書自動発行確認
- [ ] 環境変数を Vercel に設定
- [ ] プロダクション確認

### 4.6 リリース前チェック

- [ ] 全ページ表示確認（PC / タブレット / モバイル）
- [ ] リンク切れチェック
- [ ] 固有名詞チェック（node / nodeRoumu / 助成金レーダー が出ていないか）
- [ ] 電話番号・住所・メールアドレスの確認
- [ ] お問い合わせフォーム送信テスト
- [ ] SEO メタデータ確認
- [ ] OGP表示確認（X / Facebook / LINE で実際にシェアしてみる）
- [ ] スピードテスト（PageSpeed Insights）
- [ ] バックアップ取得

---

## 判断に迷った時の優先順位

1. **Takuyaさんの指示**: 明示的な指示があればそれを優先
2. **CLAUDE.md / SKILL.md のルール**: これらは変更しない前提
3. **AIDERのデモサイト**: デザインで迷ったら参照
4. **ユーザー体験**: 最終的に経営者が見て「この事務所に相談したい」と思える作りに

---

## 技術的な判断基準

### 新しいライブラリを追加する前に

以下を確認：

- [ ] 本当に必要か？Next.js 標準 / shadcn-ui で代替できないか？
- [ ] バンドルサイズへの影響（`bundlephobia.com` で確認）
- [ ] メンテナンスされているか（最終更新日、スター数）
- [ ] ライセンスが MIT / Apache 2.0 等の商用OKなものか

### パフォーマンスの妥協点

- First Contentful Paint: < 1.5秒
- Largest Contentful Paint: < 2.5秒
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 200ms

上記を達成できない実装は見直す。

---

## コミットメッセージ規約

Conventional Commits に準拠（日本語OK）：

```
feat: ヒーローセクションを実装
fix: モバイル表示で見出しが改行されない問題を修正
style: フッターの余白を調整
docs: CLAUDE.mdを更新
refactor: ボタンコンポーネントをCVA化
chore: Tailwindを最新版に更新
```

---

## 環境変数（.env.local）

```bash
# Resend (お問い合わせフォーム通知)
RESEND_API_KEY=re_xxx
CONTACT_EMAIL_TO=info@laborlab.kowackey.com
CONTACT_EMAIL_FROM=noreply@laborlab.kowackey.com

# Site URL (OGP / sitemap 用)
NEXT_PUBLIC_SITE_URL=https://laborlab.kowackey.com

# Analytics (任意)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`.env.example` も同じキーで用意（値は空）。
