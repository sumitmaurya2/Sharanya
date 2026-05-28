import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Discovery", d: "Kickoff call to understand your brand, voice and goals." },
  { n: "02", t: "Strategy", d: "Concepts, hooks, moodboard and shot list." },
  { n: "03", t: "Shooting", d: "Cinematic on-location or studio capture." },
  { n: "04", t: "Editing", d: "Sound design, color, captions, multiple cuts." },
  { n: "05", t: "Delivery", d: "Final assets, raw files & posting guidance." },
];

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">/ Process</p>
          <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
            From idea to <em className="not-italic text-gradient">delivery</em>.
          </h2>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* Connector line */}
          <div className="absolute left-[28px] top-0 h-full w-px bg-foreground/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] top-0 w-px origin-top bg-gradient-to-b from-pink via-peach to-butter sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-start gap-6 sm:items-center ${
                  i % 2 ? "sm:flex-row-reverse sm:text-right" : ""
                } sm:justify-between`}
              >
                <div className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-card font-display text-sm shadow-[var(--shadow-soft)] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {s.n}
                </div>
                <div className={`flex-1 sm:max-w-[42%] ${i % 2 ? "sm:pr-16" : "sm:pl-16"}`}>
                  <h3 className="font-display text-3xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.d}</p>
                </div>
                <div className="hidden flex-1 sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
