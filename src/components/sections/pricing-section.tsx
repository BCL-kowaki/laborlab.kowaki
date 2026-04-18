'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { PRICING } from '@/lib/copy';
import { formatYen } from '@/lib/utils';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * 料金プランセクション。
 * 鹿児島競合（畑野他）が料金非公開な中、明瞭表示で差別化する。
 */
export function PricingSection() {
  return (
    <section className="bg-gray-50 section-py-lg">
      <Container>
        <SectionHeading
          label={PRICING.sectionLabel}
          heading={PRICING.heading}
          lead={PRICING.lead}
          align="center"
          className="mb-16"
        />

        {/* 顧問契約プラン */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        >
          {PRICING.advisoryPlans.map((plan, index) => {
            const isRecommended = index === 1; // スタンダードを推奨プランに
            return (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative bg-white rounded-lg p-8 border-2 transition-all duration-500 ${
                  isRecommended
                    ? 'border-accent shadow-xl md:scale-105'
                    : 'border-gray-100 hover:border-primary-200'
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-accent text-white text-caption tracking-[0.2em] uppercase rounded-full font-bold">
                      Recommended
                    </span>
                  </div>
                )}

                <h3 className="typo-card mb-2">{plan.name}</h3>
                <p className="typo-meta mb-6">対象規模：{plan.range}</p>

                <div className="mb-8">
                  {'price' in plan ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-sans-en font-extrabold text-page-h1 text-primary-900 tracking-tight">
                        {formatYen(plan.price)}
                      </span>
                      <span className="text-primary-600 text-meta">/月</span>
                    </div>
                  ) : (
                    <span className="font-serif-ja font-bold text-card text-primary-900">
                      {plan.priceLabel}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-primary-800 text-body-sm"
                    >
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={isRecommended ? 'accent' : 'secondary'}
                  size="md"
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">このプランで相談</Link>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* スポット業務 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="typo-card mb-6 text-center">スポット業務料金</h3>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <dl className="divide-y divide-gray-100">
              {PRICING.spotServices.map((service) => (
                <div
                  key={service.label}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5"
                >
                  <dt className="font-serif-ja text-primary-900 text-body font-medium">
                    {service.label}
                  </dt>
                  <dd className="font-sans-en font-bold text-accent-500 text-sub">
                    {service.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 space-y-1 typo-meta text-center">
            {PRICING.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
