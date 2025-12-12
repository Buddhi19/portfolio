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
              <strong>GPA: 3.85/4.00</strong>
              {' | '}
              <a
                href="https://drive.google.com/file/d/1ibvg7Os6gmGtLjC374P-CzX5FbtxmpEY/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Academic Record
              </a>
            </li>
            <li>Graduated with <strong>First Class Honors</strong></li>
            <li>
              Complete degree program was conducted and assessed in <strong>English Medium</strong> and accredited by the <strong>Washington Accord</strong>.
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
              Top <strong>0.8%</strong> in Kandy District, Top <strong>0.5%</strong> in Sri Lanka out of 19000+ candidates.
            </li>
            <li>
              Z-Score: 2.6473{' '}
              {' | '}
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
          <ul className={styles.bullets}>
            <li>
              9 Distinction (A) passes{' '}
              {' | '}
              <a
                href="https://drive.google.com/file/d/1RnqIvzoIhKRyp6ZvdX33z6jo7kcPTqOc/view?usp=drive_link"
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
