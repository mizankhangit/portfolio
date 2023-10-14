"use client";

import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [state, setState] = useState(1);

  return (
    <nav className="Mzn-nav-container">
      <div className="Mzn-container Mzn-nav">
        <div className="Mzn-nav__logo">
          <h3 className="Mzn-heading-three">
            <Link href="/">Mizan</Link>
          </h3>
        </div>
        <ul className="Mzn-nav__links Mzn-ml-auto">
          <li className="Mzn-nav__item" onClick={() => setState(2)}>
            <a
              href="#projects"
              className={`Mzn-nav__link ${state === 2 ? "active" : ""}`}
            >
              Projects
            </a>
          </li>
          <li className="Mzn-nav__item" onClick={() => setState(3)}>
            <a
              href="#about"
              className={`Mzn-nav__link ${state === 3 ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li className="Mzn-nav__item" onClick={() => setState(4)}>
            <a
              href="#skills"
              className={`Mzn-nav__link ${state === 4 ? "active" : ""}`}
            >
              Skills
            </a>
          </li>
          <li className="Mzn-nav__item" onClick={() => setState(5)}>
            <a
              href="#features"
              className={`Mzn-nav__link ${state === 5 ? "active" : ""}`}
            >
              Features
            </a>
          </li>
          <li className="Mzn-nav__item" onClick={() => setState(6)}>
            <a
              href="#contact"
              className={`Mzn-nav__link ${state === 6 ? "active" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
