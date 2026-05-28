import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import myLogo from '../../assets/logo.png'; // Ya logo.png, jo bhi file extension ho

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 shadow-[var(--shadow-soft)]">
          <a href="#top" className="inline-block" onClick={() => setOpen(false)}>
  <img 
    src={myLogo} 
    alt="Sharanya Logo" 
    className="h-20 w-auto object-contain" // Height (h-8 = 32px) apne minimal design ke hisaab se adjust kar lena
  />
</a>

          <ul className="hidden items-center gap-7 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="story-link relative text-foreground/80 transition hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:opacity-90 md:inline-block"
          >
            Book a call
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 transition hover:bg-foreground/10 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative block h-3 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 block h-[1.5px] w-5 rounded-full bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 block h-[1.5px] w-5 rounded-full bg-foreground"
              />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 bg-[oklch(0.97_0.02_80)]"
            />

            <div className="relative flex h-full flex-col justify-between px-8 pb-12 pt-28">
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <li key={l.href} className="overflow-hidden">
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15 + i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-display block text-5xl font-semibold tracking-tight text-foreground"
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col gap-6"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background"
                >
                  Book a call →
                </a>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60">
                  <span>Instagram</span>
                  <span>TikTok</span>
                  <span>Email</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
