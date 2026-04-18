import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  sectionLabel: string;
  heading: string;
  lead?: string;
  className?: string;
}

/**
 * 下層ページ共通のヒーロー（ページ見出し）。
 * ヘッダーの固定高さ分だけ padding-top を取り、ネイビー基調の帯に
 * 英語小見出し＋和文大見出し＋リード文を載せる構成。
 * AIDER の下層ページパターン準拠。
 */
export function PageHero({
  sectionLabel,
  heading,
  lead,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-24',
        className,
      )}
    >
      {/* 背景: AIDER風に控えめなグラデーション（装飾ラインは省略） */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* 英語小見出し — AIDER風 大文字・字間広め・センター配置 */}
          <p
            className="font-sans-en text-caption font-medium text-accent-300 mb-5 uppercase inline-flex items-center justify-center gap-3"
            style={{ letterSpacing: '0.25em' }}
          >
            <span
              className="block w-10 h-px bg-accent-300"
              aria-hidden="true"
            />
            {sectionLabel}
          </p>
          {/* ページ見出し — ゴシック・普通太さで品良く */}
          <h1
            className="font-sans-ja text-white text-page-h1 font-medium leading-[1.5] text-balance mb-6"
            style={{ letterSpacing: '0.05em' }}
          >
            {heading}
          </h1>
          {lead && (
            <p
              className="text-white/80 text-lead leading-[2] whitespace-pre-line max-w-2xl mx-auto"
              style={{ letterSpacing: '0.05em' }}
            >
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
