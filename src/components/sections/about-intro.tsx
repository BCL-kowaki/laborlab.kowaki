'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ABOUT_TOP } from '@/lib/copy';
import { defaultViewport } from '@/lib/motion';

/**
 * About Intro — トップページ用の事務所紹介セクション。
 * 左右2カラム構成（左: テキスト / 右: ビジュアルブロック）。
 * ビジュアルブロックは将来的に画像差し替え可能な装飾コンテナ。
 */
export function AboutIntro() {
  return (
    <section className="bg-gray-50 section-py-lg overflow-hidden" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左: テキスト */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            {/* 英語ラベル */}
            <p
              className="font-sans-en text-caption font-medium text-accent uppercase mb-5 inline-flex items-center gap-3"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-10 h-px bg-accent" aria-hidden="true" />
              {ABOUT_TOP.sectionLabel}
            </p>

            {/* 見出し */}
            <h2 className="typo-section mb-8 text-balance">
              {ABOUT_TOP.heading}
            </h2>

            {/* 本文 */}
            <p className="typo-body whitespace-pre-line mb-10">
              {ABOUT_TOP.body}
            </p>

            <Button variant="secondary" asChild className="group">
              <Link href="/about">
                事務所についてもっと見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* 右: ビジュアルブロック */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            {/* メインビジュアル枠（aspect-[4/5]） */}
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-lg overflow-hidden bg-primary-900 shadow-xl">
              {/* 背景画像 */}
              <Image
                src="/images/about001.png"
                alt="鹿児島で唯一、AIを活用したIT・DXコンサルティング企業と連携する社労士事務所"
                fill
                sizes="(min-width: 1024px) 32rem, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
              {/* 視認性確保のためのオーバーレイ（中央の文字が読めるよう全体を暗めに） */}
              <div
                className="absolute inset-0 bg-primary-900/55"
                aria-hidden="true"
              />
              {/* ドットパターン */}
              <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #C9A961 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
                aria-hidden="true"
              />
              {/* 中央の英大文字 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <p
                  className="font-sans-en text-white font-extrabold leading-none mb-4"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    letterSpacing: '0.05em',
                  }}
                >
                  ABOUT
                </p>
                <p
                  className="font-sans-en text-accent-300 text-caption font-bold uppercase"
                  style={{ letterSpacing: '0.3em' }}
                >
                  Labor Lab.
                </p>
                <div className="mt-6 w-12 h-px bg-accent" aria-hidden="true" />
                <p className="font-sans-ja text-white/90 text-body-sm leading-[1.9] mt-6">
                  鹿児島で唯一、AIを活用した
                  <br />
                  IT・DXコンサルティング企業と連携
                </p>
              </div>
              {/* 下部の金色アクセントバー */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-300 to-accent"
                aria-hidden="true"
              />
            </div>

            {/* 装飾: 背景の金色オフセット枠（lg以上のみ） */}
            <div
              className="hidden lg:block absolute -z-10 -top-6 -right-6 w-2/3 h-full border-2 border-accent/30 rounded-lg"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -z-10 -bottom-6 -left-6 w-1/3 h-1/3 bg-accent/10 rounded-lg"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
