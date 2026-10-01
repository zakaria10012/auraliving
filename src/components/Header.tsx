import { useEffect, useState } from 'react';
import { useDemo } from './DemoContext';

const navLinks = [
  { label: 'Collections', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Showroom', href: '#showroom' },
  { label: 'Contact', href: '#footer' },
];

export default function Header() {
  const { showDemo } = useDemo();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-ink-900' : 'text-white'}`}>
            LuxeLiving
          </span>
          <span className={`text-xs font-medium uppercase tracking-[0.2em] ${scrolled ? 'text-accent-600' : 'text-accent-300'}`}>
            Interiors
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                showDemo();
              }}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-ink-600 hover:text-ink-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={showDemo}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-ink-900 text-white hover:bg-ink-800'
                : 'bg-white text-ink-900 hover:bg-ink-100'
            }`}
          >
            Shop Now
          </button>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-ink-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink-100 animate-slide-down">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  showDemo();
                  setMobileOpen(false);
                }}
                className="text-sm font-medium text-ink-600 hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                showDemo();
                setMobileOpen(false);
              }}
              className="rounded-full bg-ink-900 px-6 py-2.5 text-sm font-medium text-white"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
