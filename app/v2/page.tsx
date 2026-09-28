import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";

import profilePhoto from "@/assets/User.jpg";
import autoDataImage from "@/assets/autodata.png";
import bfuLogo from "@/assets/bfu.png";
import chi27Image from "@/assets/CHI27.jpg";
import downloadIcon from "@/assets/download-icon.png";
import flowEditImage from "@/assets/Flowedit.png";
import gitIcon from "@/assets/git.png";
import githubIcon from "@/assets/github.png";
import labAnimalLogo from "@/assets/lab animal logo.png";
import mitCsailLogo from "@/assets/mit_csail_logo.jpg";
import nejmAiImage from "@/assets/NEJM AI.jpg";
import t2vImage from "@/assets/T2V.png";
import donovansLogo from "@/assets/the_donovans_venom_501c3_logo.jpg";
import uwMadisonLogo from "@/assets/university_of_wisconsin_madison_logo.jpg";
import uwSurgeryLogo from "@/assets/wiscsurgery_logo.jpg";

import ContactForm from "./ContactForm";
import RevealObserver from "./RevealObserver";
import styles from "./v2.module.css";

export const metadata: Metadata = {
  title: "Jiaqi Ye | AI and Software Engineer",
  description:
    "Jiaqi Ye is an AI and software engineer building reliable agents, RAG systems, multimodal workflows, and full-stack products.",
};

type EntryProps = {
  title: string;
  meta: string;
  children: React.ReactNode;
  logo?: StaticImageData;
  logoFit?: "contain" | "cover";
  logoWide?: boolean;
  logoZoom?: boolean;
  logoUnoptimized?: boolean;
  links?: ReadonlyArray<{ label: string; href: string }>;
};

