# ロゴ・ブランドビジュアル デザイン指示書

デザイナー or AI画像生成ツールに渡す、ロゴ制作の指示書。

---

## 🎯 ロゴ制作の目的

小脇社会保険労務士事務所の**屋号ロゴ**と、スローガン**Labor Lab.**のビジュアル表現を確立する。
「老舗の信頼感」と「新しい発想の事務所」という二面性を両立させる。

---

## 1. ロゴ構成

### メインロゴ（標準使用）

```
┌──────────────────────────────┐
│                              │
│   小脇 社会保険労務士事務所     │  ← 主 (明朝系、ウェイト700)
│   ─────────                  │  ← 装飾ライン (ゴールド)
│   Labor Lab.                 │  ← 副 (Manrope Italic 800、小さめ)
│                              │
└──────────────────────────────┘
```

### コンパクトロゴ（ヘッダー等スペース制限時）

```
小脇社労士事務所 Labor Lab.
```

### シンボルマーク（ファビコン用）

```
┌────┐
│ 小 │   ← 「小」の1文字を、判子風に
└────┘
```

- ネイビー地に白文字
- 角に軽くラウンド
- または、正方形のエッジに金のアクセント

---

## 2. カラー

### メインカラー

- **ネイビー**: `#0A2540`
  → テキスト主体、信頼感
- **ゴールド**: `#C9A961`
  → アクセント、装飾ライン、Labor Lab. の色

### バリエーション

| バージョン | 背景 | 文字色 | 用途 |
|---|---|---|---|
| ポジティブ | 白 | ネイビー + ゴールド | 通常 |
| ネガティブ（暗背景用） | ネイビー or 黒 | 白 + ゴールド | ヒーロー、フッター |
| モノクロ | 白 | 黒 or グレー | 印刷、ファックス |

---

## 3. タイポグラフィ

### 「小脇社会保険労務士事務所」

- **フォント候補**（優先順）:
  1. **游明朝 (Yu Mincho)** — Windows標準、上品
  2. **Noto Serif JP** — Webフォントとして軽量、無料
  3. **筑紫明朝 (Tsukushi Mincho)** — 柔らかさが出る
  4. **Shippori Mincho** — 清潔感
- **ウェイト**: Bold / 700
- **字間**: やや詰める（-20 ~ -10）
- **字色**: ネイビー `#0A2540`

### 「Labor Lab.」

- **フォント候補**（優先順）:
  1. **Manrope Extra Bold Italic** — モダンで洗練
  2. **Inter Bold Italic** — ミニマル
  3. **Playfair Display Italic** — エレガント（候補として）
- **ウェイト**: Extra Bold / 800
- **スタイル**: Italic（イタリック）
- **字色**: ゴールド `#C9A961`
- **ピリオド**: `Labor Lab.` のようにピリオド付きが正式

---

## 4. 装飾要素

### ゴールドの装飾ライン

ロゴの「小脇社会保険労務士事務所」と「Labor Lab.」の間に、**短い金のライン**を配置：

```
小脇 社会保険労務士事務所
━━━━                     ← 幅 40px 程度、高さ 2px
Labor Lab.
```

- 色: ゴールド `#C9A961`
- 太さ: 2px（ロゴサイズに比例）
- 長さ: 文字列全体の20%程度

### クリアスペース

ロゴの周囲に、ロゴ高さの**最低50%**の余白を確保。これ以上寄せた場合は可読性が落ちる。

---

## 5. サイズ規定

### 最小サイズ

- PC: 幅 180px
- タブレット: 幅 160px
- モバイル: 幅 140px
- ファビコン用: 32 × 32 px（「小」シンボルのみ）
- iOS Apple Touch Icon: 180 × 180 px

### アスペクト比

- 横長レイアウト（推奨）: 3:1
- 正方形レイアウト: 1:1（SNSアイコン用）

---

## 6. NG表現

以下のような使い方は絶対にしないこと：

- ❌ ロゴの色を独自変更（赤、緑等）
- ❌ 縦横比を崩して変形
- ❌ ロゴに影・立体エフェクト・グラデーションを重ねる
- ❌ 低コントラストの背景に配置（可読性低下）
- ❌ 「Labor Lab.」単独で屋号のように使う
- ❌ 「小脇社労士 Labor Lab 事務所」等の並列表記
- ❌ 回転・傾けて配置

---

## 7. 派生ビジュアル

