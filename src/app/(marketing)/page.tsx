import { Hero } from '@/components/sections/hero';
import { StrongProof } from '@/components/sections/strong-proof';
import { IssueSection } from '@/components/sections/issue-section';
import { ConceptSection } from '@/components/sections/concept-section';
import { WhyUs } from '@/components/sections/why-us';
import { ServicesOverview } from '@/components/sections/services-overview';
import { TargetSection } from '@/components/sections/target-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StrongProof />
      <IssueSection />
      <ConceptSection />
      <WhyUs />
      <ServicesOverview />
      <TargetSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
