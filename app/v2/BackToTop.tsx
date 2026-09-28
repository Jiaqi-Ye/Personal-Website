"use client";

import styles from "./v2.module.css";

export default function BackToTop() {
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
      Back to Top
    </button>
  );
}
