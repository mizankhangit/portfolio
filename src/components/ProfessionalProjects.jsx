import React from "react";

const ProfessionalProjects = (props) => {
  return (
    <ul className="Mzn-projects">
      {props.data.map((project) => (
        <li className="Mzn-project" key={project.id}>
          <div className="Mzn-project__image">
            <img src={project.imageUrl} alt={project.name} />
          </div>
          <div className="Mzn-project__desc">
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              className="Mzn-project__name"
            >
              <p>{project.name}</p>
            </a>
            <p className="Mzn-project__hint">Used tools</p>
            <ul className="Mzn-project__tools">
              {project.tools.map((tool, idx) => (
                <li className="Mzn-project__tool" key={idx}>
                  {tool}
                </li>
              ))}
            </ul>
            <a
              className="Mzn-project__link"
              target="_blank"
              rel="noreferrer"
              href={project.link}
            >
              View project
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProfessionalProjects;
