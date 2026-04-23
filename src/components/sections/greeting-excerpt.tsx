'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { GREETING_TOP } from '@/lib/copy';
import { defaultViewport } from '@/lib/motion';

/**
 * 代表挨拶の抜粋（トップページ用）。
 * 参考サイトの "Greeting" 位置に相当。信頼構築フェーズ。
 */
export function GreetingExcerpt() {
  return (
    <section className="bg-white section-py-lg" id="greeting">
      <Container size="narrow">
        <div className="max-w-3xl mx-auto">
          {/* ラベル */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5 }}
            className="font-sans-en text-caption font-medium text-accent uppercase mb-5 flex items-center justify-center gap-3"
            style={{ letterSpacing: '0.25em' }}
          >
            <span className="block w-10 h-px bg-accent" aria-hidden="true" />
            {GREETING_TOP.sectionLabel}
            <span className="block w-10 h-px bg-accent" aria-hidden="true" />
          </motion.p>

          {/* 見出し */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="typo-section text-center mb-12"
          >
            {GREETING_TOP.heading}
          </motion.h2>

          {/* 本文 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="typo-body whitespace-pre-line space-y-6"
          >
            {GREETING_TOP.body}
          </motion.div>

          {/* 署名 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-100 text-right"
          >
            <p className="font-sans-ja text-body font-bold text-primary-900">
              {GREETING_TOP.signature.office}
            </p>
            <p className="font-sans-ja text-meta text-primary-700 mt-1">
              {GREETING_TOP.signature.title}{' '}
              <span className="font-bold text-body">
                {GREETING_TOP.signature.name}
              </span>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
