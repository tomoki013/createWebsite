import { createServerSupabaseClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { LogoutButton } from '@/components/auth/logout-button';

export async function Footer() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} SiteCraft. All rights reserved.
        </p>
        <nav className="text-muted-foreground flex gap-4 text-sm">
          {session ? (
            <>
              <Link href="/dashboard">ダッシュボード</Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login">ログイン</Link>
              <Link href="/register">新規登録</Link>
            </>
          )}
          <Link href="/terms">利用規約</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
      </div>
    </footer>
  );
}
