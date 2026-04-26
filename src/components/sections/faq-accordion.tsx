'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
  className?: string;
}

/**
 * FAQ アコーディオン。Radix UI の Accordion を利用。
 */
export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn('space-y-4', className)}
    >
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="bg-white rounded-lg border border-gray-100 overflow-hidden data-[state=open]:border-accent transition-colors"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                'group flex w-full items-start justify-between gap-4 p-6 text-left',
                'transition-colors hover:bg-gray-50',
              )}
            >
              <span className="flex items-start gap-3 flex-1">
                <span className="font-sans-en text-accent font-bold text-sub shrink-0">
                  Q.
                </span>
                <span className="font-sans-ja text-sub font-bold text-primary-900 leading-[1.6]">
                  {item.question}
                </span>
              </span>
              <ChevronDown className="h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 group-data-[state=open]:rotate-180 mt-1" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fadeIn_0.3s_ease-out]">
            <div className="px-6 pb-6 pt-0 flex items-start gap-3 border-t border-gray-50">
              <span className="font-sans-en text-accent-500 font-bold text-body mt-4 shrink-0">
                A.
              </span>
              <p className="typo-body mt-4 whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
