import { useDemo } from './DemoContext';

const features = [
  {
    title: 'Bespoke Craftsmanship',
    description: 'Each piece is handcrafted by master artisans using traditional techniques passed down through generations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Premium Materials',
    description: 'We source only the finest woods, fabrics, and metals from sustainable suppliers worldwide.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Timeless Design',
    description: 'Our collections blend classic elegance with modern aesthetics for pieces that never go out of style.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];

export default function About() {
  const { showDemo } = useDemo();

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/6969781/pexels-photo-6969781.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Luxury furniture showroom"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-ink-900 p-6 text-white sm:block">
              <p className="font-serif text-3xl font-semibold">25+</p>
              <p className="text-sm text-white/70">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent-600">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-ink-900 leading-tight">
              Where Artistry Meets Living
            </h2>
            <p className="mt-5 text-ink-500 leading-relaxed">
              For over two decades, LuxeLiving Interiors has been crafting
              furniture that transforms houses into homes. Our philosophy is
              simple: every piece should tell a story, serve a purpose, and
              stand the test of time.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{f.title}</h3>
                    <p className="mt-1 text-sm text-ink-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={showDemo}
              className="mt-10 rounded-full border border-ink-300 px-7 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 transition-colors"
            >
              Visit Our Showroom
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
