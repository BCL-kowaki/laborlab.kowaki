# CLAUDE.md - 小脇社会保険労務士事務所 公式サイト開発指示書

このファイルは、Claude Codeが本プロジェクトを実装する際に**最初に・常に**参照すべき指示書です。

---

## 🎯 プロジェクト概要

**案件名**: 小脇社会保険労務士事務所 公式サイト制作
**屋号（正式名称）**: 小脇社会保険労務士事務所
**スローガン**: Labor Lab.
**タグライン**: 新しい"攻め"の労務で、経営を伴走する。
**ドメイン**: `laborlab.kowackey.com`（既存 `kowackey.com` のサブドメイン）
**所在地**: 鹿児島県
**開業年**: 創業5〜6年（2020年前後）

### 事業ポジショニング

- 鹿児島で唯一、AIを活用したIT・DXコンサルティング企業と連携する社会保険労務士事務所
- 顧問先に独自開発のクラウド労務システムとAI助成金検出システムを標準提供
- 競合分析の詳細は `docs/competitive-analysis.md` を参照

### ターゲット顧客

- 創業・成長フェーズの中小企業経営者（30〜40代）
- IT・Web・EC・D2C事業者
- 2代目・3代目経営者
- 医療・介護・保育のDX推進事業者

---

## 🛠 技術スタック

### フロントエンド

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v3.4**
- **Framer Motion**（アニメーション）
- **Radix UI** / **shadcn/ui**（UIコンポーネント）
- **Lucide React**（アイコン）

### コンテンツ管理

- **MDX**（ブログ・コラム用）
- **Contentlayer** or **next-mdx-remote**

### デプロイ・インフラ

- **Vercel**（ホスティング）
- カスタムドメイン: `laborlab.kowackey.com`
- Cloudflare（DNS・CDN、必要に応じて）

### フォーム・メール

- **Resend**（お問い合わせフォーム通知）
- **react-hook-form** + **zod**（フォーム管理とバリデーション）

### 将来拡張（Phase 2以降）

- Prisma + Neon PostgreSQL（予約管理・会員機能を実装する場合）
- Vercel KV（問い合わせキャッシュ）

---

## 📐 デザイン参考

