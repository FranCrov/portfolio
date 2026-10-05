"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    if (document.documentElement.classList.contains("no-motion")) {
      return;
    }

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not([data-reveal='visible'])",
      ),
    );

    if (nodes.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      for (const node of nodes) {
        node.dataset.reveal = "visible";
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          (entry.target as HTMLElement).dataset.reveal = "visible";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}