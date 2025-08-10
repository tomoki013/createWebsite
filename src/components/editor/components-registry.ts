import { type ComponentType } from 'react';

// TODO: 各パーツコンポーネントをインポートする
// import { HeroSection } from "./parts/hero-section";
// import { TextBlock } from "./parts/text-block";

// コンポーネントが受け取るpropsの型を定義
type ComponentProps = Record<string, unknown>;

type ComponentRegistry = {
  [key: string]: ComponentType<ComponentProps>; // anyから具体的な型へ変更
};

export const componentRegistry: ComponentRegistry = {
  // 例:
  // "HeroSection": HeroSection,
  // "TextBlock": TextBlock,
};
