/**
 * サイトの要素（コンポーネント）を表す型
 */
export type Element = {
  id: string;
  component: string; // 例: "HeroSection", "TextBlock"
  props: Record<string, unknown>; // anyからunknownへ変更
  responsive?: {
    desktop?: 'visible' | 'hidden';
    mobile?: 'visible' | 'hidden';
    tablet?: 'visible' | 'hidden';
  };
};

/**
 * サイトのページを表す型
 */
export type Page = {
  id: string;
  path: string;
  name: string;
  layoutId: string;
  seo: {
    title: string;
    description: string;
  };
  elements: Element[];
};

/**
 * サイトのレイアウト（ヘッダー・フッターなど）を表す型
 */
export type Layout = {
  id: string;
  name: string;
  elements: Element[];
};

/**
 * サイト全体のグローバル設定を表す型
 */
export type GlobalSettings = {
  themeColor: string;
  fontFamily: string;
};

/**
 * サイト全体のコンテンツ構造を表す最上位の型
 */
export type Content = {
  globalSettings: GlobalSettings;
  layouts: Layout[];
  pages: Page[];
};
