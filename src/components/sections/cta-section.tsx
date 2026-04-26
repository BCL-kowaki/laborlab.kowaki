'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, FileText, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CTA_SECTION } from '@/lib/copy';
import { fadeInUp, defaultViewport } from '@/lib/motion';

/**
 * ページ末尾の大きなCTAセクション。
 * 「取りこぼしを見つけに来ませんか？」の問いかけで相談を促す。
 */
export function CtaSection() {
  return (
    <section className="relative bg-primary overflow-hidden section-py-lg">
      {/* 背景装飾 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A961 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      {/* 装飾: 大きな金色リング（左上） */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-accent/15 pointer-events-none"
        aria-hidden="true"
      />
      {/* 装飾: 大きな金色リング（右下） */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border border-accent/10 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-sans-en text-caption font-bold tracking-[0.2em] text-accent-300 mb-6 uppercase">
            {CTA_SECTION.sectionLabel}
          </p>

          <h2
            className="typo-section text-white text-balance mb-8"
          >
            {CTA_SECTION.heading}
          </h2>

          <p className="text-white/85 text-lead-lg leading-[1.95] whitespace-pre-line mb-12">
            {CTA_SECTION.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" className="group" asChild>
              <Link href="/contact">
                {CTA_SECTION.buttons.primary}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link href="tel:09037985423">
                <Phone className="h-5 w-5" />
                {CTA_SECTION.buttons.secondary}
              </Link>
            </Button>
            <Button variant="ghost-white" size="xl" asChild>
              <Link href="/contact/download">
                <FileText className="h-5 w-5" />
                {CTA_SECTION.buttons.tertiary}
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
