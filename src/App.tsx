import { DemoProvider } from './components/DemoContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <DemoProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <ProductGrid />
          <About />
          <CTASection />
        </main>
        <Footer />
      </div>
    </DemoProvider>
  );
}

export default App;
