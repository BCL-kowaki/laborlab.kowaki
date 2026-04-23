'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { SERVICE_DETAILS } from '@/lib/copy';
import { fadeInUp, defaultViewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

/**
 * サービス詳細 — 左右交互レイアウト（画像↔テキスト）。
 * 参考サイトの "About" / "Services" セクション相当。
 * 各サービスを画像付きで大きく紹介する。
 */
export function ServicesAlternating() {
  return (
    <section className="bg-white section-py-lg" id="services">
      <Container>
        <SectionHeading
          label={SERVICE_DETAILS.sectionLabel}
          heading={SERVICE_DETAILS.heading}
          align="center"
          className="mb-14 md:mb-20"
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {SERVICE_DETAILS.items.map((item, i) => {
            const isImageLeft = item.imagePosition === 'left';
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.8 }}
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center',
                )}
              >
                {/* ビジュアル */}
                <div
                  className={cn(
                    'relative overflow-hidden rounded-lg bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 aspect-[4/3]',
                    !isImageLeft && 'lg:order-2',
                  )}
                >
                  {/* ドットパターン */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, #C9A961 1px, transparent 1px)',
                      backgroundSize: '36px 36px',
                    }}
                    aria-hidden="true"
                  />
                  {/* 大きな番号装飾 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-sans-en font-extrabold text-white/10 select-none leading-none"
                      style={{
                        fontSize: 'clamp(6rem, 16vw, 14rem)',
                      }}
                    >
                      {item.number}
                    </span>
                  </div>
                  {/* カテゴリ */}
                  <div className="absolute bottom-6 left-6">
                    <p
                      className="font-sans-en text-accent-300 font-bold uppercase"
                      style={{ letterSpacing: '0.25em', fontSize: '0.7rem' }}
                    >
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* テキスト */}
                <div>
                  {/* カテゴリ番号ラベル */}
                  <p
                    className="font-sans-en text-caption font-medium text-accent uppercase mb-4 inline-flex items-center gap-3"
                    style={{ letterSpacing: '0.25em' }}
                  >
                    <span
                      className="block w-10 h-px bg-accent"
                      aria-hidden="true"
                    />
                    {item.number} / {item.category}
                  </p>

                  {/* タイトル */}
                  <h3 className="typo-section mb-6 text-balance">
                    {item.title}
                  </h3>

                  {/* 本文 */}
                  <p className="typo-body mb-8">{item.body}</p>

                  {/* 主な機能 */}
                  <ul className="space-y-2 mb-8">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                        <span className="typo-body text-primary-800">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="secondary" asChild className="group">
                    <Link href={item.href}>
                      詳しく見る
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
