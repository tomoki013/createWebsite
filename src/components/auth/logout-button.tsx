import { createServerSupabaseClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export function LogoutButton() {
  const logout = async () => {
    'use server';
    const supabase = await createServerSupabaseClient();
    await supabase.auth.signOut();
    return redirect('/');
  };

  return (
    <form action={logout}>
      <button type="submit" className="hover:underline">
        ログアウト
      </button>
    </form>
  );
}
