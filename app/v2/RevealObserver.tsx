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
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        targets.forEach((target) => target.classList.add(styles.revealVisible));
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  return null;
}
