import { Hero } from '@/components/sections/hero';
import { AboutIntro } from '@/components/sections/about-intro';
import { GreetingExcerpt } from '@/components/sections/greeting-excerpt';
import { WhyUs } from '@/components/sections/why-us';
import { ServicesAlternating } from '@/components/sections/services-alternating';
import { ServiceFlow } from '@/components/sections/service-flow';
import { TargetSection } from '@/components/sections/target-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { IssueSection } from '@/components/sections/issue-section';
import { FaqExcerpt } from '@/components/sections/faq-excerpt';
import { CompanyInfo } from '@/components/sections/company-info';
import { CtaSection } from '@/components/sections/cta-section';

/**
 * トップページ — DX推しの全面改訂版 (v8)
 *
 * 構成（参考: https://www.fudou3-malta.jp/ja）
 * 1. Hero ─ MV動画 + "DXで、労務の未来をつくる"
 * 2. AboutIntro ─ 事務所について（抜粋）
 * 3. GreetingExcerpt ─ 代表挨拶（抜粋）
 * 4. WhyUs ─ 選ばれる3つの理由（DX / AI×クラウド / 助成金）
 * 5. ServicesAlternating ─ 主力サービス詳細（左右交互レイアウト）
 * 6. ServiceFlow ─ ご契約までの流れ（4ステップ）
 * 7. TargetSection ─ こんな経営者様に
 * 8. PricingSection ─ 料金プラン
 * 9. IssueSection ─ 課題提起（任意: FAQ前のフック）
 * 10. FaqExcerpt ─ よくある質問（抜粋）
 * 11. CompanyInfo ─ 会社概要
 * 12. CtaSection ─ 末尾の大CTA
 *
 * 注: お客様の声(Testimonials/CASES)は2024年3月開業のため削除（v8）
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
      <TargetSection />
      <PricingSection />
      <IssueSection />
      <FaqExcerpt />
      <CompanyInfo />
      <CtaSection />
    </>
  );
}
