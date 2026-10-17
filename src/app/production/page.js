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

  // Services offered by Devaj Productions
  const productionServices = [
    {
      icon: <Zap size={22} />,
      title: "Fast-Turnaround Projects",
      subtitle: "Sprint Production",
      desc: "Rapid deployment and lean production sprints delivering campaign-ready commercial video assets with rough cuts delivered in 48-72 hours.",
      tags: ["Same-Week Delivery", "Lean Crews", "High Output"],
    },
    {
      icon: <Clapperboard size={22} />,
      title: "Reels & Social Content",
      subtitle: "Algorithmic Retention",
      desc: "Engineered specifically for Instagram, TikTok, and YouTube Shorts. Vertical 9:16 framing, high visual hook rate, and conversion pacing.",
      tags: ["9:16 Vertical", "High Hook Rate", "Multi-Cut"],
    },
    {
      icon: <Camera size={22} />,
      title: "Product & Tabletop Shoots",
      subtitle: "Macro Optical Focus",
      desc: "High-precision commercial tabletop setups, liquid motion, stylized soundstages, and luxury texture closeups that drive consumer sales.",
      tags: ["Macro Optics", "Soundstages", "Lighting Grids"],
    },
    {
      icon: <Sparkles size={22} />,
      title: "Fashion & Motion Lookbooks",
      subtitle: "Editorial Visuals",
      desc: "Contemporary visual aesthetics, dynamic model pacing, and lifestyle editorial lookbooks tailored for modern apparel and retail brands.",
      tags: ["Lookbooks", "Lifestyle", "Color Master"],
    },
    {
      icon: <Film size={22} />,
      title: "Multi-Cam 4K Podcast Studio",
      subtitle: "Broadcast Audio & PTZ",
      desc: "Acoustically treated studio in Cairo with automated 4K PTZ cameras, Shure broadcast mics, instant switching, and micro-clip generation.",
      tags: ["Multi-Camera 4K", "Treated Acoustics", "Shorts Cuts"],
    },
    {
      icon: <ArrowUpRight size={22} />,
      title: "Commercial Ads & Promo Sizzles",
      subtitle: "Market Velocity",
      desc: "Dynamic commercial teasers and high-energy promo videos designed to fuel paid media funnels and digital ad campaigns.",
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
            src="/images/devaj-productions-logo.png"
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "28px",
            }}
          >
            {productionServices.map((service, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      backgroundColor: "#151515",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "22px",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    {service.icon}
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#E63946",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {service.subtitle}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#111111",
                      marginBottom: "14px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.96rem",
                      lineHeight: 1.7,
                      color: "rgba(21, 21, 21, 0.72)",
                      margin: 0,
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "28px",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                >
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        color: "#151515",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            src="/images/devaj-productions-logo.png"
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

      {/* Global CSS for Card Hover Physics */}
      <style jsx global>{`
        .poster-layer {
          opacity: 1;
        }
        div:hover > .poster-layer {
          opacity: 0 !important;
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
      `}</style>
    </main>
  );
}
