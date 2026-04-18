import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BRAND } from '@/lib/copy';
import './globals.css';

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

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.name} | ${BRAND.slogan} — 鹿児島の AI × 労務`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    '鹿児島で唯一、AI×DX企業と連携する社労士事務所。顧問契約に独自クラウド労務システムとAI助成金検出を標準搭載。「取りこぼしゼロ」の新しい攻めの労務で、経営者の伴走者となります。',
  keywords: [
    '社労士',
    '社会保険労務士',
    '鹿児島',
    '助成金',
    'AI',
    '労務DX',
    'クラウド',
    '就業規則',
    '給与計算',
    '労務管理',
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: BRAND.siteUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.slogan}`,
    description:
      '鹿児島で唯一、AI×DX企業と連携する社労士事務所。新しい"攻め"の労務で、経営者の伴走者となります。',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.slogan}`,
    description:
      '鹿児島で唯一、AI×DX企業と連携する社労士事務所。新しい"攻め"の労務で、経営者の伴走者となります。',
    images: ['/og/home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#0A2540',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${manrope.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
