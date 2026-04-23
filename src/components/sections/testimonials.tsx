'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { TESTIMONIALS } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * お客様の声（Testimonials）— 4件抜粋表示。
 * 参考サイトの "Testimonials" 相当。
 */
export function Testimonials() {
  return (
    <section className="bg-white section-py-lg" id="testimonials">
      <Container>
        <SectionHeading
          label={TESTIMONIALS.sectionLabel}
          heading={TESTIMONIALS.heading}
          lead={TESTIMONIALS.lead}
          align="center"
          className="mb-14 md:mb-20"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {TESTIMONIALS.items.map((t) => (
            <motion.article
              key={t.href}
              variants={fadeInUp}
              className="group relative flex flex-col p-8 md:p-10 bg-gray-50 rounded-lg border border-gray-100 hover:border-accent/40 hover:shadow-lg transition-all duration-500"
            >
              {/* クオートアイコン */}
              <Quote
                className="h-10 w-10 text-accent/30 mb-6 shrink-0"
                aria-hidden="true"
              />

              {/* タイトル（声そのもの） */}
              <h3 className="typo-card mb-5 text-balance">{t.title}</h3>

              {/* 抜粋 */}
              <p className="typo-body flex-1 line-clamp-4">{t.excerpt}</p>

              {/* 業種・規模 */}
              <footer className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="text-body-sm">
                  <span className="font-bold text-primary-900">
                    {t.industry}
                  </span>
                  <span className="text-primary-600 ml-2">／ {t.scale}</span>
                </div>
                <Link
                  href={t.href}
                  className="flex items-center gap-1 text-accent text-caption font-bold"
                >
                  詳しく読む
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 md:mt-16 text-center"
        >
          <Button variant="secondary" asChild className="group">
            <Link href="/cases">
              すべてのお客様の声を見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
