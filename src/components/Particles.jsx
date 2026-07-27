import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const count = Math.min(20, Math.floor(window.innerWidth / 40));
    const particles = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "particle";
      const size = 2 + Math.random() * 6;
      el.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${15 + Math.random() * 25}s;
        animation-delay: ${Math.random() * 20}s;
      `;
      container.appendChild(el);
      particles.push(el);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return <div ref={ref} className="particles" aria-hidden="true" />;
}
