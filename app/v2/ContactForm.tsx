"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

import emailIcon from "@/assets/email.png";
import linkedinIcon from "@/assets/Linkedin.png";
import rightArrowBlack from "@/assets/right-arrow-black.png";
import rightArrowWhite from "@/assets/right-arrow-white.png";

import styles from "./v2.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("Sending…");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "29e458af-fffa-4b31-9747-fb6c5567daba");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (data.success) {
        form.reset();
        setStatus("Thank you — your message has been sent.");
      } else {
        setStatus(data.message ?? "Unable to send your message. Please try again.");
      }
    } catch {
      setStatus("Unable to send your message. Please email me directly.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className={`${styles.section} ${styles.contactSection}`}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Get in Touch</h2>
      <p className={styles.contactIntro}>
        I&apos;d love to hear from you. Reach out about AI engineering, software
        opportunities, research collaborations, or a project you&apos;re building.
      </p>

      <div className={styles.contactChannels} aria-label="Direct contact links">
        <a href="mailto:jye224@wisc.edu">
          <Image src={emailIcon} alt="" width={32} height={32} />
          <span>jye224@wisc.edu</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jiaqi-ye-40a8b635a"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={linkedinIcon} alt="" width={32} height={32} />
          <span>Jiaqi Ye</span>
        </a>
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.contactFields}>
          <label>
            <span className={styles.srOnly}>Name</span>
            <input name="name" type="text" placeholder="Enter your name" required />
          </label>
          <label>
            <span className={styles.srOnly}>Email</span>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <label>
          <span className={styles.srOnly}>Message</span>
          <textarea
            name="message"
            rows={7}
            placeholder="Enter your message"
            required
          />
        </label>
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending" : "Submit now"}
          <Image
            src={rightArrowBlack}
            alt=""
            width={16}
            height={16}
            className={styles.buttonArrowDark}
          />
          <Image
            src={rightArrowWhite}
            alt=""
            width={16}
            height={16}
            className={styles.buttonArrowLight}
          />
        </button>
        <p className={styles.formStatus} aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
