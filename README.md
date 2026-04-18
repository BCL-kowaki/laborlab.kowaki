# 小脇社会保険労務士事務所 公式サイト

> Labor Lab. — 新しい"攻め"の労務で、経営を伴走する。

鹿児島県の社会保険労務士事務所「小脇社会保険労務士事務所」の公式サイト実装プロジェクト。

- **ドメイン**: https://laborlab.kowackey.com
- **デザイン参考**: [AIDER (TCD115)](https://tcd-theme.com/tcd115)
- **技術スタック**: Next.js 14 + TypeScript + Tailwind CSS + Vercel

---

## 🚀 クイックスタート

### 前提条件

- Node.js 20 LTS 以上
- pnpm 8 以上

### セットアップ

```bash
# 依存パッケージのインストール
pnpm install

# 環境変数の設定
cp .env.example .env.local
# → .env.local を編集

# 開発サーバー起動
pnpm dev
```

http://localhost:3000 で確認できます。

---

## 📂 ドキュメント構造

このプロジェクトは、Claude Code との協働を前提に、以下のドキュメントで構成されています。

```
kowaki-sr/
├── CLAUDE.md                   ← Claude Code 向けメイン指示書（最初に読む）
├── README.md                   ← このファイル
│
├── skills/                     ← プロジェクトスキル集
│   ├── design-reference/       ← AIDERデザイン再現ルール
│   ├── copy-guidelines/        ← コピー運用ルール
│   └── brand-system/           ← ブランドシステム（色・フォント・余白）
│
├── content/
│   ├── copy.md                 ← 全ページのコピー素材（確定版）
│   ├── brand.md                ← ブランドガイドライン
│   └── posts/                  ← コラム記事（MDX）
│
└── docs/
    ├── sitemap.md              ← サイト構造
    ├── tech-stack.md           ← 技術スタック詳細
    ├── implementation-plan.md  ← 実装フェーズ計画
    └── competitive-analysis.md ← 鹿児島競合分析
```

### 読む順序（推奨）

1. **`CLAUDE.md`** - プロジェクトの全体像と開発ルール
2. **`content/copy.md`** - サイトに掲載する全コピー
3. **`skills/design-reference/SKILL.md`** - AIDERデザインの再現方法
4. **`skills/brand-system/SKILL.md`** - ブランドシステム
5. **`skills/copy-guidelines/SKILL.md`** - コピー運用ルール
6. **`docs/sitemap.md`** - 全ページ構成
7. **`docs/implementation-plan.md`** - 実装の進め方

---

## 🎯 実装状況

### Phase 1: セットアップ & ヒーロー
- [ ] Next.js 14 プロジェクト初期化
- [ ] ブランドトークン・Tailwind設定
- [ ] Header / Footer
- [ ] トップページ Hero セクション

### Phase 2: トップページ
- [ ] Strong Proof / 課題提起 / コンセプト
- [ ] 選ばれる理由 / サービス一覧
- [ ] こんな方におすすめ / 料金プラン
- [ ] CTA

### Phase 3: 下層ページ
- [ ] About / Services / Pricing
- [ ] Cases / Staff / News / Blog
- [ ] FAQ / Contact

### Phase 4: 仕上げ
- [ ] SEO / アクセシビリティ / パフォーマンス
- [ ] Vercel デプロイ

---

## 🛠 よく使うコマンド

```bash
# 開発サーバー
pnpm dev

# ビルド
pnpm build

# 本番モードで起動
pnpm start

# Lint
pnpm lint

# 型チェック
pnpm typecheck

# フォーマット
pnpm format
```

---

## 🚨 重要な開発ルール（必読）

### ✅ MUST

1. **日本語コピーは常に `content/copy.md` から取得する**
2. **固有名詞の匿名化ルールを遵守する**（node / nodeRoumu / 助成金レーダーを出さない）
3. **AIDER (TCD115) のデザインを忠実に再現する**
4. **コミット前に lint と typecheck を通す**
5. **モバイルファーストでレスポンシブ設計**

### ❌ DON'T

1. コピーの勝手な変更・追加
2. AIDERデザインからの独自アレンジ
3. 禁止固有名詞の露出
4. 個人情報（電話番号・住所）のハードコード
5. 外部CDNへの重い依存

詳細は [`CLAUDE.md`](./CLAUDE.md) を参照。

---

## 📜 ブランド情報

```
屋号:       小脇社会保険労務士事務所
スローガン: Labor Lab.
タグライン: 新しい"攻め"の労務で、経営を伴走する。
ドメイン:   laborlab.kowackey.com
代表:       特定社会保険労務士 小脇 [代表者名]
所在地:     鹿児島県
```

**カラーパレット**:

| 用途 | カラー | Hex |
|---|---|---|
| Primary | ネイビー | `#0A2540` |
| Accent | ゴールド | `#C9A961` |
| Tech | エレクトリックブルー | `#3B82F6` |
| Background | オフホワイト | `#FAFAFA` |

---

## 🤝 開発体制

- **発注者**: 小脇 [代表者名]
- **制作ディレクション**: Takuya（合同会社node 代表）
- **実装担当**: Claude Code

---

## 📄 ライセンス

本プロジェクトは小脇社会保険労務士事務所の所有物です。
無断複製・転用を禁じます。

© 2026 小脇社会保険労務士事務所
