import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * News（お知らせ）の MDX 駆動ローダ。
 *
 * 投稿の追加方法:
 *   1. content/news/ に新しい .mdx ファイルを追加
 *   2. フロントマターに title, date (YYYY-MM-DD), category, excerpt を記述
 *   3. 本文は Markdown / MDX で記述
 *   4. 一覧・詳細ページに自動で反映される
 *
 * カテゴリ運用:
 *   - 'お知らせ': 通常のお知らせ
 *   - '制度改正': 法改正・制度変更（赤系で強調表示）
 *   - 'セミナー情報': セミナー・イベント告知
 *   - 'コラム': 短い記事（長文は /blog へ）
 */

export type NewsCategory =
  | 'お知らせ'
  | '制度改正'
  | 'セミナー情報'
  | 'コラム';

export interface NewsItem {
  /** ファイル名から導出した slug (例: childcare-leave-law-revision) */
  slug: string;
  /** タイトル */
  title: string;
  /** 公開日 (ISO 8601) */
  date: string;
  /** カテゴリ */
  category: NewsCategory;
  /** 一覧表示用の抜粋 */
  excerpt: string;
  /** MDX 本文（生 markdown 文字列） */
  content: string;
}

const NEWS_DIR = path.join(process.cwd(), 'content', 'news');

/**
 * すべての News 記事を取得（公開日の降順）。
 */
export function getAllNews(): NewsItem[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  const files = fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('._'));

  const items = files.map((file) => parseNewsFile(file));

  // 日付の降順
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * slug から News 記事を1件取得。存在しなければ null。
 */
export function getNewsBySlug(slug: string): NewsItem | null {
  const file = `${slug}.mdx`;
  const fullPath = path.join(NEWS_DIR, file);
  if (!fs.existsSync(fullPath)) return null;
  return parseNewsFile(file);
}

/**
 * フロントマターをパースして NewsItem を返す。
 */
function parseNewsFile(file: string): NewsItem {
  const slug = file.replace(/\.mdx$/, '');
  const fullPath = path.join(NEWS_DIR, file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? '無題'),
    date: normalizeDate(data.date),
    category: (data.category ?? 'お知らせ') as NewsCategory,
    excerpt: String(data.excerpt ?? ''),
    content,
  };
}

/**
 * フロントマターの date を ISO 形式の文字列に正規化。
 */
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string') return value;
  return new Date().toISOString().slice(0, 10);
}

/**
 * カテゴリ別の表示スタイル（バッジ色）。
 */
export const CATEGORY_STYLES: Record<
  NewsCategory,
  { bg: string; text: string }
> = {
  '制度改正': { bg: 'bg-red-50', text: 'text-red-700' },
  'セミナー情報': { bg: 'bg-tech-500/10', text: 'text-tech-600' },
  'お知らせ': { bg: 'bg-accent-50', text: 'text-accent-600' },
  'コラム': { bg: 'bg-primary-100', text: 'text-primary-700' },
};
