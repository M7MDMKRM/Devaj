"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Film,
  Clapperboard,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  CreditCard,
  ShieldCheck,
  Send,
  MessageSquare,
  Lock,
  Building,
  Calendar,
  Layers,
  Zap,
  Plus,
  Minus,
  Check,
  Sliders,
  Award,
} from "lucide-react";

export default function ProjectCalculatorSection() {
  // 1. Calculator State
  const [selectedHouse, setSelectedHouse] = useState("productions"); // 'productions' | 'films'
  const [shootingDays, setShootingDays] = useState(2);
  const [deliverables, setDeliverables] = useState(4);
  const [quality, setQuality] = useState("low"); // STRICTLY 'low' | 'high' per user request (no middle)
  const [selectedPost, setSelectedPost] = useState(["color", "sound"]);

  // 2. Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState("form"); // 'form' | 'processing' | 'success'
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' | 'instapay' | 'deposit'
  const [clientForm, setClientForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [bookingRefNumber, setBookingRefNumber] = useState("DVJ-784291");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (paymentModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [paymentModalOpen]);

  // Post-production add-ons definition
  const postOptions = [
    { id: "color", label: "Master Color Grade", price: 6500, priceTag: "+6.5k" },
    { id: "sound", label: "Sound Design & Foley", price: 5500, priceTag: "+5.5k" },
    { id: "vfx", label: "VFX & Motion Graphics", price: 11000, priceTag: "+11k" },
    { id: "vo", label: "Studio Voice-Over", price: 5000, priceTag: "+5k" },
    { id: "3d", label: "3D Product Modeling", price: 13500, priceTag: "+13.5k" },
    { id: "fast", label: "48h Rush Delivery", price: 9000, priceTag: "+9k" },
  ];

  const togglePostOption = (id) => {
    setSelectedPost((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 3. Dynamic Calculation Engine in EGP
  const calculatedEstimate = useMemo(() => {
    let dayRate = 0;
    let deliverableRate = 0;

    if (selectedHouse === "productions") {
      dayRate = quality === "low" ? 22000 : 42000;
      deliverableRate = quality === "low" ? 3000 : 6000;
    } else {
      dayRate = quality === "low" ? 48000 : 88000;
      deliverableRate = quality === "low" ? 6500 : 13000;
    }

    const baseCost = dayRate * shootingDays;
    const deliverablesCost = deliverableRate * deliverables;
    const postCost = selectedPost.reduce((acc, id) => {
      const opt = postOptions.find((p) => p.id === id);
      return acc + (opt ? opt.price : 0);
    }, 0);

    return baseCost + deliverablesCost + postCost;
  }, [selectedHouse, shootingDays, deliverables, quality, selectedPost]);

  const formattedEstimate = useMemo(() => {
    return new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(calculatedEstimate);
  }, [calculatedEstimate]);

  // Handle Form Submission / Payment Confirmation
  const handleProceedToPayment = (e) => {
    if (e) e.preventDefault();
    setBookingRefNumber(`DVJ-${Math.floor(100000 + Math.random() * 900000)}`);
    setPaymentModalOpen(true);
    setPaymentStep("form");
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setPaymentStep("processing");
    setTimeout(() => {
      setPaymentStep("success");
    }, 1400);
  };

  return (
    <section
      id="calculator"
      style={{
        backgroundColor: "#F7F6F2",
        color: "#151515",
        position: "relative",
        zIndex: 26,
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "120px 0 140px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =================================================================== */}
        {/* 1. EDITORIAL HEADER & TITLE                                         */}
        {/* =================================================================== */}
        <div style={{ marginBottom: "56px" }}>
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
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#E63946",
                boxShadow: "0 0 10px rgba(230, 57, 70, 0.5)",
              }}
            />
            <span>Production Configurator</span>
            <span style={{ fontSize: "1.1rem" }}>•</span>
            <span style={{ color: "rgba(21, 21, 21, 0.5)", fontWeight: 600 }}>Live Budget Estimator</span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "28px",
            }}
          >
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
              Which house fits your story
              <span style={{ color: "#E63946" }}>?</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-jakarta), var(--font-sans)",
                fontSize: "clamp(0.98rem, 1.15vw, 1.15rem)",
                lineHeight: 1.6,
                color: "rgba(21, 21, 21, 0.68)",
                maxWidth: "520px",
                margin: 0,
              }}
            >
              Configure your creative scale, shooting schedule, and post-production craft. Our executive producers will calibrate the exact brief with you.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. MAIN 2-ZONE LUXURY CONFIGURATOR LAYOUT                           */}
        {/* =================================================================== */}
        <div className="luxury-calculator-grid reveal-scale">
          {/* ================================================================= */}
          {/* ZONE A: INTERACTIVE CONFIGURATOR (LEFT 64%)                       */}
          {/* ================================================================= */}
          <div className="config-builder-column">
            {/* STEP 1: SELECT CREATIVE HOUSE (Dual Horizontal Cards) */}
            <div className="config-card-section">
              <div className="section-head-row">
                <div className="step-tag-pill">
                  <span className="step-number">01</span>
                  <span className="step-label">Creative House</span>
                </div>
                <span className="section-tip">Choose the engine best aligned with your deliverable</span>
              </div>

              <div className="houses-dual-grid">
                {/* Devaj Productions Card */}
                <button
                  type="button"
                  onClick={() => setSelectedHouse("productions")}
                  className={`house-tier-card ${selectedHouse === "productions" ? "selected" : ""}`}
                >
                  <div className="tier-card-header">
                    <div className="tier-icon-wrap productions">
                      <Clapperboard size={20} />
                    </div>
                    <div className="tier-radio-indicator">
                      {selectedHouse === "productions" && <Check size={13} color="#ffffff" strokeWidth={3} />}
                    </div>
                  </div>

                  <div className="tier-brand-title">
                    <span className="tier-brand-name">Devaj</span>
                    <span className="tier-brand-sub productions">Productions</span>
                  </div>

                  <span className="tier-badge">Social • Commercials • Agile</span>

                  <p className="tier-description">
                    Fast, high-impact storytelling for digital campaigns, brand reels, social-first content & rapid turnarounds.
                  </p>

                  <div className="tier-footer-specs">
                    <span>⚡ 5-Day Delivery</span>
                    <span>•</span>
                    <span>4K Cinema Setup</span>
                  </div>
                </button>

                {/* Devaj Films Card */}
                <button
                  type="button"
                  onClick={() => setSelectedHouse("films")}
                  className={`house-tier-card ${selectedHouse === "films" ? "selected" : ""}`}
                >
                  <div className="tier-card-header">
                    <div className="tier-icon-wrap films">
                      <Film size={20} />
                    </div>
                    <div className="tier-radio-indicator">
                      {selectedHouse === "films" && <Check size={13} color="#ffffff" strokeWidth={3} />}
                    </div>
                  </div>

                  <div className="tier-brand-title">
                    <span className="tier-brand-name">Devaj</span>
                    <span className="tier-brand-sub films">Films</span>
                  </div>

                  <span className="tier-badge">Cinema • TVCs • Mega-Scale</span>

                  <p className="tier-description">
                    Master-grade cinematic productions with full crew, heavy-lift drone aerials, corporate epics & television commercials.
                  </p>

                  <div className="tier-footer-specs">
                    <span>🎬 Full Crew & Grip</span>
                    <span>•</span>
                    <span>Arri / RED Anamorphic</span>
                  </div>
                </button>
              </div>
            </div>

            {/* STEP 2: PRODUCTION SCHEDULE & DELIVERABLES */}
            <div className="config-card-section">
              <div className="section-head-row">
                <div className="step-tag-pill">
                  <span className="step-number">02</span>
                  <span className="step-label">Production Scope</span>
                </div>
                <span className="section-tip">Adjust on-set shooting days and final video deliverables</span>
              </div>

              <div className="sliders-twin-grid">
                {/* Control 1: Shooting Days */}
                <div className="slider-control-box">
                  <div className="slider-title-row">
                    <div>
                      <span className="control-label">Shooting Schedule</span>
                      <span className="control-subtext">On-set production days</span>
                    </div>
                    <div className="counter-stepper-wrap">
                      <button
                        type="button"
                        aria-label="Decrease shooting days"
                        onClick={() => setShootingDays((prev) => Math.max(1, prev - 1))}
                        disabled={shootingDays <= 1}
                        className="stepper-btn"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="stepper-val">{shootingDays} {shootingDays === 1 ? "Day" : "Days"}</span>
                      <button
                        type="button"
                        aria-label="Increase shooting days"
                        onClick={() => setShootingDays((prev) => Math.min(10, prev + 1))}
                        disabled={shootingDays >= 10}
                        className="stepper-btn"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="slider-track-wrap">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={shootingDays}
                      onChange={(e) => setShootingDays(Number(e.target.value))}
                      className="studio-range-slider"
                      aria-label="Select number of shooting days"
                      style={{
                        background: `linear-gradient(to right, #E63946 0%, #E63946 ${
                          ((shootingDays - 1) / 9) * 100
                        }%, #E9E7E0 ${((shootingDays - 1) / 9) * 100}%, #E9E7E0 100%)`,
                      }}
                    />
                    <div className="slider-milestones">
                      <span className={shootingDays === 1 ? "active" : ""}>1 Day</span>
                      <span className={shootingDays === 2 ? "active" : ""}>2 Days</span>
                      <span className={shootingDays === 5 ? "active" : ""}>5 Days</span>
                      <span className={shootingDays === 10 ? "active" : ""}>10 Days</span>
                    </div>
                  </div>
                </div>

                {/* Control 2: Deliverables */}
                <div className="slider-control-box">
                  <div className="slider-title-row">
                    <div>
                      <span className="control-label">Final Deliverables</span>
                      <span className="control-subtext">Master cuts & aspect ratios</span>
                    </div>
                    <div className="counter-stepper-wrap">
                      <button
                        type="button"
                        aria-label="Decrease deliverables"
                        onClick={() => setDeliverables((prev) => Math.max(1, prev - 1))}
                        disabled={deliverables <= 1}
                        className="stepper-btn"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="stepper-val">{deliverables} {deliverables === 1 ? "Cut" : "Cuts"}</span>
                      <button
                        type="button"
                        aria-label="Increase deliverables"
                        onClick={() => setDeliverables((prev) => Math.min(15, prev + 1))}
                        disabled={deliverables >= 15}
                        className="stepper-btn"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="slider-track-wrap">
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="1"
                      value={deliverables}
                      onChange={(e) => setDeliverables(Number(e.target.value))}
                      className="studio-range-slider"
                      aria-label="Select number of deliverables"
                      style={{
                        background: `linear-gradient(to right, #E63946 0%, #E63946 ${
                          ((deliverables - 1) / 14) * 100
                        }%, #E9E7E0 ${((deliverables - 1) / 14) * 100}%, #E9E7E0 100%)`,
                      }}
                    />
                    <div className="slider-milestones">
                      <span className={deliverables === 1 ? "active" : ""}>1 Cut</span>
                      <span className={deliverables === 4 ? "active" : ""}>4 Cuts</span>
                      <span className={deliverables === 8 ? "active" : ""}>8 Cuts</span>
                      <span className={deliverables === 15 ? "active" : ""}>15 Cuts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: PRODUCTION QUALITY TIER (Low vs High) */}
            <div className="config-card-section">
              <div className="section-head-row">
                <div className="step-tag-pill">
                  <span className="step-number">03</span>
                  <span className="step-label">Quality Package</span>
                </div>
                <span className="section-tip">Select gear package & crew tier</span>
              </div>

              <div className="quality-package-grid">
                {/* Standard / Agile Tier */}
                <button
                  type="button"
                  onClick={() => setQuality("low")}
                  className={`package-tier-btn ${quality === "low" ? "selected" : ""}`}
                >
                  <div className="package-top-bar">
                    <div className="package-name-group">
                      <span className="package-title">Standard / Agile Package</span>
                      <span className="package-level-tag low">Standard Tier</span>
                    </div>
                    <div className="package-check-indicator">
                      {quality === "low" && <Check size={14} color="#ffffff" strokeWidth={3} />}
                    </div>
                  </div>
                  <p className="package-summary">
                    Optimized for rapid turnaround, digital marketing & social-first campaigns with a lean 4K production crew.
                  </p>
                  <div className="package-equipment-pills">
                    <span>4K Cinema Rig</span>
                    <span>Agile Sound & Light</span>
                    <span>Fast Cut</span>
                  </div>
                </button>

                {/* Cinema Master Tier */}
                <button
                  type="button"
                  onClick={() => setQuality("high")}
                  className={`package-tier-btn ${quality === "high" ? "selected" : ""}`}
                >
                  <div className="package-top-bar">
                    <div className="package-name-group">
                      <span className="package-title">Cinema Master Package</span>
                      <span className="package-level-tag high">Master Tier</span>
                    </div>
                    <div className="package-check-indicator">
                      {quality === "high" && <Check size={14} color="#ffffff" strokeWidth={3} />}
                    </div>
                  </div>
                  <p className="package-summary">
                    Broadcast TVC & high-end corporate film standard with Master D.O.P., heavy lighting truck, and complete cinema crew.
                  </p>
                  <div className="package-equipment-pills">
                    <span>Arri / RED Anamorphic</span>
                    <span>Full Gaffer & Grip</span>
                    <span>ACES Color</span>
                  </div>
                </button>
              </div>
            </div>

            {/* STEP 4: POST-PRODUCTION & STUDIO CRAFT */}
            <div className="config-card-section" style={{ borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
              <div className="section-head-row">
                <div className="step-tag-pill">
                  <span className="step-number">04</span>
                  <span className="step-label">Post-Production Craft</span>
                </div>
                <span className="section-tip">Select all specialized finishing crafts required</span>
              </div>

              <div className="craft-pills-flow">
                {postOptions.map((opt) => {
                  const isSelected = selectedPost.includes(opt.id);
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => togglePostOption(opt.id)}
                      className={`craft-option-pill ${isSelected ? "selected" : ""}`}
                    >
                      <div className="craft-pill-check">
                        {isSelected ? <Check size={12} color="#ffffff" strokeWidth={3} /> : <Plus size={12} />}
                      </div>
                      <span className="craft-pill-title">{opt.label}</span>
                      <span className="craft-pill-price">{opt.priceTag}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* ZONE B: FLOATING STUDIO QUOTATION TICKET (RIGHT 36%)              */}
          {/* ================================================================= */}
          <div className="ticket-summary-column">
            <div className="floating-studio-ticket">
              {/* Ticket Top Ribbon */}
              <div className="ticket-top-ribbon">
                <div className="ticket-seal">
                  <Sparkles size={14} color="#E63946" />
                  <span>Devaj Production Ticket</span>
                </div>
                <span className="ticket-live-badge">Live Quote</span>
              </div>

              {/* Primary Estimated Investment */}
              <div className="ticket-investment-display">
                <span className="investment-label">Estimated Production Investment</span>
                <div className="investment-amount-row">
                  <span className="investment-amount-val">{formattedEstimate}</span>
                </div>
                <p className="investment-subtext">
                  Transparent starting estimate based on calibrated days & deliverable requirements.
                </p>
              </div>

              {/* Configured Parameters Breakdown */}
              <div className="ticket-spec-list">
                <div className="spec-row">
                  <span className="spec-key">Creative House</span>
                  <span className="spec-val house-badge">
                    {selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}
                  </span>
                </div>

                <div className="spec-row">
                  <span className="spec-key">Shooting Schedule</span>
                  <span className="spec-val">
                    <strong>{shootingDays}</strong> {shootingDays === 1 ? "Day on set" : "Days on set"}
                  </span>
                </div>

                <div className="spec-row">
                  <span className="spec-key">Master Deliverables</span>
                  <span className="spec-val">
                    <strong>{deliverables}</strong> {deliverables === 1 ? "Final Video Cut" : "Final Video Cuts"}
                  </span>
                </div>

                <div className="spec-row">
                  <span className="spec-key">Package Tier</span>
                  <span className="spec-val">
                    {quality === "low" ? "Standard / Agile" : "Cinema Master Tier"}
                  </span>
                </div>

                <div className="spec-row" style={{ alignItems: "flex-start" }}>
                  <span className="spec-key">Finishing Craft</span>
                  <span className="spec-val craft-tags">
                    {selectedPost.length === 0
                      ? "Base Cut Only"
                      : selectedPost
                          .map((id) => postOptions.find((p) => p.id === id)?.label)
                          .filter(Boolean)
                          .join(", ")}
                  </span>
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="ticket-action-buttons">
                <button
                  type="button"
                  onClick={handleProceedToPayment}
                  className="ticket-primary-cta"
                >
                  <span>Proceed to Booking & Brief</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`https://wa.me/201014049339?text=${encodeURIComponent(
                    `Hello Devaj Group, I ran the Project Calculator for ${
                      selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"
                    }: ${shootingDays} Shoot Days, ${deliverables} Deliverables, ${quality.toUpperCase()} Tier. Estimate: ${formattedEstimate}. I would like to schedule a producer consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ticket-whatsapp-cta"
                >
                  <MessageSquare size={16} />
                  <span>Direct Producer WhatsApp Call</span>
                </a>
              </div>

              {/* Trust & Guarantee Notes */}
              <div className="ticket-guarantee-box">
                <div className="guarantee-bullet">
                  <ShieldCheck size={14} color="#128C7E" />
                  <span>Free executive producer consultation included</span>
                </div>
                <div className="guarantee-bullet">
                  <CheckCircle2 size={14} color="#128C7E" />
                  <span>Non-binding estimate • Scope calibrated before contracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. PAYMENT & BOOKING MODAL SCREEN                                   */}
      {/* =================================================================== */}
      {paymentModalOpen && (
        <div className="payment-modal-backdrop" onClick={() => setPaymentModalOpen(false)}>
          <div className="payment-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              type="button"
              className="payment-close-btn"
              onClick={() => setPaymentModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Flow Step 1: Form & Method Selection */}
            {paymentStep === "form" && (
              <div className="payment-form-view">
                <div className="payment-modal-header">
                  <span className="payment-eyebrow">
                    <CheckCircle2 size={15} />
                    <span>Instant Studio Alignment</span>
                  </span>
                  <h3 className="payment-modal-title">Book Production Brief</h3>
                  <p className="payment-modal-sub">
                    Lock in your starting parameters with <strong>Devaj Group</strong>. Our production desk will contact you within 2 hours to confirm call sheets and creative alignment.
                  </p>
                </div>

                {/* Estimate Summary Pill */}
                <div className="payment-summary-pill">
                  <div>
                    <span className="summary-label">Estimated Production Total:</span>
                    <span className="summary-amount">{formattedEstimate}</span>
                  </div>
                  <div className="summary-details-chip">
                    {selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"} • {shootingDays} Days • {deliverables} Deliverables
                  </div>
                </div>

                {/* Booking Contact Form */}
                <form onSubmit={handleConfirmBooking}>
                  <div className="form-fields-grid">
                    <div>
                      <label className="input-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tarek Mansour"
                        value={clientForm.name}
                        onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">Brand / Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Porsche Egypt, Eskan Misr..."
                        value={clientForm.company}
                        onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">WhatsApp Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+20 10X XXX XXXX"
                        value={clientForm.phone}
                        onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>
                  </div>

                  {/* Payment Method Tabs */}
                  <div className="payment-methods-section">
                    <label className="input-label">Preferred Booking Channel:</label>
                    <div className="methods-tabs-grid">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`method-tab-btn ${paymentMethod === "card" ? "active" : ""}`}
                      >
                        <CreditCard size={17} />
                        <span>Credit / Debit Card</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("instapay")}
                        className={`method-tab-btn ${paymentMethod === "instapay" ? "active" : ""}`}
                      >
                        <Zap size={17} />
                        <span>InstaPay (Egypt)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("deposit")}
                        className={`method-tab-btn ${paymentMethod === "deposit" ? "active" : ""}`}
                      >
                        <Building size={17} />
                        <span>50% Wire Deposit</span>
                      </button>
                    </div>

                    {/* Method details card */}
                    <div className="method-details-panel">
                      {paymentMethod === "card" && (
                        <div className="card-payment-view">
                          <div className="card-inputs-row">
                            <input
                              type="text"
                              placeholder="Card Number: 4000 1234 5678 9010"
                              className="modal-text-input"
                              defaultValue="4152 •••• •••• 9821"
                            />
                            <div style={{ display: "flex", gap: "10px" }}>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="modal-text-input"
                                defaultValue="08/28"
                              />
                              <input
                                type="text"
                                placeholder="CVV"
                                className="modal-text-input"
                                defaultValue="382"
                              />
                            </div>
                          </div>
                          <span className="security-notice">
                            <Lock size={12} />
                            <span>Encrypted 256-bit checkout through secure gateway</span>
                          </span>
                        </div>
                      )}

                      {paymentMethod === "instapay" && (
                        <div className="instapay-view">
                          <div className="instapay-badge-box">
                            <span className="instapay-label">Official InstaPay Address (IPA):</span>
                            <span className="instapay-address">devajgroup@instapay</span>
                          </div>
                          <p className="instapay-hint">
                            Instant confirmation upon sending receipt to our production desk.
                          </p>
                        </div>
                      )}

                      {paymentMethod === "deposit" && (
                        <div className="deposit-view">
                          <p className="deposit-text">
                            An official Devaj Group corporate pro-forma invoice will be generated for 50% deposit to confirm studio dates and crew call sheets.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="modal-actions-footer">
                    <button type="submit" className="confirm-payment-btn">
                      <span>Confirm Booking & Send Brief</span>
                      <ArrowRight size={18} />
                    </button>
                    <span className="guarantee-text">No immediate charge without producer alignment.</span>
                  </div>
                </form>
              </div>
            )}

            {paymentStep === "processing" && (
              <div className="payment-processing-view">
                <div className="processing-spinner" />
                <h4 className="processing-title">Calibrating Production Brief...</h4>
                <p className="processing-sub">Routing estimate parameters to Devaj Executive Producers.</p>
              </div>
            )}

            {paymentStep === "success" && (
              <div className="payment-success-view">
                <div className="success-icon-badge">
                  <CheckCircle2 size={46} color="#128C7E" />
                </div>
                <h3 className="success-title">Brief Confirmed & Scheduled!</h3>
                <span className="success-ref">Booking Ref: {bookingRefNumber}</span>
                <p className="success-desc">
                  Thank you, <strong>{clientForm.name || "Client"}</strong>. Your project parameters for{" "}
                  <strong>{clientForm.company || "Your Brand"}</strong> with{" "}
                  <strong>{selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}</strong> have been logged.
                  An executive producer will reach out on WhatsApp ({clientForm.phone || "+20 101 404 9339"}) within 2 hours.
                </p>

                <div className="success-cta-row">
                  <a
                    href={`https://wa.me/201014049339?text=${encodeURIComponent(
                      `Hello Devaj Group, I just booked Ref ${bookingRefNumber} for ${
                        clientForm.company || "my company"
                      }. Looking forward to discussing the production.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="success-whatsapp-btn"
                  >
                    <MessageSquare size={18} />
                    <span>Open Instant WhatsApp Chat</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setPaymentModalOpen(false)}
                    className="success-done-btn"
                  >
                    <span>Back to Website</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. COMPONENT STYLES & LUXURY PHYSICS                                */}
      {/* =================================================================== */}
      <style jsx>{`
        /* Main 2-Zone Layout Grid */
        .luxury-calculator-grid {
          display: grid;
          grid-template-columns: 1fr 440px;
          gap: 40px;
          align-items: start;
        }

        /* Configurator Card Container (Zone A) */
        .config-builder-column {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 28px;
          padding: 44px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .config-card-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 36px;
        }

        .section-head-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .step-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 6px 14px;
          border-radius: 9999px;
        }

        .step-number {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          font-weight: 800;
          color: #E63946;
        }

        .step-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #111111;
        }

        .section-tip {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          color: rgba(21, 21, 21, 0.5);
        }

        /* ------------------------------------------------------------- */
        /* Module 1: Two Houses Dual Grid                                */
        /* ------------------------------------------------------------- */
        .houses-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .house-tier-card {
          background: #FAF9F6;
          border: 1.5px solid rgba(0, 0, 0, 0.07);
          border-radius: 20px;
          padding: 26px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          display: flex;
          flex-direction: column;
        }

        .house-tier-card:hover {
          background: #FFFFFF;
          border-color: rgba(230, 57, 70, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        .house-tier-card.selected {
          background: #FFFFFF;
          border-color: #E63946;
          box-shadow: 0 14px 36px rgba(230, 57, 70, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
          transform: translateY(-2px);
        }

        .tier-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .tier-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .tier-icon-wrap.productions {
          background: rgba(230, 57, 70, 0.08);
          color: #E63946;
        }

        .tier-icon-wrap.films {
          background: rgba(17, 17, 17, 0.08);
          color: #111111;
        }

        .tier-radio-indicator {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .house-tier-card.selected .tier-radio-indicator {
          border-color: #E63946;
          background: #E63946;
        }

        .tier-brand-title {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 8px;
        }

        .tier-brand-name {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.5rem;
          font-weight: 800;
          color: #111111;
          letter-spacing: -0.02em;
        }

        .tier-brand-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .tier-brand-sub.productions {
          color: #E63946;
        }

        .tier-brand-sub.films {
          color: #111111;
        }

        .tier-badge {
          display: inline-block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(21, 21, 21, 0.6);
          margin-bottom: 12px;
        }

        .tier-description {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(21, 21, 21, 0.7);
          margin: 0 0 16px 0;
          flex-grow: 1;
        }

        .tier-footer-specs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(21, 21, 21, 0.55);
          padding-top: 12px;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
        }

        /* ------------------------------------------------------------- */
        /* Module 2: Production Scale Sliders                            */
        /* ------------------------------------------------------------- */
        .sliders-twin-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .slider-control-box {
          background: #FAF9F6;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .slider-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .control-label {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          color: #111111;
        }

        .control-subtext {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          color: rgba(21, 21, 21, 0.5);
          margin-top: 2px;
        }

        .counter-stepper-wrap {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.09);
          padding: 4px 6px;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .stepper-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: #F7F6F2;
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .stepper-btn:hover:not(:disabled) {
          background: #E63946;
          color: #ffffff;
        }

        .stepper-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .stepper-val {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 800;
          color: #111111;
          padding: 0 6px;
          min-width: 65px;
          text-align: center;
        }

        .slider-track-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .studio-range-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .studio-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid #E63946;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0 0 10px rgba(230, 57, 70, 0.4);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .studio-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .slider-milestones {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          color: rgba(21, 21, 21, 0.4);
          padding: 0 4px;
        }

        .slider-milestones span.active {
          color: #E63946;
          font-weight: 700;
        }

        /* ------------------------------------------------------------- */
        /* Module 3: Production Quality Tier Grid                        */
        /* ------------------------------------------------------------- */
        .quality-package-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .package-tier-btn {
          background: #FAF9F6;
          border: 1.5px solid rgba(0, 0, 0, 0.07);
          border-radius: 18px;
          padding: 22px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .package-tier-btn:hover {
          background: #FFFFFF;
          border-color: rgba(230, 57, 70, 0.4);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
        }

        .package-tier-btn.selected {
          background: #FFFFFF;
          border-color: #E63946;
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.12);
        }

        .package-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
        }

        .package-name-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .package-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          font-weight: 800;
          color: #111111;
        }

        .package-level-tag {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 2px 8px;
          border-radius: 6px;
          width: fit-content;
        }

        .package-level-tag.low {
          background: rgba(17, 17, 17, 0.06);
          color: #111111;
        }

        .package-level-tag.high {
          background: rgba(230, 57, 70, 0.1);
          color: #E63946;
        }

        .package-check-indicator {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .package-tier-btn.selected .package-check-indicator {
          border-color: #E63946;
          background: #E63946;
        }

        .package-summary {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          line-height: 1.45;
          color: rgba(21, 21, 21, 0.65);
          margin: 0;
        }

        .package-equipment-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .package-equipment-pills span {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 3px 10px;
          border-radius: 9999px;
          color: rgba(21, 21, 21, 0.7);
        }

        /* ------------------------------------------------------------- */
        /* Module 4: Post-Production Craft Pills                         */
        /* ------------------------------------------------------------- */
        .craft-pills-flow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .craft-option-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 9999px;
          background: #FAF9F6;
          border: 1.5px solid rgba(0, 0, 0, 0.07);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .craft-option-pill:hover {
          background: #FFFFFF;
          border-color: rgba(230, 57, 70, 0.35);
          transform: translateY(-1px);
        }

        .craft-option-pill.selected {
          background: #FFFFFF;
          border-color: #E63946;
          box-shadow: 0 4px 16px rgba(230, 57, 70, 0.12);
        }

        .craft-pill-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(21, 21, 21, 0.4);
          transition: all 0.2s ease;
        }

        .craft-option-pill.selected .craft-pill-check {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
        }

        .craft-pill-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: #111111;
        }

        .craft-pill-price {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          color: #E63946;
          background: rgba(230, 57, 70, 0.08);
          padding: 2px 7px;
          border-radius: 9999px;
        }

        /* ------------------------------------------------------------- */
        /* ZONE B: FLOATING STUDIO TICKET CARD                           */
        /* ------------------------------------------------------------- */
        .ticket-summary-column {
          position: sticky;
          top: 110px;
        }

        .floating-studio-ticket {
          background: #FFFFFF;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 28px;
          padding: 34px 30px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
        }

        .ticket-top-ribbon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .ticket-seal {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #111111;
        }

        .ticket-live-badge {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(18, 140, 126, 0.1);
          color: #128C7E;
          padding: 3px 10px;
          border-radius: 9999px;
          border: 1px solid rgba(18, 140, 126, 0.2);
        }

        .ticket-investment-display {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .investment-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: rgba(21, 21, 21, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .investment-amount-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .investment-amount-val {
          font-family: var(--font-serif);
          font-size: clamp(2.3rem, 2.8vw, 3.2rem);
          font-weight: 500;
          font-style: normal;
          color: #111111;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }

        .investment-subtext {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          line-height: 1.45;
          color: rgba(21, 21, 21, 0.5);
          margin: 4px 0 0 0;
        }

        .ticket-spec-list {
          background: #FAF9F6;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 18px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
        }

        .spec-key {
          color: rgba(21, 21, 21, 0.55);
          font-weight: 600;
          flex-shrink: 0;
        }

        .spec-val {
          color: #111111;
          font-weight: 700;
          text-align: right;
        }

        .spec-val.house-badge {
          color: #E63946;
        }

        .spec-val.craft-tags {
          color: rgba(21, 21, 21, 0.8);
          font-size: 0.78rem;
          max-width: 220px;
          line-height: 1.35;
        }

        .ticket-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ticket-primary-cta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 9999px;
          background: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 28px rgba(230, 57, 70, 0.35);
        }

        .ticket-primary-cta:hover {
          background: #ff4757;
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(230, 57, 70, 0.5);
        }

        .ticket-whatsapp-cta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 20px;
          border-radius: 9999px;
          background: #FAF9F6;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #111111;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .ticket-whatsapp-cta:hover {
          background: rgba(37, 211, 102, 0.1);
          border-color: #25D366;
          color: #128C7E;
        }

        .ticket-guarantee-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .guarantee-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          color: rgba(21, 21, 21, 0.6);
        }

        /* ------------------------------------------------------------- */
        /* Payment Modal Styles                                          */
        /* ------------------------------------------------------------- */
        .payment-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s ease;
        }

        .payment-modal-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 28px;
          max-width: 820px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.25);
          padding: 42px;
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          color: #111111;
        }

        .payment-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .payment-close-btn:hover {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
        }

        .payment-modal-header {
          margin-bottom: 22px;
        }

        .payment-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #128C7E;
          margin-bottom: 8px;
        }

        .payment-modal-title {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 500;
          font-style: normal;
          color: #111111;
          margin: 0 0 8px 0;
        }

        .payment-modal-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          color: rgba(21, 21, 21, 0.68);
          margin: 0;
        }

        .payment-modal-sub strong {
          color: #111111;
        }

        .payment-summary-pill {
          display: flex;
          flex-wrap: wrap;
          justifyContent: space-between;
          align-items: center;
          gap: 14px;
          background: rgba(230, 57, 70, 0.06);
          border: 1px solid rgba(230, 57, 70, 0.2);
          border-radius: 16px;
          padding: 16px 20px;
          margin-bottom: 28px;
        }

        .summary-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          color: rgba(21, 21, 21, 0.7);
          margin-right: 10px;
        }

        .summary-amount {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.45rem;
          font-weight: 800;
          color: #E63946;
        }

        .summary-details-chip {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(21, 21, 21, 0.7);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 24px;
        }

        .input-label {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: #111111;
          margin-bottom: 8px;
        }

        .modal-text-input {
          width: 100%;
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 13px 16px;
          color: #111111;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .modal-text-input:focus {
          border-color: #E63946;
          background: #ffffff;
        }

        .payment-methods-section {
          margin-bottom: 28px;
        }

        .methods-tabs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .method-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 14px;
          border-radius: 12px;
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: rgba(21, 21, 21, 0.7);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .method-tab-btn.active {
          background: rgba(230, 57, 70, 0.08);
          border-color: #E63946;
          color: #E63946;
          box-shadow: 0 4px 14px rgba(230, 57, 70, 0.15);
        }

        .method-details-panel {
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 14px;
          padding: 18px 20px;
        }

        .card-inputs-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }

        .security-notice {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: rgba(21, 21, 21, 0.55);
        }

        .instapay-badge-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 10px 16px;
          border-radius: 10px;
          margin-bottom: 8px;
        }

        .instapay-label {
          font-size: 0.82rem;
          color: rgba(21, 21, 21, 0.7);
        }

        .instapay-address {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 800;
          color: #128C7E;
        }

        .instapay-hint,
        .deposit-text {
          font-size: 0.82rem;
          color: rgba(21, 21, 21, 0.65);
          margin: 0;
          line-height: 1.5;
        }

        .modal-actions-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .confirm-payment-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 9999px;
          background: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 10px 30px rgba(230, 57, 70, 0.35);
        }

        .confirm-payment-btn:hover {
          background: #ff4757;
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(230, 57, 70, 0.5);
        }

        .guarantee-text {
          font-size: 0.78rem;
          color: rgba(21, 21, 21, 0.55);
        }

        .payment-processing-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }

        .processing-spinner {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-top-color: #E63946;
          animation: spin 0.8s linear infinite;
          margin-bottom: 24px;
        }

        .processing-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.4rem;
          font-weight: 700;
          color: #111111;
          margin: 0 0 8px 0;
        }

        .processing-sub {
          font-size: 0.9rem;
          color: rgba(21, 21, 21, 0.65);
          margin: 0;
        }

        .payment-success-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 10px;
        }

        .success-icon-badge {
          margin-bottom: 18px;
        }

        .success-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 500;
          font-style: normal;
          color: #111111;
          margin: 0 0 10px 0;
        }

        .success-ref {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #E63946;
          background: rgba(230, 57, 70, 0.08);
          padding: 4px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(230, 57, 70, 0.25);
          margin-bottom: 18px;
        }

        .success-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(21, 21, 21, 0.75);
          max-width: 540px;
          margin: 0 0 32px 0;
        }

        .success-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }

        .success-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: #25D366;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
        }

        .success-whatsapp-btn:hover {
          transform: translateY(-2px);
          background: #22bf5b;
        }

        .success-done-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 26px;
          border-radius: 9999px;
          background: #F7F6F2;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #111111;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .success-done-btn:hover {
          background: #e8e6df;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
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
            transform: scale(0.95);
          }
          to {
            transform: scale(1);
          }
        }

        /* ------------------------------------------------------------- */
        /* Responsive Breakpoints                                        */
        /* ------------------------------------------------------------- */
        @media (max-width: 1280px) {
          .luxury-calculator-grid {
            grid-template-columns: 1fr;
          }
          .ticket-summary-column {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .config-builder-column {
            padding: 24px 20px;
          }
          .houses-dual-grid,
          .sliders-twin-grid,
          .quality-package-grid {
            grid-template-columns: 1fr;
          }
          .floating-studio-ticket {
            padding: 26px 20px;
          }
          .form-fields-grid,
          .methods-tabs-grid {
            grid-template-columns: 1fr;
          }
          .payment-modal-card {
            padding: 28px 20px;
          }
          .payment-modal-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
