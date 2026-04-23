import { Hero } from '@/components/sections/hero';
import { SolutionsGallery } from '@/components/sections/solutions-gallery';
import { AboutIntro } from '@/components/sections/about-intro';
import { GreetingExcerpt } from '@/components/sections/greeting-excerpt';
import { WhyUs } from '@/components/sections/why-us';
import { ServicesAlternating } from '@/components/sections/services-alternating';
import { ServiceFlow } from '@/components/sections/service-flow';
import { Testimonials } from '@/components/sections/testimonials';
import { TargetSection } from '@/components/sections/target-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { IssueSection } from '@/components/sections/issue-section';
import { FaqExcerpt } from '@/components/sections/faq-excerpt';
import { CompanyInfo } from '@/components/sections/company-info';
import { CtaSection } from '@/components/sections/cta-section';

/**
 * トップページ — DX推しの全面改訂版 (v6)
 *
 * 構成（参考: https://www.fudou3-malta.jp/ja）
 * 1. Hero ─ MV動画 + "労務のDXは、経営の加速装置。"
 * 2. SolutionsGallery ─ 4枚の主力サービスギャラリー
 * 3. AboutIntro ─ 事務所について（抜粋）
 * 4. GreetingExcerpt ─ 代表挨拶（抜粋）
 * 5. WhyUs ─ 選ばれる3つの理由（DX / AI×クラウド / 助成金）
 * 6. ServicesAlternating ─ 主力サービス詳細（左右交互レイアウト）
 * 7. ServiceFlow ─ ご契約までの流れ（4ステップ）
 * 8. Testimonials ─ お客様の声（4件抜粋）
 * 9. TargetSection ─ こんな経営者様に
 * 10. PricingSection ─ 料金プラン
 * 11. IssueSection ─ 課題提起（任意: FAQ前のフック）
 * 12. FaqExcerpt ─ よくある質問（抜粋）
 * 13. CompanyInfo ─ 会社概要
 * 14. CtaSection ─ 末尾の大CTA
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsGallery />
      <AboutIntro />
      <GreetingExcerpt />
      <WhyUs />
      <ServicesAlternating />
      <ServiceFlow />
      <Testimonials />
      <TargetSection />
      <PricingSection />
      <IssueSection />
      <FaqExcerpt />
      <CompanyInfo />
      <CtaSection />
    </>
  );
}
