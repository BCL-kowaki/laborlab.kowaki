import type { Variants } from 'framer-motion';

/**
 * アニメーションのイージングカーブ
 */
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const, // ease-out-quart（推奨）
  spring: [0.34, 1.56, 0.64, 1] as const, // 控えめなスプリング
  standard: [0.4, 0, 0.2, 1] as const, // Material Design標準
};

/**
 * 継続時間プリセット
 */
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
};

/**
 * フェードイン＋下から上への移動（最も汎用）
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

/**
 * シンプルなフェードイン
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

/**
 * 子要素を順にアニメーションさせる（stagger）コンテナ
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * スケールイン（画像やカード用）
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

/**
 * スライドイン（左から）
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

/**
 * スライドイン（右から）
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

/**
 * スクロール連動のデフォルトviewport設定
 */
export const defaultViewport = {
  once: true,
  margin: '-100px',
} as const;
