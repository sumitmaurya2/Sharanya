import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What's included in a typical UGC package?", a: "Concept development, scripting, on-camera talent, shooting, editing, color, captions and 2 rounds of revisions. Raw files always included." },
  { q: "How long does a project take?", a: "From kickoff to final delivery, most campaigns take 7–14 days. Rush turnarounds are available on request." },
  { q: "Do you offer usage rights for paid ads?", a: "Yes. Standard packages include 6-month organic usage; paid usage and whitelisting can be added per campaign." },
  { q: "What brands do you work with?", a: "Beauty, skincare, fashion, wellness and lifestyle. From indie launches to global household names." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">/ FAQ</p>
        <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
          Good <em className="not-italic text-gradient">questions</em>.
        </h2>

        <div className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground/100"
                >
                  <span className="font-display text-xl text-foreground/85 group-hover:text-foreground">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-5 w-5" strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm leading-relaxed text-foreground/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
