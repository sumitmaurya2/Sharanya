const items = [
    
  { quote: "Ava delivered content that outperformed our top-paid ad in the first 48 hours. Genuinely magic.", name: "Mia Carter", role: "CMO, Bloom Beauty" },
  { quote: "The most easy, professional collaboration we've had this year. The footage looked like a $50k production.", name: "Sasha L.", role: "Founder, Glow Studio" },
  { quote: "Booked her for one campaign, ended up signing for the entire year. Our community can't get enough.", name: "Jordan Reyes", role: "Brand Lead, Alo" },
  { quote: "Beautifully shot, on-brand, on-time. Ava just gets it — every single brief.", name: "Naomi Park", role: "PR Director, Sephora" },
  { quote: "Our launch reel hit 2.3M views overnight. Easily the best ROI on creator content we've seen.", name: "Lena F.", role: "Marketing, Sol de Janeiro" },
];

function Card({ q, n, r }: { q: string; n: string; r: string }) {
  const initials = n.split(" ").map((p) => p[0]).join("").slice(0, 2);
  return (
    <figure className="mx-3 flex h-full w-[340px] shrink-0 flex-col justify-between rounded-3xl border border-foreground/5 bg-card p-7 shadow-[var(--shadow-soft)] sm:w-[420px]">
      <blockquote className="font-display text-lg leading-snug text-foreground/85">"{q}"</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-pink to-butter text-sm font-medium text-foreground/80">
          {initials}
        </span>
        <div>
          <p className="text-sm font-medium">{n}</p>
          <p className="text-xs text-foreground/55">{r}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.97_0.018_75)] py-28">
      <div className="mx-auto mb-14 max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">/ Kind words</p>
        <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
          Brands love working <em className="not-italic text-gradient">together</em>.
        </h2>
      </div>

      {/* Infinite carousel */}
      <div className="overflow-hidden">
        <div className="marquee">
          {[...items, ...items].map((t, i) => (
            <Card key={i} q={t.quote} n={t.name} r={t.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
