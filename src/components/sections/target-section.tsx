'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TARGET } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * こんな経営者様におすすめセクション。
 * 実際の経営者の声を引用形式で配置し、読み手の自分ごと化を促す。
 */
export function TargetSection() {
  return (
    <section className="bg-gray-50 section-py-lg">
      <Container>
        <SectionHeading
          label={TARGET.sectionLabel}
          heading={TARGET.heading}
          align="center"
          className="mb-16"
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {TARGET.items.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeInUp}
              className="group relative bg-white p-8 rounded-lg border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-500"
            >
              <div
                className="absolute top-6 right-6 text-accent/20 group-hover:text-accent/40 transition-colors"
                aria-hidden="true"
              >
                <Quote className="h-10 w-10" />
              </div>

              <h3 className="typo-sub mb-4 pr-12">{item.title}</h3>

              <p className="typo-body">{item.quote}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
