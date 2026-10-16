"use client";

import React from "react";

export default function NextSectionPreview() {
  const strategicOfferings = [
    {
      index: "01",
      title: "Real-Time Brands",
      description: "Brands built as living systems to move at the speed of culture.",
      href: "#solutions",
    },
    {
      index: "02",
      title: "Media Acceleration",
      description: "Unifying intelligence, content, media, and measurement into one performance system.",
      href: "#solutions",
    },
    {
      index: "03",
      title: "Marketing Orchestration",
      description: "Connected customer experiences powered by enterprise data and agentic AI.",
      href: "#solutions",
    },
    {
      index: "04",
      title: "Devaj Flow",
      description: "Intelligent workflows, AI pipelines, and scaled creative production across global markets.",
      href: "#solutions",
    },
  ];

  return (
    <div id="offerings" style={{ backgroundColor: "#eae8e4", color: "#2d2d2d", position: "relative", zIndex: 10 }}>
      {/* =================================================================== */}
      {/* STRATEGIC OFFERINGS SECTION (Directly follows Hero on monks.com)   */}
      {/* =================================================================== */}
      <section
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "110px 48px 120px",
        }}
      >
        <div style={{ maxWidth: "880px", marginBottom: "64px" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(45, 45, 45, 0.55)",
              marginBottom: "18px",
            }}
          >
            Core Capabilities
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#2d2d2d",
              margin: 0,
            }}
          >
            Your trusted partner for innovation across four strategic service offerings:
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
          }}
        >
          {strategicOfferings.map((item) => (
            <a
              key={item.index}
              href={item.href}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(45, 45, 45, 0.08)",
                borderRadius: "16px",
                padding: "36px 32px",
                textDecoration: "none",
                color: "#2d2d2d",
                minHeight: "260px",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(45, 45, 45, 0.08)";
                e.currentTarget.style.borderColor = "rgba(45, 45, 45, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(45, 45, 45, 0.08)";
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "rgba(45, 45, 45, 0.45)",
                    display: "block",
                    marginBottom: "24px",
                  }}
                >
                  {item.index}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.45rem",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    marginBottom: "12px",
                    color: "#2d2d2d",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.98rem",
                    lineHeight: 1.55,
                    color: "rgba(45, 45, 45, 0.72)",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "28px",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
