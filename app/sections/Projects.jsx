import dataPro from "@/data-pro";
import SectionTitle from "@/app/components/SectionTitle";
import ProfessionalProjects from "@/app/components/ProfessionalProjects";

const Projects = () => {
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
