import React from "react";
import CheckIcon from "../components/icons";
import SectionTitle from "../components/SectionTitle";

const Features = () => {
  return (
    <section className="Mzn-section" id="features">
      <div className="Mzn-container">
        <div className="Mzn-feature">
          <div className="Mzn-feature__left">
            <SectionTitle heading="FEATURES" subHeading="My special features" />
            <ul className="Mzn-feature__lists">
              <li className="Mzn-feature__list">
                <CheckIcon />
                <span>
                  I always follow World Wide Web Consortium(W3C) guideline.
                </span>
              </li>
              <li className="Mzn-feature__list">
                <CheckIcon />
                <span>I always follow semantic markup.</span>
              </li>
              <li className="Mzn-feature__list">
                <CheckIcon />
                <span>I always develop SEO-friendly markups.</span>
              </li>
              <li className="Mzn-feature__list">
                <CheckIcon />
                <span>
                  I always develop responsive website which is compatible all
                  device and future device proof.
                </span>
              </li>
              <li className="Mzn-feature__list">
                <CheckIcon />
                <span>I always follow modern development trends.</span>
              </li>
              <li className="Mzn-feature__list">
                <CheckIcon />
                <span>
                  I always follow coding best practices and write clean code.
                </span>
              </li>
            </ul>
          </div>
          <div className="Mzn-feature__right">
            <div className="Mzn-feature__image">
              <img src="./images/feature3.webp" alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
