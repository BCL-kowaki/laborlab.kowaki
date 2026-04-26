'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { GREETING_TOP } from '@/lib/copy';
import { defaultViewport } from '@/lib/motion';

/**
 * 代表挨拶の抜粋（トップページ用）。
 * 上部に代表者ビジュアル円（プレースホルダ／画像差し替え可）。
 */
export function GreetingExcerpt() {
  return (
    <section
      className="bg-white section-py-lg relative overflow-hidden"
      id="greeting"
    >
      {/* 背景装飾: 大きな淡色の円（左下） */}
      <div
        className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-primary-50 to-transparent opacity-60"
        aria-hidden="true"
      />
      {/* 背景装飾: 小さな金色の円（右上） */}
      <div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/5 hidden md:block"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative">
        <div className="max-w-3xl mx-auto">
          {/* 代表者ビジュアル — スクエア（420×420px、画像サイズに合わせ拡大） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="relative">
              {/* 背景の金色オフセット枠（PCのみ） */}
              <div
                className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-lg pointer-events-none"
                aria-hidden="true"
              />
              {/* メインのスクエアビジュアル */}
              <div
                className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-lg overflow-hidden bg-gradient-to-br from-primary-50 to-white shadow-xl border border-gray-100"
              >
                <Image
                  src="/images/daihyou.png"
                  alt={`${GREETING_TOP.signature.office} 代表`}
                  fill
                  sizes="(min-width: 768px) 420px, 280px"
                  className="object-contain p-8"
                  priority={false}
                />
              </div>
              {/* 下端の金色アクセントバー */}
              <div
                className="absolute -bottom-1 left-6 right-6 h-1 bg-gradient-to-r from-accent via-accent-300 to-accent rounded-full pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

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
