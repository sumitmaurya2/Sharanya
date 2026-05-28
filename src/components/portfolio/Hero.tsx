import { motion } from "framer-motion";
import { Instagram, Music2, Youtube, ArrowDown } from "lucide-react";
import { HeroScene } from "./HeroScene";
import { MagneticButton } from "./MagneticButton";
import creator from "@/assets/creator.jpg";

const headline = "Sharanya".split(" ");

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32">
      {/* Soft gradient background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      {/* 3D blobs */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <HeroScene />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.18_20)]" /> UGC Creator · Beauty · Lifestyle · Skincare
          </motion.span>

          {/* Word-by-word reveal headline */}
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            {headline.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pr-3 align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {w === "Scroll-Stopping" || w === "Converts" ? <em className="not-italic text-gradient">{w}</em> : w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg"
          >
            I'm a beauty, skincare & lifestyle UGC content creator based in India. I started in April 2025 and have already completed 25–30 brand collabs in just over a month. I specialise in aesthetic, satisfying, high quality product videos that feel genuine and engaging. I can create content fast and as per your (brand's) requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work">View Work →</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Let's Collaborate</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-10 flex items-center gap-5 text-foreground/60"
          >
            <a href="https://www.instagram.com/awesome_shona_007/reels/" aria-label="Instagram" className="transition hover:text-foreground hover-scale"><Instagram size={20} /></a>
            {/* <a href="#" aria-label="TikTok" className="transition hover:text-foreground hover-scale"><Music2 size={20} /></a> */}
            <a href="https://www.youtube.com/@awesome_shona_007" aria-label="YouTube" className="transition hover:text-foreground hover-scale"><Youtube size={20} /></a>
            {/* <span className="ml-2 text-xs uppercase tracking-widest">@ava.studio</span> */}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          {/* Creator image with glass frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]"
          >
            <img src={creator} alt="Creator portrait" className="h-full w-full object-cover" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.04_30/0.2)] to-transparent" /> */}
            {/* <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3"> */}
              {/* <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/60">Now playing</p>
                <p className="text-sm font-medium">Spring beauty edit · 02:14</p>
              </div> */}
              {/* <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background">▸</span> */}
            {/* </div> */}
          </motion.div>

          {/* Floating chips */}
          {/* <div className="float-slow glass absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 text-xs shadow-[var(--shadow-soft)] sm:block">
            ✦ <strong>+312%</strong> CTR uplift
          </div> */}
          {/* <div className="float-slow glass absolute -right-2 bottom-24 hidden rounded-2xl px-4 py-3 text-xs shadow-[var(--shadow-soft)] sm:block" style={{ animationDelay: "-3s" }}>
            ★ 4.9 client rating
          </div> */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/50"
      >
        <ArrowDown size={14} className="mx-auto mb-1 animate-bounce" /> scroll
      </motion.div>
    </section>
  );
}
