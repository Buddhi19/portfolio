import styles from './CoursesStyles.module.css';

const COURSES = [];

function Courses() {
  return (
    <section id="courses" className={styles.container}>
      <h1 className="sectionTitle">Undergraduate Courses</h1>
      {COURSES.length === 0 ? (
        <p className={styles.note}> Under Construction.</p>
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

