import Link from 'next/link';
import { MountainIcon } from 'lucide-react';
import { FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Site Info */}
          <div>
            <Link href={`/`} className="flex items-center space-x-2">
              <MountainIcon />
              <span className="text-xl font-bold">SiteCraft</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              あなたのウェブサイトを次のレベルへ。
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold">プロダクト</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  機能
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  料金
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ダッシュボード
                </Link>
              </nav>
            </div>
            <div>
              {/* <h3 className="font-semibold">リソース</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  ブログ
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  お問い合わせ
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  ドキュメント
                </Link>
              </nav> */}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold">フォローする</h3>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://github.com/tomoki013/createWebsite"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              {/* <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FaTiktok className="h-6 w-6" />
              </Link> */}
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SiteCraft. All rights reserved.
          </p>
          <nav className="mt-4 flex space-x-4 text-sm sm:mt-0">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
