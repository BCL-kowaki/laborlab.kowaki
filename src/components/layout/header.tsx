'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { BRAND, NAVIGATION } from '@/lib/copy';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // モバイルメニュー開いている時はスクロールロック
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent',
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ロゴ — スクロールの前後で logo_white.png / logo.png を切り替え */}
            <Link
              href="/"
              className="group relative inline-flex items-center"
              aria-label={`${BRAND.name} トップへ`}
            >
              {/* スクロール前: 白ロゴ（ネイビー背景上） */}
              <Image
                src="/images/logo_white.png"
                alt={BRAND.name}
                width={1979}
                height={245}
                priority
                className={cn(
                  'h-7 md:h-8 w-auto transition-opacity duration-500',
                  isScrolled ? 'opacity-0' : 'opacity-100',
                )}
              />
              {/* スクロール後: 通常ロゴ（白背景上）をオーバーレイでクロスフェード */}
              <Image
                src="/images/logo.png"
                alt=""
                aria-hidden="true"
                width={1979}
                height={245}
                priority
                className={cn(
                  'absolute inset-0 h-7 md:h-8 w-auto transition-opacity duration-500',
                  isScrolled ? 'opacity-100' : 'opacity-0',
                )}
              />
            </Link>

            {/* デスクトップナビ */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-body-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-primary-700 hover:text-accent'
                      : 'text-white/90 hover:text-accent-300',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + モバイルメニューボタン */}
            <div className="flex items-center gap-3">
              <Button
                variant="accent"
                size="sm"
                className="hidden sm:inline-flex"
                asChild
              >
                <Link href="/contact">無料相談</Link>
              </Button>

              {/* モバイルメニューボタン */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  'lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md transition-colors',
                  isScrolled
                    ? 'text-primary-900 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10',
                )}
                aria-label="メニューを開く"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
              <span className="font-serif-ja font-bold text-primary-900">
                メニュー
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-md text-primary-900 hover:bg-gray-100"
                aria-label="メニューを閉じる"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="py-8 px-6">
              <ul className="flex flex-col gap-1">
                {NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 rounded-md text-primary-900 hover:bg-gray-50 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    無料相談を申し込む
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
