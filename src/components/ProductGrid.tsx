import { useMemo, useState } from 'react';
import { products, categories, type Product } from '../data/products';
import { useDemo } from './DemoContext';

export default function ProductGrid() {
  const { showDemo } = useDemo();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="products" className="bg-ink-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent-600">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-ink-900">
            Curated Luxury Pieces
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-500 leading-relaxed">
            Each piece is thoughtfully selected to bring elegance, comfort, and
            sophistication to your home.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ink-900 text-white'
                    : 'bg-white text-ink-600 hover:bg-ink-100 border border-ink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search furniture..."
              className="w-full rounded-full border border-ink-200 bg-white py-2.5 pl-11 pr-4 text-sm text-ink-900 placeholder-ink-400 focus:border-ink-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-ink-400 text-lg">No pieces found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onAction={showDemo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  onAction,
}: {
  product: Product;
  index: number;
  onAction: () => void;
}) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl animate-fade-in-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-ink-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink-700 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold text-ink-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-ink-900">
            ${product.price.toLocaleString()}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={onAction}
            className="flex-1 rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={onAction}
            className="flex-1 rounded-lg border border-ink-300 px-4 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
