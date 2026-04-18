import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { BRAND, CONTACT, NAVIGATION } from '@/lib/copy';

const FOOTER_LINKS = [
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
  { label: 'よくある質問', href: '/faq' },
  { label: 'お知らせ', href: '/news' },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <Container className="py-16 md:py-20">
        {/* 中央配置のロゴブロック */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <Link
            href="/"
            className="inline-block"
            aria-label={`${BRAND.name} トップへ`}
          >
            <Image
              src="/images/logo_white.png"
              alt={BRAND.name}
              width={1979}
              height={245}
              className="h-9 md:h-10 w-auto"
            />
          </Link>
          <p className="font-sans-en italic text-accent-300 text-meta tracking-wide mt-4">
            {BRAND.slogan} — {BRAND.sloganEn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* ブランド情報 */}
          <div className="md:col-span-5">
            <dl className="space-y-3 text-white/80 text-body-sm leading-relaxed">
              <div className="flex gap-3">
                <dt className="font-medium text-white/60 min-w-[5rem]">所在地</dt>
                <dd>{CONTACT.address}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-medium text-white/60 min-w-[5rem]">TEL</dt>
                <dd>{CONTACT.tel}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-medium text-white/60 min-w-[5rem]">MAIL</dt>
                <dd>{CONTACT.email}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-medium text-white/60 min-w-[5rem]">営業時間</dt>
                <dd>{CONTACT.businessHours}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-medium text-white/60 min-w-[5rem]">対応エリア</dt>
                <dd>{CONTACT.serviceArea}</dd>
              </div>
            </dl>
          </div>

          {/* メインメニュー */}
          <div className="md:col-span-3">
            <h3 className="font-sans-en text-caption tracking-widest text-accent-300 mb-6 uppercase">
              Menu
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-accent-300 text-body-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* その他リンク */}
          <div className="md:col-span-4">
            <h3 className="font-sans-en text-caption tracking-widest text-accent-300 mb-6 uppercase">
              Information
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-accent-300 text-body-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-body-sm">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-sans-en italic text-accent-300/70 text-body-sm">
            {BRAND.slogan}
          </p>
        </div>
      </Container>
    </footer>
  );
}
