'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FormCategory } from '@/lib/forms';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface FormsAccordionProps {
  categories: FormCategory[];
  className?: string;
}

/**
 * 様式集アコーディオン。Radix UI の Accordion を利用。
 * 各カテゴリを展開すると、書類ごとの公式リンクが表示される。
 */
export function FormsAccordion({
  categories,
  className,
}: FormsAccordionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
      className={className}
    >
      <Accordion.Root
        type="multiple"
        defaultValue={categories.map((c) => c.id)}
        className="space-y-4"
      >
        {categories.map((cat) => (
          <motion.div key={cat.id} variants={fadeInUp}>
            <Accordion.Item
              value={cat.id}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden data-[state=open]:border-accent transition-colors"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={cn(
                    'group flex w-full items-center justify-between gap-4 p-6 md:p-7 text-left',
                    'transition-colors hover:bg-gray-50',
                  )}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5"
                      aria-hidden="true"
                    >
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p
                        className="font-sans-en text-caption font-bold text-accent uppercase mb-1"
                        style={{ letterSpacing: '0.2em' }}
                      >
                        {cat.category}
                      </p>
                      <h3 className="typo-card text-balance">
                        {cat.subcategory}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fadeIn_0.3s_ease-out]">
                <div className="px-6 md:px-7 pb-6 md:pb-7 border-t border-gray-100">
                  {cat.description && (
                    <p className="typo-body py-5 text-primary-700">
                      {cat.description}
                    </p>
                  )}

                  <ul className="divide-y divide-gray-100 border-t border-gray-100">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item flex items-start justify-between gap-4 py-4 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-sans-ja text-body font-bold text-primary-900 group-hover/item:text-accent transition-colors">
                              {item.name}
                            </p>
                            {item.description && (
                              <p className="text-body-sm text-primary-700 mt-1 leading-[1.7]">
                                {item.description}
                              </p>
                            )}
                            {item.authority && (
                              <p className="text-meta text-primary-600 mt-1">
                                提出先: {item.authority}
                              </p>
                            )}
                          </div>
                          <ExternalLink
                            className="h-4 w-4 shrink-0 text-accent mt-1.5 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </motion.div>
        ))}
      </Accordion.Root>
    </motion.div>
  );
}
