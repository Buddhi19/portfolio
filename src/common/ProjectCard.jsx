import React from 'react';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, link, h3, p, s, k }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      {src && <img src={src} alt={`${h3} logo`} className={styles.image} />}
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{h3}</h3>
        {p && <p className={styles.description}>{p}</p>}
        {s && <p className={styles.description}>{s}</p>}
        {k && <p className={styles.description}>{k}</p>}
      </div>
    </a>
  );
}

export default ProjectCard;