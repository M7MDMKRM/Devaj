"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clapperboard } from "lucide-react";

export default function DevajProductionPage() {
  return (
    <main
      dir="ltr"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
        color: "#eae8e4",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Top Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(13, 13, 13, 0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "18px 40px",
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
            color: "rgba(234, 232, 228, 0.7)",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(234, 232, 228, 0.7)")}
        >
          <ArrowLeft size={16} />
          <span>Back to Devaj Group</span>
        </Link>

        <div>
          <img
            src="/images/devaj-productions-logo.png"
            alt="Devaj Productions"
            style={{
              height: "44px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <a
          href="#inquire"
          style={{
            padding: "10px 22px",
            borderRadius: "9999px",
            backgroundColor: "#E63946",
            color: "#ffffff",
            fontSize: "0.85rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
        >
          Book Production
        </a>
      </nav>

      {/* Hero Showcase with Video */}
      <section
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "80px 40px",
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
            filter: "brightness(0.4)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "960px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(20, 20, 20, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
              color: "#E63946",
            }}
          >
            <Clapperboard size={14} />
            <span>House 01 // Commercial Production</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 4.8vw, 4.6rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "#eae8e4",
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            <em style={{ fontStyle: "italic", fontWeight: 700 }}>Devaj Productions.</em>
            <br />
            Agile Creative Production for Businesses & Brands.
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)",
              lineHeight: 1.6,
              color: "rgba(234, 232, 228, 0.85)",
              maxWidth: "720px",
              margin: "0 auto 36px",
            }}
          >
            Agile creative production for small and medium-sized businesses and commercial brands.
            Together with Devaj Group, we cover the complete journey of visual content from the first idea to final delivery.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#capabilities"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "9999px",
                backgroundColor: "#eae8e4",
                color: "#151515",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        id="capabilities"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 40px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#E63946",
              marginBottom: "12px",
            }}
          >
            Focus & Deliverables
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 500,
              color: "#eae8e4",
            }}
          >
            Tailored for Contemporary Brands
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Fast-Turnaround Projects",
              desc: "Rapid deployment and lean production sprints delivering high-impact campaign assets with same-week turnaround.",
            },
            {
              title: "Reels & Social Content",
              desc: "Engineered for high algorithmic retention, vertical framing, and native storytelling for Instagram and TikTok.",
            },
            {
              title: "Product Shoots",
              desc: "Macro luxury focus, stylized lighting soundstages, and commercial tabletop execution that drives sales.",
            },
            {
              title: "Fashion & Lookbooks",
              desc: "Editorial motion, lifestyle lookbooks, and high-fashion aesthetics designed for modern apparel brands.",
            },
            {
              title: "Podcasts & Multi-Cam",
              desc: "Acoustically tuned studio recording, multi-angle 4K motorized PTZ cameras, and broadcast audio.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "14px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(230, 57, 70, 0.15)",
                  color: "#E63946",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  fontWeight: 700,
                }}
              >
                0{idx + 1}
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "12px", color: "#eae8e4" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "rgba(234, 232, 228, 0.65)", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Footer */}
      <footer
        id="inquire"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "60px 40px",
          textAlign: "center",
          backgroundColor: "#080808",
        }}
      >
        <p style={{ color: "rgba(234, 232, 228, 0.6)", marginBottom: "16px", fontSize: "0.9rem" }}>
          Devaj Productions is an autonomous production entity under Devaj Group.
        </p>
        <a
          href="mailto:production@devajgroup.com"
          style={{
            color: "#eae8e4",
            fontSize: "1.1rem",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          production@devajgroup.com →
        </a>
      </footer>
    </main>
  );
}
