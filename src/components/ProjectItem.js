
import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <h4>{about}</h4>
      <div>
        {technologies.map((tech, index) => (
          <span className="technologies" key={index}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
