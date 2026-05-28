import { motion } from "framer-motion";
import { Camera, Film, Sparkles, Megaphone, PenLine } from "lucide-react";

const services = [
  { icon: Film, title: "UGC Video Creation", desc: "Authentic, cinematic short-form content built to convert." },
  { icon: Camera, title: "Product Photography", desc: "Editorial flat-lays & lifestyle stills for socials and ads." },
  { icon: Sparkles, title: "TikTok / Reels", desc: "On-trend hooks, sounds and pacing tailored to your brand." },
  { icon: Megaphone, title: "Ad Creatives", desc: "Performance-led variations tested for the best ROAS." },
  { icon: PenLine, title: "Script Writing", desc: "Hooks, beats and CTAs informed by what's working now." },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32">
      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-pink/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-butter/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">/ Services</p>
          <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
            Everything you need to <em className="not-italic text-gradient">show up beautifully</em>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-foreground/5 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-warm)" }}
              />
              <s.icon className="h-7 w-7 text-foreground/70 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
              <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-widest text-foreground/50">
                <span>0{i + 1}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
