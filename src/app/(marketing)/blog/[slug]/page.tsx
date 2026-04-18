import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { BLOG } from '@/lib/copy';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG.posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG.posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'コラム' };
  return {
    title: `${post.title} | コラム`,
    description: post.excerpt,
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

export default function BlogDetailPage({ params }: PageProps) {
  const post = BLOG.posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        sectionLabel={post.tag}
        heading={post.title}
        lead={`${formatDate(post.date)}  ・  ${post.readTime}`}
      />

      <section className="section-py-lg bg-white">
        <Container size="text">
          <article className="max-w-none">
            <p className="typo-lead-lg">{post.excerpt}</p>

            <h2 className="typo-section mt-14 mb-6">はじめに</h2>
            <p className="typo-body">
              本記事では、「{post.title}」というテーマについて、鹿児島の経営者の皆さまに向けて、実務で役立つ情報を解説します。
            </p>

            <h2 className="typo-section mt-14 mb-6">本記事のポイント</h2>
            <ul className="list-disc pl-6 space-y-2 typo-body marker:text-accent">
              <li>基本となる考え方と制度の仕組み</li>
              <li>経営者が見落としがちなポイント</li>
              <li>当事務所が推奨する実務上のベストプラクティス</li>
            </ul>

            <h2 className="typo-section mt-14 mb-6">まとめ</h2>
            <p className="typo-body">
              詳細な本文は現在準備中です。より踏み込んだ内容をお知りになりたい方は、初回無料相談（60分）からお気軽にご相談ください。
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4 typo-meta">
            <Clock className="h-4 w-4" />
            <span>読了目安：{post.readTime}</span>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                コラム一覧へ戻る
              </Link>
            </Button>
            <Button variant="accent" asChild>
              <Link href="/contact">無料相談を申し込む</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
