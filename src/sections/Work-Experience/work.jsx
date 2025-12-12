import styles from './workstyles.module.css';

const EXPERIENCES = [
  {
    role: 'Research Assistant',
    company: 'Multidisciplinary AI Research Centre, University of Peradeniya',
    location: 'Peradeniya, Sri Lanka',
    date: 'Nov 2025 – Present',
    details: [
      'Working on hallucination mechanisms in large language models.',
      'Working on remote sensing imagery and semantic change detection.',
      'Supervisors: Prof. Parakrama Ekanayake, Prof. Roshan Godaliyadda, and Prof. Ranga Kalugampitiya.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Department of Electrical and Electronic Engineering, University of Peradeniya',
    location: 'Peradeniya, Sri Lanka',
    date: 'Aug 2025 – Nov 2025',
    details: [
      'Designed and evaluated lab sessions, tutorials, and quizzes for Artificial Intelligence, Machine Learning, and Embedded Systems.',
    ],
  },
  {
    role: 'Volunteer Teaching Assistant',
    company: 'Department of Computer Engineering, University of Peradeniya',
    location: 'Peradeniya, Sri Lanka',
    date: 'March 2024 – July 2024',
    details: [
      'Designed and evaluated lab sessions in Introduction to Programming and Networking for Electrical Engineering (CO: 253).',
    ],
  },
  {
    role: 'Embedded System Engineer — Intern',
    company: 'SwartUp (PVT) Limited',
    location: 'Remote',
    date: 'July 2024 – November 2024',
    details: [
      'Developed software for a Smart Home system using the Zephyr RTOS.',
      'Designed and implemented both hardware and embedded software for a Smart City sensor node.',
    ],
  },
  {
    role: 'Electronic Engineer — Intern',
    company: 'Vega Innovations (PVT) Limited',
    location: 'Colombo, Sri Lanka',
    date: 'July 2023 – October 2023',
    details: [
      'Designed and developed a custom meter for measuring electrical conductivity and pH levels, including hardware design and embedded software development.',
    ],
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
                  {exp.location && <p className={styles.location}>{exp.location}</p>}
                </div>
              </div>
              <span className={styles.date}>{exp.date}</span>
            </header>
            {Array.isArray(exp.details) && exp.details.length > 0 && (
              <ul className={styles.details}>
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
