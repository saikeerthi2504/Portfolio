import React, { useEffect, useRef } from 'react';
import './Home.css';
import {
  FaEnvelope, FaGithub, FaInstagram, FaLinkedin,
  FaTwitter, FaWhatsapp, FaJava, FaReact, FaDatabase,
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiHtml5, SiCss3, SiGit } from 'react-icons/si';

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Fixed Social Sidebar ── */}
      <aside className="social-bar">
        <a href="https://wa.me/7702062390"                          target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://twitter.com/yourProfile"                   target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com/saikeerthi2504"              target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://github.com/saikeerthi2504"                    target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/saikeerthi-chittamuri2504/"      target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:saikeerthinarasimha@gmail.com"              target="_blank" rel="noreferrer"><FaEnvelope /></a>
      </aside>

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero" ref={heroRef}>

        {/* Photo */}
        <div className="photo-wrapper">
          <div className="photo-frame">
            <img src="/public/SAikeerthiProfilee.jpeg" alt="Ch Sai Keerthi" />
            <span className="photo-bracket tl" />
            <span className="photo-bracket tr" />
            <span className="photo-bracket bl" />
            <span className="photo-bracket br" />
            <div className="photo-badge">Full Stack Dev</div>
          </div>
        </div>

        {/* Text */}
        <div className="hero-content">
          <p className="eyebrow">Java Full Stack Developer</p>

          <h1 className="hero-name">
            Ch Sai
            <span>Keerthi</span>
          </h1>

          <p className="hero-bio">
            Fresher developer with a passion for building clean, scalable web applications.
            Experienced in Java, Spring Boot, React, and SQL — turning ideas into elegant,
            production-ready solutions.
          </p>

          <div className="hero-cta">
            <a href="mailto:saikeerthinarasimha@gmail.com" className="btn-primary">Hire Me</a>
            <a href="#projects"                            className="btn-outline">View Projects</a>
          </div>

          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-num">2025</span>
              <span className="stat-label">Graduate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SKILLS ══════════════ */}
      <section className="section reveal">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="divider" />
        <div className="skills-grid">
          {[
            { icon: <FaJava />,       label: 'Java'        },
            { icon: <SiSpringboot />, label: 'Spring Boot' },
            { icon: <FaReact />,      label: 'React'       },
            { icon: <FaDatabase />,   label: 'SQL'         },
            { icon: <SiMysql />,      label: 'MySQL'       },
            { icon: <SiHtml5 />,      label: 'HTML5'       },
            { icon: <SiCss3 />,       label: 'CSS3'        },
            { icon: <SiGit />,        label: 'Git'         },
          ].map((s, i) => (
            <div className="skill-card" key={i}>
              {s.icon}
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ EXPERIENCE + EDUCATION ══════════════ */}
      <section className="section reveal">
        <div className="two-col">

          {/* Experience */}
          <div>
            <p className="section-label">My Journey</p>
            <h2 className="section-title">Experience</h2>
            <div className="divider" />
            <div className="timeline">
              <div className="timeline-item">
                <p className="timeline-date">2025 – Present</p>
                <p className="timeline-role">Java Full Stack Developer</p>
                <p className="timeline-company">Fresher / Self Projects</p>
                <p className="timeline-desc">
                  Developed and deployed multiple full-stack web applications using Spring Boot REST APIs
                  and React front-ends, integrating MySQL databases with JPA/Hibernate.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="section-label">Education</p>
            <h2 className="section-title">Academics</h2>
            <div className="divider" />
            <div className="timeline">
              <div className="timeline-item">
                <p className="timeline-date">2021 – 2025</p>
                <p className="timeline-role">B.Tech — Computer Science</p>
                <p className="timeline-company">Priyadarsini College of Engineering and Technology</p>
                <p className="timeline-desc">
                  Graduated with a focus on software engineering, databases, and object-oriented
                  programming. Participated in coding competitions and hackathons.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-date">2019 – 2021</p>
                <p className="timeline-role">Intermediate — MPC</p>
                <p className="timeline-company">APSWRJC Muthukur</p>
                <p className="timeline-desc">
                  Strong academic foundation with distinction, which fuelled interest in pursuing
                  a career in technology.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════ PROJECTS ══════════════ */}
      <section className="section reveal" id="projects">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />
        <div className="projects-grid">
          {[
            {
              tag:   'Full Stack',
              title: 'E-Commerce Platform',
              desc:  'A complete online store with product listings, cart management, order tracking, and user authentication built with Spring Boot and React.',
              techs: ['Java', 'React', 'MySQL', 'REST API'],
            },
            {
              tag:   'Backend',
              title: 'Student Management System',
              desc:  'CRUD application to manage student records, grades, and attendance. Features role-based access control for admin and teachers.',
              techs: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
            },
            {
              tag:   'Frontend',
              title: 'Portfolio Website',
              desc:  'Personal developer portfolio built with React showcasing projects, skills, and contact information with smooth animations.',
              techs: ['React', 'CSS3', 'HTML5', 'JavaScript'],
            },
          ].map((p, i) => (
            <div className="project-card" key={i}>
              <span className="project-tag">{p.tag}</span>
              <p className="project-title">{p.title}</p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-techs">
                {p.techs.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section className="contact-section reveal">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-sub">Open to full-time opportunities, freelance work, and collaborations.</p>
        <div className="social-icons-grid">
          <a href="https://wa.me/7702062390"                     target="_blank" rel="noreferrer" className="social-icon-link"><FaWhatsapp /><span>WhatsApp</span></a>
          <a href="https://twitter.com/yourProfile"              target="_blank" rel="noreferrer" className="social-icon-link"><FaTwitter /><span>Twitter</span></a>
          <a href="https://instagram.com/saikeerthi2504"         target="_blank" rel="noreferrer" className="social-icon-link"><FaInstagram /><span>Instagram</span></a>
          <a href="https://github.com/saikeerthi2504"               target="_blank" rel="noreferrer" className="social-icon-link"><FaGithub /><span>GitHub</span></a>
          <a href="https://www.linkedin.com/in/saikeerthi-chittamuri2504/" target="_blank" rel="noreferrer" className="social-icon-link"><FaLinkedin /><span>LinkedIn</span></a>
          <a href="mailto:saikeerthinarasimha@gmail.com"         target="_blank" rel="noreferrer" className="social-icon-link"><FaEnvelope /><span>Email</span></a>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer>
        © 2025 <span>Ch Sai Keerthi</span> · Crafted with React &amp; Spring Boot
      </footer>
    </>
  );
}

export default Home;