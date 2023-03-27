const ProjectCard = ({ project }) => {
  return (
    <a
      className="Mzn-project"
      target="_blank"
      rel="noreferrer"
      href={project.link}
    >
      <img
        className="Mzn-project__image"
        src={project.imageUrl}
        alt={project.name}
      />
      <div className="Mzn-project__desc">
        <div className="Mzn-project__name">
          <span>{project?.name}</span>
        </div>

        <ul className="Mzn-project__tools">
          <li>Used tools:</li>{" "}
          {project?.tools?.map((tool, idx) => (
            <li className="Mzn-project__tool" key={idx}>
              {tool}
              {project?.tools?.length - 1 !== idx ? "," : ""}
            </li>
          ))}
        </ul>
        <div className="Mzn-project__link">View project</div>
      </div>
    </a>
  );
};

export default ProjectCard;
