import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google'; // Noto Sans JPをインポート
import './globals.css';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';

// フォントの設定
const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'], // サブセットを指定
  weight: ['400', '500', '700'], // 使用するフォントの太さを指定
  variable: '--font-noto-sans-jp', // CSS変数として定義
});

export const metadata: Metadata = {
  title: 'SiteCraft', // アプリ名に合わせて変更してください
  description: '専門知識は不要。サイト作成を、もっと手軽に。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJp.variable} ${notoSansJp.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col sm:p-4">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
