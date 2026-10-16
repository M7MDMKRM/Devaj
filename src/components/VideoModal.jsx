"use client";

import React, { useState } from "react";
import { 
  X, 
  Upload, 
  Film, 
  Check, 
  FileVideo,
  FolderOpen,
  Info,
  Terminal,
  ArrowRight
} from "lucide-react";

export default function VideoModal({ 
  isOpen, 
  onClose, 
  currentVideo, 
  onSelectVideo 
}) {
  const [projectPathInput, setProjectPathInput] = useState(currentVideo || "/videos/hero-reel.mp4");

  if (!isOpen) return null;

  const presets = [
    {
      id: "hero-default",
      title: "Hero Showreel (Default Project File)",
      desc: "Path: public/videos/hero-reel.mp4",
      url: "/videos/hero-reel.mp4",
      tag: "8K HIGH-SPEED",
    },
    {
      id: "sample-1",
      title: "Sample Reel 02 (High-Speed Pursuit)",
      desc: "Path: public/videos/sample-reel-1.mp4",
      url: "/videos/sample-reel-1.mp4",
      tag: "FULL HD",
    },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      onSelectVideo(objectUrl);
      onClose();
    }
  };

  const handleApplyPath = (e) => {
    e.preventDefault();
    if (projectPathInput.trim()) {
      let finalPath = projectPathInput.trim();
      // Ensure leading slash if referring to public path
      if (!finalPath.startsWith("/") && !finalPath.startsWith("http") && !finalPath.startsWith("blob")) {
        finalPath = "/" + finalPath;
      }
      onSelectVideo(finalPath);
      onClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        backgroundColor: "rgba(5, 6, 9, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          background: "#0d0f16",
          border: "1px solid rgba(255, 24, 36, 0.4)",
          borderRadius: "6px",
          padding: "36px",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 24, 36, 0.2)",
          color: "#ffffff",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "36px",
            height: "36px",
            borderRadius: "4px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#ff1824")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <FolderOpen size={26} color="#ff1824" />
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "var(--font-main)",
              fontWeight: 800,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Configure Hero Video In Project Path
          </h2>
        </div>
        <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.92rem", marginBottom: "26px" }}>
          You can load any video located in your Next.js project path, test local video files, or customize the playback source.
        </p>

        {/* Step-by-Step Project Path Guide */}
        <div
          style={{
            background: "rgba(255, 24, 36, 0.08)",
            border: "1px solid rgba(255, 24, 36, 0.35)",
            borderRadius: "4px",
            padding: "18px 22px",
            marginBottom: "26px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ff1824", fontWeight: 700, fontSize: "0.88rem", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
            <Terminal size={17} />
            <span>How to add your video file to the project:</span>
          </div>
          <ol style={{ paddingLeft: "20px", fontSize: "0.86rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.6 }}>
            <li>
              Place your video file into the project folder:
              <br />
              <code style={{ background: "#06070a", color: "#ff1824", padding: "3px 8px", borderRadius: "3px", fontFamily: "var(--font-mono)", display: "inline-block", marginTop: "4px" }}>
                D:\website000\public\videos\
              </code>
            </li>
            <li style={{ marginTop: "6px" }}>
              If named <strong>hero-reel.mp4</strong>, it will automatically play as the default.
            </li>
            <li style={{ marginTop: "6px" }}>
              Or give it any name (e.g. <code>my-porsche.mp4</code>) and type <code>/videos/my-porsche.mp4</code> in the input below.
            </li>
          </ol>
        </div>

        {/* Custom Project Path Input Form */}
        <form onSubmit={handleApplyPath} style={{ marginBottom: "26px" }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", color: "#ffffff" }}>
            Enter Project Path / Relative URL:
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={projectPathInput}
              onChange={(e) => setProjectPathInput(e.target.value)}
              placeholder="/videos/your-video.mp4"
              style={{
                flex: 1,
                padding: "14px 18px",
                background: "#07080c",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "4px",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="btn-split-red"
              style={{ padding: "14px 28px", borderRadius: "4px" }}
            >
              <span>Apply Path</span>
            </button>
          </div>
        </form>

        {/* Preset Files in Public Directory */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "12px" }}>
            Quick Select Existing Files in Project:
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {presets.map((preset) => {
              const isSelected = currentVideo === preset.url;
              return (
                <div
                  key={preset.id}
                  onClick={() => {
                    onSelectVideo(preset.url);
                    onClose();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderRadius: "4px",
                    background: isSelected ? "rgba(255, 24, 36, 0.16)" : "rgba(255, 255, 255, 0.04)",
                    border: isSelected ? "1px solid #ff1824" : "1px solid rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <FileVideo size={20} color={isSelected ? "#ff1824" : "#ffffff"} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{preset.title}</div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.55)", fontFamily: "var(--font-mono)" }}>{preset.desc}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        padding: "3px 8px",
                        borderRadius: "2px",
                        background: "rgba(255, 24, 36, 0.2)",
                        color: "#ff1824",
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {preset.tag}
                    </span>
                    {isSelected && <Check size={18} color="#ff1824" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Immediate File Picker from Disk */}
        <div
          style={{
            border: "1px dashed rgba(255, 255, 255, 0.25)",
            borderRadius: "4px",
            padding: "16px 20px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.02)",
            cursor: "pointer",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ff1824")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)")}
          onClick={() => document.getElementById("file-picker-input")?.click()}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <Upload size={18} color="#ff1824" />
            <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Or pick any video file directly from your disk to preview</span>
          </div>
          <input
            id="file-picker-input"
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
}
