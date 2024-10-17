'use client';
// import HeaderLinks from '@/components/header/header-links';
import { LangSwitcher } from '@/components/header/lang-switcher';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Icons } from '../icons';
import { ThemedButton } from '../themed-button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled(latest > 20);
  });

  return (
    <div
      className={cn(
        'fixed top-0 z-50 w-full',
        hasScrolled ? 'bg-purple-300 shadow-lg dark:bg-purple-900' : '',
      )}
    >
      <nav className={cn('container relative mx-auto')}>
        <div
          className={cn(
            'flex w-full justify-between px-4 py-2 sm:px-6 lg:px-8',
          )}
        >
          <div className="py-2">
            <Link
              href="/"
              aria-label={siteConfig.name}
              title={siteConfig.name}
              className="flex items-center gap-2 font-bold"
            >
              <h1>Прэмія Бізон Гіґс</h1>
            </Link>
          </div>
          <div className="hidden min-w-[380px] items-center justify-end gap-x-6 md:flex">
            <ThemedButton />
            <LangSwitcher />
          </div>
          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon />
            </button>
            {isMenuOpen && (
              <div className="absolute left-0 top-0 z-50 w-full">
                <div className="max-w-[100vw] rounded border bg-background p-4 px-12 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <Link
                        href="/"
                        aria-label={siteConfig.name}
                        title={siteConfig.name}
                        className="inline-flex items-center"
                      >
                        <h1>Прэмія Бізон Гіґс</h1>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="font-norma tracking-wide transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icons.close />
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-col items-center justify-between gap-x-5">
                      {/* <HeaderLinks /> */}
                      <div className="mt-8 flex items-center justify-end gap-x-5">
                        <ThemedButton />
                        <LangSwitcher />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
