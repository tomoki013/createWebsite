import { Button } from '@/components/ui/button';
import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-3xl font-bold">SiteCraft</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 text-sm font-medium sm:flex">
          <Link href="#features" className="text-lg">
            機能
          </Link>
          <Link href="#pricing" className="text-lg">
            料金
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/login">ログイン</Link>
          </Button>
          <Button asChild>
            <Link href="/register">無料で始める</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
