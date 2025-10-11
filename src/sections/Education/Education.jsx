import styles from './EducationStyles.module.css';

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>

      <div className={styles.eduList}>
        <article className={styles.card}>
          <header className={styles.header}>
            <div>
              <h3 className={styles.title}>Bachelor of Science of Engineering Honours (B. Sc. Engineering)</h3>
              <p className={styles.subtitle}>Specialized in Electrical and Electronic Engineering</p>
            </div>
            <div className={styles.meta}>
              <span>2021 - 2025</span>
              <span>Peradeniya, Sri Lanka</span>
            </div>
          </header>
          <p className={styles.institute}>Faculty of Engineering, University of Peradeniya</p>
          <ul className={styles.bullets}>
            <li>
              <strong>CGPA: 3.823/4.00</strong>
              {' | '}
              <a
                href="https://drive.google.com/file/d/1UWcUrEr4T6bXhAqrWHH9hpJoQ5w9ttP2/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Temporary Transcript
              </a>
            </li>
            <li>Graduated with <strong>First Class Honors</strong></li>
            <li>Ranked 7th in the Class of Electrical and Electronic Engineering (7/105)</li>
            <li>
              Degree program conducted and assessed in <strong>English Medium</strong> and accredited by the <strong>Washington Accord</strong>.
            </li>
          </ul>

          <a className={styles.link} href="#/courses">View Undergraduate Courses →</a>
        </article>

        <article className={styles.card}>
          <header className={styles.header}>
            <div>
              <h3 className={styles.title}>
                G. C. E Advanced Level Examination (University Entrance Examination)
              </h3>
              <p className={styles.subtitle}>3 Distinction (A) passes for Combined Mathematics, Physics, and Chemistry</p>
            </div>
            <div className={styles.meta}>
              <span>Aug 2019</span>
              <span>Kandy, Sri Lanka</span>
            </div>
          </header>
          <ul className={styles.bullets}>
            <li>
              Ranked <strong>10th in the Kandy District</strong>, <strong>107th</strong> in Sri Lanka.
            </li>
            <li>
              Z-Score: 2.6473 |
              <a
                href="https://drive.google.com/file/d/1wqfz-mxoUZj8fVRHnaHMstwfTZuoYyUw/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Result Sheet
              </a>
            </li>
          </ul>
        </article>

        <article className={styles.card}>
          <header className={styles.header}>
            <div>
              <h3 className={styles.title}>G. C. E. Ordinary Level Examination</h3>
              <p className={styles.subtitle}>9 Distinction (A) passes</p>
            </div>
            <div className={styles.meta}>
              <span>Dec 2016</span>
              <span>Kandy, Sri Lanka</span>
            </div>
          </header>
        </article>

        <article className={styles.card}>
          <header className={styles.header}>
            <div>
              <h3 className={styles.title}>Primary and Secondary Education</h3>
              <p className={styles.subtitle}>St. Sylvester's College</p>
            </div>
            <div className={styles.meta}>
              <span>2006 - 2019</span>
              <span>Kandy, Sri Lanka</span>
            </div>
          </header>
        </article>
      </div>
    </section>
  );
}

export default Education;
