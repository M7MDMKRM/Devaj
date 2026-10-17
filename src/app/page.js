"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import AboutGroupSection from "@/components/AboutGroupSection";
import TwoHousesSection from "@/components/TwoHousesSection";
import StrategicOfferingsSection from "@/components/StrategicOfferingsSection";
import ProjectCalculatorSection from "@/components/ProjectCalculatorSection";
import SectorsSection from "@/components/SectorsSection";
import ClientsPartnersSection from "@/components/ClientsPartnersSection";

export default function Home() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  // Global Scroll Reveal Observer: reveals elements once as user scrolls smoothly
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleConnectClick = (e) => {
    e?.preventDefault();
    const connectSec = document.getElementById("connect");
    if (connectSec) {
      connectSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      dir="ltr"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F6F2",
        color: "#151515",
        position: "relative",
      }}
    >
      {/* 1. Devaj Group Official Navigation */}
      <Navbar />

      {/* 2. Cinematic Hero Header */}
      <CinematicHero onConnectClick={handleConnectClick} />

      {/* 3. Who We Are: Devaj Group Identity & Core Vision (تعريف الشركة) */}
      <AboutGroupSection />

      {/* 4. One Group, Two Creative Houses: Devaj Productions & Devaj Films */}
      <TwoHousesSection />

      {/* 5. Strategic Service Offerings (الخدمات - 4 كروت) */}
      <StrategicOfferingsSection />

      {/* 6. Which House Fits Your Story: Interactive Project Calculator & Payment Booking (الـ Payment) */}
      <ProjectCalculatorSection />

      {/* 7. Brands We Have Delivered For (الشركات - 6 كروت سينمائية) */}
      <ClientsPartnersSection />

      {/* 8. Sectors We Serve (القطاعات التي نخدمها) */}
      <SectorsSection />

      {/* 9. Official Devaj Group Contact & Footer (Pure White Theme) */}
      <footer
        id="connect"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#151515",
          position: "relative",
          zIndex: 30,
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "120px 48px 48px",
        }}
      >
        <div style={{ maxWidth: "1560px", margin: "0 auto" }}>
          {/* Main Contact Editorial Headline & Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "40px",
              paddingBottom: "80px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              marginBottom: "80px",
            }}
          >
            <div style={{ maxWidth: "800px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#E63946",
                  marginBottom: "16px",
                }}
              >
                Let&apos;s Connect
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "#111111",
                  fontWeight: 500,
                  fontStyle: "normal",
                  margin: 0,
                }}
              >
                Start your next production with Devaj
                <span style={{ color: "#E63946" }}>.</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "clamp(1.02rem, 1.25vw, 1.18rem)",
                  lineHeight: 1.6,
                  color: "rgba(21, 21, 21, 0.72)",
                  marginTop: "18px",
                  marginBottom: 0,
                  maxWidth: "620px",
                }}
              >
                From large-scale cinema commercials to agile digital campaigns and studio soundstages — our teams are ready from the first idea to final cut.
              </p>
            </div>

            {/* Direct Contact Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: "280px" }}>
              <a
                href="https://wa.me/201014049339?text=Hello%20Devaj%20Group,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  padding: "16px 36px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 24px rgba(37, 211, 102, 0.28)",
                }}
              >
                <span>Chat via WhatsApp</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </a>

              <a
                href="mailto:contact@devajgroup.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "#F7F6F2",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  color: "#111111",
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  padding: "15px 32px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <span>contact@devajgroup.com</span>
              </a>
            </div>
          </div>

          {/* Links & Company Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "54px",
              marginBottom: "72px",
            }}
          >
            {/* Logo Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <img
                  src="/images/devaj-logo.png"
                  alt="Devaj Group"
                  style={{
                    height: "54px",
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p
                style={{
                  color: "rgba(21, 21, 21, 0.68)",
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                  maxWidth: "360px",
                }}
              >
                From the first frame of an idea to the final cut. Two creative houses united under one vision.
              </p>
            </div>

            {/* Solutions Links */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "22px",
                  color: "#111111",
                }}
              >
                Houses &amp; Craft
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <a href="#houses" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Creative House 01 — Devaj Productions</a>
                <a href="#houses" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Creative House 02 — Devaj Films</a>
                <a href="#offerings" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Strategic Capabilities</a>
                <a href="#sectors" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Sectors We Serve</a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "22px",
                  color: "#111111",
                }}
              >
                Devaj Group
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <a href="#offerings" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>About The Group</a>
                <a href="#houses" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Our Work</a>
                <a href="#sectors" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Our Philosophy</a>
                <a href="mailto:careers@devajgroup.com" style={{ color: "rgba(21, 21, 21, 0.72)", textDecoration: "none" }}>Careers</a>
              </div>
            </div>

            {/* Connect Column */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-jakarta), var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "22px",
                  color: "#111111",
                }}
              >
                Direct Office
              </h4>
              <p style={{ color: "rgba(21, 21, 21, 0.72)", fontSize: "0.95rem", marginBottom: "8px" }}>
                Cairo, Egypt
              </p>
              <p style={{ color: "rgba(21, 21, 21, 0.72)", fontSize: "0.95rem", marginBottom: "16px" }}>
                Tel: +20 101 404 9339
              </p>
              <a
                href="mailto:contact@devajgroup.com"
                style={{
                  color: "#111111",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                contact@devajgroup.com →
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(0, 0, 0, 0.08)",
              paddingTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              fontSize: "0.85rem",
              color: "rgba(21, 21, 21, 0.5)",
            }}
          >
            <div>
              © 2026 Devaj Group. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <span>Privacy Notice</span>
              <span>Terms &amp; Conditions</span>
              <span>Cookie Settings</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
