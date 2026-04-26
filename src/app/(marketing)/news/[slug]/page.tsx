import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { getAllNews, getNewsBySlug } from '@/lib/news';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getNewsBySlug(params.slug);
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
  const item = getNewsBySlug(params.slug);
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
          <article className="prose prose-neutral max-w-none prose-headings:font-sans-ja prose-headings:font-bold prose-headings:text-primary-900 prose-h2:typo-card prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-sub prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3 prose-p:typo-body prose-p:my-5 prose-li:typo-body prose-li:my-1 prose-strong:text-primary-900 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-accent prose-blockquote:bg-accent-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-primary-800">
            <MDXRemote source={item.content} />
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
