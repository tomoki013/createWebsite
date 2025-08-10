import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  // 環境変数からSupabaseのURLとanonキーを読み込んでクライアントを作成
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
