import { Hero } from '@/components/sections/hero';
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
 * トップページ — DX推しの全面改訂版 (v7)
 *
 * 構成（参考: https://www.fudou3-malta.jp/ja）
 * 1. Hero ─ MV動画 + "DXで、労務の未来をつくる"
 * 2. AboutIntro ─ 事務所について（抜粋）
 * 3. GreetingExcerpt ─ 代表挨拶（抜粋）
 * 4. WhyUs ─ 選ばれる3つの理由（DX / AI×クラウド / 助成金）
 * 5. ServicesAlternating ─ 主力サービス詳細（左右交互レイアウト）
 * 6. ServiceFlow ─ ご契約までの流れ（4ステップ）
 * 7. Testimonials ─ お客様の声（4件抜粋）
 * 8. TargetSection ─ こんな経営者様に
 * 9. PricingSection ─ 料金プラン
 * 10. IssueSection ─ 課題提起（任意: FAQ前のフック）
 * 11. FaqExcerpt ─ よくある質問（抜粋）
 * 12. CompanyInfo ─ 会社概要
 * 13. CtaSection ─ 末尾の大CTA
 *
 * 注: SolutionsGallery は ServicesAlternating と内容重複のため削除（v7）
 */
export default function HomePage() {
  return (
    <>
      <Hero />
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
