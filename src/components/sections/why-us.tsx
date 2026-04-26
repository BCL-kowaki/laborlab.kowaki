'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { WHY_US } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * 選ばれる理由3本柱。
 * 大きな番号 + ドットパターン背景で視覚訴求。
 */
export function WhyUs() {
  return (
    <section className="bg-white section-py-lg relative overflow-hidden">
      {/* 背景装飾: 右上に大きな淡色グラデ円 */}
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-accent/5 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
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
          className="space-y-10 md:space-y-14 max-w-5xl mx-auto"
        >
          {WHY_US.reasons.map((reason) => (
            <motion.article
              key={reason.number}
              variants={fadeInUp}
              className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-100 overflow-hidden"
            >
              {/* 背景: ドットパターン（右下） */}
              <div
                className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)',
                  backgroundSize: '20px 20px',
                }}
                aria-hidden="true"
              />

              {/* 左側: 大きな番号 */}
              <div className="flex-shrink-0 relative">
                <span
                  className="block font-sans-en font-extrabold text-accent/30 leading-none"
                  style={{ fontSize: 'clamp(4rem, 6vw, 7rem)' }}
                  aria-hidden="true"
                >
                  {reason.number}
                </span>
                {/* 下線 */}
                <div
                  className="mt-4 w-20 h-0.5 bg-accent"
                  aria-hidden="true"
                />
              </div>

              {/* 右側: タイトル + 本文 */}
              <div className="flex-1 relative">
                <h3 className="typo-card mb-6 text-balance">
                  {reason.title}
                </h3>
                <div className="text-primary-800 text-body leading-[1.95] whitespace-pre-line">
                  {reason.body}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
