import { Code2, Brain, Trophy, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code2,
      title: 'Curated DSA Library',
      desc: '700+ hand-picked problems with editorials, patterns, and difficulty progression.',
    },
    {
      icon: Brain,
      title: 'System Design Labs',
      desc: 'Interactive case studies with diagrams, trade-offs, and scalability drills.',
    },
    {
      icon: Trophy,
      title: 'Weekly Contests',
      desc: 'Compete on timed challenges, climb the leaderboard, and earn badges.',
    },
    {
      icon: Users,
      title: 'Mock Interviews',
      desc: 'Practice live with peers or AI, get structured feedback and next steps.',
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">Everything you need to get interview-ready</h2>
        <p className="mt-3 text-white/70">Built with the rigor of coding platforms and the guidance of elite mentors.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 backdrop-blur transition hover:border-white/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/80 to-red-600/80 text-white shadow-lg shadow-red-900/30">
              <f.icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-orange-500/10 to-red-600/10 blur-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
