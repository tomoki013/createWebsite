import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Blocks, Brush, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Blocks className="h-8 w-8" />,
    title: '豊富なテンプレート',
    description:
      'ビジネス、ポートフォリオ、ブログなど、様々な用途に合わせた高品質なテンプレートを多数ご用意。',
  },
  {
    icon: <Brush className="h-8 w-8" />,
    title: '直感的な編集',
    description:
      'ドラッグ＆ドロップでパーツを配置し、テキストや画像を直接編集。パワーポイントのような操作感でサイトが作れます。',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'レスポンシブ対応',
    description:
      '作成したサイトは自動でPC、タブレット、スマホ表示に最適化。どんなデバイスでも美しく表示されます。',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted w-full py-20 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          主な機能
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="flex flex-col items-center text-center">
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
