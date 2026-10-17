"use client";

import React, { useState, useMemo } from "react";
import {
  Clapperboard,
  Film,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  X,
  Send,
  Camera,
  Layers,
  Zap,
} from "lucide-react";

export default function ProjectCalculatorSection() {
  const [selectedHouse, setSelectedHouse] = useState("productions"); // "productions" | "films"
  const [selectedScopeId, setSelectedScopeId] = useState("social-campaign");
  const [selectedTimelineId, setSelectedTimelineId] = useState("standard");
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState("form"); // "form" | "processing" | "success"
  const [clientForm, setClientForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Scopes for Devaj Productions
  const productionScopes = [
    {
      id: "social-campaign",
      title: "Commercial Reels & Social Campaign",
      desc: "High-retention vertical 9:16 content, hooks & fast viral campaign edits.",
      basePrice: 38000,
      days: "2 On-Set Days",
      deliverables: "6 Master Cuts (16:9 & 9:16)",
      icon: <Zap size={18} />,
    },
    {
      id: "product-tabletop",
      title: "Product & Tabletop Commercial",
      desc: "Macro lighting soundstages, liquid motion & stylized product reveals.",
      basePrice: 48000,
      days: "2 Soundstage Days",
      deliverables: "4 Master Commercial Cuts",
      icon: <Camera size={18} />,
    },
    {
      id: "fashion-lookbook",
      title: "Fashion & Motion Lookbook",
      desc: "Editorial pacing, lifestyle aesthetics & contemporary visual branding.",
      basePrice: 42000,
      days: "2 Location/Studio Days",
      deliverables: "5 Editorial Cuts",
      icon: <Sparkles size={18} />,
    },
    {
      id: "podcast-series",
      title: "4K Multi-Cam Podcast Series",
      desc: "Acoustically tuned Cairo studio, robotic PTZ 4K & multi-track audio.",
      basePrice: 28000,
      days: "1 Studio Recording Session",
      deliverables: "Full Episode + 10 Social Shorts",
      icon: <Clapperboard size={18} />,
    },
  ];

  // Scopes for Devaj Films
  const filmScopes = [
    {
      id: "prime-tvc",
      title: "Prime-Time TV Commercial (TVC)",
      desc: "Broadcast-scale commercial production with full gaffer & camera crew.",
      basePrice: 95000,
      days: "3 Dedicated Production Days",
      deliverables: "Broadcast Master (60s, 30s & 15s)",
      icon: <Film size={18} />,
    },
    {
      id: "corporate-doc",
      title: "Enterprise & Institutional Documentary",
      desc: "Executive vision, historical corporate archives & cinematic storytelling.",
      basePrice: 125000,
      days: "5 Filming Days",
      deliverables: "15-Min Doc + 3 Teaser Cuts",
      icon: <Layers size={18} />,
    },
    {
      id: "mega-aerial",
      title: "Mega-Project Aerial & Architectural Epic",
      desc: "Heavy-lift cinema drone fleet, FPV tracking & large-format camera glass.",
      basePrice: 110000,
      days: "4 Filming Days",
      deliverables: "Architectural Vision Epic",
      icon: <Camera size={18} />,
    },
    {
      id: "narrative-cinema",
      title: "Narrative Cinema & Cultural Archive",
      desc: "Auteur direction, Cairo soundstage sets & Dolby Atmos sound mastering.",
      basePrice: 165000,
      days: "7 Soundstage Days",
      deliverables: "Festival Master (DCI 4K HDR)",
      icon: <Sparkles size={18} />,
    },
  ];

  // Timelines
  const timelines = [
    { id: "rush", label: "Sprint Delivery", sub: "Rough cut in 48-72h", multiplier: 1.15 },
    { id: "standard", label: "Standard Production", sub: "2-3 Weeks delivery", multiplier: 1.0 },
    { id: "flexible", label: "Comprehensive Slate", sub: "4-6 Weeks detailed post", multiplier: 0.95 },
  ];

  // Active Scopes based on house
  const activeScopes = selectedHouse === "productions" ? productionScopes : filmScopes;

  // Selected Scope object
  const currentScope = useMemo(() => {
    return activeScopes.find((s) => s.id === selectedScopeId) || activeScopes[0];
  }, [activeScopes, selectedScopeId]);

  // Selected Timeline object
  const currentTimeline = useMemo(() => {
    return timelines.find((t) => t.id === selectedTimelineId) || timelines[1];
  }, [selectedTimelineId]);

  // Calculate Investment Total
  const calculatedPrice = useMemo(() => {
    const base = currentScope ? currentScope.basePrice : 40000;
    const mult = currentTimeline ? currentTimeline.multiplier : 1.0;
    return Math.round(base * mult);
  }, [currentScope, currentTimeline]);

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(calculatedPrice);
  }, [calculatedPrice]);

  const handleHouseChange = (house) => {
    setSelectedHouse(house);
    if (house === "productions") {
      setSelectedScopeId("social-campaign");
    } else {
      setSelectedScopeId("prime-tvc");
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setPaymentStep("processing");
    setTimeout(() => {
      setPaymentStep("success");
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Devaj Group,\nI configured a project quote on your website:\n• House: ${selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}\n• Scope: ${currentScope?.title}\n• Schedule: ${currentTimeline?.label}\n• Estimated Investment: ${formattedPrice}\n\nI would like to discuss our brief.`
  );

  return (
    <section
      id="calculator"
      style={{
        backgroundColor: "#F7F6F2",
        color: "#151515",
        position: "relative",
        zIndex: 26,
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "110px 0 135px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1480px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =================================================================== */}
        {/* 1. CLEAN EDITORIAL HEADER                                           */}
        {/* =================================================================== */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-jakarta), var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#E63946",
              backgroundColor: "#ffffff",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              marginBottom: "16px",
            }}
          >
            <span>Production Scoper // Live Estimate</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#111111",
              fontWeight: 500,
              margin: "0 0 16px 0",
            }}
          >
            Which house fits your story?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-jakarta), var(--font-sans)",
              fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
              lineHeight: 1.7,
              color: "rgba(21, 21, 21, 0.72)",
              margin: 0,
            }}
          >
            Select your creative house, deliverable scope, and timeline to receive an instant starting production estimate calibrated with Cairo soundstages and master gear.
          </p>
        </div>

        {/* =================================================================== */}
        {/* 2. MAIN STREAMLINED 2-COLUMN SCOPER LAYOUT                         */}
        {/* =================================================================== */}
        <div className="scoper-main-grid">
          {/* LEFT COLUMN: 3 Clean, Simple Steps */}
          <div className="scoper-builder-col">
            {/* ------------------------------------------------------------- */}
            {/* STEP 1: SELECT CREATIVE HOUSE (2 Clean, Distinct Cards)       */}
            {/* ------------------------------------------------------------- */}
            <div className="scoper-step-card">
              <div className="step-badge-row">
                <span className="step-num-pill">01</span>
                <span className="step-heading">Select Creative House</span>
              </div>

              <div className="houses-choice-grid">
                {/* House 01: Devaj Productions */}
                <button
                  type="button"
                  onClick={() => handleHouseChange("productions")}
                  className={`house-select-btn ${selectedHouse === "productions" ? "active" : ""}`}
                >
                  <div className="house-btn-header">
                    <div className="house-icon-box productions">
                      <Clapperboard size={20} />
                    </div>
                    <div className="house-radio-circle">
                      {selectedHouse === "productions" && <Check size={13} strokeWidth={3} />}
                    </div>
                  </div>

                  <div className="house-name-wrap">
                    <span className="house-main-name">Devaj</span>
                    <span className="house-sub-name prod">Productions</span>
                  </div>

                  <p className="house-quick-desc">
                    Commercial reels, social campaigns, product shoots &amp; high-velocity digital turnarounds.
                  </p>

                  <div className="house-foot-tag">
                    <span>From EGP 28,000</span>
                    <span>•</span>
                    <span>Agile Crew</span>
                  </div>
                </button>

                {/* House 02: Devaj Films */}
                <button
                  type="button"
                  onClick={() => handleHouseChange("films")}
                  className={`house-select-btn ${selectedHouse === "films" ? "active" : ""}`}
                >
                  <div className="house-btn-header">
                    <div className="house-icon-box films">
                      <Film size={20} />
                    </div>
                    <div className="house-radio-circle">
                      {selectedHouse === "films" && <Check size={13} strokeWidth={3} />}
                    </div>
                  </div>

                  <div className="house-name-wrap">
                    <span className="house-main-name">Devaj</span>
                    <span className="house-sub-name film">Films</span>
                  </div>

                  <p className="house-quick-desc">
                    Broadcast TVCs, corporate enterprise documentaries &amp; large-scale cinema narratives.
                  </p>

                  <div className="house-foot-tag">
                    <span>From EGP 95,000</span>
                    <span>•</span>
                    <span>Arri / RED Optics</span>
                  </div>
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* STEP 2: PROJECT SCOPE / DELIVERABLE (4 Clean, Spacious Cards)  */}
            {/* ------------------------------------------------------------- */}
            <div className="scoper-step-card">
              <div className="step-badge-row">
                <span className="step-num-pill">02</span>
                <span className="step-heading">
                  Project Deliverable &amp; Scope //{" "}
                  <span style={{ color: "#E63946" }}>
                    {selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}
                  </span>
                </span>
              </div>

              <div className="scopes-grid">
                {activeScopes.map((scope) => {
                  const isSelected = selectedScopeId === scope.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setSelectedScopeId(scope.id)}
                      className={`scope-select-card ${isSelected ? "selected" : ""}`}
                    >
                      <div className="scope-top-row">
                        <div className="scope-icon">{scope.icon}</div>
                        <div className="scope-check">
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>

                      <h4 className="scope-title">{scope.title}</h4>
                      <p className="scope-desc">{scope.desc}</p>

                      <div className="scope-meta-row">
                        <span className="scope-days-tag">{scope.days}</span>
                        <span className="scope-deliv-tag">{scope.deliverables}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* STEP 3: TIMELINE & PACE (3 Simple, Clear Pills)              */}
            {/* ------------------------------------------------------------- */}
            <div className="scoper-step-card">
              <div className="step-badge-row">
                <span className="step-num-pill">03</span>
                <span className="step-heading">Timeline &amp; Production Pace</span>
              </div>

              <div className="timelines-grid">
                {timelines.map((timeline) => {
                  const isSelected = selectedTimelineId === timeline.id;
                  return (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => setSelectedTimelineId(timeline.id)}
                      className={`timeline-pill-btn ${isSelected ? "active" : ""}`}
                    >
                      <div className="timeline-radio">
                        {isSelected && <Check size={11} strokeWidth={3} />}
                      </div>
                      <div className="timeline-text">
                        <span className="timeline-label">{timeline.label}</span>
                        <span className="timeline-sub">{timeline.sub}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* RIGHT COLUMN: LUXURY ESTIMATE CARD (Clean, High-Impact)         */}
          {/* =============================================================== */}
          <div className="scoper-summary-col">
            <div className="scoper-floating-ticket">
              {/* Header Badge */}
              <div className="ticket-top-tag">
                <span className="ticket-dot" />
                <span className="ticket-title">Devaj Production Estimate</span>
              </div>

              {/* Price Display */}
              <div className="ticket-price-block">
                <span className="price-label">Starting Project Investment</span>
                <div className="price-amount">{formattedPrice}</div>
                <span className="price-sub">Transparent baseline calibrated with full in-house infrastructure</span>
              </div>

              {/* Inclusions List */}
              <div className="ticket-specs-box">
                <div className="spec-item">
                  <span className="spec-label">Creative House:</span>
                  <span className="spec-val highlight">
                    {selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}
                  </span>
                </div>

                <div className="spec-item">
                  <span className="spec-label">Selected Scope:</span>
                  <span className="spec-val">{currentScope?.title}</span>
                </div>

                <div className="spec-item">
                  <span className="spec-label">Production Days:</span>
                  <span className="spec-val">{currentScope?.days}</span>
                </div>

                <div className="spec-item">
                  <span className="spec-label">Timeline Pace:</span>
                  <span className="spec-val">{currentTimeline?.label}</span>
                </div>

                <div className="spec-divider" />

                <div className="pipeline-includes-list">
                  <span className="includes-title">Every Devaj Commission Includes:</span>
                  <div className="include-chip">✓ Full Cairo Soundstage Access &amp; Crew</div>
                  <div className="include-chip">✓ Arri / RED Cinema Optical Packages</div>
                  <div className="include-chip">✓ In-House Color Grading &amp; Sound Master</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="ticket-action-buttons">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(true)}
                  className="ticket-primary-btn"
                >
                  <span>Book Production Brief</span>
                  <ArrowUpRight size={17} />
                </button>

                <a
                  href={`https://wa.me/201000000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ticket-whatsapp-btn"
                >
                  <MessageSquare size={16} />
                  <span>Direct Producer WhatsApp</span>
                </a>
              </div>

              {/* Trust Footer */}
              <div className="ticket-trust-row">
                <ShieldCheck size={14} color="#25D366" />
                <span>Scope calibrated directly with Executive Producers. Non-binding estimate.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. BOOKING BRIEF MODAL (Clean, Modern Form)                        */}
      {/* =================================================================== */}
      {paymentModalOpen && (
        <div className="modal-backdrop" onClick={() => setPaymentModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setPaymentModalOpen(false)}
              className="modal-close-btn"
            >
              <X size={18} />
            </button>

            {paymentStep === "form" && (
              <div>
                <span className="modal-eyebrow">Project Booking &amp; Scope Confirmation</span>
                <h3 className="modal-title">Lock In Your Production Schedule</h3>
                <p className="modal-desc">
                  Confirm your contact details. An Executive Producer will reach out with the calibrated treatment and camera package.
                </p>

                <div className="modal-summary-pill">
                  <div>
                    <span className="pill-small-label">Configured Scope:</span>
                    <strong className="pill-large-val">{currentScope?.title}</strong>
                  </div>
                  <span className="pill-price">{formattedPrice}</span>
                </div>

                <form onSubmit={handleConfirmBooking} className="modal-form">
                  <div className="form-grid-two">
                    <div>
                      <label className="field-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tarek Mansour"
                        value={clientForm.name}
                        onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                        className="field-input"
                      />
                    </div>
                    <div>
                      <label className="field-label">Brand / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Porsche Egypt, Clorox..."
                        value={clientForm.company}
                        onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-two">
                    <div>
                      <label className="field-label">WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+20 100 000 0000"
                        value={clientForm.phone}
                        onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                        className="field-input"
                      />
                    </div>
                    <div>
                      <label className="field-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="tarek@company.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Project Objectives / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Share campaign dates, target channels or special requirements..."
                      value={clientForm.notes}
                      onChange={(e) => setClientForm({ ...clientForm, notes: e.target.value })}
                      className="field-input textarea"
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    <span>Submit Production Brief</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}

            {paymentStep === "processing" && (
              <div className="modal-loading-state">
                <div className="loading-spinner" />
                <h4>Calibrating Production Scope...</h4>
                <p>Registering brief with Devaj Cairo Soundstage Desk</p>
              </div>
            )}

            {paymentStep === "success" && (
              <div className="modal-success-state">
                <CheckCircle2 size={54} color="#25D366" />
                <h3>Brief Confirmed Successfully!</h3>
                <p>
                  Thank you, <strong>{clientForm.name}</strong>. Your production request for{" "}
                  <strong>{clientForm.company}</strong> ({currentScope?.title}) has been logged.
                </p>
                <div className="success-contact-box">
                  <span>Our Executive Producer will contact you via WhatsApp shortly at:</span>
                  <strong>{clientForm.phone}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPaymentModalOpen(false);
                    setPaymentStep("form");
                  }}
                  className="modal-submit-btn"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. COMPONENT STYLES (Clean, Luxurious, Non-Cluttered)               */}
      {/* =================================================================== */}
      <style jsx>{`
        .scoper-main-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 36px;
          align-items: flex-start;
        }

        .scoper-builder-col {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .scoper-step-card {
          background: #ffffff;
          border-radius: 26px;
          padding: 32px 34px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .step-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }

        .step-num-pill {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #151515;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-heading {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.05rem;
          font-weight: 800;
          color: #111111;
          letter-spacing: -0.01em;
        }

        /* STEP 1: Two House Cards */
        .houses-choice-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .house-select-btn {
          background: #F7F6F2;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          padding: 24px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .house-select-btn:hover {
          border-color: rgba(230, 57, 70, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
        }

        .house-select-btn.active {
          background: #ffffff;
          border-color: #E63946;
          box-shadow: 0 12px 32px rgba(230, 57, 70, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .house-btn-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .house-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #151515;
          color: #ffffff;
        }

        .house-icon-box.productions {
          background: #E63946;
          color: #ffffff;
        }

        .house-icon-box.films {
          background: #151515;
          color: #ffffff;
        }

        .house-radio-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        .house-select-btn.active .house-radio-circle {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
        }

        .house-name-wrap {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 8px;
        }

        .house-main-name {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.25rem;
          font-weight: 800;
          color: #111111;
        }

        .house-sub-name {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .house-sub-name.prod {
          color: #E63946;
        }

        .house-sub-name.film {
          color: #111111;
        }

        .house-quick-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.55;
          color: rgba(21, 21, 21, 0.68);
          margin: 0 0 16px 0;
          flex: 1;
        }

        .house-foot-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.76rem;
          font-weight: 700;
          color: rgba(21, 21, 21, 0.6);
          padding-top: 12px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        /* STEP 2: Scopes Grid (4 Clean Cards) */
        .scopes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .scope-select-card {
          background: #F7F6F2;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 18px;
          padding: 22px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .scope-select-card:hover {
          border-color: rgba(230, 57, 70, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
        }

        .scope-select-card.selected {
          background: #ffffff;
          border-color: #E63946;
          box-shadow: 0 10px 28px rgba(230, 57, 70, 0.1), 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .scope-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .scope-icon {
          color: #E63946;
        }

        .scope-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 0, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        .scope-select-card.selected .scope-check {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
        }

        .scope-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.02rem;
          font-weight: 750;
          color: #111111;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .scope-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.84rem;
          line-height: 1.5;
          color: rgba(21, 21, 21, 0.65);
          margin: 0 0 16px 0;
          flex: 1;
        }

        .scope-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
        }

        .scope-days-tag {
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.05);
          color: #111111;
        }

        .scope-deliv-tag {
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(230, 57, 70, 0.08);
          color: #E63946;
        }

        /* STEP 3: Timelines Grid */
        .timelines-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
        }

        .timeline-pill-btn {
          background: #F7F6F2;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 14px;
          padding: 16px 18px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .timeline-pill-btn:hover {
          border-color: rgba(0, 0, 0, 0.2);
        }

        .timeline-pill-btn.active {
          background: #ffffff;
          border-color: #151515;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
        }

        .timeline-radio {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          flex-shrink: 0;
        }

        .timeline-pill-btn.active .timeline-radio {
          background: #151515;
          border-color: #151515;
          color: #ffffff;
        }

        .timeline-text {
          display: flex;
          flex-direction: column;
        }

        .timeline-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 750;
          color: #111111;
        }

        .timeline-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.74rem;
          color: rgba(21, 21, 21, 0.6);
        }

        /* RIGHT COLUMN: Luxury Floating Summary */
        .scoper-summary-col {
          position: sticky;
          top: 100px;
        }

        .scoper-floating-ticket {
          background: #ffffff;
          border-radius: 30px;
          padding: 38px 34px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .ticket-top-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(230, 57, 70, 0.08);
          margin-bottom: 24px;
        }

        .ticket-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
        }

        .ticket-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #E63946;
        }

        .ticket-price-block {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 24px;
          margin-bottom: 24px;
        }

        .price-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(21, 21, 21, 0.6);
          display: block;
          margin-bottom: 6px;
        }

        .price-amount {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 3.2vw, 3rem);
          font-weight: 500;
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .price-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          color: rgba(21, 21, 21, 0.65);
          display: block;
          line-height: 1.4;
        }

        .ticket-specs-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.86rem;
        }

        .spec-label {
          color: rgba(21, 21, 21, 0.6);
          font-weight: 600;
        }

        .spec-val {
          color: #111111;
          font-weight: 700;
          text-align: right;
        }

        .spec-val.highlight {
          color: #E63946;
        }

        .spec-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.06);
          margin: 6px 0;
        }

        .pipeline-includes-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 4px;
        }

        .includes-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #111111;
          margin-bottom: 4px;
        }

        .include-chip {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          color: rgba(21, 21, 21, 0.75);
          font-weight: 600;
        }

        /* Action Buttons */
        .ticket-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .ticket-primary-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 9999px;
          background-color: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 8px 22px rgba(230, 57, 70, 0.3);
        }

        .ticket-primary-btn:hover {
          background-color: #151515;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
        }

        .ticket-whatsapp-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px 24px;
          border-radius: 9999px;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.14);
          color: #151515;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .ticket-whatsapp-btn:hover {
          background-color: #25D366;
          color: #ffffff;
          border-color: #25D366;
          transform: translateY(-2px);
        }

        .ticket-trust-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          color: rgba(21, 21, 21, 0.6);
          line-height: 1.4;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-card {
          background: #ffffff;
          border-radius: 30px;
          padding: 42px;
          max-width: 620px;
          width: 100%;
          position: relative;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          animation: modalPop 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #E63946;
          display: block;
          margin-bottom: 6px;
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 500;
          color: #111111;
          margin: 0 0 10px 0;
        }

        .modal-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.9rem;
          color: rgba(21, 21, 21, 0.7);
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .modal-summary-pill {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #F7F6F2;
          padding: 16px 20px;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
        }

        .pill-small-label {
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          color: rgba(21, 21, 21, 0.6);
          display: block;
        }

        .pill-large-val {
          font-size: 0.95rem;
          font-weight: 800;
          color: #111111;
        }

        .pill-price {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          color: #E63946;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-grid-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .field-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          color: #111111;
          display: block;
          margin-bottom: 6px;
        }

        .field-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.9rem;
          color: #111111;
          outline: none;
        }

        .field-input.textarea {
          resize: vertical;
        }

        .modal-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 9999px;
          background-color: #151515;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          margin-top: 6px;
          transition: background-color 0.25s ease;
        }

        .modal-submit-btn:hover {
          background-color: #E63946;
        }

        .modal-loading-state,
        .modal-success-state {
          text-align: center;
          padding: 40px 20px;
        }

        .loading-spinner {
          width: 44px;
          height: 44px;
          border: 3px solid rgba(230, 57, 70, 0.2);
          border-top-color: #E63946;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-contact-box {
          background: #F7F6F2;
          padding: 16px;
          border-radius: 14px;
          margin: 20px 0 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.88rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .scoper-main-grid {
            grid-template-columns: 1fr;
          }
          .scoper-summary-col {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .houses-choice-grid,
          .scopes-grid,
          .timelines-grid,
          .form-grid-two {
            grid-template-columns: 1fr;
          }
          .scoper-step-card {
            padding: 24px 20px;
          }
          .scoper-floating-ticket {
            padding: 28px 22px;
          }
          .modal-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </section>
  );
}
