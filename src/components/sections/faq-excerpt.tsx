'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { FAQ_ITEMS } from '@/lib/copy';
import { defaultViewport } from '@/lib/motion';

/**
 * FAQ 抜粋（トップページ用）— 代表的な5件を表示し、全件は /faq へ誘導。
 */
export function FaqExcerpt() {
  // 上位5件のみ抜粋
  const topItems = FAQ_ITEMS.slice(0, 5);

  return (
    <section className="bg-white section-py-lg" id="faq">
      <Container size="narrow">
        <SectionHeading
          label="FAQ"
          heading="よくあるご質問"
          align="center"
          className="mb-14 md:mb-20"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
        >
          <FaqAccordion items={topItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="secondary" asChild className="group">
            <Link href="/faq">
              すべてのご質問を見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
