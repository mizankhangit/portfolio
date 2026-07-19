import React from "react";
import experiences from "@/data-experience";
import SectionTitle from "../components/SectionTitle";

export const Experience = () => {
  return (
    <section className="Mzn-section" id="experience">
      <div className="Mzn-container">
        <div className="Mzn-experience">
          <div className="Mzn-exp-header">
            <SectionTitle
              heading="EXPERIENCE"
              subHeading="My professional journey"
            />
          </div>

          <div className="Mzn-timeline">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`Mzn-exp-item ${exp.current ? "current" : ""}`}
              >
                <div className="Mzn-exp-card">
                  <div className="Mzn-exp-card__header">
                    <div className="Mzn-exp-card__meta">
                      <h3 className="Mzn-exp-card__company">{exp.company}</h3>
                      <p className="Mzn-exp-card__role">{exp.role}</p>
                      <p className="Mzn-exp-card__location">
                        📍 {exp.location}
                      </p>
                    </div>

                    <div className="Mzn-exp-card__date">
                      <span className="Mzn-exp-date-range">
                        {exp.startDate} — {exp.endDate}
                      </span>
                      {exp.current && (
                        <span className="Mzn-exp-badge-current">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="Mzn-exp-card__highlights">
                    {exp.highlights.map((item, i) => (
                      <li className="Mzn-exp-highlight" key={i}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
