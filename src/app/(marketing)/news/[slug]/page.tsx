import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { NEWS } from '@/lib/copy';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return NEWS.items.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = NEWS.items.find((n) => n.slug === params.slug);
  if (!item) return { title: 'お知らせ' };
  return {
    title: `${item.title} | お知らせ`,
    description: item.excerpt,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export default function NewsDetailPage({ params }: PageProps) {
  const item = NEWS.items.find((n) => n.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        sectionLabel={item.category}
        heading={item.title}
        lead={formatDate(item.date)}
      />

      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <article className="max-w-none">
            <p className="typo-lead-lg whitespace-pre-line">{item.excerpt}</p>

            <p className="typo-body mt-8">
              本記事の詳細コンテンツは準備中です。ご不明点がございましたら、お気軽にお問い合わせください。
            </p>
          </article>

          <div className="mt-16">
            <Button variant="ghost" asChild>
              <Link href="/news">
                <ArrowLeft className="h-4 w-4" />
                お知らせ一覧へ戻る
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