### 名刺

- 表面: ロゴ（標準版）+ 代表名 + 役職 + 連絡先
- 裏面: `Labor Lab.` を大きく中央配置（シンボリックに）

### 封筒・レターヘッド

- 左上にロゴ（モノクロ or カラー）
- 右上に住所・連絡先

### SNSアイコン

- 正方形 1:1
- シンボルマーク（「小」）+ 下部に「Labor Lab.」を小さく

### OGP画像

- 1200 × 630 px
- 背景: ネイビーグラデーション
- 中央: 屋号ロゴ（白+ゴールド）
- 下部小さく: `Labor Lab. — rethinking labor for the AI era.`

---

## 8. AI画像生成ツール用プロンプト（MidJourney / Stable Diffusion 等）

### シンボルマーク用プロンプト（英語）

```
Minimal Japanese seal logo, single character "小" in serif typography,
deep navy blue background (#0A2540), subtle gold corner accent (#C9A961),
clean geometric square with slightly rounded corners,
professional law firm branding, high contrast, flat design, vector style,
white space, premium quality, sophisticated
```

### ロゴタイポグラフィ用プロンプト（英語）

```
Elegant bilingual wordmark logo for a Japanese labor law office,
Japanese text "小脇社会保険労務士事務所" in traditional mincho serif,
English tagline "Labor Lab." in modern italic bold sans-serif like Manrope,
small gold horizontal accent line between texts,
deep navy color (#0A2540) and muted gold (#C9A961),
minimal white background, professional, sophisticated,
traditional Japanese craftsmanship meets modern AI-era design
```

### OGP画像用プロンプト（英語）

```
Professional OGP banner 1200x630px,
dark navy gradient background (#0A2540 to #061A2E),
subtle gold particle dots pattern at 5% opacity,
centered bilingual logo: Japanese "小脇社会保険労務士事務所" in white mincho serif,
thin gold divider line,
"Labor Lab." in gold italic Manrope extra bold below,
small tagline at bottom: "rethinking labor for the AI era.",
minimalist, premium, Japanese law firm branding
```

---

## 9. 検収時のチェックリスト

### ✅ 必須確認項目

- [ ] 明朝系フォントが指定通り
- [ ] Manrope Italic が使われている
- [ ] ネイビー #0A2540 とゴールド #C9A961 が正確
- [ ] 金の装飾ラインが配置されている
- [ ] ポジティブ・ネガティブ・モノクロの3バージョンが揃っている
- [ ] SVG と PNG（各サイズ）が納品される
- [ ] ファビコン用シンボルが別途提供される
- [ ] OGP画像（1200×630）が作成されている
- [ ] Figma ファイルが編集可能な形で納品される

### 納品ファイル一覧

```
logo/
├── main/
│   ├── logo-main-color.svg
│   ├── logo-main-color.png
│   ├── logo-main-white.svg      ← ダーク背景用
│   ├── logo-main-mono.svg       ← モノクロ
│   └── logo-main-2x.png         ← レティナ用
├── compact/
│   ├── logo-compact-color.svg
│   └── logo-compact-white.svg
├── symbol/
│   ├── symbol.svg               ← 「小」のみ
│   ├── favicon-32.png
│   ├── favicon-192.png
│   └── apple-touch-icon.png     ← 180x180
├── og/
│   └── og-default.png           ← 1200x630
└── source/
    └── brand.fig                ← Figmaソース
```

---

## 10. 納期・予算目安

- **ロゴのみ**: 2〜3週間 / 10〜30万円
- **ロゴ + ブランドガイドライン（簡易）**: 1〜1.5ヶ月 / 30〜50万円
- **ロゴ + ガイドライン + 名刺・封筒等の応用デザイン**: 2ヶ月 / 50〜100万円

AIツール（Midjourney等）でのシンボル草案作成は、本番ロゴとは別に**参考イメージ**として使用推奨。最終的な納品は、商用利用可能なベクターデータで仕上げること。

---

## 11. 参考事例

### 同業の参考ロゴ

- 畑野労務管理事務所: [hatanoromu.com](https://hatanoromu.com/wp-content/uploads/2025/06/sitelogo.png)
- HR Trust: [hr-trust.jp](https://www.hr-trust.jp/)

**注**: 上記はあくまで参考。小脇事務所のロゴは「**老舗感 × 先進性**」の両立がテーマ。
