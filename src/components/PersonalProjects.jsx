import ProjectCard from "./ProjectCard";

const PersonalProjects = (props) => {
  return (
    <ul className="Mzn-projects">
      {props.data
        .filter((item) => item.tag === props.showProject)
        .map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
    </ul>
  );
};

export default PersonalProjects;
