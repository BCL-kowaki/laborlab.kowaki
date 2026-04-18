import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '資料ダウンロード',
  description:
    '当事務所のサービス資料・料金表・会社案内をダウンロードいただけます。',
};

const DOCUMENTS = [
  {
    title: 'サービス紹介資料',
    description: '顧問契約・スポット業務の内容と特徴を網羅した基本資料です。',
    size: 'PDF / 約8MB',
  },
  {
    title: '料金プラン詳細',
    description: '各プランの料金・含まれる内容・他社比較をまとめた資料です。',
    size: 'PDF / 約3MB',
  },
  {
    title: 'AI助成金活用ガイド',
    description: '鹿児島の中小企業向け、主要な助成金制度の概要と活用事例集。',
    size: 'PDF / 約5MB',
  },
] as const;

export default function DownloadPage() {
  return (
    <>
      <PageHero
        sectionLabel="DOWNLOAD"
        heading="資料ダウンロード"
        lead={'当事務所のサービス資料をダウンロードいただけます。\nフォームにご入力いただくと、折返しお送りいたします。'}
      />

      <section className="section-py-lg bg-white">
        <Container size="narrow">
          <div className="grid grid-cols-1 gap-6">
            {DOCUMENTS.map((doc) => (
              <article
                key={doc.title}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-white rounded-lg border border-gray-100 hover:border-accent transition-colors"
              >
                <div className="shrink-0 w-14 h-14 rounded-lg bg-accent-50 text-accent inline-flex items-center justify-center">
                  <FileText className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="typo-card mb-2">{doc.title}</h3>
                  <p className="typo-body mb-2">{doc.description}</p>
                  <p className="typo-meta font-sans-en">{doc.size}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary-50 rounded-lg text-center">
            <p className="typo-lead mb-6">
              資料一括ダウンロードは、お問い合わせフォームにてご依頼ください。
            </p>
            <Button variant="accent" size="lg" asChild className="group">
              <Link href="/contact">
                お問い合わせフォームへ
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
