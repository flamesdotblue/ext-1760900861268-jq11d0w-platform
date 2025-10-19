import Hero from './components/Hero';
import Features from './components/Features';
import Tracks from './components/Tracks';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Hero />
      <main className="relative z-10">
        <Features />
        <Tracks />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
