import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

const DEMO_MESSAGE =
  'This is a live demonstration portfolio example created to showcase web development skills. For custom projects, the actual content and backend functionality will be tailored to your specific requirements.';

type DemoContextValue = {
  showDemo: () => void;
  isOpen: boolean;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const showDemo = useCallback(() => setIsOpen(true), []);

  return (
    <DemoContext.Provider value={{ showDemo, isOpen }}>
      {children}
      {isOpen && <DemoModal onClose={() => setIsOpen(false)} />}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used within DemoProvider');
  return ctx;
}

function DemoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-ink-400 hover:text-ink-900 transition-colors"
          aria-label="Close"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="p-8 sm:p-10">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a86a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="m2 17 10 5 10-5" />
              <path d="m2 12 10 5 10-5" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-3">Portfolio Demonstration</h2>
          <p className="text-ink-600 leading-relaxed text-[15px]">{DEMO_MESSAGE}</p>
          <button
            onClick={onClose}
            className="mt-6 w-full rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
