import { useDemo } from './DemoContext';

export default function CTASection() {
  const { showDemo } = useDemo();

  return (
    <section id="showroom" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2029685/pexels-photo-2029685.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Luxury interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
          Experience Luxury in Person
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70 leading-relaxed">
          Visit our flagship showroom to explore our full collection and speak
          with our design consultants about creating your perfect space.
        </p>
        <button
          onClick={showDemo}
          className="mt-8 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink-900 hover:bg-ink-100 transition-all duration-300 hover:scale-105"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
