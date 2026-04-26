import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { STAFF } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'スタッフ紹介',
  description:
    '小脇社会保険労務士事務所の代表・スタッフをご紹介します。経営者の伴走者として、貴社を支えるメンバーです。',
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        sectionLabel={STAFF.sectionLabel}
        heading={STAFF.heading}
        lead={STAFF.lead}
      />

      <section className="section-py-lg bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STAFF.members.map((m) => (
              <article
                key={m.slug}
                className="flex flex-col p-8 bg-white rounded-lg border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* 写真プレースホルダー */}
                <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 mb-6 flex items-center justify-center">
                  <span className="font-sans-ja text-display-xl font-bold text-primary-200 select-none">
                    {m.name.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="typo-card mb-1">{m.name}</h3>
                  <p className="font-sans-en text-caption font-bold tracking-[0.2em] text-accent uppercase mb-4">
                    {m.role}
                  </p>
                  <p className="typo-body mb-6 flex-1">{m.message}</p>

                  <div className="pt-6 border-t border-gray-100 space-y-4">
                    <div>
                      <p className="text-caption text-primary-600 mb-2 font-bold tracking-[0.1em]">
                        専門領域
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {m.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-caption rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-caption text-primary-600 mb-2 font-bold tracking-[0.1em]">
                        保有資格
                      </p>
                      <p className="text-body-sm text-primary-800 leading-[1.7]">
                        {m.certifications.join(' / ')}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py-md bg-gray-50">
        <Container size="narrow" className="text-center">
          <h2 className="font-sans-ja text-page-h1 font-bold text-primary-900 leading-[1.3] tracking-tight mb-6">
            チーム全員で、貴社をサポートします
          </h2>
          <p className="typo-lead-lg mb-8">
            まずはお気軽にご相談ください。初回相談（60分）は無料です。
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
