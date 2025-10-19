import Spline from '@splinetool/react-spline';
import { Rocket, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-6">
        <nav className="pointer-events-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-red-900/30" />
            <span className="text-lg font-semibold tracking-tight">CodeForge</span>
          </div>
          <div className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#tracks" className="hover:text-white">Tracks</a>
            <a href="#testimonials" className="hover:text-white">Community</a>
          </div>
          <div className="pointer-events-auto flex items-center gap-3">
            <button className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur hover:bg-white/10">Sign in</button>
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-lg shadow-red-900/30 hover:opacity-95">Get started</button>
          </div>
        </nav>

        <div className="pointer-events-auto relative mx-auto mt-20 flex max-w-3xl flex-col items-center text-center md:mt-28">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} className="text-orange-400" />
            <span>Level up your engineering skills</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Become a better software engineer
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-white/80 md:text-lg">
            Practice real interview problems, master system design, and compete in weekly contests. Interactive, immersive, and engineered for progress.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-medium text-white shadow-xl shadow-red-900/30 hover:opacity-95">
              <Trophy size={18} />
              Start practicing
            </button>
            <button className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10">
              Explore problems
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
