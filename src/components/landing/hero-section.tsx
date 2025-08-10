'use client'; // アニメーションのためにクライアントコンポーネントにする

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center py-20 text-center md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          専門知識は不要。サイト作成を、もっと手軽に。
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-[700px] text-lg">
          テンプレートを選ぶだけ。最短5分であなたのサイトが完成します。
          直感的な操作で、思い通りのデザインを実現しましょう。
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/register">今すぐ無料で始める</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
