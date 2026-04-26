'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Headphones,
  ClipboardList,
  Handshake,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { SERVICE_FLOW } from '@/lib/copy';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';

/**
 * ご契約までの流れ — 4ステップを横並び（モバイルは縦積み）で表示。
 * 参考サイトの "Service Flow" 相当。
 *
 * 視覚的訴求のため、各ステップに固有のアイコンを割り当て。
 */
const STEP_ICONS: Record<string, LucideIcon> = {
  '01': MessageSquare,
  '02': Headphones,
  '03': ClipboardList,
  '04': Handshake,
};

export function ServiceFlow() {
  return (
    <section
      className="bg-gray-50 section-py-lg relative overflow-hidden"
      id="flow"
    >
      {/* 背景装飾: 上部の薄いドットパターン */}
      <div
        className="absolute top-0 left-0 right-0 h-40 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      {/* 背景装飾: 中央の淡い円グラデ */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          label={SERVICE_FLOW.sectionLabel}
          heading={SERVICE_FLOW.heading}
          align="center"
          className="mb-14 md:mb-20"
        />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICE_FLOW.steps.map((step, i) => {
            const Icon = STEP_ICONS[step.step] ?? MessageSquare;
            return (
              <motion.li
                key={step.step}
                variants={fadeInUp}
                className="relative flex flex-col p-10 md:p-12 bg-white rounded-lg border border-gray-100 shadow-sm"
              >
                {/* アイコン（円形背景つき） */}
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Icon
                    className="w-8 h-8 text-accent"
                    aria-hidden="true"
                    strokeWidth={1.6}
                  />
                </div>

                {/* ステップ番号 */}
                <div className="mb-4 flex items-baseline gap-2">
                  <span
                    className="font-sans-en text-caption font-bold text-accent uppercase"
                    style={{ letterSpacing: '0.25em' }}
                  >
                    STEP
                  </span>
                  <span className="font-sans-en text-card font-extrabold text-accent leading-none tracking-tight">
                    {step.step}
                  </span>
                </div>

                <h3 className="typo-card mb-3">{step.title}</h3>
                <p className="typo-body text-body-sm leading-[1.9]">
                  {step.body}
                </p>

                {/* デスクトップ時のみ、次のステップへの矢印（最後以外） */}
                {i < SERVICE_FLOW.steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-accent"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}
