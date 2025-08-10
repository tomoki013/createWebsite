import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear =
    new Date().getFullYear() > 2025 ? `-${new Date().getFullYear()} ` : ' ';
  return (
    <footer className="my-2 border-t py-2">
      <div className="container grid grid-flow-col grid-cols-2 py-4 md:h-24 md:grid-flow-row">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-3xl font-bold">SiteCraft</span>
          </Link>
          <Link href={`/`} className="">
            a
          </Link>
        </div>
        <div>
          <p>app</p>
        </div>
      </div>
      <hr />
      <div className="container flex flex-col items-center justify-between gap-4 py-5 md:h-24 md:flex-row md:py-0">
        <p className="text-muted-foreground text-sm">
          &copy; 2025
          <span>{currentYear}</span>
          SiteCraft. All rights reserved.
        </p>
        <nav className="text-muted-foreground flex gap-4 text-sm">
          <Link href="/terms">利用規約</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
      </div>
    </footer>
  );
}
