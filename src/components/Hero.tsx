import { useDemo } from './DemoContext';

export default function Hero() {
  const { showDemo } = useDemo();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6580396/pexels-photo-6580396.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Luxurious modern living room"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/40 to-ink-950/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-accent-300 animate-fade-in-up">
          Timeless Design, Modern Living
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] text-balance animate-fade-in-up">
          Furniture That Defines
          <br />
          <span className="italic text-accent-200">Your Space</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed animate-fade-in-up">
          Discover our curated collection of handcrafted luxury furniture, where
          artisan craftsmanship meets contemporary design.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
          <button
            onClick={showDemo}
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink-900 hover:bg-ink-100 transition-all duration-300 hover:scale-105"
          >
            Shop Collection
          </button>
          <button
            onClick={showDemo}
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            Explore Catalog
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
