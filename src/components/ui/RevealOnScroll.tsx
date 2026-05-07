"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

export function RevealOnScroll({ children, delay = 0, style, className }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
