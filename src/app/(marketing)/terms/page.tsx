import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { LegalSections } from '@/components/sections/legal-sections';
import { LEGAL } from '@/lib/copy';

export const metadata: Metadata = {
  title: '利用規約',
  description:
    '小脇社会保険労務士事務所 公式ウェブサイトの利用規約です。',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        sectionLabel="TERMS OF SERVICE"
        heading="利用規約"
        lead="当事務所の公式ウェブサイトのご利用にあたっての規約です。"
      />

      <section className="section-py-lg bg-white">
        <Container size="text">
          <LegalSections
            heading={LEGAL.terms.heading}
            lastUpdated={LEGAL.terms.lastUpdated}
            sections={LEGAL.terms.sections}
            intro={
              'この利用規約（以下「本規約」）は、小脇社会保険労務士事務所（以下「当事務所」）が提供する本ウェブサイトおよびサービスの利用条件を定めるものです。ご利用の前に必ずお読みください。'
            }
          />
        </Container>
      </section>
    </>
  );
}
