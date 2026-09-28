"use client";

import { useLayoutEffect } from "react";

import styles from "./v2.module.css";

export default function RevealObserver() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-reveal-root]");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!root || targets.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add(styles.revealVisible));
      return;
    }

    root.classList.add(styles.motionReady);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.revealVisible);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
