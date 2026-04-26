import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { FormsAccordion } from '@/components/sections/forms-accordion';
import { FORMS } from '@/lib/forms';

export const metadata: Metadata = {
  title: '様式集',
  description:
    '社会保険・労働保険・雇用保険・助成金関係の各種届出様式を、公式ダウンロード先へのリンク付きでご案内します。',
};

export default function FormsPage() {
  return (
    <>
      <PageHero
        sectionLabel="FORMS"
        heading="様式集"
        lead={
          '社会保険・労働保険・雇用保険・助成金関係の各種届出様式を、\n公式ダウンロードページへのリンク付きでご案内します。'
        }
      />

      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <FormsAccordion categories={FORMS} />

          {/* 注意書き */}
          <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-lg border border-gray-100">
            <h2 className="typo-card mb-4">ご利用にあたって</h2>
            <ul className="space-y-3 typo-body">
              <li className="flex items-start gap-3">
                <span
                  className="block w-1.5 h-1.5 rounded-full bg-accent mt-3 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  各様式は提出先（日本年金機構・ハローワーク・労働基準監督署・厚生労働省）の公式サイトへリンクしています。
                  最新の様式・記入例・添付書類は必ず公式サイトでご確認ください。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="block w-1.5 h-1.5 rounded-full bg-accent mt-3 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  助成金の支給要件・支給額は年度ごとに改定される場合があります。申請前に最新情報をご確認ください。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="block w-1.5 h-1.5 rounded-full bg-accent mt-3 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  記入方法・申請手続きでご不明な点は、当事務所までお気軽にお問い合わせください。
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
