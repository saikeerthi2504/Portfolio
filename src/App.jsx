import React, { useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ProfileSidebar from './ProfileSidebar';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        {/* ══════════════ FIXED NAVBAR ══════════════ */}
        <nav className="navbar">

          {/* Brand */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <span className="brand-dot" />
            Sai<span>Keerthi</span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav links */}
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <a
                href="https://wa.me/7702062390"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
                onClick={closeMenu}
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
          </ul>
        </nav>

        {/* ══════════════ ROUTES ══════════════ */}
        <main className="page-content">
          <Routes>
            <Route path="/"        element={<Home />}     />
            <Route path="/about"   element={<AboutMe />}  />
            <Route path="/projects"element={<Projects />} />
          </Routes>
        </main>

      </div>

      {/* Profile sidebar floats independently */}
      <ProfileSidebar />
    </BrowserRouter>
  );
}

export default App;