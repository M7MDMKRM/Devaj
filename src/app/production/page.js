"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Clapperboard,
  Sparkles,
  Zap,
  Film,
  Camera,
  Play,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Plus,
  X,
  Send,
} from "lucide-react";

export default function DevajProductionPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Social Reels & Commercial Ads",
    timeline: "Within 2 Weeks",
    budget: "$2,000 - $5,000",
    message: "",
  });

  const videoRefs = useRef({});

  const handleMouseEnterCard = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeaveCard = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Devaj Productions Clients with Videos
  const productionClients = [
    {
      id: "clorox",
      name: "Clorox Commercial Campaign",
      client: "Clorox International",
      category: "Product & Macro Tabletop",
      badgeText: "High-Converting TV & Digital",
      image: "/images/clients/clorox-commercial.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      highlight: "High-retention commercial campaign broadcasted across major television networks and digital platforms.",
      deliverables: [
        "Phantom High-Speed Liquid Macro Filming",
        "VFX Cleanups & Stylized Studio Lighting",
        "Multi-Dialect Master Voiceover & Sound Design",
      ],
      turnaround: "5 Shooting Days // 7 Days Delivery",
    },
    {
      id: "the-capital",
      name: "The Capital Launch Sizzle",
      client: "The Capital Real Estate",
      category: "Architectural & Brand Reel",
      badgeText: "Launch Commercial",
      image: "/images/clients/the-capital.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      highlight: "Dynamic architectural commercial reel crafted for social acceleration and investment launches.",
      deliverables: [
        "Architectural Motion Reel (9:16 & 16:9)",
        "3D Motion Graphics & Metric Overlays",
        "Targeted Social Ad Cuts (15s & 30s)",
      ],
      turnaround: "3 Shooting Days // 48h Rough Cut",
    },
    {
      id: "elghandour",
      name: "El-Ghandour Medical Series",
      client: "El-Ghandour Medical Group",
      category: "Healthcare Brand Story",
      badgeText: "Institutional Commercial",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      highlight: "Human-centric commercial storytelling capturing state-of-the-art facilities and patient care.",
      deliverables: [
        "Cinematic Soundstage Interviews",
        "Hospital Facility B-Roll in 4K HDR",
        "Modular Multi-Platform Video Snippets",
      ],
      turnaround: "4 Shooting Days // Same-Week First Cut",
    },
    {
      id: "como-culinary",
      name: "COMO Culinary Experience",
      client: "COMO Hospitality Group",
      category: "Gastronomy & Lifestyle",
      badgeText: "Sensory Brand Film",
      image: "/images/clients/como-culinary.jpg",
      videoUrl: "/videos/sample-reel-1.mp4",
      highlight: "Sensory gastronomic commercial capturing artisanal technique and luxury dining ambience.",
      deliverables: [
        "Macro Food Cinematography & Flame FX",
        "Sensory Foley Sound Engineering",
        "Viral Short-Form Food Reels",
      ],
      turnaround: "2 Shooting Days // 72h Final Delivery",
    },
  ];

  // Services offered by Devaj Productions (Exact Devaj Group Signature Offerings Layout)
  const productionServices = [
    {
      id: "01",
      icon: Zap,
      title: "Fast-Turnaround Projects",
      subtitle: "Sprint Production",
      desc: "Rapid deployment and lean production sprints delivering campaign-ready commercial video assets with rough cuts delivered in 48-72 hours.",
      image: "/images/offerings/commercial-production.jpg",
      tag: "Same-Week Delivery",
      deliverables: [
        "Agile 2-3 Person Commercial Film Crew",
        "On-Set Real-Time Client Monitor Feed",
        "First Rough Cut Delivered Within 48-72h",
        "Multi-Format Delivery (16:9, 9:16, 1:1, 4:5)",
      ],
      tags: ["Same-Week Delivery", "Lean Crews", "High Output"],
    },
    {
      id: "02",
      icon: Clapperboard,
      title: "Reels & Social Content",
      subtitle: "Algorithmic Retention",
      desc: "Engineered specifically for Instagram, TikTok, and YouTube Shorts. Vertical 9:16 framing, high visual hook rate, and conversion pacing.",
      image: "/images/clients/the-capital.jpg",
      tag: "High Hook Rate",
      deliverables: [
        "Native 9:16 Vertical Composition",
        "Sub-3-Second Visual Hook Engineering",
        "Dynamic Motion Graphics & Retaining Captions",
        "Soundtrack Curation & Commercial Licensing",
      ],
      tags: ["9:16 Vertical", "High Hook Rate", "Multi-Cut"],
    },
    {
      id: "03",
      icon: Camera,
      title: "Product & Tabletop Shoots",
      subtitle: "Macro Optical Focus",
      desc: "High-precision commercial tabletop setups, liquid motion, stylized soundstages, and luxury texture closeups that drive consumer sales.",
      image: "/images/offerings/photography-studio.jpg",
      tag: "Soundstages & Macro",
      deliverables: [
        "Phantom High-Speed Liquid & Splash Capture",
        "Specialized Macro Tabletop Turntables",
        "Precision Studio Strobe & Continuous Key Lighting",
        "High-Res Texture & Packaging Beauty Retouching",
      ],
      tags: ["Macro Optics", "Soundstages", "Lighting Grids"],
    },
    {
      id: "04",
      icon: Sparkles,
      title: "Fashion & Motion Lookbooks",
      subtitle: "Editorial Visuals",
      desc: "Contemporary visual aesthetics, dynamic model pacing, and lifestyle editorial lookbooks tailored for modern apparel and retail brands.",
      image: "/images/clients/como-culinary.jpg",
      tag: "Lookbooks & Styling",
      deliverables: [
        "Artistic Fashion Direction & Wardrobe Styling",
        "High-FPS Fluid Fabric & Model Motion Tracking",
        "Magazine-Grade Color Palettes & Editorial Looks",
        "Coordinated Stills & Motion Simultaneous Capture",
      ],
      tags: ["Lookbooks", "Lifestyle", "Color Master"],
    },
    {
      id: "05",
      icon: Film,
      title: "Multi-Cam 4K Podcast Studio",
      subtitle: "Broadcast Audio & PTZ",
      desc: "Acoustically treated studio in Cairo with automated 4K PTZ cameras, Shure broadcast mics, instant switching, and micro-clip generation.",
      image: "/images/offerings/special-productions.jpg",
      tag: "Acoustics & PTZ 4K",
      deliverables: [
        "Acoustically Calibrated Soundproof Broadcast Stage",
        "Automated 4K PTZ Multi-Camera Switching System",
        "Shure SM7B Broadcast Mics & 32-bit Float Recording",
        "Viral Micro-Clip Snippets (Shorts, Reels, TikTok)",
      ],
      tags: ["Multi-Camera 4K", "Treated Acoustics", "Shorts Cuts"],
    },
    {
      id: "06",
      icon: ArrowUpRight,
      title: "Commercial Ads & Promo Sizzles",
      subtitle: "Market Velocity",
      desc: "Dynamic commercial teasers and high-energy promo videos designed to fuel paid media funnels and digital ad campaigns.",
      image: "/images/devaj-studio.jpg",
      tag: "Paid Media Funnels",
      deliverables: [
        "High-Velocity Ad Cuts (6s bumper, 15s, 30s)",
        "Conversion-Optimized CTA Placements",
        "Color Grading Master for OLED & Mobile Displays",
        "Complete Ad Variant Testing Bundles",
      ],
      tags: ["Ad Funnels", "Paid Media", "4K Mastering"],
    },
  ];

  return (
    <main
      dir="ltr"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F6F2",
        color: "#151515",
        fontFamily: "var(--font-jakarta), var(--font-sans)",
      }}
    >
      {/* =================================================================== */}
      {/* 1. TOP NAVBAR                                                       */}
      {/* =================================================================== */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#151515",
            textDecoration: "none",
            fontSize: "0.88rem",
            fontWeight: 700,
            transition: "color 0.2s ease",
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Devaj Group</span>
        </Link>

        {/* Center Official Logo */}
        <div>
          <img
            src="/images/devaj-productions-logo-black.png"
            alt="Devaj Productions"
            style={{
              height: "46px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Right CTA & Switch to Devaj Films */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/films"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(21, 21, 21, 0.7)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            <span>Devaj Films</span>
            <ArrowUpRight size={14} />
          </Link>

          <a
            href="#contact"
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "#E63946",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 14px rgba(230, 57, 70, 0.28)",
            }}
          >
            Book Production
          </a>
        </div>
      </nav>

      {/* =================================================================== */}
      {/* 2. SIZZLE VIDEO HERO SHOWCASE                                       */}
      {/* =================================================================== */}
      <section
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "90px 40px",
          backgroundColor: "#111111",
          color: "#ffffff",
        }}
      >
        <video
          src="/videos/devaj-production.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.38)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "1050px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(230, 57, 70, 0.15)",
              border: "1px solid rgba(230, 57, 70, 0.35)",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
              color: "#E63946",
            }}
          >
            <Clapperboard size={14} />
            <span>Creative House 01 // Commercial & Agile Production</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              marginBottom: "24px",
              fontWeight: 500,
            }}
          >
            Devaj Productions.
            <br />
            <span style={{ fontSize: "0.78em", fontWeight: 400, color: "rgba(255, 255, 255, 0.88)" }}>
              Agile Creative Production for Businesses & Commercial Brands.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.25vw, 1.18rem)",
              lineHeight: 1.75,
              color: "rgba(255, 255, 255, 0.82)",
              maxWidth: "760px",
              margin: "0 auto 36px",
            }}
          >
            Engineered for velocity, audience retention, and high commercial conversion. Together with Devaj Group, we cover the full cycle of visual content from the first frame of an idea to rapid final delivery.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#clients-showcase"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                color: "#151515",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span>Explore Works &amp; Clients</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.24)",
                color: "#ffffff",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              <span>Production Capabilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. WHO IS DEVAJ PRODUCTION (Editorial Identity Deep-Dive)           */}
      {/* =================================================================== */}
      <section
        id="who-we-are"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "110px 40px 90px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "54px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                fontSize: "0.78rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#E63946",
                marginBottom: "20px",
              }}
            >
              <span>Who We Are // Identity &amp; Speed</span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 3.4vw, 3.2rem)",
                lineHeight: 1.15,
                color: "#111111",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginBottom: "24px",
              }}
            >
              Crafted for modern brands that cannot wait months for high-impact content.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(21, 21, 21, 0.78)", marginBottom: "18px" }}>
              <strong>Devaj Productions</strong> is the dedicated agile commercial arm of Devaj Group. While our sister house, Devaj Films, orchestrates massive enterprise TVCs and cinema films, Devaj Productions was specifically conceived to solve the modern commercial dilemma: delivering cinema-grade visual polish at the speed of modern digital commerce.
            </p>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(21, 21, 21, 0.78)", marginBottom: "30px" }}>
              From fast-paced product launches to multi-asset social campaigns, our Cairo production campus houses dedicated tabletop soundstages, macro optics, robotic camera rigs, and high-velocity edit suites capable of turning concepts into final master deliveries in days.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#E63946", display: "block" }}>48-72h</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(21, 21, 21, 0.7)", fontWeight: 600 }}>Rough Cut Delivery Velocity</span>
              </div>
              <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#111111", display: "block" }}>100%</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(21, 21, 21, 0.7)", fontWeight: 600 }}>Cairo In-House Studio Pipeline</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div
            style={{
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)",
              minHeight: "480px",
              background: "#111111",
            }}
          >
            <img
              src="/images/devaj-studio.jpg"
              alt="Devaj Productions Cairo Soundstage"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
              }}
            />
            <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", color: "#ffffff" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#E63946", display: "block", marginBottom: "6px" }}>
                Cairo Production Soundstages
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}>
                High-Speed Tabletop, Lighting Grids &amp; Multi-Cam Podcasting
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. PRODUCTION SERVICES & CAPABILITIES ("الحاجة اللي بتقدمها")       */}
      {/* =================================================================== */}
      <section
        id="services"
        style={{
          backgroundColor: "#F7F6F2",
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "115px 40px 130px",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#E63946",
                marginBottom: "14px",
              }}
            >
              Full Production Slate // Capabilities
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                lineHeight: 1.15,
                color: "#111111",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginBottom: "20px",
              }}
            >
              Commercial storytelling tailored for conversion and brand dominance.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(21, 21, 21, 0.72)", lineHeight: 1.7 }}>
              Every deliverable is engineered with precision lighting, calibrated audio, and platform-specific pacing to maximize commercial performance.
            </p>
          </div>

          <div className="offerings-grid-6">
            {productionServices.map((service, idx) => {
              const isSelected = selectedService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`offering-card card-col-${idx + 1} ${isSelected ? "selected" : ""}`}
                >
                  {/* Top-Right Number Overlapping Image (01, 02, ...) */}
                  <div className="card-number-badge">
                    <span className="card-number-text">{service.id}</span>
                  </div>

                  {/* Card Main Body */}
                  <div className="card-inner">
                    {/* Image Container with Smooth Zoom */}
                    <div className="card-image-box">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="card-image"
                      />
                      <div className="card-image-vignette" />
                    </div>

                    {/* Card Content Footer Matching Devaj Group Exact Layout */}
                    <div className="card-content">
                      <span className="card-eyebrow">{service.subtitle || "SOLUTIONS"}</span>

                      <div className="card-title-row">
                        <h3 className="card-title">{service.title}</h3>
                        <span className="card-arrow-circle">
                          <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                            <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L10.586 8H2a1 1 0 1 1 0-2h8.586L8.293 3.707a1 1 0 0 1 0-1.414z" />
                          </svg>
                        </span>
                      </div>

                      <p className="card-description">{service.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. CLIENTS & FEATURED WORKS WITH VIDEO HOVER ("الشركات")            */}
      {/* =================================================================== */}
      <section
        id="clients-showcase"
        style={{
          maxWidth: "1540px",
          margin: "0 auto",
          padding: "120px 40px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#E63946",
              marginBottom: "18px",
            }}
          >
            <span>Proven Track Record // Client Portfolio</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
              lineHeight: 1.15,
              color: "#111111",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              marginBottom: "18px",
            }}
          >
            Trusted by industry leaders to deliver high-converting visual stories.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(21, 21, 21, 0.72)", lineHeight: 1.7 }}>
            Hover over any project to watch the production video in real-time. Click to inspect scope and deliverables.
          </p>
        </div>

        {/* 2x2 Interactive Cinema Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px",
          }}
        >
          {productionClients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedProject(client)}
              onMouseEnter={() => handleMouseEnterCard(client.id)}
              onMouseLeave={() => handleMouseLeaveCard(client.id)}
              style={{
                position: "relative",
                borderRadius: "26px",
                overflow: "hidden",
                height: "440px",
                cursor: "pointer",
                backgroundColor: "#111111",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.12)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
              }}
            >
              {/* Background Video (Plays on Hover) */}
              <video
                ref={(el) => (videoRefs.current[client.id] = el)}
                src={client.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                  opacity: 0.95,
                }}
              />

              {/* Static Background Poster */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${client.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 2,
                  transition: "opacity 0.5s ease",
                }}
                className="poster-layer"
              />

              {/* Gradient Vignette Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.85) 100%)",
                  zIndex: 3,
                }}
              />

              {/* Top Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "22px",
                  right: "22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 4,
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(18, 18, 18, 0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {client.category}
                </span>

                <span
                  style={{
                    backgroundColor: "rgba(230, 57, 70, 0.85)",
                    color: "#ffffff",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Devaj Productions
                </span>
              </div>

              {/* Bottom Information & Open Project Button */}
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                  zIndex: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: "16px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#E63946",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {client.client}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.45rem",
                      fontWeight: 500,
                      color: "#ffffff",
                      margin: 0,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {client.name}
                  </h3>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 18px",
                    borderRadius: "9999px",
                    backgroundColor: "#ffffff",
                    color: "#151515",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span>OPEN PROJECT</span>
                  <Plus size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. CONTACTS & BOOKING FOR DEVAJ PRODUCTION ("الكونتاكتس")            */}
      {/* =================================================================== */}
      <section
        id="contact"
        style={{
          backgroundColor: "#F7F6F2",
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "120px 40px 140px",
        }}
      >
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "64px",
            }}
          >
            {/* Left: Contact Info */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  background: "#F7F6F2",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#E63946",
                  marginBottom: "20px",
                }}
              >
                <span>Direct Commercial Inquiry // House 01</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                  lineHeight: 1.12,
                  color: "#111111",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  marginBottom: "24px",
                }}
              >
                Ready to accelerate your brand content?
              </h2>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(21, 21, 21, 0.74)", marginBottom: "40px" }}>
                Whether you need high-retention commercial reels, a scheduled tabletop product shoot, or our 4K multi-camera podcast soundstages, the Devaj Productions team operates with immediate deployment speed.
              </p>

              {/* Direct Reach Channels */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <a
                  href="mailto:production@devajgroup.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    color: "#151515",
                    padding: "18px 24px",
                    borderRadius: "18px",
                    backgroundColor: "#F7F6F2",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "#E63946",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(21, 21, 21, 0.6)", display: "block" }}>
                      Direct Commercial Email
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111" }}>
                      production@devajgroup.com
                    </span>
                  </div>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 24px",
                    borderRadius: "18px",
                    backgroundColor: "#F7F6F2",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "#151515",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(21, 21, 21, 0.6)", display: "block" }}>
                      Production Hotline / WhatsApp
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111" }}>
                      +20 100 000 0000
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 24px",
                    borderRadius: "18px",
                    backgroundColor: "#F7F6F2",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "#151515",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "rgba(21, 21, 21, 0.6)", display: "block" }}>
                      Official Cairo Studio Location
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111" }}>
                      Devaj Soundstage Campus, Cairo, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Project Inquiry Form */}
            <div
              style={{
                backgroundColor: "#F7F6F2",
                borderRadius: "32px",
                padding: "44px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 500,
                  color: "#111111",
                  marginBottom: "8px",
                }}
              >
                Book Your Commercial Production
              </h3>
              <p style={{ fontSize: "0.92rem", color: "rgba(21, 21, 21, 0.68)", marginBottom: "28px" }}>
                Fill out the brief below and our production supervisor will respond within 4 business hours.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    padding: "36px",
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    border: "1px solid rgba(230, 57, 70, 0.2)",
                  }}
                >
                  <CheckCircle2 size={48} color="#25D366" style={{ margin: "0 auto 16px" }} />
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>
                    Inquiry Received Successfully!
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "rgba(21, 21, 21, 0.72)", lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Our commercial production team has logged your brief for <strong>{formData.company || "your brand"}</strong> and will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Tarek Mansour"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "13px 18px",
                          borderRadius: "12px",
                          border: "1px solid rgba(0, 0, 0, 0.12)",
                          backgroundColor: "#ffffff",
                          fontSize: "0.92rem",
                          color: "#111111",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                        Brand / Company *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Modern Retail Co."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "13px 18px",
                          borderRadius: "12px",
                          border: "1px solid rgba(0, 0, 0, 0.12)",
                          backgroundColor: "#ffffff",
                          fontSize: "0.92rem",
                          color: "#111111",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="tarek@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 18px",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: "#ffffff",
                        fontSize: "0.92rem",
                        color: "#111111",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "13px 18px",
                          borderRadius: "12px",
                          border: "1px solid rgba(0, 0, 0, 0.12)",
                          backgroundColor: "#ffffff",
                          fontSize: "0.92rem",
                          color: "#111111",
                          outline: "none",
                        }}
                      >
                        <option>Social Reels &amp; Commercial Ads</option>
                        <option>Product &amp; Tabletop Shoot</option>
                        <option>Fashion &amp; Lookbook Film</option>
                        <option>4K Multi-Cam Podcast Studio</option>
                        <option>Rapid Commercial Sprint</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                        Expected Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "13px 18px",
                          borderRadius: "12px",
                          border: "1px solid rgba(0, 0, 0, 0.12)",
                          backgroundColor: "#ffffff",
                          fontSize: "0.92rem",
                          color: "#111111",
                          outline: "none",
                        }}
                      >
                        <option>Rush (Within 48-72h)</option>
                        <option>Within 2 Weeks</option>
                        <option>This Month</option>
                        <option>Flexible Schedule</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                      Project Brief / Deliverables Needed
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your campaign goals, deliverables needed, or shooting dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 18px",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: "#ffffff",
                        fontSize: "0.92rem",
                        color: "#111111",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "16px 32px",
                      borderRadius: "9999px",
                      backgroundColor: "#151515",
                      color: "#ffffff",
                      fontSize: "0.96rem",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      marginTop: "8px",
                      transition: "background-color 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <span>Submit Production Request</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. DEDICATED FOOTER                                                 */}
      {/* =================================================================== */}
      <footer
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "50px 40px",
          backgroundColor: "#F7F6F2",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src="/images/devaj-productions-logo-black.png"
            alt="Devaj Productions"
            style={{ height: "36px", width: "auto" }}
          />
          <span style={{ fontSize: "0.85rem", color: "rgba(21, 21, 21, 0.6)" }}>
            © {new Date().getFullYear()} Devaj Productions — An Autonomous Entity under Devaj Group.
          </span>
        </div>

        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#151515", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700 }}>
            Devaj Group Home
          </Link>
          <Link href="/films" style={{ color: "#E63946", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700 }}>
            Switch to Devaj Films →
          </Link>
        </div>
      </footer>

      {/* =================================================================== */}
      {/* 8. INTERACTIVE PROJECT DETAILS MODAL                                */}
      {/* =================================================================== */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.82)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "28px",
              maxWidth: "840px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5)",
              animation: "modalFadeIn 0.3s ease",
            }}
          >
            {/* Modal Video Player */}
            <div style={{ position: "relative", height: "380px", backgroundColor: "#000000" }}>
              <video
                src={selectedProject.videoUrl}
                autoPlay
                controls
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.65)",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Details */}
            <div style={{ padding: "36px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#E63946", textTransform: "uppercase" }}>
                    {selectedProject.client}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", margin: "4px 0 0", color: "#111111" }}>
                    {selectedProject.name}
                  </h3>
                </div>
                <span style={{ fontSize: "0.85rem", padding: "6px 14px", borderRadius: "9999px", background: "#F7F6F2", fontWeight: 700 }}>
                  {selectedProject.turnaround}
                </span>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(21, 21, 21, 0.78)", marginBottom: "22px" }}>
                {selectedProject.highlight}
              </p>

              <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.08)", paddingTop: "18px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", color: "rgba(21, 21, 21, 0.6)", display: "block", marginBottom: "10px" }}>
                  Key Production Deliverables
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedProject.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "8px",
                        backgroundColor: "#F7F6F2",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#111111",
                      }}
                    >
                      ✓ {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 8. INTERACTIVE SERVICE DETAIL MODAL (Matching Devaj Group)         */}
      {/* =================================================================== */}
      {selectedService && (
        <div
          className="offering-modal-backdrop"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="offering-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="modal-close-btn"
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div className="modal-grid">
              <div className="modal-left">
                <div className="modal-image-wrap">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="modal-image"
                  />
                  <div className="modal-number-badge">
                    {selectedService.id}
                  </div>
                </div>
                <div className="modal-pill-tag">
                  {React.createElement(selectedService.icon, { size: 15, color: "#E63946" })}
                  <span>{selectedService.tag}</span>
                </div>
              </div>

              <div className="modal-right">
                <span className="modal-eyebrow">{selectedService.subtitle}</span>
                <h3 className="modal-title">{selectedService.title}</h3>
                <p className="modal-body">{selectedService.desc}</p>

                <div className="modal-deliverables-box">
                  <h4 className="modal-deliverables-title">What We Deliver:</h4>
                  <ul className="modal-deliverables-list">
                    {selectedService.deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color="#E63946" className="list-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer-cta">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="modal-primary-btn"
                  >
                    <span>Request Production Proposal</span>
                    <ArrowUpRight size={17} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="modal-secondary-btn"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Card Hover Physics & Offerings Cards */}
      <style jsx global>{`
        .poster-layer {
          opacity: 1;
        }
        div:hover > .poster-layer {
          opacity: 0 !important;
        }

        /* Devaj Group Signature Offerings Grid & Cards */
        .offerings-grid-6 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .offerings-grid-6 .card-col-2,
          .offerings-grid-6 .card-col-5 {
            margin-top: 44px;
          }
        }

        @media (max-width: 1023px) and (min-width: 641px) {
          .offerings-grid-6 {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
          .offerings-grid-6 .card-col-2,
          .offerings-grid-6 .card-col-4,
          .offerings-grid-6 .card-col-6 {
            margin-top: 36px;
          }
        }

        @media (max-width: 640px) {
          .offerings-grid-6 {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .offerings-grid-6 .card-col-2,
          .offerings-grid-6 .card-col-4,
          .offerings-grid-6 .card-col-5,
          .offerings-grid-6 .card-col-6 {
            margin-top: 0;
          }
        }

        .offering-card {
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          user-select: none;
          opacity: 1 !important;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .offering-card:hover {
          transform: translateY(-16px);
          opacity: 1 !important;
        }

        .offering-card.selected {
          transform: translateY(-22px) scale(1.01);
        }

        .card-number-badge {
          position: absolute;
          top: -34px;
          right: 14px;
          z-index: 4;
          pointer-events: none;
        }

        .card-number-text {
          font-family: var(--font-jakarta), var(--font-sans), sans-serif;
          font-size: clamp(3.4rem, 4.4vw, 4.8rem);
          font-weight: 800;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.04em;
          text-shadow: 0 4px 18px rgba(0, 0, 0, 0.14);
          transition: transform 0.4s ease, color 0.4s ease;
          display: block;
        }

        .offering-card:hover .card-number-text {
          transform: translateY(-3px) scale(1.03);
          color: #ffffff;
          text-shadow: 0 8px 24px rgba(230, 57, 70, 0.35);
        }

        .card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: transparent;
        }

        .card-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.05;
          border-radius: 14px;
          overflow: hidden;
          background-color: #0e0e0e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .offering-card:hover .card-image-box {
          box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(230, 57, 70, 0.35);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .offering-card:hover .card-image {
          transform: scale(1.05);
          filter: brightness(1.03);
        }

        .card-image-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%);
          pointer-events: none;
        }

        .card-content {
          padding-top: 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #E63946;
          margin-bottom: 6px;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .card-title {
          font-family: var(--font-jakarta), var(--font-sans), sans-serif;
          font-size: clamp(1.02rem, 1.22vw, 1.22rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #111111;
          margin: 0;
          transition: color 0.3s ease;
        }

        .offering-card:hover .card-title {
          color: #E63946;
        }

        .card-arrow-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #171717;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .offering-card:hover .card-arrow-circle {
          background-color: #E63946;
          transform: translateX(3px);
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
        }

        .card-description {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.55;
          color: rgba(21, 21, 21, 0.65);
          margin: 0;
        }

        /* Modal Styles */
        .offering-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s ease;
        }

        .offering-modal-content {
          position: relative;
          background-color: #ffffff;
          color: #151515;
          max-width: 960px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 28px;
          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.4);
          padding: 44px;
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #f1efe9;
          border: none;
          color: #151515;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background-color: #151515;
          color: #ffffff;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 36px;
          align-items: start;
        }

        .modal-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-image-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-number-badge {
          position: absolute;
          bottom: 12px;
          right: 14px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 2.4rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .modal-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          background-color: #f1efe9;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: #151515;
          width: fit-content;
        }

        .modal-right {
          display: flex;
          flex-direction: column;
        }

        .modal-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #E63946;
          margin-bottom: 6px;
        }

        .modal-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #111111;
          margin: 0 0 6px 0;
        }

        .modal-body {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(21, 21, 21, 0.78);
          margin: 0 0 24px 0;
        }

        .modal-deliverables-box {
          background-color: #F7F6F2;
          border-radius: 16px;
          padding: 22px 24px;
          margin-bottom: 26px;
        }

        .modal-deliverables-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          color: #151515;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 14px 0;
        }

        .modal-deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-deliverables-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          color: rgba(21, 21, 21, 0.85);
          font-weight: 500;
        }

        .modal-footer-cta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .modal-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #151515;
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 9999px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .modal-primary-btn:hover {
          background-color: #E63946;
          transform: translateY(-2px);
        }

        .modal-secondary-btn {
          background-color: transparent;
          color: rgba(21, 21, 21, 0.6);
          border: none;
          padding: 13px 20px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-secondary-btn:hover {
          color: #151515;
        }

        @media (max-width: 820px) {
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .offering-modal-content {
            padding: 30px 24px;
          }
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes modalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
