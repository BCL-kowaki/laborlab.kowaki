'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * サービス一覧セクション。
 * 7つのサービスをカード形式で並べる。
 */
export function ServicesOverview() {
  return (
    <section className="bg-white section-py-lg" id="services">
      <Container>
        <SectionHeading
          label={SERVICES.sectionLabel}
          heading={SERVICES.heading}
          align="center"
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {SERVICES.items.map((service, index) => (
            <motion.div key={service.slug} variants={fadeInUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all duration-500"
              >
                {/* 番号 */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-sans-en font-bold text-accent text-meta tracking-[0.15em]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary-300 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                </div>

                {/* タイトル */}
                <h3 className="typo-card mb-4 text-balance">{service.title}</h3>

                {/* 説明 */}
                <p className="typo-body">{service.description}</p>

                {/* ホバー時に現れる装飾ライン */}
                <div
                  className="mt-6 h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link href="/services">すべてのサービスを見る</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
