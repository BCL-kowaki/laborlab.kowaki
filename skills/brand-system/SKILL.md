# SKILL: ブランドシステム

## 目的

小脇社会保険労務士事務所のビジュアル・ブランドシステムを**コードで一元管理**し、サイト全体で一貫性を保つためのルール集。

---

## 🎨 カラーシステム

### デザイントークン

`src/styles/tokens.css` で定義：

```css
:root {
  /* ==========================================================
     Primary - ネイビー（信頼感・士業の格）
     ========================================================== */
  --color-primary-50:  #F0F4F9;
  --color-primary-100: #D8E1ED;
  --color-primary-200: #B0C2DB;
  --color-primary-300: #7A96B8;
  --color-primary-400: #4A6B8F;
  --color-primary-500: #1E3A5F;
  --color-primary-600: #0A2540;  /* ★ メイン */
  --color-primary-700: #071D33;
  --color-primary-800: #061A2E;
  --color-primary-900: #030D18;

  /* ==========================================================
     Accent - ゴールド（プレミアム感・"取りこぼさない"）
     ========================================================== */
  --color-accent-50:  #FAF6EE;
  --color-accent-100: #F4EAD1;
  --color-accent-200: #E0C382;
  --color-accent-300: #D4B371;
  --color-accent-400: #C9A961;   /* ★ メイン */
  --color-accent-500: #A68843;
  --color-accent-600: #846B33;

  /* ==========================================================
     Tech - エレクトリックブルー（AI・テック感）
     使用頻度は低く、アクセントの1%程度
     ========================================================== */
  --color-tech-400: #60A5FA;
  --color-tech-500: #3B82F6;
  --color-tech-600: #2563EB;

  /* ==========================================================
     Neutral
     ========================================================== */
  --color-white:     #FFFFFF;
  --color-off-white: #FAFAFA;
  --color-gray-50:   #F6F6F6;   /* AIDER標準の背景色 */
  --color-gray-100:  #E5E7EB;
  --color-gray-200:  #D1D5DB;
  --color-gray-300:  #9CA3AF;
  --color-gray-500:  #6B7280;
  --color-gray-700:  #374151;
  --color-gray-900:  #111827;

  /* ==========================================================
     Semantic
     ========================================================== */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error:   #EF4444;
  --color-info:    #3B82F6;
}
```

### Tailwind config との連携

`tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          DEFAULT: 'var(--color-primary-600)',
        },
        accent: {
          50:  'var(--color-accent-50)',
          100: 'var(--color-accent-100)',
          200: 'var(--color-accent-200)',
          300: 'var(--color-accent-300)',
          400: 'var(--color-accent-400)',
          500: 'var(--color-accent-500)',
          600: 'var(--color-accent-600)',
          DEFAULT: 'var(--color-accent-400)',
        },
        tech: {
          400: 'var(--color-tech-400)',
          500: 'var(--color-tech-500)',
          600: 'var(--color-tech-600)',
          DEFAULT: 'var(--color-tech-500)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 使用ルール

| 要素 | 色 | クラス例 |
|---|---|---|
| ヘッダー背景 | 白 or 透過 | `bg-white/90 backdrop-blur` |
| メインテキスト | Primary-900 | `text-primary-900` |
| サブテキスト | Gray-500 | `text-gray-500` |
| リンク | Primary-600 | `text-primary hover:text-accent` |
| プライマリCTA | Accent-400 背景 | `bg-accent text-white hover:bg-accent-500` |
| セカンダリCTA | Primary-600 ボーダー | `border-2 border-primary text-primary hover:bg-primary hover:text-white` |
| セクション区切り背景 | Gray-50 | `bg-gray-50` |
| 装飾ライン | Accent-400 | `border-accent` |

---

## 🔤 タイポグラフィ

### フォントファミリー

```css
:root {
  /* 和文 */
  --font-heading-ja: 'Noto Serif JP', 'Shippori Mincho', serif;
  --font-body-ja:    'Noto Sans JP', sans-serif;

  /* 欧文 */
  --font-heading-en: 'Manrope', 'Inter', sans-serif;
  --font-body-en:    'Inter', sans-serif;

  /* モノスペース（数字やコード） */
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

### Next.js での読み込み

```typescript
// src/app/layout.tsx
import { Noto_Sans_JP, Noto_Serif_JP, Manrope, Inter } from 'next/font/google';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-manrope',
  display: 'swap',
});
```

### フォントサイズスケール

```css
:root {
  /* Display（ヒーロー用） */
  --text-display-2xl: clamp(3.5rem, 8vw, 6rem);     /* 56〜96px */
  --text-display-xl:  clamp(2.75rem, 6vw, 4.5rem);  /* 44〜72px */
  --text-display-lg:  clamp(2.25rem, 5vw, 3.5rem);  /* 36〜56px */

  /* Heading */
  --text-h1: clamp(2rem, 4vw, 2.75rem);   /* 32〜44px */
  --text-h2: clamp(1.75rem, 3vw, 2.25rem); /* 28〜36px */
  --text-h3: clamp(1.375rem, 2.2vw, 1.5rem); /* 22〜24px */
  --text-h4: 1.25rem;                      /* 20px */

  /* Body */
  --text-body-lg: 1.125rem; /* 18px */
  --text-body:    1rem;     /* 16px */
  --text-body-sm: 0.875rem; /* 14px */

  /* UI */
  --text-caption: 0.75rem;  /* 12px */
  --text-micro:   0.6875rem;/* 11px */
}
```

### 使い分け

| 要素 | フォント | サイズ | 例 |
|---|---|---|---|
| ヒーロー大見出し | Noto Serif JP 700 | display-xl | 「損してない？」 |
| セクション見出し（和） | Noto Serif JP 700 | h1 | 「選ばれる理由」 |
| セクション小見出し（欧） | Manrope 800 | h4 | 「WHY US」 |
| 本文 | Noto Sans JP 400 | body | 通常の説明文 |
| ボタン | Noto Sans JP 500 | body | 「無料相談を申し込む」 |
| キャプション | Noto Sans JP 400 | caption | 注釈・補足 |
| スローガン `Labor Lab.` | Manrope 800 Italic | 任意 | ビジュアル要素として |

---

## 📏 スペーシング

### スケール（8pxベース）

Tailwindの標準スケールをそのまま使用（4px刻み）。

### セクション余白

```css
:root {
  /* セクション上下余白 */
  --section-py-lg:  clamp(5rem, 10vw, 7.5rem);  /* 80〜120px */
  --section-py-md:  clamp(4rem, 8vw, 6rem);     /* 64〜96px */
  --section-py-sm:  clamp(3rem, 6vw, 4rem);     /* 48〜64px */

  /* 要素間余白 */
  --space-card-gap: 1.5rem;  /* 24px */
  --space-stack:    1rem;    /* 16px */
}
```

### コンテナ幅

```css
:root {
  --container-max:    1200px;
  --container-narrow: 960px;
  --container-text:   720px; /* 読みやすさ優先の文章ブロック */
  --container-px:     clamp(1rem, 4vw, 2rem); /* 左右パディング */
}
```

---

## 🖼 画像・ビジュアル

### 推奨サイズ

| 用途 | サイズ（推奨） | フォーマット |
|---|---|---|
| ヒーロー背景 | 2400 × 1600 | WebP + JPG フォールバック |
| OGP | 1200 × 630 | PNG |
| サービスカードサムネ | 800 × 600 | WebP |
| スタッフ写真 | 800 × 800（正方形） | WebP |
| アイコン | SVG | SVG |

### next/image の使い方

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-bg.webp"
  alt="" // 装飾画像は空
  fill
  priority  // ヒーロー等ファーストビューのみ
  sizes="100vw"
  className="object-cover"
/>
```

### alt属性ルール

- 装飾画像: `alt=""`
- 情報を持つ画像: 内容を過不足なく説明
- ロゴ: `alt="小脇社会保険労務士事務所"`
- 固有名詞の匿名化ルールは alt にも適用

---

## 🔲 ボタン

### バリアント

```tsx
// src/components/ui/button.tsx（shadcn準拠）

// Primary: 最重要CTA
<Button variant="primary" size="lg">無料相談を申し込む</Button>

// Secondary: 副次的アクション
<Button variant="secondary" size="lg">資料ダウンロード</Button>

// Ghost: 軽いリンク風
<Button variant="ghost">詳しく見る →</Button>

// Accent: ゴールド（特別な訴求時のみ）
<Button variant="accent" size="lg">今すぐ相談する</Button>
```

### スタイル定義例

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-700 focus:ring-primary',
        secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        accent: 'bg-accent text-white hover:bg-accent-500 focus:ring-accent',
        ghost: 'text-primary hover:text-accent underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);
```

---

## 🎭 モーション

### 基本のイージング

```typescript
// src/lib/motion.ts
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,      // ease-out-quart（推奨）
  spring: [0.34, 1.56, 0.64, 1] as const,   // 控えめなスプリング
  standard: [0.4, 0, 0.2, 1] as const,      // Material Design標準
};

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
};
```

### よく使うバリアント

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: durations.normal, ease: easings.smooth },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};
```

---

## 🧩 ロゴとアイコン

### ロゴ仕様

- **正式ロゴ**: 「小脇社会保険労務士事務所」＋ 小さく `Labor Lab.`
- **シンプルロゴ**: 「小脇」漢字のみの判子風デザインも検討余地あり
- **ファビコン**: 「小」の1文字をネイビーで

### ロゴ配置のマージン

ロゴの周囲には、ロゴ高さの50%以上の余白を確保。

### アイコンライブラリ

- **Lucide React**（[lucide.dev](https://lucide.dev/)）を使用
- カスタムアイコンは `public/icons/` にSVG配置
- サイズ: 16px / 20px / 24px / 32px のいずれか

---

## 🏷 一貫性チェックリスト

実装完了時に以下を確認：

- [ ] 使用カラーがデザイントークンの範囲内か（ハードコードされたhex値がないか）
- [ ] フォントサイズがスケール内か（任意の `text-[15px]` 等が存在しないか）
- [ ] ボタンがbuttonVariantsのパターンに沿っているか
- [ ] 余白がTailwindスケール（8pxベース）に沿っているか
- [ ] アニメーションのイージング・duration が `src/lib/motion.ts` を使っているか
- [ ] `Labor Lab.` がロゴ以外の本文に頻出していないか
- [ ] アクセシビリティ：コントラスト比がWCAG AA基準を満たすか
