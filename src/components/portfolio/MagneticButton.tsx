import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

// Magnetic button: translates toward the cursor on hover
export function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-[background,color,box-shadow] duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:shadow-[var(--shadow-soft)]"
      : "border border-foreground/20 bg-white/40 backdrop-blur hover:bg-white";

  return (
    <motion.a
      ref={ref as never}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles}`}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}
