import React, { useState, useEffect } from "react";
import {
  FaPhone, FaEnvelope, FaLinkedin, FaGithub,
} from "react-icons/fa";
import "./ProfileSidebar.css";

/* ─── DATA ─── */
const CONTACT = [
  { icon: <FaPhone />,    label: "Phone",    value: "+91 7702062390"               },
  { icon: <FaEnvelope />, label: "Email",    value: "saikeerthinarasimha@gmail.com" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "saikeerthiChittamuri"          },
  { icon: <FaGithub />,   label: "GitHub",   value: "Saikeerthi2504"                },
];

const SKILLS = [
  { name: "Java",        pct: 95 },
  { name: "React JS",    pct: 85 },
  { name: "JavaScript",  pct: 75 },
  { name: "MySQL",       pct: 80 },
  { name: "Spring Boot", pct: 70 },
  { name: "HTML / CSS",  pct: 70 },
  { name: "AWS",         pct: 70 },
];

const KNOWLEDGE = [
  "Programming Fundamentals",
  "Object-Oriented Programming (OOP)",
  "REST API Development",
  "Database Management (SQL)",
  "Cloud Deployment Basics (AWS)",
  "Git & GitHub Usage",
  "Debugging & Problem Solving",
];

/* ─── COMPONENT ─── */
const ProfileSidebar = () => {
  const [open, setOpen] = useState(false);

  /* Lock body scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Floating trigger ── */}
      <div className="profile-floating-btn" onClick={() => setOpen(true)}>
        ☰
      </div>

      {/* ── Backdrop overlay ── */}
      <div
        className={`sidebar-overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* ══════════════ SIDEBAR PANEL ══════════════ */}
      <aside className={`sidebar ${open ? "open" : ""}`}>

        {/* Close */}
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close sidebar">
          ×
        </button>

        {/* ── Profile Photo ── */}
        <div className="profile-image-big">
          <img src="/saikeerthiprofileee.jpg" alt="Ch Sai Keerthi" />
        </div>

        {/* ── Name & Sub ── */}
        <h2>Ch Sai Keerthi</h2>
        <p className="subtext">
          B.Tech (CSE) <br />
          Priyadarsini College, Nellore
        </p>
        <div className="status-pill">
          <span className="status-dot" />
          Open to Work
        </div>

        <div className="sidebar-divider" />

        {/* ══ CONTACT ══ */}
        <div className="section-title">Contact</div>
        <div className="contact-block">
          {CONTACT.map((c) => (
            <div className="row" key={c.label}>
              <span className="row-icon">{c.icon}</span>
              <div className="row-content">
                <span className="row-label">{c.label}</span>
                <span className="row-value">{c.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ══ SKILLS ══ */}
        <div className="section-title">Skills</div>
        <div className="skills-block">
          {SKILLS.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* ══ KNOWLEDGE ══ */}
        <div className="section-title">Knowledge</div>
        <div className="knowledge-block">
          <ul className="knowledge-list">
            {KNOWLEDGE.map((k) => (
              <li key={k}>
                <span className="check">✦</span>
                {k}
              </li>
            ))}
          </ul>
        </div>

      </aside>
    </>
  );
};

export default ProfileSidebar;