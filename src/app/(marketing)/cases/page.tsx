import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CASES } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'お客様の声',
  description:
    '当事務所をご利用いただいている経営者様からの声を、業種・規模別にご紹介します。',
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        sectionLabel={CASES.sectionLabel}
        heading={CASES.heading}
        lead={CASES.lead}
      />

      <section className="section-py-lg bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CASES.items.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group flex flex-col p-8 bg-white rounded-lg border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-caption font-medium rounded-full">
                    {c.industry}
                  </span>
                  <span className="text-caption text-primary-600">
                    {c.scale}
                  </span>
                </div>
                <h3 className="typo-card mb-4 group-hover:text-accent transition-colors text-balance">
                  {c.title}
                </h3>
                <p className="typo-body flex-1">{c.excerpt}</p>
                <div className="mt-6 flex items-center text-accent font-medium text-body-sm">
                  <span>詳しく読む</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py-md bg-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-sans-ja text-page-h1 font-bold text-primary-900 leading-[1.3] tracking-tight mb-6">
            あなたの会社も、次の事例へ
          </h2>
          <p className="typo-lead-lg mb-8">
            初回相談（60分）は無料です。まずはお気軽にご相談ください。
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
