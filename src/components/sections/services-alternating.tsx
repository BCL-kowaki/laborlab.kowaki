'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { SERVICE_DETAILS } from '@/lib/copy';
import { defaultViewport } from '@/lib/motion';
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
                    'relative overflow-hidden rounded-lg bg-primary-900 aspect-[4/3]',
                    !isImageLeft && 'lg:order-2',
                  )}
                >
                  {/* メイン画像 */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* 視認性確保のための薄いオーバーレイ */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/10 to-transparent"
                    aria-hidden="true"
                  />
                  {/* カテゴリ */}
                  <div className="absolute bottom-6 left-6">
                    <p
                      className="font-sans-en text-accent-300 font-bold uppercase"
                      style={{ letterSpacing: '0.25em', fontSize: '0.7rem' }}
                    >
                      {item.category}
                    </p>
                  </div>
                  {/* 番号（右上） */}
                  <div className="absolute top-6 right-6">
                    <span
                      className="font-sans-en font-extrabold text-white/80 leading-none"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                      {item.number}
                    </span>
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
                  <h3 className="typo-card mb-6 text-balance">
                    {item.title}
                  </h3>

                  {/* 本文 */}
                  <p className="typo-body mb-8">{item.body}</p>

                  {/* 主な機能 */}
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                        <span className="typo-body text-primary-800">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
