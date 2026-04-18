# セットアップ手順

このドキュメントは、本プロジェクトを初めてセットアップする開発者・Claude Code 向けの手順書です。

---

## 前提条件

- Node.js 20 LTS 以上
- pnpm 8 以上（推奨）/ npm でも可
- Git

---

## 初期セットアップ

### 1. リポジトリクローン（まだの場合）

```bash
git clone [REPOSITORY_URL] kowaki-sr
cd kowaki-sr
```

### 2. 依存パッケージのインストール

```bash
pnpm install
```

### 3. 環境変数の設定

```bash
cp .env.example .env.local
```

`.env.local` を開いて、必要な値を設定：

- `NEXT_PUBLIC_SITE_URL` - 開発時は `http://localhost:3000`、本番は `https://laborlab.kowackey.com`
- `RESEND_API_KEY` - [Resend](https://resend.com) で取得（お問い合わせフォーム使用時）
- `CONTACT_EMAIL_TO` - 問い合わせ受信先
- `CONTACT_EMAIL_FROM` - 送信元（ドメイン認証済みであること）

### 4. 開発サーバー起動

```bash
pnpm dev
```

http://localhost:3000 でトップページが表示されます。

---

## 初回確認

### トップページの表示確認

以下のセクションが順に表示されることを確認：

1. ✅ Hero（「損してない？」のヘッドコピー）
2. ✅ Strong Proof（3つの強み）
3. ✅ Issue Section（こんな取りこぼし、心当たりありませんか？）
4. ✅ Concept Section（Labor Lab）
5. ✅ Why Us（選ばれる理由3本柱）
6. ✅ Services Overview（サービス7つ）
7. ✅ Target Section（こんな経営者様に）
8. ✅ Pricing Section（料金プラン）
9. ✅ CTA Section（末尾の大CTA）
10. ✅ Footer

### モバイル表示確認

Chrome DevTools で以下を確認：

- iPhone SE（375px 幅）
- iPhone 14 Pro（393px 幅）
- iPad（768px 幅）

### Lighthouse スコア確認

Chrome DevTools の Lighthouse タブで：

- Performance: 90以上
- Accessibility: 95以上
- Best Practices: 95以上
- SEO: 100

---

## よくあるトラブル

### 1. フォントが表示されない

**症状**: 明朝体・ゴシック体が反映されない
**対処**: `src/app/layout.tsx` で Google Fonts が正しく読み込まれているか確認。`variable` プロパティが `<html>` の className に適用されているか確認。

### 2. Framer Motion のアニメーションが動かない

**症状**: ヒーローのテキストがフェードインしない
**対処**:
- `'use client'` が該当コンポーネント先頭にあるか確認
- `framer-motion` がインストールされているか：`pnpm list framer-motion`

### 3. Tailwind のカスタムカラーが効かない

**症状**: `bg-primary` や `text-accent` が反映されない
**対処**:
- `tailwind.config.ts` の `content` が正しく指定されているか確認
- `src/app/globals.css` で CSS変数が定義されているか確認
- 開発サーバーを再起動：`Ctrl + C` → `pnpm dev`

### 4. 型エラーが出る

**症状**: `as const` で定義したオブジェクトの型エラー
**対処**:
- `pnpm typecheck` でエラー全体を確認
- `tsconfig.json` の `strict: true` が有効かチェック

---

## Phase 別の次のステップ

セットアップ完了後、以下の順で拡張していきます：

### Phase 2（現在のTOP完成状態からの拡張）

1. 下層ページ作成（`/about`, `/services`, `/services/[slug]` 等）
2. お問い合わせフォームの実装（Resend連携）
3. MDX によるコラム機能
4. JSON-LD 構造化データの実装

### Phase 3

5. OGP画像の本番版作成
6. ファビコン・アプリアイコンの本番版
7. お客様の声コンテンツ追加
8. スタッフ紹介コンテンツ追加

### Phase 4（本番リリース）

9. Vercel デプロイ
10. カスタムドメイン（`laborlab.kowackey.com`）設定
11. 本番環境変数設定
12. Google Search Console / Vercel Analytics 設定

詳細は `docs/implementation-plan.md` を参照。

---

## よく使うコマンド

```bash
# 開発サーバー起動
pnpm dev

# 本番ビルド
pnpm build

# 本番モードで起動（ビルド後確認用）
pnpm start

# Lint チェック
pnpm lint

# 型チェック
pnpm typecheck

# フォーマット
pnpm format

# フォーマットチェック（CI用）
pnpm format:check
```

---

## 開発時のルール（再掲）

詳細は `CLAUDE.md` 参照。

### ✅ MUST

- 日本語コピーは必ず `src/lib/copy.ts` 経由で取得
- 固有名詞（node / nodeRoumu / 助成金レーダー）を出さない
- AIDER（TCD115）のデザインを忠実に再現
- コミット前に `pnpm lint && pnpm typecheck`

### ❌ DON'T

- コピーをコンポーネントに直書き
- AIDERから独自解釈のデザイン変更
- 禁止固有名詞の露出
- 個人情報のハードコード

---

## トラブル時の相談先

- **技術的な問題**: Takuya さんに相談
- **コピーの判断**: 小脇 代表に相談（Takuya 経由）
- **デザインの解釈**: AIDER デモサイト → `skills/design-reference/SKILL.md` の順に確認

---

お疲れ様です。良いサイトを作りましょう 🚀
