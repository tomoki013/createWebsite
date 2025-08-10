import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '¥0',
    description: 'まずは無料で試したい方に',
    features: ['作成可能サイト数: 1', 'ページ数 / サイト: 3', '基本パーツ'],
    cta: '無料で始める',
    href: '/register',
  },
  {
    name: 'Basic',
    price: '¥980',
    description: '個人サイトや趣味のブログに',
    features: [
      '作成可能サイト数: 5',
      'ページ数 / サイト: 10',
      '高機能パーツ',
      '広告なし',
    ],
    cta: 'プランを選択',
    href: '/register?plan=basic',
  },
  {
    name: 'Pro',
    price: '¥2,980',
    description: 'ビジネスやフリーランスに最適',
    features: [
      '作成可能サイト数: 10',
      '無制限のページ数',
      'プレミアムテンプレート',
      '独自ドメイン接続',
    ],
    cta: 'プランを選択',
    href: '/register?plan=pro',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          料金プラン
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== 'Free' && (
                    <span className="text-muted-foreground">/月</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
