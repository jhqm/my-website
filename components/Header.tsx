'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-dark-bg/80 border-b border-brand/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold gradient-text neon-glow">
            斯科特<span className="text-brand">.dev</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-sm font-medium">
              首页
            </Link>
            <Link href="/blog" className="nav-link text-sm font-medium">
              博客
            </Link>
            <Link href="/works" className="nav-link text-sm font-medium">
              作品
            </Link>
            <Link href="/downloads" className="nav-link text-sm font-medium">
              下载
            </Link>
            <Link href="/about" className="nav-link text-sm font-medium">
              关于我
            </Link>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
