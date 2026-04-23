'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { SERVICE_FLOW } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * ご契約までの流れ — 4ステップを横並び（モバイルは縦積み）で表示。
 * 参考サイトの "Service Flow" 相当。
 */
export function ServiceFlow() {
  return (
    <section className="bg-gray-50 section-py-lg" id="flow">
      <Container size="narrow">
        <SectionHeading
          label={SERVICE_FLOW.sectionLabel}
          heading={SERVICE_FLOW.heading}
          align="center"
          className="mb-14 md:mb-20"
        />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4"
        >
          {SERVICE_FLOW.steps.map((step, i) => (
            <motion.li
              key={step.step}
              variants={fadeInUp}
              className="relative flex flex-col p-8 bg-white rounded-lg border border-gray-100"
            >
              {/* ステップ番号 */}
              <div className="mb-5 flex items-baseline gap-2">
                <span
                  className="font-sans-en text-caption font-bold text-accent uppercase"
                  style={{ letterSpacing: '0.25em' }}
                >
                  STEP
                </span>
                <span className="font-sans-en text-card font-extrabold text-accent leading-none tracking-tight">
                  {step.step}
                </span>
              </div>

              <h3 className="typo-sub mb-3">{step.title}</h3>
              <p className="typo-body text-body-sm">{step.body}</p>

              {/* デスクトップ時のみ、次のステップへの矢印（最後以外） */}
              {i < SERVICE_FLOW.steps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center text-accent"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
