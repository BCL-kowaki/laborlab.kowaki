import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { BLOG } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'コラム',
  description:
    '鹿児島の経営者の皆さまへ、労務・助成金・DXに関する実務情報をお届けします。',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        sectionLabel={BLOG.sectionLabel}
        heading={BLOG.heading}
        lead={BLOG.lead}
      />

      <section className="section-py-lg bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOG.posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* アイキャッチプレースホルダー */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, #C9A961 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <span className="font-sans-en italic text-accent-300/80 text-section font-extrabold select-none text-center leading-tight tracking-tight">
                      {post.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <time className="text-primary-700 font-sans-en text-meta font-medium">
                      {formatDate(post.date)}
                    </time>
                    <span className="inline-block px-2 py-0.5 bg-accent-50 text-accent-600 font-bold rounded text-caption">
                      {post.tag}
                    </span>
                  </div>

                  <h3 className="typo-card mb-3 group-hover:text-accent transition-colors text-balance">
                    {post.title}
                  </h3>

                  <p className="typo-body flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-meta text-primary-600">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center text-accent text-caption font-bold">
                      続きを読む
                      <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
