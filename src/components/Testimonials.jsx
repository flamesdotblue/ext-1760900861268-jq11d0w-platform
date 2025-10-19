import { Star } from 'lucide-react';

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <Stars />
      <p className="mt-3 text-sm text-white/80">“{quote}”</p>
      <div className="mt-4 text-sm text-white/60">{name} · {role}</div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The weekly contests kept me consistent. I went from struggling with medium problems to solving hards confidently.',
      name: 'Priya S.',
      role: 'SWE @ Series B Startup',
    },
    {
      quote: 'System design labs were the missing piece. The trade-off writeups helped me nail my onsite.',
      name: 'David L.',
      role: 'Backend Engineer @ Cloud Co.',
    },
    {
      quote: 'Mock interviews + feedback loop = huge leaps. The structured plans saved me weeks.',
      name: 'Alex R.',
      role: 'Frontend @ Fintech',
    },
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">Trusted by thousands of learners</h2>
        <p className="mt-3 text-white/70">Real stories from engineers who leveled up their careers.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} quote={t.quote} name={t.name} role={t.role} />
        ))}
      </div>
    </section>
  );
}
