import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { PRICING } from '@/lib/copy';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '料金',
  description:
    '社会保険手続き・給与計算の月次契約、新規適用や算定基礎届などの個別スポット契約、各種申請・就業規則作成まで、明瞭な料金体系でご提示します。',
};

/**
 * 料金ページ — 添付の正規料金表を反映。
 * 1) 月次契約（社会保険手続き / 給与計算）
 * 2) 個別スポット契約（労働保険・社会保険新規）
 * 3) 保険料の算定・申告
 * 4) 保険給付申請・各種届出・助成金申請
 * 5) 就業規則作成
 */
export default function PricingPage() {
  return (
    <>
      <PageHero
        sectionLabel={PRICING.sectionLabel}
        heading={PRICING.heading}
        lead={PRICING.lead}
      />

      {/* 月次契約 */}
      <section className="section-py-lg bg-white">
        <Container>
          <div className="section-heading-block items-center text-center mb-10 md:mb-14">
            <p className="section-label">MONTHLY CONTRACT</p>
            <h2 className="typo-section">月次契約（税別）</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* 社会保険手続き 月次契約 */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 border border-gray-100">
              <h3 className="typo-card mb-3">
                {PRICING.socialMonthly.title}
              </h3>
              <p className="typo-meta mb-6 leading-[1.8]">
                {PRICING.socialMonthly.description}
              </p>
              <PriceTable
                columns={PRICING.socialMonthly.columns}
                rows={PRICING.socialMonthly.rows.map((r) => ({
                  label: r.label,
                  values: [r.price],
                }))}
              />
              <p className="typo-meta mt-4">{PRICING.socialMonthly.note}</p>
            </div>

            {/* 給与計算 月次契約 */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 border border-gray-100">
              <h3 className="typo-card mb-6">
                {PRICING.payrollMonthly.title}
              </h3>
              <PriceTable
                columns={PRICING.payrollMonthly.columns}
                rows={PRICING.payrollMonthly.rows.map((r) => ({
                  label: r.label,
                  values: [r.price],
                }))}
              />
              <p className="typo-meta mt-4">
                {PRICING.payrollMonthly.note}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 顧問契約者向け付帯サービス（クラウド労務管理システム） */}
      <section className="section-py-lg bg-primary-900 text-white">
        <Container size="narrow">
          <div className="section-heading-block items-center text-center mb-10 md:mb-14">
            <p
              className="font-sans-en text-caption font-medium text-accent-300 uppercase"
              style={{ letterSpacing: '0.3em' }}
            >
              {PRICING.bundled.sectionLabel}
            </p>
            <h2 className="font-sans-ja text-section font-bold text-white leading-[1.4] mt-3">
              {PRICING.bundled.heading}
            </h2>
          </div>

          <p className="text-white/85 text-body whitespace-pre-line leading-[2] mb-10">
            {PRICING.bundled.body}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-10">
            {PRICING.bundled.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent-300 shrink-0 mt-1" />
                <span className="text-white/90 text-body-sm leading-[1.8]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-white/65 text-meta leading-[1.8]">
            {PRICING.bundled.note}
          </p>
        </Container>
      </section>

      {/* 個別スポット契約 */}
      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <div className="section-heading-block items-center text-center mb-10 md:mb-14">
            <p className="section-label">SPOT CONTRACT</p>
            <h2 className="typo-section">{PRICING.spotInsurance.title}</h2>
          </div>

          <div className="bg-white rounded-lg p-6 md:p-10 border border-gray-100 overflow-x-auto">
            <PriceTable
              columns={PRICING.spotInsurance.columns}
              rows={PRICING.spotInsurance.rows.map((r) => ({
                label: r.label,
                values: [...r.values],
              }))}
            />
          </div>
        </Container>
      </section>

      {/* 保険料の算定・申告 */}
      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="section-heading-block items-center text-center mb-10 md:mb-14">
            <p className="section-label">ANNUAL DECLARATION</p>
            <h2 className="typo-section">{PRICING.insuranceCalc.title}</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-10 border border-gray-100 overflow-x-auto">
            <PriceTable
              columns={PRICING.insuranceCalc.columns}
              rows={PRICING.insuranceCalc.rows.map((r) => ({
                label: r.label,
                values: [...r.values],
              }))}
            />
          </div>
        </Container>
      </section>

      {/* 保険給付申請・各種届出・助成金申請 */}
      <section className="section-py-lg bg-gray-50">
        <Container size="narrow">
          <div className="section-heading-block items-center text-center mb-10 md:mb-14">
            <p className="section-label">APPLICATIONS</p>
            <h2 className="typo-section">{PRICING.applications.title}</h2>
            <p className="typo-meta mt-3">
              {PRICING.applications.description}
            </p>
          </div>

          <ItemList items={PRICING.applications.items} />

          <ul className="mt-8 space-y-2 typo-meta">
            <li>{PRICING.applications.note}</li>
            <li>{PRICING.applications.reservationNote}</li>
          </ul>
        </Container>
      </section>

      {/* 就業規則作成 */}
      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="section-heading-block items-center text-center mb-10 md:mb-14">
            <p className="section-label">WORK RULES</p>
            <h2 className="typo-section">{PRICING.workRules.title}</h2>
          </div>

          <ItemList items={PRICING.workRules.items} />
        </Container>
      </section>

      {/* 共通注記 */}
      <section className="bg-gray-50 py-10">
        <Container size="narrow">
          <ul className="space-y-2 typo-meta text-center">
            {PRICING.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-py-md bg-primary-900">
        <Container size="narrow" className="text-center">
          <h2 className="font-sans-ja text-page-h1 font-bold text-white leading-[1.3] tracking-tight mb-6">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-white/85 text-lead-lg leading-[1.9] mb-8">
            貴社に最適なプランを、初回無料相談（要予約）でご提案します。
          </p>
          <Button variant="accent" size="lg" asChild className="group">
            <Link href="/contact">
              無料相談を申し込む
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  );
}

/**
 * 料金テーブル汎用コンポーネント。
 * - 1列目: 人員などのラベル
 * - 2列目以降: 金額
 */
function PriceTable({
  columns,
  rows,
}: {
  columns: readonly string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <table className="w-full text-body-sm">
      <thead>
        <tr className="border-b-2 border-gray-200">
          {columns.map((col, i) => (
            <th
              key={col}
              className={cn(
                'py-3 px-2 font-sans-ja font-bold text-primary-900',
                i === 0 ? 'text-left' : 'text-right',
              )}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.label}
            className="border-b border-gray-100 last:border-0"
          >
            <td className="py-3 px-2 text-primary-800">{row.label}</td>
            {row.values.map((v, i) => (
              <td
                key={i}
                className="py-3 px-2 text-right font-sans-en font-bold text-accent-600 whitespace-nowrap"
              >
                {v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * 単価リスト汎用コンポーネント（左ラベル / 右金額）。
 */
function ItemList({
  items,
}: {
  items: readonly { label: string; price: string }[];
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5',
            i !== 0 && 'border-t border-gray-100',
          )}
        >
          <span className="font-sans-ja text-body text-primary-900 font-medium">
            {item.label}
          </span>
          <span className="font-sans-en text-sub text-accent-500 font-bold whitespace-nowrap">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  );
}
