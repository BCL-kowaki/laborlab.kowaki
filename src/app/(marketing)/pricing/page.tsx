import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { PRICING } from '@/lib/copy';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '料金プラン',
  description:
    '明瞭な定額制。スターター月3.5万円から、従業員規模に合わせた4つのプランをご用意。初回相談は無料です。',
};

function formatPrice(value: number) {
  return new Intl.NumberFormat('ja-JP').format(value);
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        sectionLabel={PRICING.sectionLabel}
        heading={PRICING.heading}
        lead={PRICING.lead}
      />

      {/* 顧問契約プラン */}
      <section className="section-py-lg bg-white">
        <Container>
          <div className="section-heading-block items-center text-center">
            <p className="section-label">ADVISORY PLANS</p>
            <h2 className="typo-section">顧問契約プラン（税別・月額）</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING.advisoryPlans.map((plan, i) => {
              const featured = i === 1;
              return (
                <div
                  key={plan.name}
                  className={cn(
                    'relative flex flex-col p-8 rounded-lg border transition-all duration-300 hover:shadow-lg',
                    featured
                      ? 'border-accent border-2 shadow-md bg-white'
                      : 'border-gray-100 bg-white',
                  )}
                >
                  {featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-4 py-1 bg-accent text-white text-caption font-bold tracking-[0.2em] uppercase rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="typo-card mb-2">{plan.name}</h3>
                    <p className="typo-meta">対象規模：{plan.range}</p>
                  </div>

                  <div className="mb-8">
                    {'price' in plan ? (
                      <p className="flex items-baseline gap-1">
                        <span className="text-meta text-primary-700">¥</span>
                        <span className="font-sans-en text-page-h1 font-extrabold text-primary-900 tracking-tight leading-none">
                          {formatPrice(plan.price)}
                        </span>
                        <span className="text-meta text-primary-700">/ 月</span>
                      </p>
                    ) : (
                      <p className="font-serif-ja text-card font-bold text-primary-900">
                        {plan.priceLabel}
                      </p>
                    )}
                  </div>

                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-body-sm text-primary-800 leading-[1.7]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={featured ? 'accent' : 'secondary'}
                    size="md"
                    asChild
                    className="w-full"
                  >
                    <Link href="/contact">相談する</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* スポット業務 */}
      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">SPOT SERVICES</p>
            <h2 className="typo-section">スポット業務（税別）</h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            {PRICING.spotServices.map((spot, i) => (
              <div
                key={spot.label}
                className={cn(
                  'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5',
                  i !== 0 && 'border-t border-gray-100',
                )}
              >
                <span className="font-serif-ja text-body text-primary-900 font-medium">
                  {spot.label}
                </span>
                <span className="font-sans-en text-sub text-accent-500 font-bold">
                  {spot.price}
                </span>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2">
            {PRICING.notes.map((note) => (
              <li key={note} className="typo-meta">
                {note}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-py-md bg-primary-900">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif-ja text-page-h1 font-bold text-white leading-[1.3] tracking-tight mb-6">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-white/85 text-lead-lg leading-[1.9] mb-8">
            貴社に最適なプランを、無料の初回相談（60分）でご提案します。
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
