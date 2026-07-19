import React from "react";
import SectionTitle from "../components/SectionTitle";

const stats = [
  { num: "6+", label: "Years Experience" },
  { num: "3",  label: "Companies" },
  { num: "20+", label: "Projects" },
];

const About = () => {
  return (
    <section className="Mzn-section" id="about">
      <div className="Mzn-container">
        <div className="Mzn-about">
          {/* Left */}
          <div className="Mzn-about__left">
            <SectionTitle
              heading="ABOUT"
              subHeading="A little about me"
            />

            <p className="Mzn-about__text">
              Frontend-focused Fullstack Developer with 6+ years of experience
              building scalable, high-performance web applications using
              React.js, Next.js, TypeScript, GraphQL, Node.js, and Express.js.
              Strong focus on clean architecture, performance, and user
              experience.
            </p>

            <p className="Mzn-about__text">
              As a Senior Frontend Engineer with deep expertise in consuming
              RESTful and GraphQL APIs, I create high-quality, efficient web
              applications. I stay current with industry trends and adapt
              quickly to evolving project requirements.
            </p>

            <p className="Mzn-about__text">
              I collaborate effectively with frontend, backend developers, and
              stakeholders to achieve project goals — always willing to
              provide feedback and suggestions to improve overall quality and
              user experience.
            </p>

            {/* Stats */}
            <div className="Mzn-about__stats">
              {stats.map((stat) => (
                <div className="Mzn-about__stat" key={stat.label}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="Mzn-about__right">
            <img
              src="./images/feature4.webp"
              alt="About Mizanur Rahman — Senior Frontend Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
