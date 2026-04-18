# SKILL: AIDER (TCD115) デザイン再現ルール

## 目的

WordPressテーマ [AIDER (TCD115)](https://tcd-theme.com/tcd115) のデザインを、Next.js 14 + Tailwind CSSで**忠実に再現**するためのルール集。

**参考デモサイト**: https://demo.tcd-theme.com/tcd115/

---

## ⚡ 実装前の必須アクション

実装に着手する前に、Claude Codeは以下を必ず実施してください：

1. **デモサイトを実際に確認**: `https://demo.tcd-theme.com/tcd115/`
2. **下層ページも全て巡回**:
   - About / Company
   - Services 一覧・詳細
   - Staff 一覧・詳細
   - お客様の声 一覧・詳細
   - お知らせ・Blog
   - Contact
3. **モバイル版も確認**: DevToolsで375px幅の表示を確認
4. **スクリーンショットを撮影**: `public/design-reference/` に保存（任意）

---

## 🎨 AIDER の視覚的特徴

### 全体の印象

- **信頼感・誠実さ・専門性**を最優先に設計された士業テーマ
- モダンで清潔感のあるデザイン、堅すぎない柔らかさ
- 十分な余白（ホワイトスペース）で読みやすさを確保

### カラースキーム

AIDERのデモサイトはネイビー基調。小脇事務所では以下を採用：

```css
/* Primary - 深いネイビー（信頼感） */
--color-primary: #0A2540;
--color-primary-dark: #061A2E;
--color-primary-light: #1E3A5F;

/* Accent - ゴールド（プレミアム感・"取りこぼさない"の象徴） */
--color-accent: #C9A961;
--color-accent-dark: #A68843;
--color-accent-light: #E0C382;

/* Sub Accent - エレクトリックブルー（AI・テック感） */
--color-tech-blue: #3B82F6;

/* Neutral */
--color-white: #FFFFFF;
--color-off-white: #FAFAFA;
--color-gray-50: #F6F6F6;   /* AIDERで頻用される背景色 */
--color-gray-100: #E5E7EB;
--color-gray-500: #6B7280;
--color-gray-900: #111827;
```

### タイポグラフィ

AIDERは和文3種 / 欧文13種 + Webフォント対応だが、シンプルに以下を採用：

```css
/* 見出し（和文）: Noto Serif JP もしくは Shippori Mincho */
--font-heading-ja: 'Noto Serif JP', 'Shippori Mincho', serif;

/* 本文（和文）: Noto Sans JP */
--font-body-ja: 'Noto Sans JP', sans-serif;

/* 欧文見出し: Inter もしくは Manrope */
--font-heading-en: 'Manrope', 'Inter', sans-serif;

/* 欧文本文: Inter */
--font-body-en: 'Inter', sans-serif;
```

**用途分け:**
- 大見出し（H1, H2）: 明朝系で重厚感
- 中小見出し（H3〜）: ゴシック系でクリア
- 本文: ゴシック系
- 英語タグライン・ラボ感: 欧文フォント

### 行間・余白

```css
/* 行間 */
--leading-heading: 1.4;
--leading-body: 1.8;

/* セクション間余白（PC） */
--section-py-pc: 120px;

/* セクション間余白（SP） */
--section-py-sp: 80px;

/* コンテンツ最大幅 */
--container-max: 1200px;
--container-narrow: 960px;
```

---

## 📐 レイアウト構造

### ヘッダー

AIDERのヘッダーは以下の構造：

```
┌────────────────────────────────────────────┐
│  [LOGO]    Menu  Menu  Menu  Menu  [CTA]   │
└────────────────────────────────────────────┘
```

- 高さ: 80px (PC) / 64px (SP)
- 背景: 白 or 透過
- スクロール時に白背景 + 薄いシャドウを追加
- CTA: 「無料相談」ボタン（ゴールド背景 + 白文字）

### ヒーロー（MV）

```
┌────────────────────────────────────────────┐
│                                            │
│    ## 損してない？                          │
│    ## もらえるはずの助成金を                │
│    ## 見過ごしてませんか？                  │
│                                            │
│    サブヘッドコピー（2-3行）                │
│                                            │
│    [CTA Primary]  [CTA Secondary]          │
│                                            │
│    [Labor Lab. の薄いタイポ装飾]            │
│                                            │
└────────────────────────────────────────────┘
```

- 高さ: 80vh〜100vh（PC）/ auto（SP）
- 背景: ネイビーグラデーション or ビジュアル画像
- アニメーション:
  - 見出しが順に下からフェードイン（stagger animation）
  - 背景に控えめなパーティクル（requestAnimationFrame で軽量実装）
  - Labor Lab. ロゴは視差スクロール

### セクション構造（共通パターン）

```
┌────────────────────────────────────────────┐
│                                            │
│   [小さな英語見出し]                        │
│   # メインの日本語見出し                    │
│                                            │
│   [コンテンツブロック（3カラム等）]          │
│                                            │
└────────────────────────────────────────────┘
```

各セクションの先頭には**欧文の小見出し**を入れる：
- Hero下: `POINTS` / `STRENGTH`
- サービス: `OUR SERVICES`
- 選ばれる理由: `WHY US`
- 料金: `PRICE PLANS`
- CTA: `CONTACT US`

### フッター

```
┌────────────────────────────────────────────┐
│  [事務所情報]    [メニュー]   [SNS等]       │
│  屋号           About        Instagram     │
│  住所           Services     X             │
│  TEL           Pricing                    │
│                 Contact                    │
│                                            │
│  © 2026 小脇社会保険労務士事務所            │
└────────────────────────────────────────────┘
```

---

## 🧩 AIDER 特有のカスタム投稿タイプ

AIDERは以下の専用投稿タイプを持つ。Next.jsでは**MDXファイルとディレクトリ構造で再現**：

### 1. お知らせ（News）

- パス: `/news`, `/news/[slug]`
- コンテンツ: `content/news/*.mdx`
- アイキャッチ無しで公開可能
- カテゴリ: セミナー情報 / コラム / お知らせ

### 2. サービス（Services）

- パス: `/services`, `/services/[slug]`
- コンテンツ: `content/services/*.mdx`
- 一覧は3カラムグリッド
- 詳細ページには料金・流れ・FAQを含む

### 3. お客様の声（Cases）

- パス: `/cases`, `/cases/[slug]`
- コンテンツ: `content/cases/*.mdx`
- **背景色 #F6F6F6** が AIDER標準（使用推奨）
- 写真 + 業種 + 規模 + お声 を構造化

### 4. スタッフ（Staff）

- パス: `/staff`, `/staff/[slug]`
- コンテンツ: `content/staff/*.mdx`
- 経歴・メッセージ・資格・対応可能業務を表示

### 5. LP型固定ページ

- パス: `/lp/[campaign]`
- サービス詳細ページや広告流入用
- ヘッダー・フッター簡略版（コンバージョン最大化）

---

## ✨ アニメーション

AIDERは控えめで洗練されたアニメーションが特徴：

### 共通ルール

- **duration**: 400〜600ms
- **easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart)
- **delay**: 要素ごとに50〜100msずつずらす（stagger）

