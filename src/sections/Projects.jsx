import React, { useState } from "react";
import dataPro from "../data-pro";
import dataPer from "../data-per";
import ProfessionalProjects from "../components/ProfessionalProjects";
import PersonalProjects from "../components/PersonalProjects";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  const [state, setState] = useState({ num: 1, show: "hc" });
  const [showMore, setShowMore] = useState(false);
  console.log(showMore);

  return (
    <section className="Mzn-section" id="projects">
      <div className="Mzn-container">
        <div className="Mzn-project-wrapper">
          <SectionTitle
            heading="PROJECT"
            subHeading="Some of my professional projects"
            note="(These projects I do all frontend task)"
          />

          <div
            className={`Mzn-projects-container ${
              !showMore ? "show-less" : "show-more"
            }`}
          >
            <ProfessionalProjects data={dataPro} />

            {dataPro.length > 8 && (
              <div className="Mzn-btn-group Mzn-justify-center">
                <button
                  className="Mzn-btn Mzn-btn-outline Mzn-mt30"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>

          <SectionTitle
            className="Mzn-mt60"
            subHeading="Some of my personal/practice projects"
            note="(These projects I do both frontend and backend task)"
          />

          <div className="Mzn-tab-container">
            <ul className="Mzn-tabs">
              <li
                className="Mzn-tab"
                onClick={() =>
                  setState({
                    ...state,
                    num: 1,
                    show: "hc",
                  })
                }
              >
                <button
                  className={`Mzn-tab__btn ${state.num === 1 ? "active" : ""}`}
                >
                  HTML & CSS
                </button>
              </li>
              <li
                className="Mzn-tab"
                onClick={() =>
                  setState({
                    ...state,
                    num: 2,
                    show: "js",
                  })
                }
              >
                <button
                  className={`Mzn-tab__btn ${state.num === 2 ? "active" : ""}`}
                >
                  JavaScript DOM
                </button>
              </li>

              <li
                className="Mzn-tab"
                onClick={() =>
                  setState({
                    ...state,
                    num: 4,
                    show: "re",
                  })
                }
              >
                <button
                  className={`Mzn-tab__btn ${state.num === 4 ? "active" : ""}`}
                >
                  React
                </button>
              </li>
              <li
                className="Mzn-tab"
                onClick={() =>
                  setState({
                    ...state,
                    num: 3,
                    show: "no",
                  })
                }
              >
                <button
                  className={`Mzn-tab__btn ${state.num === 3 ? "active" : ""}`}
                >
                  Fullstack
                </button>
              </li>
            </ul>
          </div>
          <div className="Mzn-projects-container">
            <PersonalProjects showProject={state.show} data={dataPer} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
