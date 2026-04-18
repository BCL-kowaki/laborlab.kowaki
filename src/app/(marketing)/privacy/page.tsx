import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { LegalSections } from '@/components/sections/legal-sections';
import { LEGAL } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    '小脇社会保険労務士事務所の個人情報保護方針（プライバシーポリシー）です。',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        sectionLabel="PRIVACY POLICY"
        heading="プライバシーポリシー"
        lead="当事務所における個人情報の取り扱いについて定めています。"
      />

      <section className="section-py-lg bg-white">
        <Container size="text">
          <LegalSections
            heading={LEGAL.privacy.heading}
            lastUpdated={LEGAL.privacy.lastUpdated}
            sections={LEGAL.privacy.sections}
            intro={
              '小脇社会保険労務士事務所（以下「当事務所」）は、お客様の個人情報を適切に保護・管理することが社会的責務であると考え、個人情報の保護に関する法律、その他関連法令等を遵守するとともに、以下のとおりプライバシーポリシーを定めます。'
            }
          />
        </Container>
      </section>
    </>
  );
}
