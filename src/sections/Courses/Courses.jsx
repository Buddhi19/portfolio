import styles from './CoursesStyles.module.css';

const COURSES = ["Linear Algebra", "Calculus", "Data Structures and Algorithms", "Operating Systems", "Database Systems"];

function Courses() {
  return (
    <section id="courses" className={styles.container}>
      <h1 className="sectionTitle">Undergraduate Courses</h1>
      {COURSES.length === 0 ? (
        <p className={styles.note}>Add your course list in COURSES at src/sections/Courses/Courses.jsx.</p>
      ) : (
        <ul className={styles.list}>
          {COURSES.map((c, i) => (
            <li key={i} className={styles.item}>{c}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Courses;

