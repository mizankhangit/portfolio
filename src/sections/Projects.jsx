import React, { useState } from "react";
import ProfessionalProjects from "../components/ProfessionalProjects";
import SectionTitle from "../components/SectionTitle";
import dataPro from "../data-pro";

const Projects = () => {
  const [state, setState] = useState({ num: 1, show: "hc" });

  return (
    <section className="Mzn-section" id="projects">
      <div className="Mzn-container">
        <div className="Mzn-project-wrapper">
          <SectionTitle heading="PROJECT" subHeading="Some of my projects" />

          <div className={`Mzn-projects-container`}>
            <ProfessionalProjects data={dataPro} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
