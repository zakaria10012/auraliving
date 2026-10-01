import { useState } from 'react';
import { useDemo } from './DemoContext';

const footerLinks = {
  Shop: ['Sofas', 'Armchairs', 'Tables', 'Lighting', 'Decor'],
  Company: ['About Us', 'Showrooms', 'Careers', 'Press', 'Sustainability'],
  Support: ['Contact', 'Shipping', 'Returns', 'Warranty', 'FAQ'],
};

const socials = [
  {
    label: 'Instagram',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.1.7-2 1.5-2s1.1.5 1.1 1.3c0 .8-.5 2-.8 3.2-.2.9.5 1.7 1.4 1.7 1.7 0 2.8-2.2 2.8-4.7 0-1.9-1.3-3.4-3.6-3.4a4 4 0 0 0-4.2 4c0 .8.2 1.3.6 1.8.2.2.2.3.1.5l-.2.9c-.1.3-.3.4-.6.2-1.2-.5-1.8-1.9-1.8-3.5 0-2.6 2.2-5.7 6.5-5.7 3.5 0 5.8 2.5 5.8 5.2 0 3.6-2 6.3-4.9 6.3-1 0-1.9-.5-2.2-1.1l-.6 2.3c-.2.8-.6 1.6-1 2.3A10 10 0 1 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { showDemo } = useDemo();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showDemo();
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-white">LuxeLiving</span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
                Interiors
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-400 leading-relaxed">
              Crafting timeless furniture that transforms spaces and elevates
              everyday living since 1999.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showDemo();
                  }}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 hover:border-accent-500 hover:text-accent-400 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          showDemo();
                        }}
                        className="text-sm text-ink-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-ink-400 leading-relaxed">
              Subscribe for design inspiration, new arrivals, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder-ink-500 focus:border-accent-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-ink-500">
              &copy; {new Date().getFullYear()} LuxeLiving Interiors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showDemo();
                }}
                className="text-sm text-ink-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showDemo();
                }}
                className="text-sm text-ink-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
