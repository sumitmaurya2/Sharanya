import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-pink via-peach to-butter"
    />
  );
}
