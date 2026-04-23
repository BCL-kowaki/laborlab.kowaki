'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { ABOUT_TOP } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * About Intro — トップページ用の事務所紹介セクション。
 * 参考サイトの "About Us" 位置に相当。
 */
export function AboutIntro() {
  return (
    <section className="bg-gray-50 section-py-lg" id="about">
      <Container size="narrow">
        <SectionHeading
          label={ABOUT_TOP.sectionLabel}
          heading={ABOUT_TOP.heading}
          align="center"
          className="mb-10 md:mb-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <p className="typo-body whitespace-pre-line text-center">
            {ABOUT_TOP.body}
          </p>
        </motion.div>

        {/* ポイント3つ */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {ABOUT_TOP.points.map((pt) => (
            <motion.li
              key={pt.title}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-8 bg-white rounded-lg border border-gray-100"
            >
              <span className="text-4xl mb-4" aria-hidden="true">
                {pt.icon}
              </span>
              <h3 className="typo-sub mb-2">{pt.title}</h3>
              <p className="typo-meta">{pt.subtitle}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Button variant="secondary" asChild className="group">
            <Link href="/about">
              事務所についてもっと見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
