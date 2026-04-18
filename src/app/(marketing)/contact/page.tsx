import type { Metadata } from 'next';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/sections/contact-form';
import { CONTACT_PAGE } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '初回相談（60分）は無料。鹿児島の労務お悩み、まずはお気軽にご相談ください。',
};

const ICON_MAP = {
  phone: Phone,
  mail: Mail,
  form: MessageSquare,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        sectionLabel={CONTACT_PAGE.hero.sectionLabel}
        heading={CONTACT_PAGE.hero.heading}
        lead={CONTACT_PAGE.hero.lead}
      />

      {/* 連絡方法 */}
      <section className="section-py-md bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_PAGE.methods.map((m) => {
              const Icon = ICON_MAP[m.icon as keyof typeof ICON_MAP];
              return (
                <div
                  key={m.label}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-50 text-accent mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="typo-sub mb-2">{m.label}</h3>
                  <p className="typo-body mb-1">{m.value}</p>
                  <p className="typo-meta">{m.note}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* フォーム */}
      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <div className="section-heading-block">
            <h2 className="typo-section">{CONTACT_PAGE.form.heading}</h2>
            <p className="typo-lead mt-3">
              下記フォームに必要事項をご入力ください。内容を確認のうえ、1営業日以内にご返信いたします。
            </p>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg border border-gray-100">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
