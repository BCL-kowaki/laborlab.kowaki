interface LegalSection {
  title: string;
  body: string;
}

interface LegalSectionsProps {
  heading: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
  intro?: string;
}

/**
 * プライバシーポリシー / 利用規約などの法務ページ共通レイアウト。
 */
export function LegalSections({
  heading,
  lastUpdated,
  sections,
  intro,
}: LegalSectionsProps) {
  return (
    <article className="space-y-10">
      <header className="pb-8 border-b border-gray-100">
        <h2 className="typo-section mb-4">{heading}</h2>
        <p className="typo-meta font-sans-en">最終更新日：{lastUpdated}</p>
      </header>

      {intro && <p className="typo-body whitespace-pre-line">{intro}</p>}

      {sections.map((section) => (
        <section key={section.title}>
          <h3 className="typo-card mb-4">{section.title}</h3>
          <p className="typo-body whitespace-pre-line">{section.body}</p>
        </section>
      ))}
    </article>
  );
}
