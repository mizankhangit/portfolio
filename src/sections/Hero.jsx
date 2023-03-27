import React from "react";

const Hero = () => {
  return (
    <section className="Mzn-section">
      <div className="Mzn-container">
        <div className="Mzn-hero">
          <div className="Mzn-hero__left">
            <h1 className="Mzn-heading-one mb-3">
              Hi, I am <br />
              Mizanur Rahman
            </h1>
            <h2 className="Mzn-heading-one">
              <span className="highlight-bg" style={{ borderRadius: 8 }}>
                A Frontend Engineer
              </span>
            </h2>
            <p className="Mzn-hero-desc">
              Build <span className="highlight">blazing fast</span> and{" "}
              <span className="highlight">stunning</span> web application <br />{" "}
              using modern web development tools.
            </p>
            <div className="Mzn-btn-group Mzn-mt20">
              <a
                href="./images/mizan-resume.pdf"
                className="Mzn-btn Mzn-btn-outline"
                download
                style={{ borderRadius: 8 }}
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mizankhangit"
                className="Mzn-btn Mzn-btn-outline"
                style={{ borderRadius: 8 }}
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="Mzn-hero__right">
            <div className="Mzn-hero__image">
              <img
                src="./images/hero-image-2.jpg"
                alt="hero"
                style={{ border: "1px solid #eee", borderRadius: 8 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
