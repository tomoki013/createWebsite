import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">あなたのサイト一覧</h1>
        <Button asChild>
          <Link href="/editor/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            新しいサイトを作成
          </Link>
        </Button>
      </div>
      <div className="border-muted-foreground/30 mt-8 flex items-center justify-center rounded-lg border-2 border-dashed py-20 text-center">
        <p className="text-muted-foreground">
          まだサイトがありません。最初のサイトを作成しましょう！
        </p>
      </div>
    </div>
  );
}