**参考WordPressテーマ**: [AIDER (TCD115)](https://tcd-theme.com/tcd115)
**デモサイト**: https://demo.tcd-theme.com/tcd115/

このテーマのデザイン・下層ページ構成をNext.jsで**忠実に再現**します。
詳細ルールは `skills/design-reference/SKILL.md` を参照してください。

### 特に再現すべきポイント

- ネイビー基調 × 白背景の信頼感ある配色
- 大きめのタイポグラフィと十分な余白
- ヒーローの強いファーストインプレッション
- カスタム投稿タイプ: お知らせ / サービス / お客様の声 / スタッフ
- 柔らかなアニメーション（スクロール連動のフェードイン等）

---

## 📝 コピー素材

全コピー素材は `content/copy.md` に集約しています。実装時は必ずこのファイルから取得し、**勝手に文言を変えない**でください。

### 重要ルール（固有名詞の扱い）

以下の固有名詞は**絶対にサイト上に出さない**でください：

- ❌ 合同会社node / node LLC → ✅ 「AIを活用したIT・DXコンサルティング企業」「提携先」
- ❌ nodeRoumu → ✅ 「クラウド労務管理システム」「クラウド労務システム」
- ❌ 助成金レーダー → ✅ 「AI助成金自動マッチングシステム」「AI助成金検出」

詳細は `skills/copy-guidelines/SKILL.md` を参照してください。

---

## 📁 ディレクトリ構造

```
kowaki-sr/
├── CLAUDE.md                    ← このファイル（常に最初に読む）
├── README.md
├── .env.example
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
│
├── skills/                      ← プロジェクトスキル集
│   ├── design-reference/
│   │   └── SKILL.md             ← AIDERデザイン再現ルール
│   ├── copy-guidelines/
│   │   └── SKILL.md             ← コピー運用ルール
│   └── brand-system/
│       └── SKILL.md             ← ブランドシステム（色・フォント・余白）
│
├── content/
│   ├── copy.md                  ← 全ページのコピー素材（確定版）
│   ├── brand.md                 ← ブランドガイドライン
│   └── posts/                   ← コラム記事（MDX）
│       └── example.mdx
│
├── docs/
│   ├── sitemap.md               ← サイト構造
│   ├── tech-stack.md            ← 技術スタック詳細
│   ├── implementation-plan.md   ← 実装フェーズ計画
│   └── competitive-analysis.md  ← 鹿児島競合分析
│
├── src/
│   ├── app/
│   │   ├── (marketing)/         ← 公開ページ群
│   │   │   ├── page.tsx         ← トップ
│   │   │   ├── about/           ← 事務所について
│   │   │   ├── services/        ← サービス一覧・詳細
│   │   │   ├── pricing/         ← 料金プラン
│   │   │   ├── cases/           ← お客様の声
│   │   │   ├── staff/           ← スタッフ紹介
│   │   │   ├── news/            ← お知らせ
│   │   │   ├── blog/            ← コラム
│   │   │   ├── faq/             ← よくある質問
│   │   │   └── contact/         ← お問い合わせ
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/                  ← shadcn系汎用UI
│   │   ├── layout/              ← Header, Footer, Navigation
│   │   ├── sections/            ← Hero, ProofBar, ServiceGrid等
│   │   └── blocks/              ← 再利用可能コンテンツブロック
│   │
│   ├── lib/
│   │   ├── copy.ts              ← copy.mdをパースしたコピー定数
│   │   ├── seo.ts               ← SEOメタデータ生成
│   │   └── utils.ts
│   │
│   └── styles/
│       └── tokens.css           ← デザイントークン
│
└── public/
    ├── images/
    ├── logos/
    └── og/                      ← OGP画像
```

---

## 🚀 実装フェーズ

実装は以下の順で進めてください。詳細は `docs/implementation-plan.md` を参照。

### Phase 1: セットアップ & ヒーロー（最優先）

1. Next.js 14プロジェクト初期化
2. Tailwind・Framer Motion・shadcn/uiセットアップ
3. ブランドトークン定義（`src/styles/tokens.css`）
4. Header / Footer 実装
5. **トップページのヒーローセクション**を実装
   - これが最初にお父様に見せる"顔"になるので、最優先で仕上げる

### Phase 2: トップページの残りセクション

6. 3つのストロング・プルーフ
7. 課題提起セクション
8. コンセプトセクション（Labor Lab）
9. 選ばれる理由3本柱
10. こんな方におすすめ
11. 料金プラン
12. CTAセクション

### Phase 3: 下層ページ

13. 事務所について（/about）
14. サービス一覧・詳細（/services, /services/[slug]）
15. 料金プラン（/pricing）
16. お客様の声（/cases, /cases/[slug]）
17. スタッフ紹介（/staff）
18. お知らせ（/news）
19. コラム（/blog）
20. FAQ（/faq）
21. お問い合わせ（/contact）

### Phase 4: 仕上げ

22. SEO最適化（meta・OGP・sitemap.xml・robots.txt）
23. アクセシビリティチェック（WCAG 2.1 AA準拠目標）
24. パフォーマンス最適化（Lighthouse 90点以上）
25. 本番デプロイ（Vercel → laborlab.kowackey.com）

---

## ⚠️ 開発時の重要ルール

### ✅ MUST（必ず守る）

1. **すべての日本語コピーは `content/copy.md` から取得する**
   - コード内に直接コピーを書かない
   - 変更時は `content/copy.md` を先に編集してから反映

2. **固有名詞の匿名化ルールを遵守する**
   - node LLC / nodeRoumu / 助成金レーダーを絶対にサイト上に出さない

3. **デザインは AIDER（TCD115）を忠実に再現する**
   - 独自解釈でデザインを変えない
   - 判断に迷ったら `skills/design-reference/SKILL.md` を参照

4. **コミット前にLint・型チェックを通す**
   - `pnpm lint` と `pnpm typecheck` がパスすること

5. **レスポンシブを最初から意識する**
   - モバイル（375px）、タブレット（768px）、デスクトップ（1280px）で確認

### ❌ DON'T（絶対にやらない）

1. **コピーの勝手な変更・追加**: Takuyaさんの確認なしにコピーを変更しない
2. **AIDERデザインからの逸脱**: "良かれと思って"のアレンジはしない
3. **固有名詞の露出**: node / nodeRoumu / 助成金レーダー等は絶対に出さない
4. **個人情報のハードコード**: 電話番号・住所はすべて環境変数から取得
5. **外部CDNへの重い依存**: バンドルサイズとセキュリティに注意

---

## 🌐 出力言語

**Claude Codeは本プロジェクトで、すべての応答を日本語で行ってください。**
コミットメッセージ、コメント、ドキュメントも原則日本語（技術用語は英語OK）。

---

## 🔗 関連ドキュメント

すべて相対パスで参照：

- [ブランドシステム](./skills/brand-system/SKILL.md)
- [デザイン参考ルール](./skills/design-reference/SKILL.md)
- [コピー運用ルール](./skills/copy-guidelines/SKILL.md)
- [コピー素材（確定版）](./content/copy.md)
- [ブランドガイドライン](./content/brand.md)
- [サイトマップ](./docs/sitemap.md)
- [技術スタック詳細](./docs/tech-stack.md)
- [実装計画](./docs/implementation-plan.md)
- [競合分析](./docs/competitive-analysis.md)

---

## 👤 開発者情報

- **発注者**: 小脇 [代表者名]（事務所代表）
- **制作ディレクション**: Takuya（合同会社node 代表）
- **実装担当**: Claude Code

疑問・判断に迷う場合は、Takuyaさんに確認を取ってください。
