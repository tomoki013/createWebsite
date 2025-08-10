import { Button } from '@/components/ui/button';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { MountainIcon } from 'lucide-react';
import Link from 'next/link';
import { UserNav } from '../auth/user-nav';

export async function Header() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-3xl font-bold">SiteCraft</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 text-sm font-medium sm:flex">
          <Link href="/#features">機能</Link>
          <Link href="/#pricing">料金</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {session ? (
            <UserNav />
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">ログイン</Link>
              </Button>
              <Button asChild>
                <Link href="/register">無料で始める</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
