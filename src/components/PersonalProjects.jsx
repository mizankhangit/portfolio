import React from "react";

const PersonalProjects = (props) => {
  // const projects = props.data.filter(
  //   (item, i) => item.tag === props.showProject
  // );

  return (
    <ul className="Mzn-projects">
      {props.data
        .filter((item, i) => item.tag === props.showProject)
        .map((project) => (
          <li className="Mzn-project" key={project.id}>
            {project.imageUrl && (
              <div className="Mzn-project__image">
                <img src={project.imageUrl} alt={project.name} />
              </div>
            )}
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
              <div className="Mzn-project__link-group">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="Mzn-project__link"
                  href={project.link}
                >
                  View project
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="Mzn-project__link"
                  href={project.gitHub}
                >
                  GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default PersonalProjects;
