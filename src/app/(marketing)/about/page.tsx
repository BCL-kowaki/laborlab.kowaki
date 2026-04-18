import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ABOUT } from '@/lib/copy';

export const metadata: Metadata = {
  title: '事務所について',
  description:
    '小脇社会保険労務士事務所は、鹿児島発・AI時代の社労士事務所です。代表挨拶、事務所概要、アクセスをご覧いただけます。',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        sectionLabel={ABOUT.hero.sectionLabel}
        heading={ABOUT.hero.heading}
        lead={ABOUT.hero.lead}
      />

      {/* 代表挨拶 */}
      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">{ABOUT.greeting.sectionLabel}</p>
            <h2 className="typo-section text-balance">
              {ABOUT.greeting.heading}
            </h2>
          </div>

          <div className="typo-body whitespace-pre-line space-y-6">
            {ABOUT.greeting.body}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-right">
            <p className="font-serif-ja text-body font-bold text-primary-900">
              {ABOUT.greeting.signature.office}
            </p>
            <p className="font-serif-ja text-meta text-primary-700 mt-1">
              {ABOUT.greeting.signature.title}{' '}
              <span className="font-bold text-body">
                {ABOUT.greeting.signature.name}
              </span>
            </p>
          </div>
        </Container>
      </section>

      {/* 事務所概要 */}
      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">{ABOUT.overview.sectionLabel}</p>
            <h2 className="typo-section">{ABOUT.overview.heading}</h2>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-8 gap-y-0 bg-white rounded-lg border border-gray-100 overflow-hidden">
            {ABOUT.overview.items.map((item, i) => (
              <div key={item.label} className="contents">
                <dt
                  className={`font-serif-ja text-body-sm font-bold text-primary-900 bg-gray-50 md:bg-transparent px-6 py-4 md:py-5 ${
                    i !== 0 ? 'md:border-t md:border-gray-100' : ''
                  }`}
                >
                  {item.label}
                </dt>
                <dd
                  className={`typo-body px-6 pb-4 md:pb-5 md:py-5 ${
                    i !== 0 ? 'md:border-t md:border-gray-100' : ''
                  }`}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* アクセス */}
      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">{ABOUT.access.sectionLabel}</p>
            <h2 className="typo-section">{ABOUT.access.heading}</h2>
          </div>

          <p className="typo-lead-lg whitespace-pre-line">
            {ABOUT.access.body}
          </p>

          {/* 地図プレースホルダー */}
          <div className="mt-10 aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 border border-gray-100 flex items-center justify-center">
            <p className="typo-meta">Googleマップ埋め込み予定</p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-py-md bg-primary-900">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif-ja text-page-h1 font-bold text-white leading-[1.3] tracking-tight mb-6">
            まずは、気軽にご相談ください
          </h2>
          <p className="text-white/85 text-lead-lg leading-[1.9] mb-8">
            初回相談（60分）は無料です。
          </p>
          <Button variant="accent" size="lg" asChild className="group">
            <Link href="/contact">
              無料相談を申し込む
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