function Entry({
  title,
  meta,
  children,
  logo,
  logoFit = "contain",
  logoWide = false,
  logoZoom = false,
  logoUnoptimized = false,
  links = [],
}: EntryProps) {
  return (
    <article className={styles.entry}>
      {logo ? (
        <div
          className={`${styles.entryLogo} ${
            logoWide ? styles.entryLogoWide : ""
          }`}
          aria-hidden="true"
        >
          <Image
            src={logo}
            alt=""
            width={logoZoom ? 112 : logoWide ? 136 : 56}
            height={logoZoom ? 112 : logoWide ? 72 : 56}
            unoptimized={logoZoom || logoUnoptimized}
            className={`${
              logoFit === "cover" ? styles.logoCover : styles.logoContain
            } ${logoZoom ? styles.logoZoom : ""}`}
          />
        </div>
      ) : null}
      <div className={styles.entryBody}>
        <div className={styles.entryHeading}>
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
        <div className={styles.entryContent}>{children}</div>
        {links.length > 0 ? (
          <div className={styles.entryLinks} aria-label={`${title} links`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function V2Page() {
  return (
    <main className={styles.page} data-reveal-root>
      <RevealObserver />
      <div className={styles.layout}>
        <aside
          className={styles.profile}
          aria-label="Jiaqi Ye profile"
          data-reveal="left"
        >
          <Image
            src={profilePhoto}
            alt="Jiaqi Ye"
            className={styles.profilePhoto}
            priority
            sizes="(max-width: 760px) 132px, 176px"
          />

          <h1>Jiaqi Ye</h1>
          <p className={styles.school}>B.S. Computer Science</p>
          <p className={styles.institution}>University of Wisconsin–Madison</p>
          <a className={styles.profileEmail} href="mailto:jye224@wisc.edu">
            jye224@wisc.edu
          </a>

          <nav className={styles.socialLinks} aria-label="Profile links">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View CV"
            >
              <span className={styles.cvLink}>CV</span>
            </a>
            <a
              href="https://github.com/Jiaqi-Ye"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Image src={githubIcon} alt="" width={28} height={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jiaqi-ye-40a8b635a"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
              </svg>
            </a>
          </nav>
        </aside>

        <div className={styles.content}>
          <section
            className={styles.section}
            aria-labelledby="about-heading"
            data-reveal="up"
          >
            <h2 id="about-heading">About Me</h2>
            <p>
              I am a Computer Science undergraduate at UW–Madison and an AI and
              software engineer focused on turning LLM capabilities into
              reliable products. I build agentic systems, RAG pipelines,
              multimodal workflows, and full-stack applications—from retrieval
              and evaluation to APIs, interfaces, and deployment.
            </p>
            <p>
              Recent work includes a clinical education assistant for UW
              Surgery, an award-winning lab copilot, and engineering analytics
              tooling. My earlier background in Digital Media Art informs how I
              design clear, human-centered interfaces for complex AI systems.
            </p>
            <div className={styles.introActions}>
              <a
                className={styles.cvButton}
                href="/CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                My CV
                <Image src={downloadIcon} alt="" width={16} height={16} />
              </a>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="interests-heading"
          >
            <h2 id="interests-heading">Engineering Focus</h2>
            <p>
              I focus on shipping AI systems that remain useful beyond a demo:
              grounded in real data, measurable, secure, and designed for human
              review.
            </p>
            <ul className={styles.themes}>
              <li>
                <strong>Applied AI and Agents.</strong> Tool-using agents, RAG,
                multimodal inputs, and workflow automation for real operational
                tasks.
              </li>
              <li>
                <strong>AI Reliability.</strong> Evaluation pipelines,
                citation grounding, guardrails, structured outputs, and
                human-in-the-loop controls.
              </li>
              <li>
                <strong>Full-Stack Product Engineering.</strong> APIs, data
                systems, responsive interfaces, testing, and deployment around
                AI-powered features.
              </li>
            </ul>
          </section>

          <section
            className={styles.section}
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading">Experience</h2>
            <div className={styles.entries}>
              <Entry
                title="AI Engineer, UW Surgery"
                meta="Jan. 2026 – Present"
                logo={uwSurgeryLogo}
                logoFit="cover"
                links={[
                  {
                    label: "Chatbot",
                    href: "https://cs620-uw-surgery.vercel.app",
                  },
                ]}
              >
                <ul>
                  <li>
                    Engineered a guideline-grounded RAG product for patient
                    education, indexing 127 clinical pages into 289
                    citation-backed chunks and improving retrieval accuracy by
                    15%.
                  </li>
                  <li>
                    Built a five-model evaluation benchmark and a multi-agent
                    safety pipeline covering emergency triage, intent analysis,
                    prompt-injection defense, schema validation, and citation
                    grounding.
                  </li>
                </ul>
              </Entry>
              <Entry
                title="Full-Stack Developer, The Donovan’s Venom"
                meta="Apr. 2025 – Aug. 2025"
                logo={donovansLogo}
                logoFit="cover"
                links={[
                  {
                    label: "Website",
                    href: "https://the-donovans-piano-room-hazel.vercel.app/",
                  },
                ]}
              >
                <ul>
                  <li>
                    Delivered authentication, cart, and checkout workflows across
                    a Next.js and TypeScript frontend with a Bun, Elysia, and
                    PostgreSQL backend serving approximately 1,000 users.
                  </li>
                  <li>
                    Added PayPal and Venmo checkout flows, reduced transaction
                    errors by 25%, and improved responsive page load time by 30%.
                  </li>
                </ul>
              </Entry>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="research-heading"
          >
            <h2 id="research-heading">Selected Research</h2>
            <div className={styles.entries}>
              <Entry
                title="Would You Let Your Proxy Say That?"
                meta="Northeastern Human-Centered AI Lab · Jul. 2026 – Sep. 2026"
                logo={chi27Image}
                logoFit="cover"
                logoUnoptimized
              >
                <p>
                  Translated findings from 12 storyboard-based interviews into
                  design requirements for controllable meeting agents, including
                  when systems should relay, escalate, or return control to a
                  user.
                </p>
              </Entry>
              <Entry
                title="Data-Synth AutoResearch"
                meta="Sprocket Lab, UW–Madison · Apr. 2026 – Aug. 2026"
                logo={autoDataImage}
                logoFit="cover"
                logoUnoptimized
              >
                <p>
                  Automated an end-to-end synthetic-data pipeline for MedMCQA,
                  covering generation, verification, fine-tuning, and held-out
                  evaluation. Filtering and repair improved model performance by
                  up to 2.2 percentage points.
                </p>
              </Entry>
              <Entry
                title="FlowEdit Bridge — Controllable Image Editing"
                meta="UW–Madison · Jan. 2026 – Aug. 2026"
                logo={flowEditImage}
                logoFit="cover"
              >
                <p>
                  Implemented bridge-based editing trajectories, directional
                  correction, and heatmap-guided refinement. A 250-pair evaluation
                  improved source preservation by 7.1% and CLIP alignment by
                  1.51% over the FlowEdit baseline.
                </p>
              </Entry>
              <Entry
                title="Controllable T2V Vector Animation"
                meta="UW–Madison · Jun. 2025 – Dec. 2025"
                logo={t2vImage}
                logoFit="cover"
              >
                <p>
                  Built a controllable video-generation workflow by fine-tuning
                  Wan 2.1 with DiffSynth-Studio, adding layer-wise control over
                  motion, visual style, and structural consistency.
                </p>
              </Entry>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="projects-heading"
          >
            <h2 id="projects-heading">Selected Projects</h2>
            <div className={styles.entries}>
              <Entry
                title="Labfy"
                meta="First Prize · MIT CSAIL Agentic AI Hackathon · Apr. 2026"
                logo={mitCsailLogo}
                logoFit="cover"
                links={[
                  {
                    label: "Demo",
                    href: "https://www.youtube.com/watch?v=dTDRoPqbu7U",
                  },
                ]}
              >
                <p>
                  Built a multimodal lab copilot connecting smart-glasses voice
                  and image capture to a FastAPI agent backend with 19 tools for
                  procurement, grants, lab notes, literature, Slack context, and
                  manuscript drafting.
                </p>
                <p className={styles.stack}>
                  Python · FastAPI · multimodal AI · tool calling · Chroma · HITL
                </p>
              </Entry>
              <Entry
                title="GitLab Engineering & Security Analytics Platform"
                meta="Sep. 2026 – Present"
                logo={gitIcon}
                links={[
                  {
                    label: "Code",
                    href: "https://github.com/Jiaqi-Ye/GitLab-Engineering-Analytics-Platform",
                  },
                ]}
              >
                <p>
                  Built a full-stack analytics platform covering six GitLab data
                  domains and seven-plus engineering and security KPIs, with
                  grounded GPT insights for CI, delivery, vulnerability aging,
                  and remediation bottlenecks.
                </p>
                <p className={styles.stack}>
                  FastAPI · React · MySQL · GitLab API · LLM insights
                </p>
              </Entry>
              <Entry
                title="Lab Animal Procurement Agent"
                meta="Mar. 2026 – May 2026"
                logo={labAnimalLogo}
                logoZoom
                links={[
                  {
                    label: "Demo",
                    href: "https://bioshopping-agent.vercel.app/",
                  },
                ]}
              >
                <p>
                  Built an AI procurement workflow for strain selection, cage
                  constraints, vendor comparison, SOP-grounded questions, and
                  human-reviewed RFQ and order drafting.
                </p>
                <p className={styles.stack}>
                  RAG · FAISS · FastAPI · Docker Compose · automated testing
                </p>
              </Entry>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="publications-heading"
          >
            <h2 id="publications-heading">Publications</h2>
            <div className={styles.publications}>
              <article className={styles.publication}>
                <div className={styles.publicationImage}>
                  <Image
                    src={chi27Image}
                    alt="Visual summary of the AI meeting proxy delegation study"
                    fill
                    unoptimized
                    sizes="(max-width: 560px) calc(100vw - 32px), 210px"
                  />
                </div>
                <div className={styles.publicationBody}>
                  <h3>
                    Would You Let Your Proxy Say That? Act Type, Context, and
                    the Boundary of AI Delegation in Team Meetings
                  </h3>
                  <p>
                    Jingfei Huang, Yaning Li, Yutong Chen, <b>Jiaqi Ye</b>, Rui
                    Sheng, Xuhai “Orson” Xu, Dakuo Wang, and Bingsheng Yao.
                  </p>
                  <em>Manuscript submitted to CHI 2027, under review.</em>
                </div>
              </article>
              <article className={styles.publication}>
                <div className={styles.publicationImage}>
                  <Image
                    src={nejmAiImage}
                    alt="Architecture of the adrenal nodule educational RAG chatbot"
                    fill
                    unoptimized
                    sizes="(max-width: 560px) calc(100vw - 32px), 210px"
                  />
                </div>
                <div className={styles.publicationBody}>
                  <h3>
                    Development and Preliminary Evaluation of a
                    Retrieval-Augmented Educational Chatbot for Adrenal Nodule
                    Clinic Navigation
                  </h3>
                  <p>
                    <b>Jiaqi Ye</b>, Alberto García Chávez, Mason Maeder,
                    Alexandra Helbing, and Alexander Chiu.
                  </p>
                  <em>Manuscript in preparation for NEJM AI, 2026.</em>
                </div>
              </article>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="news-heading"
          >
            <h2 id="news-heading">News</h2>
            <ul className={styles.news}>
              <li>
                <strong>[Sep. 2026]</strong> Submitted our work on AI
                communication proxies to CHI 2027.
              </li>
              <li>
                <strong>[Apr. 2026]</strong> Won First Prize at the MIT CSAIL
                Agentic AI Hackathon with Labfy 🎉.
              </li>
              <li>
                <strong>[Jan. 2026]</strong> Joined UW Surgery as an AI Engineer
                Intern.
              </li>
            </ul>
          </section>

          <section
            className={styles.section}
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading">Education</h2>
            <div className={styles.entries}>
              <Entry
                title="University of Wisconsin–Madison"
                meta="Jan. 2024 – Expected Dec. 2026"
                logo={uwMadisonLogo}
                logoFit="cover"
              >
                <p>
                  B.S. Computer Science · GPA 3.96/4.0 · Dean&apos;s List for six
                  consecutive terms
                </p>
              </Entry>
              <Entry
                title="Beijing Forestry University"
                meta="Sep. 2021 – Dec. 2023"
                logo={bfuLogo}
                logoFit="cover"
              >
                <p>
                  Undergraduate study in Digital Media Art · GPA 3.8/4.0 ·
                  Academic Scholarships · College Outstanding Student Leader
                </p>
              </Entry>
            </div>
          </section>

          <ContactForm />

          <footer className={styles.footer}>
            <p>© 2026 Jiaqi Ye</p>
            <a
              href="https://www.linkedin.com/in/jiaqi-ye-40a8b635a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
