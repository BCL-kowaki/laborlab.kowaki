import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { getAllNews, CATEGORY_STYLES } from '@/lib/news';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'お知らせ',
  description:
    '小脇社会保険労務士事務所からのお知らせ、制度改正情報、セミナー情報をお届けします。',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export default function NewsPage() {
  const items = getAllNews();

  return (
    <>
      <PageHero
        sectionLabel="NEWS"
        heading="お知らせ"
        lead={'事務所からの最新のお知らせ、制度改正情報、セミナー情報をお届けします。'}
      />

      <section className="section-py-lg bg-white">
        <Container size="narrow">
          {items.length === 0 ? (
            <p className="typo-body text-center">現在お知らせはありません。</p>
          ) : (
            <ul className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {items.map((n) => {
                const style = CATEGORY_STYLES[n.category] ?? CATEGORY_STYLES['お知らせ'];
                return (
                  <li key={n.slug}>
                    <Link
                      href={`/news/${n.slug}`}
                      className="group block py-6 px-2 hover:bg-gray-50 transition-colors rounded"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                        <time className="font-sans-en text-meta text-primary-700 font-medium shrink-0 w-32">
                          {formatDate(n.date)}
                        </time>
                        <span
                          className={cn(
                            'inline-block px-2.5 py-0.5 text-caption font-bold rounded shrink-0 w-fit',
                            style.bg,
                            style.text,
                          )}
                        >
                          {n.category}
                        </span>
                        <h3 className="font-sans-ja text-sub font-bold text-primary-900 group-hover:text-accent transition-colors leading-[1.5]">
                          {n.title}
                        </h3>
                      </div>
                      <p className="mt-2 sm:ml-[calc(8rem+1.5rem+5rem)] text-body-sm text-primary-700 leading-[1.7] line-clamp-2">
                        {n.excerpt}
                      </p>
                      <div className="mt-3 sm:ml-[calc(8rem+1.5rem+5rem)] flex items-center text-accent text-caption font-medium">
                        <span>詳しく見る</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
