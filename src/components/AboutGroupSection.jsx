"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutGroupSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: "#F7F6F2",
        color: "#151515",
        position: "relative",
        zIndex: 20,
        marginTop: "-64px",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        boxShadow: "0 -16px 40px rgba(0, 0, 0, 0.12)",
        borderTop: "1px solid rgba(255, 255, 255, 0.4)",
        padding: "135px 0 130px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1580px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* =================================================================== */}
        {/* TWO-COLUMN EDITORIAL SPLIT (Text & HQ Building Visual)              */}
        {/* Mobile: Image appears first (order: 1), Text appears second (order: 2) */}
        {/* =================================================================== */}
        <div className="about-split-grid">
          {/* 1. Content Column: Pure cohesive editorial narrative about Devaj Group */}
          <div className="about-content-col">
            {/* Eyebrow Pill */}
            <div className={`about-anim-item delay-1 ${inView ? "is-in-view" : ""}`}>
              <div className="about-eyebrow-pill">
                <span className="eyebrow-dot" />
                <span className="eyebrow-title">Devaj Group Identity</span>
                <span className="eyebrow-sep">/</span>
                <span className="eyebrow-sub">Who We Are</span>
              </div>
            </div>

            {/* Headline matching header typography */}
            <div className={`about-anim-item delay-2 ${inView ? "is-in-view" : ""}`}>
              <h2 className="about-headline">
                <span className="headline-serif-part">One group, two creative houses</span>
                <span className="headline-sans-part">
                  united under one cinematic vision<span className="headline-accent-dot">.</span>
                </span>
              </h2>
            </div>

            {/* Cohesive Narrative Paragraphs - Uniform Font Style & Size */}
            <div className="about-narrative-flow">
              {/* Paragraph 1: Foundation & Identity */}
              <div className={`about-anim-item delay-3 ${inView ? "is-in-view" : ""}`}>
                <p className="about-narrative-p">
                  <strong>Devaj Group</strong> is an independent media and cinematic production powerhouse headquartered in Cairo, Egypt. Built on the conviction that high-impact visual storytelling demands both relentless creative agility and uncompromising optical precision, the group unites two autonomous, specialized creative houses under a singular creative vision: <strong>Devaj Productions</strong> and <strong>Devaj Films</strong>.
                </p>
              </div>

              {/* Paragraph 2: Dual Specialization */}
              <div className={`about-anim-item delay-4 ${inView ? "is-in-view" : ""}`}>
                <p className="about-narrative-p">
                  Through <strong>Devaj Productions</strong>, the group engineers high-converting commercial reels, digital-first brand narratives, and dynamic visual campaigns tailored for modern enterprises seeking market velocity and audience resonance. In parallel, <strong>Devaj Films</strong> operates as an enterprise-grade cinematic house, directing large-scale television commercials, corporate documentaries, and narrative brand cinema with large-format optics and world-class direction.
                </p>
              </div>

              {/* Paragraph 3: Proprietary Cairo Infrastructure */}
              <div className={`about-anim-item delay-5 ${inView ? "is-in-view" : ""}`}>
                <p className="about-narrative-p">
                  Operating from our dedicated Cairo production campus, Devaj Group manages a comprehensive, proprietary in-house pipeline. From concept development and scriptwriting to dedicated soundstages, Arri and RED optical packages, advanced color grading suites, and spatial sound design, every frame is crafted and mastered under one roof without third-party dependencies.
                </p>
              </div>

              {/* Paragraph 4: Proven Market Trust */}
              <div className={`about-anim-item delay-6 ${inView ? "is-in-view" : ""}`}>
                <p className="about-narrative-p">
                  Trusted by premier regional and global brands—including <strong>Porsche Egypt</strong>, <strong>Clorox</strong>, and <strong>Eskan Misr</strong>—Devaj Group continues to set the benchmark for modern media production, delivering visual experiences that elevate brand value and captivate audiences across the Middle East.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`about-anim-item delay-7 ${inView ? "is-in-view" : ""}`}>
              <div className="about-cta-row">
                <a href="#houses" className="about-cta-primary">
                  <span>Explore The Two Houses</span>
                  <ArrowUpRight size={17} />
                </a>
                <a href="#offerings" className="about-cta-secondary">
                  <span>View Capabilities</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Visual Column: Devaj Headquarters Building (Aligned with Text Column) */}
          <div className={`about-visual-col ${inView ? "is-in-view" : ""}`}>
            <div className="about-image-card">
              <img
                src="/images/devaj-hq.jpg"
                alt="Devaj Group Official Corporate Headquarters in Cairo"
                className="about-studio-image"
              />
              <div className="about-image-overlay" />

              {/* Top Floating Badge */}
              <div className="about-logo-badge">
                <img
                  src="/images/devaj-logo.png"
                  alt="Devaj Group"
                  className="about-badge-logo-img"
                />
                <div className="badge-text-box">
                  <span className="badge-title">Devaj Group Headquarters</span>
                  <span className="badge-subtitle">Cairo Production Soundstages &amp; Creative Campus</span>
                </div>
              </div>

              {/* Bottom Floating Stats Tag */}
              <div className="about-bottom-tag">
                <div className="status-live-dot" />
                <div>
                  <span className="tag-headline">From First Frame to Final Cut</span>
                  <span className="tag-sub">Arri &amp; Red Optics // Dedicated Editing &amp; Foley Suites</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* COMPONENT STYLES                                                    */}
      {/* =================================================================== */}
      <style jsx>{`
        .about-split-grid {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          gap: 68px;
          align-items: center;
        }

        .about-content-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Staggered Scroll-Triggered Reveal Animations */
        .about-anim-item {
          opacity: 0;
          transform: translateY(30px);
          filter: blur(5px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform, filter;
        }

        .about-anim-item.is-in-view {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .delay-1 { transition-delay: 0.08s; }
        .delay-2 { transition-delay: 0.18s; }
        .delay-3 { transition-delay: 0.28s; }
        .delay-4 { transition-delay: 0.38s; }
        .delay-5 { transition-delay: 0.48s; }
        .delay-6 { transition-delay: 0.58s; }
        .delay-7 { transition-delay: 0.68s; }

        /* Right Column Image Card (Reveals in Sync with Text) */
        .about-visual-col {
          opacity: 0;
          transform: translateY(36px) scale(0.985);
          filter: blur(6px);
          transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.22s,
                      transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.22s,
                      filter 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.22s;
          will-change: opacity, transform, filter;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .about-visual-col.is-in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /* Eyebrow Pill */
        .about-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          margin-bottom: 22px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px rgba(230, 57, 70, 0.6);
        }

        .eyebrow-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #111111;
        }

        .eyebrow-sep {
          color: rgba(0, 0, 0, 0.25);
          font-size: 0.85rem;
        }

        .eyebrow-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #E63946;
        }

        /* Headline: Dual-Typography matching reference */
        .about-headline {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 0 0 26px 0;
          line-height: 1.12;
        }

        .headline-serif-part,
        .headline-sans-part {
          font-family: var(--font-serif);
          font-size: clamp(2.3rem, 3.5vw, 3.4rem);
          font-weight: 500;
          font-style: normal;
          letter-spacing: -0.025em;
          color: #111111;
        }

        .headline-accent-dot {
          color: #E63946;
        }

        /* Unified Narrative Typography - Same Font & Same Size */
        .about-narrative-flow {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .about-narrative-p {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(1rem, 1.08vw, 1.05rem);
          line-height: 1.8;
          color: rgba(21, 21, 21, 0.76);
          margin: 0;
          letter-spacing: -0.005em;
          font-weight: 400;
        }

        .about-narrative-p strong {
          color: #111111;
          font-weight: 700;
        }

        /* Action Buttons */
        .about-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-top: 6px;
        }

        .about-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 34px;
          border-radius: 9999px;
          background-color: #151515;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
        }

        .about-cta-primary:hover {
          background-color: #E63946;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.35);
        }

        .about-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 30px;
          border-radius: 9999px;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.14);
          color: #151515;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .about-cta-secondary:hover {
          background-color: #151515;
          color: #ffffff;
          border-color: #151515;
          transform: translateY(-2px);
        }

        /* Large Building Image Card - Perfectly Proportioned with Text Column */
        .about-image-card {
          position: relative;
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.16), 0 10px 30px rgba(0, 0, 0, 0.08);
          aspect-ratio: 4 / 3.8;
          min-height: 580px;
          width: 100%;
          background: #111111;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .about-studio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-image-card:hover .about-studio-image {
          transform: scale(1.03);
        }

        .about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.72) 100%
          );
        }

        .about-logo-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          border-radius: 9999px;
          background: rgba(18, 18, 18, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .about-badge-logo-img {
          height: 28px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .badge-text-box {
          display: flex;
          flex-direction: column;
        }

        .badge-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .badge-subtitle {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.68rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
        }

        .about-bottom-tag {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: 20px;
          background: rgba(18, 18, 18, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .status-live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 0 10px #25D366;
          flex-shrink: 0;
        }

        .tag-headline {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
          display: block;
        }

        .tag-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          display: block;
        }

        /* Responsive Breakpoints & Mobile Ordering */
        @media (max-width: 1024px) {
          .about-split-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          /* USER SPECIFIC REQUIREMENT: Image appears FIRST on phones, then Text! */
          .about-visual-col {
            order: 1;
            width: 100%;
          }

          .about-content-col {
            order: 2;
            width: 100%;
          }

          .about-image-card {
            min-height: 420px;
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 768px) {
          .headline-serif-part {
            font-size: 2rem;
          }
          .headline-sans-part {
            font-size: 1.9rem;
          }
          .about-logo-badge {
            top: 14px;
            left: 14px;
            padding: 8px 14px;
          }
          .about-bottom-tag {
            bottom: 14px;
            left: 14px;
            right: 14px;
            padding: 10px 14px;
          }
          .about-image-card {
            min-height: 320px;
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}
