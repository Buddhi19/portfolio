import React from 'react';

function ProjectCard({ src, link, h3, p, s, k}) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{s}</p>
      <p>{k}</p>
    </a>
  );
}

export default ProjectCard;
