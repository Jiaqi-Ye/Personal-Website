"use client";

import { useEffect, useState } from "react";

import styles from "./v2.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={styles.backToTop}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      Back to top <span aria-hidden="true">↑</span>
    </button>
  );
}
