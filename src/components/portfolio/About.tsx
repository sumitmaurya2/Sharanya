import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import about from "@/assets/about.jpg";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="relative py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img src={about} alt="Ava portrait" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          {/* Decorative floating elements */}
          <div className="float-slow absolute -left-4 -top-4 h-24 w-24 rounded-full bg-butter/70 blur-xl" />
          <div className="float-slow absolute -bottom-4 right-2 h-28 w-28 rounded-full bg-pink/60 blur-xl" style={{ animationDelay: "-2s" }} />
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">/ About</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-3 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
          >
           Aesthetic, authentic & quietly obsessed with<em className="not-italic text-gradient">quality</em>.
          </motion.h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
            {[
              "I started my UGC journey in April 2026, and in just over a month, I’ve had the pleasure of bringing 40+ brand campaigns to life. What drives me is creating content that doesn't just look beautiful, but actually connects with the audience.",
              "My work lives at the intersection of satisfying aesthetics and genuine storytelling. I specialize in high-quality beauty, skincare, and lifestyle videos that are delivered fast and perfectly tailored to your brand's vision.",
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          {/* <div className="mt-10 grid grid-cols-2 gap-6 border-t border-foreground/10 pt-8 sm:grid-cols-3">
            {[
              ["Based in", "Los Angeles, CA"],
              ["Available", "Worldwide"],
              ["Speaks", "EN · FR · ES"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">{k}</p>
                <p className="mt-1 font-display text-lg">{v}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
