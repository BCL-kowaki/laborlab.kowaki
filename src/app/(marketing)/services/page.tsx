import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'サービス',
  description:
    '顧問契約、就業規則作成、給与計算、助成金申請、労務監査まで。AI×労務で経営を伴走するサービスをご紹介します。',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        sectionLabel={SERVICES.sectionLabel}
        heading={SERVICES.heading}
        lead={
          'AIとクラウドで、労務を経営の加速装置に変える。\n顧問契約・DXコンサル・スポット業務まで、貴社の成長フェーズに合わせたサービス。'
        }
      />

      <section className="section-py-lg bg-white">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.items.map((service, i) => (
              <li
                key={service.slug}
                className="relative flex flex-col p-8 bg-white rounded-lg border border-gray-100 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <span className="font-sans-en text-accent text-meta tracking-[0.15em] font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="typo-card mb-4 text-balance">
                  {service.title}
                </h3>
                <p className="typo-body flex-1">{service.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-py-md bg-gray-50">
        <Container size="narrow" className="text-center">
          <h2 className="font-sans-ja text-page-h1 font-bold text-primary-900 leading-[1.3] tracking-tight mb-6">
            どのサービスが合うかわからない方へ
          </h2>
          <p className="typo-lead-lg mb-8">
            無料の初回相談（60分）で、貴社に最適なサービスをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild className="group">
              <Link href="/contact">
                無料相談を申し込む
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/pricing">料金プランを見る</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
