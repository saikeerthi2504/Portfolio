import React, { useEffect } from "react";
import { FaGithub, FaRobot, FaShoppingCart, FaBriefcase } from "react-icons/fa";
import "./Projects.css";

/* ─── PROJECT DATA ─── */
const PROJECTS = [
  {
    id: 1,
    glow: "blue-glow",
    badge: "Full Stack",
    icon: <FaShoppingCart />,
    title: "E-Commerce Application",
    description:
      "A fully functional e-commerce platform built with React and Node.js/Express, designed to deliver a seamless shopping experience from browsing to checkout. Supports both customer and admin roles with a clean, responsive UI.",
    features: [
      "JWT-based user authentication & protected routes",
      "Dynamic product listings with search, filter & sort",
      "Real-time shopping cart with quantity management",
      "Order placement, tracking & order history dashboard",
      "Admin panel to manage products, stock & orders",
      "Secure payment integration (Razorpay / Stripe ready)",
    ],
    techs: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API", "CSS3"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    glow: "pink-glow",
    badge: "EdTech · AI",
    icon: <FaRobot />,
    title: "QuickLearn With Robot",
    description:
      "An AI-powered educational platform that turns passive learning into an interactive dialogue. Students chat with an intelligent robot tutor that adapts to their pace, provides instant feedback, and tracks their progress in real time.",
    features: [
      "AI robot tutor powered by NLP for natural conversation",
      "Personalised learning path based on performance",
      "Topic-based quizzes with instant explanations",
      "Real-time feedback & mistake correction engine",
      "Progress tracker with visual analytics dashboard",
      "Multi-subject support — Maths, Science, Coding, and more",
    ],
    techs: ["React","javaScript","CSS3","bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    glow: "violet-glow",
    badge: "AI · Career",
    icon: <FaBriefcase />,
    title: "AI Career Coach",
    description:
      "An intelligent career acceleration platform that uses AI to analyse your resume, identify skill gaps, and simulate real interview scenarios through mock tests. Built to help freshers and professionals land their dream jobs faster.",
    features: [
      "AI-powered resume analyser — scores & rewrites sections",
      "Skill gap detection vs. target job descriptions (JD match %)",
      "Role-specific mock interview with voice & text responses",
      "Real-time feedback on answers, tone & keyword usage",
      "Personalised roadmap with learning resource suggestions",
      "Interview history, score trends & performance analytics",
      "One-click resume export as polished PDF",
    ],
    techs: ["React", "Spring Boot", "Python", "OpenAI API", "MySQL", "PDF.js", "WebSockets"],
    github: "#",
    demo: "#",
    live: true,
  },
];

/* ─── COMPONENT ─── */
function Projects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="projects-page">

      {/* ── Page Header ── */}
      <div className="projects-header reveal">
        <p className="projects-eyebrow">What I've Built</p>
        <h1 className="projects-heading">
          Featured <span>Projects</span>
        </h1>
        <p className="projects-subheading">
          A collection of full-stack and AI-powered applications built with
          modern technologies — from e-commerce to intelligent career tools.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="projects-container">
        {PROJECTS.map((p, idx) => (
          <div
            key={p.id}
            className={`project-card ${p.glow} reveal`}
            style={{ transitionDelay: `${idx * 0.12}s` }}
          >
            {/* Badge row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
              <span className="card-badge">
                <span className="badge-dot" />
                {p.badge}
              </span>
              {p.live && (
                <span className="live-badge">
                  <span className="live-dot" />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="project-title">{p.title}</h2>

            {/* Description */}
            <p className="project-description">{p.description}</p>

            {/* Features */}
            <ul className="feature-list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="tech-stack">
              {p.techs.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>

            {/* Footer */}
            <div className="project-footer">
              <a href={p.github} className="github-link" target="_blank" rel="noreferrer">
                <FaGithub /> View on GitHub
              </a>
              <a href={p.demo} className="read-more">
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;