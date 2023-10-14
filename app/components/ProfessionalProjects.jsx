import ProjectCard from "./ProjectCard";

const ProfessionalProjects = ({ data }) => {
  return (
    <div className="Mzn-projects">
      {data.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
};

export default ProfessionalProjects;
