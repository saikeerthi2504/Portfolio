import React, { useEffect } from 'react';
import './AboutMe.css';

/* ─── DATA ─── */
const SKILLS = {
  Frontend: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  Backend:  ['Java', 'Spring Boot', 'NodeJS', 'ExpressJS', 'REST API'],
  Database: ['MySQL', 'SQL', 'JPA / Hibernate'],
  Tools:    ['Git', 'GitHub', 'VS Code', 'Postman', 'IntelliJ IDEA'],
};

const HOBBIES = [
  { emoji: '🎨', name: 'Drawing',      desc: 'Sketching characters and abstract art to unwind.' },
  { emoji: '📚', name: 'Reading',       desc: 'Tech blogs, self-improvement, and fiction novels.' },
  { emoji: '🎵', name: 'Music',         desc: 'Listening to classical and indie playlists while coding.' },
  { emoji: '💡', name: 'Problem Solving',desc: 'Leetcode, logic puzzles, and system design challenges.' },
  { emoji: '🌐', name: 'Exploring Tech', desc: 'Keeping up with new frameworks and dev tools.' },
  { emoji: '✍️', name: 'Note Taking',   desc: 'Documenting learnings with diagrams and mind maps.' },
];

const EDUCATION = [
  {
    badge: 'Undergraduate',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Priyadarsini College of Engineering and Technology',
    year: '2021 – 2025',
    detail: 'Focused on software engineering, object-oriented programming, database management, and web technologies. Participated in coding competitions and project showcases.',
  },
  {
    badge: 'Intermediate',
    degree: 'Intermediate (MPC)',
    school: 'APSWRJC Muthukur',
    year: '2019 – 2021',
    detail: 'Completed with distinction. Built strong foundations in mathematics and analytical thinking that directly shaped a passion for programming and problem-solving.',
  },
];

/* ─── COMPONENT ─── */
function AboutMe() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="about-page">

      {/* ══════════════ HERO INTRO ══════════════ */}
      <section className="about-hero reveal">
        <div className="about-hero-text">
          <div className="about-section-header">
            <span className="section-eyebrow">Who I Am</span>
            <span className="line" />
          </div>

          <h1 className="about-heading">About Me</h1>
          <div className="teal-bar" />

          <p className="about-intro-lead">
            A <span>Java Full Stack Developer</span> who believes clean code
            and thoughtful UI are two sides of the same coin.
          </p>

          <p className="about-para">
            I am a B.Tech graduate in Computer Science with hands-on experience building
            web applications using Java, Spring Boot, React, and MySQL. I understand both
            frontend and backend development — from crafting smooth user interfaces to
            designing robust REST APIs and integrating databases.
          </p>

          <p className="about-para">
            I am a self-motivated, quick learner who enjoys solving real-world problems
            and writing code that is readable, maintainable, and scalable. My goal is to
            grow into a strong Full Stack Developer, contribute to meaningful projects,
            and continuously sharpen my craft.
          </p>

          <p className="about-para">
            When I am not coding, you will find me sketching, reading, or exploring
            the latest in tech — always curious, always building.
          </p>

          <div className="trait-tags">
            {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail-Oriented', 'Open to Freelance'].map((t) => (
              <span className="trait-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Side stats */}
        <div className="about-stats-card">
          <div className="about-stat">
            <span className="about-stat-num">5+</span>
            <span className="about-stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="about-stat">
            <span className="about-stat-num">10+</span>
            <span className="about-stat-label">Technologies</span>
          </div>
          <div className="stat-divider" />
          <div className="about-stat">
            <span className="about-stat-num">2025</span>
            <span className="about-stat-label">Graduate</span>
          </div>
          <div className="stat-divider" />
          <div className="about-stat">
            <span className="about-stat-num">∞</span>
            <span className="about-stat-label">Curiosity</span>
          </div>
        </div>
      </section>

      {/* ══════════════ PHILOSOPHY ══════════════ */}
      <section className="philosophy-section reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="about-section-header">
          <span className="section-eyebrow">Work Philosophy</span>
          <span className="line" />
        </div>
        <h2 className="about-heading">How I Work</h2>
        <div className="teal-bar" />

        <div className="philosophy-card">
          <p className="philosophy-quote">
            "Build <strong>fearlessly</strong>, learn <strong>endlessly</strong>,
            and never ship code you wouldn't be proud to explain."
          </p>
          <p className="philosophy-body">
            I believe every line of code is a decision — and good decisions come from
            understanding the problem deeply before reaching for the keyboard. I prioritise
            clean architecture, readable code, and iterative improvement over rushed delivery.
            I am open to freelance collaborations and love helping startups turn bold ideas
            into real, scalable digital products. Whether it is a full-stack web app, a REST API,
            or a polished UI component — I bring both technical rigour and creative thinking to the table.
          </p>
          <div className="philosophy-tags">
            {['Clean Code', 'Agile Mindset', 'Open to Freelance', 'Startup-Friendly', 'Continuous Learning'].map((t) => (
              <span className="phil-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ EDUCATION ══════════════ */}
      <section className="education-section reveal" style={{ transitionDelay: '0.15s' }}>
        <div className="about-section-header">
          <span className="section-eyebrow">Academic Background</span>
          <span className="line" />
        </div>
        <h2 className="about-heading">Education</h2>
        <div className="teal-bar" />

        <div className="edu-grid">
          {EDUCATION.map((e) => (
            <div className="edu-card" key={e.degree}>
              <span className="edu-badge">{e.badge}</span>
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-school">{e.school}</p>
              <p className="edu-year">{e.year}</p>
              <p className="edu-detail">{e.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ SKILLS ══════════════ */}
      <section className="skills-section reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="about-section-header">
          <span className="section-eyebrow">Technical Proficiency</span>
          <span className="line" />
        </div>
        <h2 className="about-heading">Skills</h2>
        <div className="teal-bar" />

        <div className="skills-categories">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <p className="skill-category-title">{category}</p>
              <div className="skills-row">
                {items.map((skill) => (
                  <div className="skill-chip" key={skill}>
                    <span className="skill-dot" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ HOBBIES ══════════════ */}
      <section className="hobbies-section reveal" style={{ transitionDelay: '0.25s' }}>
        <div className="about-section-header">
          <span className="section-eyebrow">Beyond the Screen</span>
          <span className="line" />
        </div>
        <h2 className="about-heading">Interests & Hobbies</h2>
        <div className="teal-bar" />

        <div className="hobbies-grid">
          {HOBBIES.map((h) => (
            <div className="hobby-card" key={h.name}>
              <span className="hobby-emoji">{h.emoji}</span>
              <p className="hobby-name">{h.name}</p>
              <p className="hobby-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default AboutMe;