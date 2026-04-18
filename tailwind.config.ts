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
        // AIDER (TCD115) 準拠のタイポグラフィスケール
        // 参考デモ: https://demo.tcd-theme.com/tcd115/
        // - ヒーロー: PC 40px / SP 24px
        // - セクション見出し: PC 48px
        // - 本文: 16px
        // - ラベル類: 英字すべて大文字、字間広め
        // ============================================================
        hero: ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 24〜40px（AIDER準拠）
        'page-h1': ['clamp(1.625rem, 3.5vw, 2.25rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 26〜36px
        section: ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 28〜48px（AIDER CB title準拠）
        card: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.02em' }], // 18px
        sub: ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em' }], // 16px
        lead: ['0.9375rem', { lineHeight: '2', letterSpacing: '0.03em' }], // 15px
        'lead-lg': ['1rem', { lineHeight: '2', letterSpacing: '0.03em' }], // 16px
        body: ['1rem', { lineHeight: '2', letterSpacing: '0.03em' }], // 16px（AIDER本文準拠）
        'body-sm': ['0.875rem', { lineHeight: '1.9', letterSpacing: '0.03em' }], // 14px
        meta: ['0.8125rem', { lineHeight: '1.6', letterSpacing: '0.05em' }], // 13px
        caption: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.25em' }], // 12px（英字ラベル用、字間広め）
        micro: ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.3em' }], // 11px
        // 互換エイリアス（既存コード用 / 統一スケールを参照）
        'display-2xl': ['clamp(1.75rem, 4.5vw, 2.75rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'display-xl': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(1.625rem, 3.5vw, 2.25rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        h1: ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        h2: ['clamp(1.375rem, 2.8vw, 1.75rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        h3: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        h4: ['1.0625rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'body-lg': ['1rem', { lineHeight: '2', letterSpacing: '0.03em' }],
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
