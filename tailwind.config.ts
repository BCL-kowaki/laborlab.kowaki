import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
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
          50: 'var(--color-accent-50)',
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
      fontFamily: {
        'serif-ja': ['var(--font-noto-serif)', 'Noto Serif JP', 'serif'],
        'sans-ja': ['var(--font-noto-sans)', 'Noto Sans JP', 'sans-serif'],
        'sans-en': ['var(--font-manrope)', 'Manrope', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // ============================================================
        // タイポグラフィスケール（サイズのみ指定）
        // 行間・字間は .typo-* クラス（globals.css）で一元管理。
        // Tailwindの fontSize 配列記法で lineHeight を指定すると、
        // text-XXX クラスに暗黙で line-height が当たり、個別の
        // leading-* では上書きできない問題があるためサイズのみ定義。
        // ============================================================
        // 見出しレベル
        hero: 'clamp(2.5rem, 6vw, 4.25rem)', // 40〜68px
        'page-h1': 'clamp(2rem, 4.5vw, 3rem)', // 32〜48px
        section: 'clamp(1.75rem, 3.2vw, 2.375rem)', // 28〜38px
        card: '1.375rem', // 22px
        sub: '1.0625rem', // 17px
        // 本文レベル
        lead: '1.0625rem', // 17px
        'lead-lg': '1.125rem', // 18px
        body: '1rem', // 16px
        'body-sm': '1rem', // 16px（旧15pxから引き上げ）
        meta: '0.8125rem', // 13px
        caption: '0.75rem', // 12px
        micro: '0.6875rem', // 11px
        // 互換エイリアス
        'display-2xl': 'clamp(2.75rem, 6.5vw, 4.5rem)',
        'display-xl': 'clamp(2.5rem, 6vw, 4.25rem)',
        'display-lg': 'clamp(2rem, 4.5vw, 3rem)',
        h1: 'clamp(1.75rem, 3.2vw, 2.375rem)',
        h2: 'clamp(1.5rem, 2.6vw, 1.875rem)',
        h3: '1.375rem',
        h4: '1.125rem',
        'body-lg': '1.125rem',
      },
      spacing: {
        'section-lg': 'clamp(5rem, 10vw, 7.5rem)',
        'section-md': 'clamp(4rem, 8vw, 6rem)',
        'section-sm': 'clamp(3rem, 6vw, 4rem)',
        'container-px': 'clamp(1rem, 4vw, 2rem)',
      },
      maxWidth: {
        'container': '1200px',
        'container-narrow': '960px',
        'container-text': '720px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'subtle-float': 'subtleFloat 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
