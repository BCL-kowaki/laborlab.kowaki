import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CASES } from '@/lib/copy';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CASES.items.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = CASES.items.find((c) => c.slug === params.slug);
  if (!item) return { title: 'お客様の声' };
  return {
    title: `${item.title} | お客様の声`,
    description: item.excerpt,
  };
}

export default function CaseDetailPage({ params }: PageProps) {
  const item = CASES.items.find((c) => c.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        sectionLabel={`CASE — ${item.industry}`}
        heading={item.title}
        lead={item.scale}
      />

      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-caption font-medium rounded-full">
              {item.industry}
            </span>
            <span className="text-caption text-primary-600">{item.scale}</span>
          </div>

          <article className="max-w-none">
            <h2 className="typo-section mb-6">導入の背景</h2>
            <p className="typo-body">{item.excerpt}</p>

            <h2 className="typo-section mt-14 mb-6">導入後の変化</h2>
            <p className="typo-body">
              書類業務の時間が大幅に短縮され、経営者・スタッフ双方が本来注力すべき仕事に集中できる環境が整いました。AIによる助成金検出機能により、従来は見過ごしていた制度からの収入も得られるようになっています。
            </p>

            <h2 className="typo-section mt-14 mb-6">経営者のひとこと</h2>
            <blockquote className="relative pl-8 border-l-4 border-accent py-2 not-italic">
              <p className="font-serif-ja text-card font-bold text-primary-900 leading-[1.7]">
                {item.title}
              </p>
              <p className="typo-meta mt-4">
                — {item.industry}（{item.scale}）のお客様
              </p>
            </blockquote>
          </article>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="ghost" asChild>
              <Link href="/cases">
                <ArrowLeft className="h-4 w-4" />
                お客様の声一覧へ
              </Link>
            </Button>
            <Button variant="accent" asChild className="group">
              <Link href="/contact">
                無料相談を申し込む
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
