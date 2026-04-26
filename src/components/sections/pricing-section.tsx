'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { PRICING } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * 料金プランセクション（トップページ用 抜粋版）。
 * 月次契約2本（社会保険手続き / 給与計算）の人員別料金表を提示し、
 * 個別スポット契約・就業規則等は料金ページへ誘導する。
 */
export function PricingSection() {
  return (
    <section className="bg-gray-50 section-py-lg" id="pricing">
      <Container>
        <SectionHeading
          label={PRICING.sectionLabel}
          heading={PRICING.heading}
          lead={PRICING.lead}
          align="center"
          className="mb-14 md:mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* 社会保険手続き 月次契約 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg border border-gray-100 p-8 md:p-10"
          >
            <h3 className="typo-card mb-3">{PRICING.socialMonthly.title}</h3>
            <p className="typo-meta mb-6 leading-[1.8]">
              {PRICING.socialMonthly.description}
            </p>
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  {PRICING.socialMonthly.columns.map((col) => (
                    <th
                      key={col}
                      className="text-left py-3 font-sans-ja font-bold text-primary-900"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING.socialMonthly.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-3 text-primary-800">{row.label}</td>
                    <td className="py-3 font-sans-en font-bold text-accent-600">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="typo-meta mt-4">{PRICING.socialMonthly.note}</p>
          </motion.div>

          {/* 給与計算 月次契約 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg border border-gray-100 p-8 md:p-10"
          >
            <h3 className="typo-card mb-6">{PRICING.payrollMonthly.title}</h3>
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  {PRICING.payrollMonthly.columns.map((col) => (
                    <th
                      key={col}
                      className="text-left py-3 font-sans-ja font-bold text-primary-900"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING.payrollMonthly.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-3 text-primary-800">{row.label}</td>
                    <td className="py-3 font-sans-en font-bold text-accent-600">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="typo-meta mt-4">{PRICING.payrollMonthly.note}</p>
          </motion.div>
        </motion.div>

        {/* 付帯サービスの明示（クラウド労務管理システム標準搭載） */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-5xl mx-auto mt-10 bg-primary-900 text-white rounded-lg p-6 md:p-8"
        >
          <p
            className="font-sans-en text-caption font-medium text-accent-300 uppercase mb-2"
            style={{ letterSpacing: '0.3em' }}
          >
            {PRICING.bundled.sectionLabel}
          </p>
          <p className="font-sans-ja font-bold text-card text-white leading-[1.5] mb-2">
            {PRICING.bundled.heading}
          </p>
          <p className="text-white/80 text-body-sm leading-[1.9]">
            勤怠・有給・給与・法定三帳簿のクラウド一元管理を、月次契約料の範囲内でご提供。同等機能のSaaSが月額2〜5万円で提供される領域です。
          </p>
        </motion.div>

        {/* 注釈と詳細ページへの誘導 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-5xl mx-auto mt-10 text-center"
        >
          <ul className="space-y-1 typo-meta mb-8">
            {PRICING.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <Button
            variant="secondary"
            asChild
            className="group max-w-full h-auto py-3 whitespace-normal leading-snug text-center"
          >
            <Link href="/pricing">
              {/* モバイルは短いラベル、sm以上は詳しいラベル */}
              <span className="sm:hidden">料金一覧を見る</span>
              <span className="hidden sm:inline">
                個別スポット契約・就業規則作成等の料金を見る
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
