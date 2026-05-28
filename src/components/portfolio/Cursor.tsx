import { useEffect, useRef } from "react";

// Mouse-follow glow cursor with smooth lerp
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", move);
    let raf = 0;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="cursor-dot" aria-hidden />;
}
