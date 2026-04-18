'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ISSUES } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * 「こんな"取りこぼし"、心当たりありませんか？」セクション。
 * 問いかけ型で読み手に自分ごと化させる。
 */
export function IssueSection() {
  return (
    <section className="bg-gray-50 section-py-lg">
      <Container>
        <SectionHeading
          label={ISSUES.sectionLabel}
          heading={ISSUES.heading}
          lead={ISSUES.lead}
          align="center"
          className="mb-16"
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {ISSUES.items.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeInUp}
              className="group relative bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              {/* 左側の金色アクセント */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1 bg-accent rounded-l-lg"
                aria-hidden="true"
              />

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="typo-sub mb-3">{item.title}</h3>
                  <p className="typo-body">{item.body}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 text-primary-900 text-lead-lg font-bold font-serif-ja"
        >
          {ISSUES.closing}
        </motion.p>
      </Container>
    </section>
  );
}
