import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { SERVICES, SERVICE_DETAIL } from '@/lib/copy';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.items.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES.items.find((s) => s.slug === params.slug);
  if (!service) return { title: 'サービス' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = SERVICES.items.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const index = SERVICES.items.findIndex((s) => s.slug === params.slug);

  return (
    <>
      <PageHero
        sectionLabel={`SERVICE ${String(index + 1).padStart(2, '0')}`}
        heading={service.title}
        lead={service.description}
      />

      {/* 特徴 */}
      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">FEATURES</p>
            <h2 className="typo-section">当事務所の特徴</h2>
          </div>

          <ul className="space-y-4">
            {[
              'AIとクラウド技術を組み合わせた最新の業務フロー',
              '現場ヒアリングを重視した、貴社専用のカスタマイズ',
              '鹿児島発の事務所ならではの、地域密着・全国対応',
              '料金体系は明瞭な定額制。突然の追加請求はありません',
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 p-5 bg-gray-50 rounded-lg"
              >
                <Check className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="typo-body">{feature}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ご利用の流れ */}
      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">FLOW</p>
            <h2 className="typo-section">ご利用の流れ</h2>
          </div>

          <ol className="space-y-6">
            {SERVICE_DETAIL.flow.map((step) => (
              <li
                key={step.step}
                className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-lg border border-gray-100"
              >
                <div className="shrink-0">
                  <span className="font-sans-en text-section font-extrabold text-accent leading-none tracking-tight">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="typo-card mb-3">{step.title}</h3>
                  <p className="typo-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="section-heading-block">
            <p className="section-label">FAQ</p>
            <h2 className="typo-section">よくある質問</h2>
          </div>

          <dl className="space-y-4">
            {SERVICE_DETAIL.faq.map((item) => (
              <div
                key={item.question}
                className="p-6 bg-gray-50 rounded-lg border border-gray-100"
              >
                <dt className="typo-sub mb-3 flex gap-3">
                  <span className="text-accent font-sans-en">Q.</span>
                  <span>{item.question}</span>
                </dt>
                <dd className="typo-body flex gap-3 pl-0">
                  <span className="text-accent-500 font-sans-en font-bold">
                    A.
                  </span>
                  <span>{item.answer}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-py-md bg-primary-900">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif-ja text-page-h1 font-bold text-white leading-[1.3] tracking-tight mb-6 text-balance">
            {service.title}のご相談はこちら
          </h2>
          <p className="text-white/85 text-lead-lg leading-[1.9] mb-8">
            初回相談（60分）は無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild className="group">
              <Link href="/contact">
                無料相談を申し込む
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link href="/services">サービス一覧に戻る</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
