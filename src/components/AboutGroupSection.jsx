"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Film, Clapperboard, Award, Sparkles, CheckCircle2 } from "lucide-react";

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
        rootMargin: "0px 0px -40px 0px",
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
        boxShadow: "0 -35px 80px rgba(0, 0, 0, 0.45), 0 -12px 30px rgba(0, 0, 0, 0.25)",
        borderTop: "1px solid rgba(255, 255, 255, 0.6)",
        padding: "130px 0 125px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* =================================================================== */}
        {/* TWO-COLUMN EDITORIAL SPLIT (Who We Are Narrative + Studio Visual)  */}
        {/* =================================================================== */}
        <div className="about-split-grid">
          {/* Left Column: Brand Story & Manifesto (Staggered Line-by-Line Reveal) */}
          <div className="about-content-col">
            {/* Line 1: Eyebrow Pill */}
            <div className={`about-anim-item delay-1 ${inView ? "is-in-view" : ""}`}>
              <div className="about-eyebrow-pill">
                <span className="eyebrow-dot" />
                <span className="eyebrow-title">Devaj Group Identity</span>
                <span className="eyebrow-sep">/</span>
                <span className="eyebrow-sub">Who We Are</span>
              </div>
            </div>

            {/* Line 2: Editorial Serif Headline */}
            <div className={`about-anim-item delay-2 ${inView ? "is-in-view" : ""}`}>
              <h2 className="about-headline">
                One group, two creative houses united under one cinematic vision
                <span className="headline-accent-dot">.</span>
              </h2>
            </div>

            {/* Line 3: Lead Paragraph with Custom Typography Badges */}
            <div className={`about-anim-item delay-3 ${inView ? "is-in-view" : ""}`}>
              <p className="about-lead-paragraph">
                We are <strong className="brand-accent-name">Devaj Group</strong> — an independent media production group built around two autonomous, highly specialized creative houses: <span className="house-inline-tag productions-tag">Devaj Productions</span> and <span className="house-inline-tag films-tag">Devaj Films</span>. Together, we cover the complete journey of visual content from the first frame of an idea to the final cut.
              </p>
            </div>

            {/* Line 4: Body Narrative with Left Accent Border */}
            <div className={`about-anim-item delay-4 ${inView ? "is-in-view" : ""}`}>
              <div className="about-editorial-callout">
                <p className="about-body-paragraph">
                  Whether engineering agile, conversion-driven digital commercials for modern brands or directing large-scale corporate documentaries and TVCs for enterprise institutions, our teams combine cinematic artistry with high-speed commercial execution.
                </p>
              </div>
            </div>

            {/* Three Brand Pillars - Staggered Lines 5, 6, 7 */}
            <div className="about-pillars-grid">
              {/* Pillar 01 */}
              <div className={`about-anim-item delay-5 ${inView ? "is-in-view" : ""}`}>
                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <Film size={20} strokeWidth={2.2} />
                  </div>
                  <div className="pillar-details">
                    <div className="pillar-header-row">
                      <h4 className="pillar-title">Two Specialized Houses</h4>
                      <span className="pillar-badge-tag">Dual Creative Engine</span>
                    </div>
                    <p className="pillar-desc">
                      <strong className="desc-highlight">Devaj Productions</strong> for agile commercial reels &amp; <strong className="desc-highlight">Devaj Films</strong> for enterprise cinema.
                    </p>
                  </div>
                  <div className="pillar-hover-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className={`about-anim-item delay-6 ${inView ? "is-in-view" : ""}`}>
                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <Clapperboard size={20} strokeWidth={2.2} />
                  </div>
                  <div className="pillar-details">
                    <div className="pillar-header-row">
                      <h4 className="pillar-title">End-to-End Delivery</h4>
                      <span className="pillar-badge-tag">Full In-House Pipeline</span>
                    </div>
                    <p className="pillar-desc">
                      Complete pipeline: scriptwriting, casting, multi-cam soundstages, master color grading &amp; audio engineering.
                    </p>
                  </div>
                  <div className="pillar-hover-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className={`about-anim-item delay-7 ${inView ? "is-in-view" : ""}`}>
                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <Award size={20} strokeWidth={2.2} />
                  </div>
                  <div className="pillar-details">
                    <div className="pillar-header-row">
                      <h4 className="pillar-title">Proven Market Trust</h4>
                      <span className="pillar-badge-tag">Tier-1 Authority</span>
                    </div>
                    <p className="pillar-desc">
                      Trusted partner to industry leaders including <strong>Porsche Egypt</strong>, <strong>Clorox</strong>, and <strong>Eskan Misr</strong>.
                    </p>
                  </div>
                  <div className="pillar-hover-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Line 8: CTA Action Buttons */}
            <div className={`about-anim-item delay-8 ${inView ? "is-in-view" : ""}`}>
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

          {/* Right Column: Studio Visual Card (Slides In Smoothly from Right) */}
          <div className={`about-visual-col ${inView ? "is-in-view" : ""}`}>
            <div className="about-image-card">
              <img
                src="/images/devaj-studio.jpg"
                alt="Devaj Group Film Production Studio in Cairo"
                className="about-studio-image"
              />
              <div className="about-image-overlay" />

              {/* Floating Top Frosted Badge with Transparent Logo */}
              <div className="about-logo-badge">
                <img
                  src="/images/devaj-logo.png"
                  alt="Devaj Group"
                  className="about-badge-logo-img"
                />
                <div className="badge-text-box">
                  <span className="badge-title">Devaj Group HQ</span>
                  <span className="badge-subtitle">Cairo Production Soundstage</span>
                </div>
              </div>

              {/* Bottom Floating Stats Tag */}
              <div className="about-bottom-tag">
                <div className="status-live-dot" />
                <div>
                  <span className="tag-headline">From First Frame to Final Cut</span>
                  <span className="tag-sub">Arri &amp; Red Cinema Optics // Multi-Cam Soundstages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* COMPONENT STYLES & STAGGERED SCROLL ANIMATIONS                      */}
      {/* =================================================================== */}
      <style jsx>{`
        .about-split-grid {
          display: grid;
          grid-template-columns: 1.18fr 0.92fr;
          gap: 72px;
          align-items: center;
        }

        /* Staggered Scroll Reveal System (Text line by line from Left, Image from Right) */
        .about-anim-item {
          opacity: 0;
          transform: translateX(-48px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .about-anim-item.is-in-view {
          opacity: 1;
          transform: translateX(0);
        }

        .delay-1 { transition-delay: 0.08s; }
        .delay-2 { transition-delay: 0.22s; }
        .delay-3 { transition-delay: 0.36s; }
        .delay-4 { transition-delay: 0.5s; }
        .delay-5 { transition-delay: 0.65s; }
        .delay-6 { transition-delay: 0.78s; }
        .delay-7 { transition-delay: 0.92s; }
        .delay-8 { transition-delay: 1.06s; }

        /* Right Column Image Slides In From Right */
        .about-visual-col {
          opacity: 0;
          transform: translateX(64px);
          transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s,
                      transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
          will-change: opacity, transform;
        }

        .about-visual-col.is-in-view {
          opacity: 1;
          transform: translateX(0);
        }

        /* Eyebrow Pill Tag */
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

        /* Headline Styling */
        .about-headline {
          font-family: var(--font-serif);
          font-size: clamp(2.3rem, 3.8vw, 3.6rem);
          line-height: 1.14;
          letter-spacing: -0.025em;
          color: #111111;
          font-weight: 700;
          font-style: italic;
          margin: 0 0 24px 0;
        }

        .headline-accent-dot {
          color: #E63946;
          font-style: normal;
        }

        /* Lead Paragraph */
        .about-lead-paragraph {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(1.06rem, 1.2vw, 1.18rem);
          line-height: 1.72;
          color: #242424;
          margin-bottom: 22px;
        }

        .brand-accent-name {
          color: #111111;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .house-inline-tag {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95em;
          line-height: 1.4;
          vertical-align: baseline;
          letter-spacing: -0.01em;
          transition: all 0.2s ease;
        }

        .productions-tag {
          background: rgba(230, 57, 70, 0.08);
          color: #C92A37;
          border: 1px solid rgba(230, 57, 70, 0.22);
        }

        .films-tag {
          background: rgba(17, 17, 17, 0.06);
          color: #111111;
          border: 1px solid rgba(17, 17, 17, 0.16);
        }

        /* Editorial Quote Bar */
        .about-editorial-callout {
          position: relative;
          padding: 4px 0 4px 20px;
          border-left: 3px solid #E63946;
          margin-bottom: 34px;
        }

        .about-body-paragraph {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(0.96rem, 1.05vw, 1.04rem);
          line-height: 1.68;
          color: rgba(21, 21, 21, 0.72);
          margin: 0;
        }

        /* Three Brand Pillars - Refined Luxury Cards */
        .about-pillars-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 38px;
        }

        .about-pillar-card {
          display: flex;
          align-items: center;
          gap: 18px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          padding: 18px 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .about-pillar-card:hover {
          transform: translateX(8px);
          border-color: rgba(230, 57, 70, 0.4);
          box-shadow: 0 12px 32px rgba(230, 57, 70, 0.08), 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        /* High-End Icon Box */
        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #151515;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .about-pillar-card:hover .pillar-icon-box {
          background: #E63946;
          color: #ffffff;
          transform: scale(1.06);
          box-shadow: 0 8px 22px rgba(230, 57, 70, 0.35);
        }

        .pillar-details {
          flex: 1;
        }

        .pillar-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }

        .pillar-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.02rem;
          font-weight: 800;
          letter-spacing: -0.015em;
          color: #111111;
          margin: 0;
        }

        .pillar-badge-tag {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #E63946;
          background: rgba(230, 57, 70, 0.08);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .pillar-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(21, 21, 21, 0.65);
          margin: 0;
        }

        .desc-highlight {
          color: #111111;
          font-weight: 700;
        }

        .pillar-hover-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.04);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          opacity: 0.5;
        }

        .about-pillar-card:hover .pillar-hover-arrow {
          background: #151515;
          color: #ffffff;
          opacity: 1;
          transform: translateX(2px) translateY(-2px);
        }

        /* Action Buttons */
        .about-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
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

        /* Right Column Visual Card */
        .about-image-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(0, 0, 0, 0.08);
          aspect-ratio: 4 / 3.4;
          background: #ffffff;
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
          transform: scale(1.04);
        }

        .about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.25) 0%,
            transparent 45%,
            rgba(0, 0, 0, 0.75) 100%
          );
        }

        .about-logo-badge {
          position: absolute;
          top: 22px;
          left: 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          border-radius: 9999px;
          background: rgba(18, 18, 18, 0.7);
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
          bottom: 22px;
          left: 22px;
          right: 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: 20px;
          background: rgba(18, 18, 18, 0.8);
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

        @media (max-width: 1024px) {
          .about-split-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-image-card {
            max-width: 600px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .about-headline {
            font-size: 2.1rem;
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
          .about-pillar-card {
            padding: 14px 18px;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
