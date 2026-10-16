"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Play, X, Film, Clapperboard, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

export default function ClientsPartnersSection() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Close modal on ESC key and handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedBrand(null);
      }
    };
    if (selectedBrand) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBrand]);

  // 5 Featured Brands representing Devaj Group's core industries
  const featuredBrands = [
    {
      id: "porsche",
      name: "Porsche Egypt",
      tagline: "First Official Partner",
      isFirstPartner: true,
      sector: "Automotive & Luxury",
      house: "Devaj Films",
      iconHouse: Film,
      projectTitle: "Porsche Egypt — The Electric Pulse & 911 Heritage",
      projectScope: "High-speed automotive cinematography, dynamic tracking vehicle shoots, TVC launch film, and sound design celebrating engineering precision.",
      image: "/images/clients/porsche-egypt.jpg",
      videoUrl: "/videos/hero-reel.mp4",
      deliverables: [
        "60s Cinema Launch Film (Arri LF & Master Anamorphic)",
        "Precision Russian Arm dynamic vehicle tracking at twilight",
        "4x 9:16 High-Velocity Instagram Reels",
        "Master DTS Sound Mixing & Color Grading in ACES",
      ],
      highlight: "Marked the official launch campaign for Porsche's next-generation EV presence in Egypt.",
    },
    {
      id: "clorox",
      name: "Clorox",
      tagline: "Global FMCG Commercial",
      isFirstPartner: false,
      sector: "FMCG & Consumer Goods",
      house: "Devaj Productions",
      iconHouse: Clapperboard,
      projectTitle: "Clorox — Pure Impact Commercial Campaign",
      projectScope: "High-speed phantom macro camera captures, dynamic liquid motion, visual effects, and prime-time broadcast television commercials.",
      image: "/images/clients/clorox-commercial.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      deliverables: [
        "30s Prime-Time Broadcast TV Commercial",
        "High-Speed Phantom Flex 4K Liquid Macro Filming",
        "VFX Cleanups, 3D Product Renders & Motion Graphics",
        "Multi-Dialect Master Voiceover Recording & Studio Audio",
      ],
      highlight: "High-retention commercial campaign broadcasted across major television networks.",
    },
    {
      id: "eskan-misr",
      name: "Eskan Misr",
      tagline: "National Real Estate Developer",
      isFirstPartner: false,
      sector: "Real Estate & Mega Projects",
      house: "Devaj Films",
      iconHouse: Film,
      projectTitle: "Eskan Misr — Building Nations Enterprise Documentary",
      projectScope: "Comprehensive corporate documentary film showcasing vast architectural scale, heavy construction engineering, and future community living.",
      image: "/images/clients/eskan-misr.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      deliverables: [
        "90s Corporate Enterprise Documentary & Investor Film",
        "Licensed 5.4K Heavy-Lift Drone Aerial Cinematography",
        "Time-lapse infrastructure motion over 12 project sites",
        "Multi-speaker executive interviews in studio lighting",
      ],
      highlight: "Premiered at Egypt's premier annual real estate development summits.",
    },
    {
      id: "the-capital",
      name: "The Capital",
      tagline: "Urban Development & Skyline",
      isFirstPartner: false,
      sector: "Architecture & Urban Planning",
      house: "Devaj Films",
      iconHouse: Film,
      projectTitle: "The Capital — The New Urban Horizon",
      projectScope: "Architectural visual story capturing iconic skyscrapers, interior design aesthetics, and the evolution of modern metropolitan living.",
      image: "/images/clients/the-capital.jpg",
      videoUrl: "/videos/sample-reel-1.mp4",
      deliverables: [
        "Cinematic Architectural Showcase Film",
        "Twilight Golden Hour Lighting & Steadicam Walkthroughs",
        "3D Architectural Pre-visualization Integration",
        "Executive Social Campaign for High-Net-Worth Buyers",
      ],
      highlight: "Targeted digital and cinematic launch for flagship residential and business towers.",
    },
    {
      id: "elghandour",
      name: "El-Ghandour Medical",
      tagline: "Healthcare Group",
      isFirstPartner: false,
      sector: "Healthcare & Medicine",
      house: "Devaj Productions",
      iconHouse: Clapperboard,
      projectTitle: "El-Ghandour Medical Group — Compassion in Every Frame",
      projectScope: "Human-centric healthcare storytelling, sterile surgical suite filming, patient care narratives, and doctor profile videos.",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      deliverables: [
        "Brand Identity & Corporate Hospital Film",
        "Medical Operating Room Safe-Capture Cinematography",
        "Patient Testimonial Docu-Stories",
        "Full Social Media Video Suite for Clinics & Specialists",
      ],
      highlight: "Positioned the medical group as a premier trusted healthcare destination.",
    },
  ];

  return (
    <section
      id="clients"
      style={{
        backgroundColor: "#F7F6F2",
        color: "#151515",
        position: "relative",
        zIndex: 28,
        padding: "110px 0 130px",
        overflow: "hidden",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
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
        {/* 1. EDITORIAL SECTION HEADER (White Studio Aesthetic)                */}
        {/* =================================================================== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "28px",
            marginBottom: "56px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-jakarta), var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#E63946",
                marginBottom: "14px",
              }}
            >
              <span>Devaj Group Proven Impact</span>
              <span style={{ fontSize: "1.1rem" }}>•</span>
              <span style={{ color: "rgba(21, 21, 21, 0.5)", fontWeight: 600 }}>Trusted By Industry Leaders</span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#111111",
                fontWeight: 700,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Brands We Have Delivered For
              <span style={{ color: "#E63946", fontStyle: "normal" }}>.</span>
            </h2>
          </div>

          <div style={{ maxWidth: "520px" }}>
            <p
              style={{
                fontFamily: "var(--font-jakarta), var(--font-sans)",
                fontSize: "clamp(1rem, 1.18vw, 1.14rem)",
                lineHeight: 1.65,
                color: "rgba(21, 21, 21, 0.65)",
                margin: 0,
              }}
            >
              From automotive icons to national developers and healthcare institutions. Click any brand to explore the campaigns we engineered.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. COMPACT VISUAL BRAND CARDS GRID (Clean White Theme)              */}
        {/* =================================================================== */}
        <div className="brand-cards-grid">
          {featuredBrands.map((brand) => (
            <button
              type="button"
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className={`brand-visual-card ${brand.isFirstPartner ? "first-partner-card" : ""}`}
              aria-label={`View project details for ${brand.name}`}
            >
              {/* Image Container with Inner Zoom on Hover */}
              <div className="brand-image-wrapper">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="brand-card-img"
                  loading="lazy"
                />
                <div className="brand-card-gradient" />
              </div>

              {/* Top Badges */}
              <div className="brand-card-top">
                {brand.isFirstPartner ? (
                  <span className="first-partner-badge">
                    <Sparkles size={11} />
                    <span>1st Partner</span>
                  </span>
                ) : (
                  <span className="brand-sector-pill">{brand.sector.split("&")[0].trim()}</span>
                )}

                <div className="card-action-icon">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="brand-card-bottom">
                <span className="brand-house-tag">
                  {brand.house === "Devaj Films" ? (
                    <Film size={12} style={{ display: "inline-block", marginRight: "5px" }} />
                  ) : (
                    <Clapperboard size={12} style={{ display: "inline-block", marginRight: "5px" }} />
                  )}
                  <span>{brand.house}</span>
                </span>
                <h3 className="brand-title-text">{brand.name}</h3>
                <span className="brand-click-hint">
                  <span>View Project</span>
                  <span style={{ fontSize: "1.05rem" }}>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. INTERACTIVE "WORK SCREEN" MODAL (The Project Showcase Screen)    */}
      {/* =================================================================== */}
      {selectedBrand && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setSelectedBrand(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="brand-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="modal-close-button"
              onClick={() => setSelectedBrand(null)}
              aria-label="Close project showcase"
            >
              <X size={20} />
            </button>

            {/* Modal Grid: Visual Screen on Left, Details on Right */}
            <div className="brand-modal-grid">
              {/* Media Player Showcase */}
              <div className="modal-media-col">
                <div className="modal-video-frame">
                  <img
                    src={selectedBrand.image}
                    alt={selectedBrand.projectTitle}
                    className="modal-hero-image"
                  />
                  <div className="modal-video-overlay" />

                  {/* Play badge */}
                  <div className="modal-play-badge">
                    <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: "3px" }} />
                  </div>

                  {/* Floating Brand Badge */}
                  <div className="modal-media-badge">
                    <span className="modal-badge-house">
                      {selectedBrand.house === "Devaj Films" ? (
                        <Film size={13} style={{ display: "inline-block", marginRight: "6px" }} />
                      ) : (
                        <Clapperboard size={13} style={{ display: "inline-block", marginRight: "6px" }} />
                      )}
                      <span>{selectedBrand.house}</span>
                    </span>
                    <span className="modal-badge-sector">{selectedBrand.sector}</span>
                  </div>
                </div>

                <div className="modal-media-caption">
                  <span className="caption-dot" />
                  <span>Cinematic production master delivered by Devaj Group</span>
                </div>
              </div>

              {/* Project Story & Deliverables */}
              <div className="modal-info-col">
                <div className="modal-header-meta">
                  <span className="brand-tagline-text">{selectedBrand.tagline}</span>
                  <h3 className="modal-brand-title">{selectedBrand.name}</h3>
                  <h4 className="modal-project-headline">{selectedBrand.projectTitle}</h4>
                </div>

                <p className="modal-project-scope">{selectedBrand.projectScope}</p>

                {/* Highlight callout box */}
                <div className="modal-highlight-box">
                  <span className="highlight-lead">Campaign Impact: </span>
                  <span>{selectedBrand.highlight}</span>
                </div>

                {/* Deliverables Checklist */}
                <div className="modal-deliverables-section">
                  <p className="deliverables-title">Scope & Master Deliverables:</p>
                  <ul className="deliverables-list">
                    {selectedBrand.deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color="#E63946" className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="modal-action-row">
                  <a
                    href={`https://wa.me/201014049339?text=${encodeURIComponent(
                      `Hello Devaj Group, I saw your work for ${selectedBrand.name} and would like to inquire about a similar production for our company.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta-primary"
                  >
                    <MessageSquare size={16} />
                    <span>Inquire About Similar Production</span>
                    <span>→</span>
                  </a>

                  <a
                    href="#connect"
                    onClick={() => setSelectedBrand(null)}
                    className="modal-cta-secondary"
                  >
                    <span>General Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. COMPONENT STYLES & LUXURY MICRO-INTERACTIONS                     */}
      {/* =================================================================== */}
      <style jsx>{`
        /* 5-Column Responsive Cards Grid */
        .brand-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 22px;
        }

        /* Compact Visual Card */
        .brand-visual-card {
          position: relative;
          height: 310px;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          padding: 0;
          outline: none;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .brand-visual-card.first-partner-card {
          border-color: rgba(230, 57, 70, 0.3);
        }

        /* Background Image with Zoom on Hover */
        .brand-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .brand-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
          filter: brightness(0.92) contrast(1.04);
        }

        .brand-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0.05) 35%,
            rgba(10, 10, 10, 0.4) 60%,
            rgba(10, 10, 10, 0.95) 100%
          );
          transition: opacity 0.35s ease;
        }

        /* Top Action & Badge Row */
        .brand-card-top {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 18px;
          width: 100%;
        }

        .first-partner-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 11px;
          border-radius: 9999px;
          background: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.45);
        }

        .brand-sector-pill {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(15, 15, 15, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .card-action-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(15, 15, 15, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        /* Bottom Details */
        .brand-card-bottom {
          position: relative;
          z-index: 3;
          padding: 18px 18px 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .brand-house-tag {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #E63946;
          display: flex;
          align-items: center;
        }

        .brand-title-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .brand-click-hint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.75);
          margin-top: 6px;
          transition: all 0.3s ease;
        }

        /* Hover Physics */
        .brand-visual-card:hover {
          transform: translateY(-8px);
          border-color: #E63946;
          box-shadow: 0 22px 46px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(230, 57, 70, 0.35);
        }

        .brand-visual-card:hover .brand-card-img {
          transform: scale(1.08);
          filter: brightness(1) contrast(1.05);
        }

        .brand-visual-card:hover .card-action-icon {
          background: #E63946;
          border-color: #E63946;
          transform: translate(2px, -2px);
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.5);
        }

        .brand-visual-card:hover .brand-click-hint {
          color: #ffffff;
          transform: translateX(4px);
        }

        /* Modal Styles */
        .brand-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s ease;
        }

        .brand-modal-container {
          position: relative;
          background: #181818;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          max-width: 1060px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), 0 0 40px rgba(230, 57, 70, 0.15);
          padding: 44px;
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close-button {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #eae8e4;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 10;
        }

        .modal-close-button:hover {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .brand-modal-grid {
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 40px;
          align-items: start;
        }

        .modal-media-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-video-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          background-color: #0c0c0c;
        }

        .modal-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
        }

        .modal-play-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(230, 57, 70, 0.88);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(230, 57, 70, 0.6);
          transition: transform 0.3s ease;
        }

        .modal-video-frame:hover .modal-play-badge {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .modal-media-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .modal-badge-house {
          display: inline-flex;
          align-items: center;
          background: rgba(25, 25, 25, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 5px 12px;
          border-radius: 9999px;
          color: #eae8e4;
        }

        .modal-badge-sector {
          color: rgba(234, 232, 228, 0.7);
          background: rgba(0, 0, 0, 0.6);
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .modal-media-caption {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(234, 232, 228, 0.5);
          font-family: var(--font-jakarta), var(--font-sans);
        }

        .caption-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #25D366;
        }

        .modal-info-col {
          display: flex;
          flex-direction: column;
        }

        .modal-header-meta {
          margin-bottom: 16px;
        }

        .brand-tagline-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #E63946;
          display: block;
          margin-bottom: 6px;
        }

        .modal-brand-title {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 6px 0;
        }

        .modal-project-headline {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: rgba(234, 232, 228, 0.9);
          margin: 0;
        }

        .modal-project-scope {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.98rem;
          line-height: 1.62;
          color: rgba(234, 232, 228, 0.75);
          margin: 0 0 20px 0;
        }

        .modal-highlight-box {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.5;
          padding: 14px 18px;
          border-left: 3px solid #E63946;
          background: rgba(230, 57, 70, 0.08);
          border-radius: 0 12px 12px 0;
          margin-bottom: 22px;
          color: rgba(234, 232, 228, 0.85);
        }

        .highlight-lead {
          font-weight: 700;
          color: #ffffff;
        }

        .modal-deliverables-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 18px 20px;
          margin-bottom: 26px;
        }

        .deliverables-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(234, 232, 228, 0.6);
          margin: 0 0 12px 0;
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .deliverables-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.48;
          color: rgba(234, 232, 228, 0.9);
        }

        .check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .modal-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 9999px;
          background: #25D366;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.25);
        }

        .modal-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.4);
          background: #22bf5b;
        }

        .modal-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 22px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #eae8e4;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .modal-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalScaleUp {
          from {
            transform: scale(0.94);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1400px) {
          .brand-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .brand-visual-card {
            height: 290px;
          }
        }

        @media (max-width: 1024px) {
          .brand-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
          .brand-modal-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .brand-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .brand-visual-card {
            height: 270px;
          }
          .brand-modal-container {
            padding: 28px 20px;
          }
          .modal-brand-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
