"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Film,
  Sparkles,
  Camera,
  Play,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Plus,
  X,
  Send,
  Video,
  Award,
} from "lucide-react";

export default function DevajFilmsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    filmType: "Enterprise TV Commercial (TVC)",
    scale: "Full In-House Soundstage & Cinema Crew",
    budget: "$15,000+",
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

  // Devaj Films Clients with Videos
  const filmClients = [
    {
      id: "porsche",
      name: "Porsche Egypt — The Electric Pulse",
      client: "Porsche Egypt // SMG",
      category: "Cinematic TVC & Automotive Cinema",
      badgeText: "High-Octane Cinema",
      image: "/images/clients/porsche-egypt.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      highlight: "A dynamic automotive cinematic masterpiece capturing precision engineering, high-speed closed-circuit track racing, and twilight optics.",
      deliverables: [
        "Arri Alexa Mini LF & Master Anamorphic Primes",
        "Precision Russian Arm & High-Speed Tracking Vehicle",
        "Licensed Heavy-Lift FPV Drone Racing Cinematography",
      ],
      turnaround: "7 Filming Days // Master DCI-4K Delivery",
    },
    {
      id: "eskan-misr",
      name: "Eskan Misr — Legacy in Concrete",
      client: "Eskan Misr Construction",
      category: "National Institutional Documentary",
      badgeText: "Enterprise Documentary",
      image: "/images/clients/eskan-misr.jpg",
      videoUrl: "/videos/hero-reel.mp4",
      highlight: "Full-scale corporate epic documenting Egypt's monumental urban expansion, engineering marvels, and national architectural heritage.",
      deliverables: [
        "Cinema Drone Aerials across 4 Governorates",
        "Executive Leadership & Architecture Interviews",
        "Custom 45-Piece Orchestral Film Score Composition",
      ],
      turnaround: "12 Filming Days // Broadcast Prime Master",
    },
    {
      id: "abrag",
      name: "ABRAG Developments — Horizon of Ambition",
      client: "ABRAG Real Estate",
      category: "Mega-Project Cinema TVC",
      badgeText: "Real Estate Cinema",
      image: "/images/clients/the-capital.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      highlight: "International investment vision film uniting high-end soundstage set design with precision CG architectural integration.",
      deliverables: [
        "Dedicated Cairo Soundstage Set Construction",
        "Seamless 3D CGI Architectural Compositing",
        "Global Broadcast Master for Regional Channels",
      ],
      turnaround: "6 Filming Days // Full Post Pipeline",
    },
    {
      id: "heritage-doc",
      name: "The Nile Millennia — Cultural Archive",
      client: "International Heritage Foundation",
      category: "Docu-Series & Narrative Cinema",
      badgeText: "Cultural Archive Cinema",
      image: "/images/clients/como-culinary.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      highlight: "Large-format archival docu-series tracking untold cultural narratives with auteur visual lighting and Dolby Atmos spatial sound master.",
      deliverables: [
        "RED V-Raptor 8K Large Format Sensor Optics",
        "Dolby Atmos Certified Foley & Spatial Mastering",
        "Festival-Grade Color Grading Master (ACES)",
      ],
      turnaround: "14 Filming Days // ACES Color Grading",
    },
  ];

  // Services offered by Devaj Films
  const filmServices = [
    {
      icon: <Film size={22} />,
      title: "Prime-Time TV Commercials (TVCs)",
      subtitle: "Enterprise Scale",
      desc: "Full-scale commercial productions designed for prime-time broadcast and international airwaves, directed with uncompromising optical majesty.",
      tags: ["Broadcast TVC", "Master Anamorphic", "DCI 4K"],
    },
    {
      icon: <Award size={22} />,
      title: "Enterprise & Institutional Documentaries",
      subtitle: "Legacy Storytelling",
      desc: "In-depth corporate epics, founder legacy films, and institutional archive documentaries that define brand heritage for generations.",
      tags: ["Docu-Series", "Historical Archives", "Executive Vision"],
    },
    {
      icon: <Camera size={22} />,
      title: "High-End Narrative Cinema & Series",
      subtitle: "Auteur Direction",
      desc: "Scripted drama, short films, and high-concept festival cinema utilizing Arri Alexa LF and RED cinema camera packages with full art department.",
      tags: ["Arri Alexa LF", "RED V-Raptor", "Art Direction"],
    },
    {
      icon: <Video size={22} />,
      title: "Heavy-Lift Aerial Drone Cinematography",
      subtitle: "Licensed Aerial Fleet",
      desc: "Cinema-rigged heavy-lift drones and dynamic FPV chasing systems for vast architectural developments, landscape vistas, and automotive tracking.",
      tags: ["Cinema Drone", "FPV Tracking", "Licensed Pilots"],
    },
    {
      icon: <Sparkles size={22} />,
      title: "Master Cairo Soundstages & Sets",
      subtitle: "In-House Physical Campus",
      desc: "Over 1,200 sqm of dedicated soundstage floor space in Cairo equipped with motorized lighting trusses, cyclorama walls, and soundproofing.",
      tags: ["1200+ sqm", "Acoustic Stage", "Rigging Trusses"],
    },
    {
      icon: <ArrowUpRight size={22} />,
      title: "Dolby Atmos Audio & ACES Color Grading",
      subtitle: "Post-Production Excellence",
      desc: "Calibrated DaVinci Resolve color suites, optical mastering, multi-dialect voice direction, and spatial audio sound design under one roof.",
      tags: ["Dolby Atmos", "ACES Color", "Master Foley"],
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
            src="/images/devaj-films-logo.png"
            alt="Devaj Films"
            style={{
              height: "48px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Right CTA & Switch to Devaj Productions */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/production"
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
            <span>Devaj Productions</span>
            <ArrowUpRight size={14} />
          </Link>

          <a
            href="#contact"
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "#151515",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
            }}
          >
            Inquire Cinema
          </a>
        </div>
      </nav>

      {/* =================================================================== */}
      {/* 2. CINEMA SIZZLE HERO SHOWCASE                                      */}
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
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
        }}
      >
        <video
          src="/videos/devaj-film.mp4"
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
            filter: "brightness(0.36)",
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
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            <Film size={14} />
            <span>Creative House 02 // Large-Scale Cinematic Production</span>
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
            Devaj Films.
            <br />
            <span style={{ fontSize: "0.78em", fontWeight: 400, color: "rgba(255, 255, 255, 0.88)" }}>
              Cinematic Production for Major Corporations &amp; Institutions.
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
            Uncompromising optical mastery, auteur visual choreography, and enterprise broadcast grandeur. Together with Devaj Group, we orchestrate landmark television commercials, executive documentaries, and cinema narratives.
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
              <span>Explore The Slate &amp; Works</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#capabilities"
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
              <span>Cinema Capabilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. WHO IS DEVAJ FILMS (Cinema Philosophy & Infrastructure)          */}
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
                color: "#111111",
                marginBottom: "20px",
              }}
            >
              <span>Who We Are // Cinema &amp; Optical Mastery</span>
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
              A dedicated cinema studio engineered for cultural and institutional permanence.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(21, 21, 21, 0.78)", marginBottom: "18px" }}>
              <strong>Devaj Films</strong> operates as the premier cinematic and enterprise narrative house of Devaj Group. While Devaj Productions masters high-velocity commercial reels and digital agile campaigns, Devaj Films is dedicated exclusively to large-scale, enterprise-tier cinema: high-profile prime-time TV commercials, full-length corporate documentaries, and landmark cultural archive films.
            </p>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(21, 21, 21, 0.78)", marginBottom: "30px" }}>
              We deploy full large-format camera systems (Arri Alexa LF, RED V-Raptor), Master Anamorphic glass, specialized crane optics, and heavy-lift cinema drones. Every frame is backed by our dedicated Cairo production campus, soundstages, and Dolby Atmos mastering suites.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#111111", display: "block" }}>Arri &amp; RED</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(21, 21, 21, 0.7)", fontWeight: 600 }}>Large Format Cinema Camera Packages</span>
              </div>
              <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#E63946", display: "block" }}>Tier-1</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(21, 21, 21, 0.7)", fontWeight: 600 }}>Enterprise &amp; Institutional Clients</span>
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
              src="/images/devaj-hq.jpg"
              alt="Devaj Films Cairo Soundstage Campus"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
              }}
            />
            <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", color: "#ffffff" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#E63946", display: "block", marginBottom: "6px" }}>
                Devaj Films Creative Campus
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}>
                Enterprise Soundstages, Lighting Trusses &amp; Master Color Suites
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. CINEMA CAPABILITIES ("الحاجة اللي بتقدمها Devaj Films")          */}
      {/* =================================================================== */}
      <section
        id="capabilities"
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
                color: "#111111",
                marginBottom: "14px",
              }}
            >
              Enterprise Slate // Cinema Services
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
              Cinematic impact on an international broadcast scale.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(21, 21, 21, 0.72)", lineHeight: 1.7 }}>
              Crafted with auteur directorial vision, licensed aerial tracking, certified sound stages, and cinema-grade color science.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "28px",
            }}
          >
            {filmServices.map((service, idx) => (
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
      {/* 5. CLIENTS & FEATURED SLATE WITH VIDEO HOVER ("الشركات")            */}
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
              color: "#111111",
              marginBottom: "18px",
            }}
          >
            <span>Cinema Portfolio // Enterprise Partners</span>
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
            Enterprise commissions executed with cinematic distinction.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(21, 21, 21, 0.72)", lineHeight: 1.7 }}>
            Hover over any cinema project to stream preview sequences in real-time. Click to inspect optical specifications and scope.
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
          {filmClients.map((client) => (
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
                    backgroundColor: "#111111",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Devaj Films
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
                      color: "#eae8e4",
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
      {/* 6. CONTACTS & INQUIRIES FOR DEVAJ FILMS ("الكونتاكتس")               */}
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
                  color: "#111111",
                  marginBottom: "20px",
                }}
              >
                <span>Executive Cinema Inquiry // House 02</span>
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
                Commission enterprise cinema with optical authority.
              </h2>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(21, 21, 21, 0.74)", marginBottom: "40px" }}>
                Our executive producers, directors of photography, and soundstage supervisors are available to review treatments, arrange stage tours, and assemble tailored cinema packages for television commercials and enterprise epics.
              </p>

              {/* Direct Reach Channels */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <a
                  href="mailto:films@devajgroup.com"
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
                      backgroundColor: "#151515",
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
                      Executive Cinema Desk
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111" }}>
                      films@devajgroup.com
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
                      Cinema Soundstage Hotline
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
                      Official Soundstage Location
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111" }}>
                      Devaj Films Studio Campus, Cairo, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Cinema Project Inquiry Form */}
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
                Commission Cinema Production
              </h3>
              <p style={{ fontSize: "0.92rem", color: "rgba(21, 21, 21, 0.68)", marginBottom: "28px" }}>
                Submit project scope details and our Executive Producer will respond directly within 6 business hours.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    padding: "36px",
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <CheckCircle2 size={48} color="#25D366" style={{ margin: "0 auto 16px" }} />
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>
                    Cinema Treatment Received!
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "rgba(21, 21, 21, 0.72)", lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Our executive producers have logged your brief for <strong>{formData.organization || "your institution"}</strong> and will follow up with you at <strong>{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                        Lead Contact Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Youssef El-Sherif"
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
                        Organization / Brand *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Enterprise Group"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
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
                      Executive Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="youssef@enterprise.com"
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
                        Film Classification
                      </label>
                      <select
                        value={formData.filmType}
                        onChange={(e) => setFormData({ ...formData, filmType: e.target.value })}
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
                        <option>Enterprise TV Commercial (TVC)</option>
                        <option>Corporate Institutional Documentary</option>
                        <option>Narrative Cinema or Series</option>
                        <option>Heavy-Lift Drone Aerial Epic</option>
                        <option>Full Soundstage Production</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                        Production Scope
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
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
                        <option>Full In-House Soundstage &amp; Cinema Crew</option>
                        <option>Multi-Location Location Filming</option>
                        <option>Aerial &amp; Automotive Rigging</option>
                        <option>Post-Production &amp; ACES Grading Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px", color: "#111111" }}>
                      Treatment Summary &amp; Directorial Objectives
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Outline target broadcast channels, shooting dates, desired optical aesthetic..."
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
                    <span>Submit Cinema Proposal</span>
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
            src="/images/devaj-films-logo.png"
            alt="Devaj Films"
            style={{ height: "36px", width: "auto" }}
          />
          <span style={{ fontSize: "0.85rem", color: "rgba(21, 21, 21, 0.6)" }}>
            © {new Date().getFullYear()} Devaj Films — An Autonomous Studio under Devaj Group.
          </span>
        </div>

        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#151515", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700 }}>
            Devaj Group Home
          </Link>
          <Link href="/production" style={{ color: "#E63946", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700 }}>
            Switch to Devaj Productions →
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
            backgroundColor: "rgba(0, 0, 0, 0.84)",
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
                  Cinema Specifications &amp; Deliverables
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
