'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { WHY_US } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * 選ばれる理由3本柱。
 * 差別化の主戦場なので、視覚的にしっかり見せる。
 */
export function WhyUs() {
  return (
    <section className="bg-white section-py-lg">
      <Container>
        <SectionHeading
          label={WHY_US.sectionLabel}
          heading={WHY_US.heading}
          align="center"
          className="mb-20"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="space-y-24 max-w-5xl mx-auto"
        >
          {WHY_US.reasons.map((reason, index) => (
            <motion.article
              key={reason.number}
              variants={fadeInUp}
              className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start"
            >
              {/* 左側: 番号 */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <span
                    className="block font-sans-en font-extrabold text-accent/20 leading-none"
                    style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}
                    aria-hidden="true"
                  >
                    {reason.number}
                  </span>
                  <div
                    className="absolute -bottom-2 left-0 w-20 h-0.5 bg-accent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* 右側: タイトル + 本文 */}
              <div className="flex-1">
                <h3 className="font-sans-ja text-card font-bold text-primary-900 leading-[1.4] mb-6 text-balance" style={{ letterSpacing: '0.03em' }}>
                  {reason.title}
                </h3>
                <div className="text-primary-800 text-body leading-[1.95] whitespace-pre-line">
                  {reason.body}
                </div>
              </div>

              {/* 装飾: 区切り線（最後以外） */}
              {index < WHY_US.reasons.length - 1 && (
                <div
                  className="md:col-span-2 mt-16 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                  aria-hidden="true"
                />
              )}
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
