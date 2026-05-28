import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const brands = ["GLOSSIER", "RARE BEAUTY", "SEPHORA", "CHARLOTTE TILBURY", "ALO YOGA", "ZARA", "FENTY", "SOL DE JANEIRO", "SKIMS"];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 10, suffix: "M+", label: "Total views" },
  { value: 150, suffix: "+", label: "Brand collaborations" },
  { value: 49, suffix: "", label: "Client rating · /50", format: (v: number) => (v / 10).toFixed(1) },
];

export function SocialProof() {
  return (
    <section className="relative border-y border-foreground/5 bg-[oklch(0.98_0.012_80)] py-16">
      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="mx-10 font-display text-2xl font-light tracking-[0.25em] text-foreground/40 sm:text-3xl"
            >
              {b} <span className="ml-10 text-[oklch(0.8_0.08_30)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Metric cards */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="glass relative overflow-hidden rounded-3xl p-8 text-center shadow-[var(--shadow-soft)]"
          >
            <div className="absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-pink/40 blur-3xl" />
            <div className="relative font-display text-5xl font-medium tracking-tight sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="relative mt-3 text-xs uppercase tracking-[0.25em] text-foreground/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
