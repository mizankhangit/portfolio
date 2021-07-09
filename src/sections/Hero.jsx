import React from "react";

const Hero = () => {
  return (
    <section className="Mzn-section">
      <div className="Mzn-container">
        <div className="Mzn-hero">
          <div className="Mzn-hero__left">
            <h1 className="Mzn-heading-one">Hi, I am Mizanur Rahman</h1>
            <h2 className="Mzn-heading-two">
              <span className="highlight-bg">A Frontend Engineer</span>
            </h2>
            <p className="Mzn-hero-desc">
              Build <span className="highlight">blazing fast</span> and{" "}
              <span className="highlight">stunning</span> web application <br />{" "}
              using modern development tools.
            </p>
            <div className="Mzn-btn-group Mzn-mt20">
              <a
                href="./images/mizan-resume.pdf"
                className="Mzn-btn Mzn-btn-outline"
                download
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mizankhangit"
                className="Mzn-btn Mzn-btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="Mzn-hero__right">
            <div className="Mzn-hero__image">
              <img src="./images/hero.webp" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