### 実装パターン

```tsx
// Framer Motion の典型パターン
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// スクロール連動
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeInUp}
>
```

### NG動作

- ❌ バウンスや派手な回転などの派手な動き
- ❌ 0.2秒以下の速すぎるアニメーション
- ❌ 1秒以上の遅すぎるアニメーション
- ❌ ページ全体をフェードイン（初期表示が遅く感じる）

---

## 📱 レスポンシブ

### ブレイクポイント（Tailwind標準）

```
sm: 640px   - スマホ横
md: 768px   - タブレット
lg: 1024px  - ノートPC
xl: 1280px  - デスクトップ
2xl: 1536px - 大画面
```

### モバイル優先設計

- モバイルを先に組んでから、PCに広げる
- タップ可能領域は最小44px × 44px
- 横スクロールは絶対に発生させない（`overflow-x: hidden` で保険）
- ハンバーガーメニューは右上配置
- CTA系ボタンはサムゾーン（下部）に配置するセクションも考慮

### モバイル特有の工夫（AIDERから採用）

- ヒーローの見出しは2〜3行で改行
- セクション間の余白を80px程度に詰める
- グリッドは基本1カラム、3カラムは特別な時のみ

---

## 🎯 再現時のチェックリスト

実装後、以下を必ず確認：

- [ ] デモサイトと並べて比較し、レイアウトが概ね合致しているか
- [ ] カラーコード・フォントがデザイントークンと一致しているか
- [ ] アニメーションが控えめで洗練されているか
- [ ] モバイル表示が破綻していないか
- [ ] コントラスト比が WCAG AA を満たしているか
- [ ] ヘッダーのスクロール挙動が自然か
- [ ] フッターのリンク・情報が揃っているか
- [ ] 下層ページ（サービス詳細・お客様の声・スタッフ等）も同じトンマナか

---

## 🧠 AIDER を"参考"にする意味

本プロジェクトは AIDER を**コピーする**のではなく、**Next.js で同等品質の士業サイトを作る**ことが目的です。

- ✅ デザイン原則・レイアウトパターン・配色・余白は忠実に再現
- ✅ カスタム投稿タイプの概念は MDX で再構築
- ❌ WordPress特有の機能（ブロックエディタ、動的カスタマイズ等）は不要
- ❌ AIDERのPHPコードを直接移植する必要はない

**最終ゴール**: 「AIDER で作ったサイト」と言われても違和感のない品質を、Next.jsで実現すること。

---

## 📚 参考リソース

- [AIDER 公式ページ](https://tcd-theme.com/tcd115)
- [AIDER デモサイト](https://demo.tcd-theme.com/tcd115/)
- [AIDER の機能概要記事](https://tcd-theme.com/2025/04/aider.html)
- [TCD マニュアル（AIDER）](https://tcd-manual.net/?cat=938)
