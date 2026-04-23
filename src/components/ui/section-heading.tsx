'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUp, defaultViewport } from '@/lib/motion';

interface SectionHeadingProps {
  label?: string;
  heading: string;
  lead?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * セクション見出し（英語小見出し + 和文大見出し + リード文の3段構成）
 * AIDERテーマ準拠のパターン。
 */
export function SectionHeading({
  label,
  heading,
  lead,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      className={cn(
        'flex flex-col gap-4',
        align === 'center'
          ? 'items-center text-center'
          : 'items-start text-left',
        className,
      )}
    >
      {label && (
        <span
          className={cn(
            'font-sans-en text-caption font-medium uppercase inline-flex items-center gap-3',
            theme === 'dark' ? 'text-accent-300' : 'text-accent',
          )}
          style={{ letterSpacing: '0.25em' }}
        >
          <span
            className={cn(
              'block w-10 h-px',
              theme === 'dark' ? 'bg-accent-300' : 'bg-accent',
            )}
            aria-hidden="true"
          />
          {label}
          {align === 'center' && (
            <span
              className={cn(
                'block w-10 h-px',
                theme === 'dark' ? 'bg-accent-300' : 'bg-accent',
              )}
              aria-hidden="true"
            />
          )}
        </span>
      )}
      <h2
        className={cn(
          'typo-section text-balance mt-2',
          theme === 'dark' && 'text-white',
        )}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={cn(
            'text-lead leading-[2] max-w-2xl whitespace-pre-line mt-3',
            theme === 'dark' ? 'text-white/80' : 'text-primary-700',
          )}
          style={{ letterSpacing: '0.05em' }}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}
