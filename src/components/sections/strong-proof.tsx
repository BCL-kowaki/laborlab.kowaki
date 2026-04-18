'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { STRONG_PROOF } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * ヒーロー直下の3つのストロング・プルーフ。
 * AI × 労務 / クラウド労務システム / 助成金 の3本を一目で伝える。
 */
export function StrongProof() {
  return (
    <section className="bg-white section-py-md border-b border-gray-100">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
        >
          {STRONG_PROOF.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group relative flex flex-col items-center text-center p-8 rounded-lg border border-gray-100 hover:border-accent/40 transition-colors duration-500"
            >
              {/* 装飾: 左上のコーナーアクセント */}
              <div
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/0 group-hover:border-accent/60 transition-colors duration-500 rounded-tl-lg"
                aria-hidden="true"
              />

              {/* アイコン */}
              <div className="text-5xl mb-6" aria-hidden="true">
                {item.icon}
              </div>

              {/* タイトル */}
              <h3 className="typo-card mb-3">{item.title}</h3>

              {/* サブタイトル */}
              <p className="text-primary-700 text-body leading-[1.8]">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
