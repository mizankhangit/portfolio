"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const navLinks = [
  { id: 1, label: "Experience", href: "#experience" },
  { id: 2, label: "Skills", href: "#skills" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "About", href: "#about" },
  { id: 5, label: "Capabilities", href: "#features" },
  { id: 6, label: "Contact", href: "#contact" },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Nav = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`Mzn-nav-container${scrolled ? " scrolled" : ""}`}
    >
      <div className="Mzn-container Mzn-nav">
        {/* Logo */}
        <div className="Mzn-nav__logo">
          <Link href="/" aria-label="Mizanur Rahman Portfolio Home">
            MR.
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className={`Mzn-nav__links${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li className="Mzn-nav__item" key={link.id}>
              <a
                href={link.href}
                className={`Mzn-nav__link${active === link.id ? " active" : ""}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="Mzn-nav__cta"
          onClick={() => handleLinkClick(6)}
          id="nav-hire-me"
        >
          Hire Me
        </a>

        {/* Theme Toggle */}
        {/* <button
          className="Mzn-theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          id="theme-switcher-btn"
        >
          {mounted ? (theme === "light" ? <MoonIcon /> : <SunIcon />) : <MoonIcon />}
        </button> */}

        {/* Hamburger */}
        {/* <button
          className={`Mzn-nav__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button> */}
      </div>
    </nav>
  );
};

export default Nav;
