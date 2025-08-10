import Link from 'next/link';

export function Footer() {
  const currentYear =
    new Date().getFullYear() > 2025 ? `-${new Date().getFullYear()} ` : ' ';
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
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
