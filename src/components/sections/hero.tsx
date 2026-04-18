'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { HERO, BRAND } from '@/lib/copy';
import { easings } from '@/lib/motion';

/**
 * トップページのヒーローセクション。
 * 「損してない？」の問いかけから始まる、インパクト重視の構成。
 *
 * デザイン参考: AIDER (TCD115) のヒーローパターン
 * 詳細は skills/design-reference/SKILL.md を参照。
 */
export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-primary"
      style={{ minHeight: 'clamp(640px, 92vh, 900px)' }}
    >
      {/* 背景: グラデーション */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900"
        aria-hidden="true"
      />

      {/* 背景: 控えめなパーティクル風ドット */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, #C9A961 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* 背景: Labor Lab. の大きな装飾タイポ */}
      <div
        className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: easings.smooth }}
          className="block font-sans-en italic font-extrabold text-accent whitespace-nowrap"
          style={{ fontSize: 'clamp(8rem, 24vw, 20rem)', lineHeight: 0.9 }}
        >
          Labor Lab.
        </motion.span>
      </div>

      {/* 金色の装飾アクセントライン（左上） */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: easings.smooth }}
        className="absolute top-32 left-0 w-24 md:w-40 h-[2px] bg-accent origin-left"
        aria-hidden="true"
      />

      {/* メインコンテンツ */}
      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* 英語小見出し — AIDER風 字間広め */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easings.smooth }}
            className="font-sans-en text-caption font-medium text-accent-300 mb-8 uppercase"
            style={{ letterSpacing: '0.3em' }}
          >
            {HERO.sectionLabel}
          </motion.p>

          {/* メインヘッドコピー — Heroのみ明朝で格を出す */}
          <h1
            className="font-serif-ja text-white leading-[1.5] mb-10"
            style={{ letterSpacing: '0.05em' }}
          >
            {HERO.mainHeading.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.18,
                  ease: easings.smooth,
                }}
                className="block text-hero font-bold"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* サブヘッドコピー — ゴシックで読みやすく */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: easings.smooth }}
            className="font-sans-ja text-white/85 text-lead-lg leading-[2] mb-12 whitespace-pre-line max-w-[44ch]"
            style={{ letterSpacing: '0.05em' }}
          >
            {HERO.subHeading}
          </motion.p>

          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: easings.smooth }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="accent"
              size="xl"
              asChild
              className="group"
            >
              <Link href="/contact">
                {HERO.ctaPrimary}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link href="/contact/download">
                <FileText className="h-5 w-5" />
                {HERO.ctaSecondary}
              </Link>
            </Button>
          </motion.div>

          {/* ブランド名 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: easings.smooth }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/65 text-meta leading-[1.6]">
              {BRAND.name}
            </p>
            <p className="font-sans-en italic text-accent-300 text-meta mt-1 tracking-wide">
              {BRAND.slogan} — {BRAND.sloganEn}
            </p>
          </motion.div>
        </div>
      </Container>

      {/* 下部のスクロールヒント */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50"
        aria-hidden="true"
      >
        <span className="font-sans-en text-micro tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
