'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { COMPANY_INFO } from '@/lib/copy';
import { defaultViewport } from '@/lib/motion';

/**
 * 会社概要（トップページ用）— 参考サイトの "Company" セクション相当。
 */
export function CompanyInfo() {
  return (
    <section className="bg-gray-50 section-py-lg" id="company">
      <Container size="narrow">
        <SectionHeading
          label={COMPANY_INFO.sectionLabel}
          heading={COMPANY_INFO.heading}
          align="center"
          className="mb-12 md:mb-16"
        />

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-8 gap-y-0 bg-white rounded-lg border border-gray-100 overflow-hidden"
        >
          {COMPANY_INFO.items.map((item, i) => (
            <div key={item.label} className="contents">
              <dt
                className={`font-sans-ja text-body-sm font-bold text-primary-900 bg-gray-50 md:bg-transparent px-6 py-4 md:py-5 ${
                  i !== 0 ? 'md:border-t md:border-gray-100' : ''
                }`}
              >
                {item.label}
              </dt>
              <dd
                className={`typo-body px-6 pb-4 md:pb-5 md:py-5 ${
                  i !== 0 ? 'md:border-t md:border-gray-100' : ''
                }`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* 地図プレースホルダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 border border-gray-100 flex items-center justify-center"
        >
          <p className="typo-meta">Googleマップ埋め込み予定</p>
        </motion.div>
      </Container>
    </section>
  );
}
