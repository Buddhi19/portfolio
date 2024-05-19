import React from 'react';

function ProjectCard({ src, link, h3, p, s }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{s}</p>
    </a>
  );
}

export default ProjectCard;
