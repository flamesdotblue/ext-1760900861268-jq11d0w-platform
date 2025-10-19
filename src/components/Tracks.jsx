import { Target } from 'lucide-react';

function TrackCard({ title, desc, progress, colorFrom, colorTo }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20">
      <div className={`inline-flex items-center gap-2 rounded-md bg-gradient-to-r ${colorFrom} ${colorTo} px-2.5 py-1 text-xs font-medium text-white shadow-md shadow-red-900/20`}>
        <Target size={14} />
        Path
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-5">
        <div className="mb-1 flex items-center justify-between text-xs text-white/60">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded bg-white/10">
          <div className={`h-full bg-gradient-to-r ${colorFrom} ${colorTo}`} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button className="mt-5 w-full rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
        Continue path
      </button>
    </div>
  );
}

export default function Tracks() {
  const tracks = [
    {
      title: 'Data Structures & Algorithms',
      desc: 'Master patterns like sliding window, graph traversals, DP, and more with increasing difficulty.',
      progress: 45,
      from: 'from-orange-500',
      to: 'to-red-600',
    },
    {
      title: 'System Design Fundamentals',
      desc: 'Design real systems: rate limiter, feed, chat, and search. Learn scalability trade-offs.',
      progress: 20,
      from: 'from-rose-500',
      to: 'to-orange-500',
    },
    {
      title: 'Frontend Engineering',
      desc: 'Build interactive apps, improve performance, and ace UI challenges with real-world tasks.',
      progress: 72,
      from: 'from-amber-500',
      to: 'to-red-600',
    },
  ];

  return (
    <section id="tracks" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">Structured learning paths</h2>
        <p className="mt-3 text-white/70">Pick a track and advance through curated modules, checkpoints, and capstone projects.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {tracks.map((t) => (
          <TrackCard key={t.title} title={t.title} desc={t.desc} progress={t.progress} colorFrom={t.from} colorTo={t.to} />
        ))}
      </div>
    </section>
  );
}
