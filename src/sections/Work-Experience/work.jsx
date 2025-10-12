import styles from './workstyles.module.css';

const EXPERIENCES = [
  {
    role: 'Embedded Systems Engineer — Intern',
    company: 'SwartUp (PVT) Limited',
    date: 'July 2024 – Nov 2024',
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Peradeniya',
    date: 'March 2024 – July 2024',
    summary: 'Assisted delivery for Computer Networking and Programming modules.',
  },
  {
    role: 'Electrical and Electronic Engineer — Intern',
    company: 'Vega Innovations',
    date: 'July 2023 – Oct 2023',
  },
];

function Work() {
  return (
    <section id="work" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>

      <div className={styles.timeline}>
        {EXPERIENCES.map((exp, idx) => (
          <article key={idx} className={styles.card}>
            <header className={styles.header}>
              <div className={styles.heading}>
                <span className={styles.dot} aria-hidden />
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
              </div>
              <span className={styles.date}>{exp.date}</span>
            </header>
            {exp.summary ? <p className={styles.summary}>{exp.summary}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
