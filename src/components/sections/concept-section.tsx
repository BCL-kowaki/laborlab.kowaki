'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { CONCEPT, BRAND } from '@/lib/copy';
import { fadeInUp, defaultViewport } from '@/lib/motion';

/**
 * Labor Lab. というスローガンに込めた姿勢を語るコンセプトセクション。
 */
export function ConceptSection() {
  return (
    <section className="relative bg-primary overflow-hidden section-py-lg">
      {/* 背景: 大きな装飾タイポ */}
      <div
        className="absolute inset-0 select-none pointer-events-none flex items-center justify-end overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-sans-en italic font-extrabold text-white/[0.04] whitespace-nowrap translate-x-[20%]"
          style={{ fontSize: 'clamp(10rem, 28vw, 26rem)', lineHeight: 0.85 }}
        >
          Labor Lab.
        </span>
      </div>

      {/* 背景: ドットパターン */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A961 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <p className="font-sans-en italic text-caption font-bold tracking-[0.2em] text-accent-300 mb-5 uppercase">
            {CONCEPT.sectionLabel}
          </p>

          <h2 className="font-serif-ja text-page-h1 font-bold text-white leading-[1.3] tracking-tight mb-10 text-balance">
            {CONCEPT.heading}
          </h2>

          <div className="space-y-6 text-white/85 text-lead-lg leading-[1.95] whitespace-pre-line">
            {CONCEPT.body}
          </div>

          {/* 装飾的な署名風 */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" aria-hidden="true" />
            <span className="font-sans-en italic text-accent-300 text-meta tracking-wide">
              {BRAND.slogan}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
