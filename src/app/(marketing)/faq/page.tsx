import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { FAQ_ITEMS } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'よくある質問',
  description:
    '小脇社会保険労務士事務所へよくお寄せいただくご質問をまとめました。顧問契約、AI活用、乗り換えなどについてお答えします。',
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        sectionLabel="FAQ"
        heading="よくある質問"
        lead={'当事務所へ日々お寄せいただくご質問と、その回答をまとめました。\nここに載っていないご質問はお気軽にお問い合わせください。'}
      />

      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <FaqAccordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* CTA */}
      <section className="section-py-md bg-white">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif-ja text-page-h1 font-bold text-primary-900 leading-[1.3] tracking-tight mb-6 text-balance">
            ご質問は直接お問い合わせからも承ります
          </h2>
          <p className="typo-lead-lg mb-8">
            初回相談（60分）は無料です。お気軽にご連絡ください。
          </p>
          <Button variant="accent" size="lg" asChild className="group">
            <Link href="/contact">
              お問い合わせする
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
