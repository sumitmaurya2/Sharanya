import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import prz from "@/assets/prz.jpeg";
import w2 from "@/assets/wishcare.jpeg";
import w3 from "@/assets/bake.jpeg";
import w4 from "@/assets/niconi.jpeg";
import w5 from "@/assets/cap.jpeg";

const items = [
  {
    src: prz,
    title: "",
    tag: "Beauty",
    link: "",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: w2,
    title: "",
    tag: "Skincare",
    link: "https://www.instagram.com/reel/DYEcgGoAIQG/?igsh=MXY4bm1kYnVnd3hodQ%3D%3D",
    className: "md:col-span-1",
  },
  {
    src: w3,
    title: "",
    tag: "Haircare",
    link: "https://www.instagram.com/reel/DYrkAlcAd54/?igsh=d3J0dW0wdnZ2OGk2",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: w4,
    title: "",
    tag: "",
    link: "https://www.instagram.com/reel/DYJPhGHoY7O/?igsh=MWVwMmxnNDQ0YXdteg%3D%3D",
    className: "md:col-span-1",
  },
  {
    src: w5,
    title: "",
    tag: "",
    link: "https://www.instagram.com/reel/DYoT8EUo2DK/?igsh=NWxxcGZvenE2b3I3",
    className: "md:col-span-2",
  },
];

function Tile({ item, i }: { item: (typeof items)[number]; i: number }) {
  return (
    <motion.a
      href={item.link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-muted shadow-[var(--shadow-soft)] ${item.className}`}
    >
      <div className="aspect-[4/5] h-full w-full overflow-hidden md:aspect-auto">
<img
  src={item.src}
  alt={item.title}
  loading="lazy"
  className="w-full h-full object-contain"
/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">{item.tag}</p>
          <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground">↗</span>
      </div>
    </motion.a>
  );
}

export function Work() {
  // Horizontal scroll strip on desktop
  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">/ Featured work</p>
            <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
              Campaigns that <em className="not-italic text-gradient">stop the scroll</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/60">
            A curated selection of recent collaborations across beauty, fashion, lifestyle and wellness.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:auto-rows-[260px] md:grid-cols-3 md:auto-rows-[230px]">
          {items.map((it, i) => (
            <Tile key={i} item={it} i={i} />
          ))}
        </div>
      </div>

      {/* Horizontal parallax strip */}
      <div ref={stripRef} className="mt-24 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 whitespace-nowrap pl-6 will-change-transform">
          {[...items, ...items].map((it, i) => (
            <div key={i} className="relative h-[280px] w-[420px] shrink-0 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img src={it.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs backdrop-blur">{it.tag}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
