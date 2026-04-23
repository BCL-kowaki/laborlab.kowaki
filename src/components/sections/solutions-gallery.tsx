'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { SOLUTIONS } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * 主力サービスの4枚ギャラリー（参考サイトの "物件一覧" 相当位置）
 * Heroのすぐ下に置き、サイト訪問者に"何を提供しているか"を最速で伝える。
 */
export function SolutionsGallery() {
  return (
    <section className="bg-white section-py-lg" id="solutions">
      <Container>
        <SectionHeading
          label={SOLUTIONS.sectionLabel}
          heading={SOLUTIONS.heading}
          lead={SOLUTIONS.lead}
          align="center"
          className="mb-14 md:mb-20"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {SOLUTIONS.items.map((item) => (
            <motion.div key={item.number} variants={fadeInUp}>
              <Link
                href={item.href}
                className="group relative block h-full overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-500 hover:border-accent/40 hover:shadow-xl"
              >
                {/* ビジュアルエリア — 画像が入る想定のプレースホルダー */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
                  {/* ドットパターン */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, #C9A961 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                    aria-hidden="true"
                  />
                  {/* 番号表記 */}
                  <div className="absolute top-6 left-6">
                    <span className="font-sans-en text-white/90 text-sub font-bold tracking-widest">
                      {item.number}
                    </span>
                  </div>
                  {/* カテゴリラベル */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p
                      className="font-sans-en text-accent-300 font-bold uppercase"
                      style={{ letterSpacing: '0.25em', fontSize: '0.7rem' }}
                    >
                      {item.category}
                    </p>
                  </div>
                  <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-white/60 transition-all duration-500 group-hover:text-accent-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>

                {/* 本文エリア */}
                <div className="p-8">
                  <h3 className="typo-card mb-3 group-hover:text-accent transition-colors text-balance">
                    {item.title}
                  </h3>
                  <p className="typo-body line-clamp-3">{item.description}</p>
                  <div className="mt-5 flex items-center text-accent text-caption font-bold">
                    <span>詳しく見る</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* ホバー時アクセントライン */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
