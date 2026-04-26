'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
      {/* 背景: メインビジュアル動画（mv.mp4） */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/logo.png"
        aria-hidden="true"
      >
        <source src="/mv.mp4" type="video/mp4" />
      </video>

      {/* オーバーレイ：動画を"うっすら"見せるため、全体を深いネイビーで覆う
          Tailwind標準の透明度刻みは /5, /10, ...,/95 のみなので
          確実に効くよう任意値記法（rgba）で指定 */}
      {/* 1. 全体に濃いネイビーの半透明（動画はシルエットとして感じられる程度） */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(3, 13, 24, 0.75)' }}
        aria-hidden="true"
      />
      {/* 2. 左側からさらに濃くしてテキスト可読性を確保 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(3,13,24,0.5) 0%, rgba(3,13,24,0.25) 50%, rgba(3,13,24,0) 100%)',
        }}
        aria-hidden="true"
      />
      {/* 3. 下端をやや濃く（スクロールヒントの視認性確保） */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(to top, rgba(3,13,24,0.7) 0%, rgba(3,13,24,0) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 金色の装飾アクセントライン（左上） */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: easings.smooth }}
        className="absolute top-20 left-0 w-24 md:w-40 h-[1px] bg-accent origin-left z-10"
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
            style={{ letterSpacing: '0em' }}
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
              <Link href="#solutions">{HERO.ctaSecondary}</Link>
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
