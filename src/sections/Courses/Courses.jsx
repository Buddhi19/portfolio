import styles from './CoursesStyles.module.css';

const SUMMARY = {
  registration: 'E/19/445',
  nameFull: 'Warnasooriya Mudiyanselage Buddhi Saumya Kumara Wijenayake',
  dateOfBirth: '29/11/2000',
  degree: 'Bachelor of Science in Engineering',
  specialization: 'Electrical and Electronic Engineering',
  medium: 'English',
  gpa: 3.85,
};

// Core + Technical Electives (contribute to GPA)
const CORE_TE = [
  { id: 'EE201', name: 'Network Analysis', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE251', name: 'Principles of Electrical Measurements', grade: 'A', gradePoint: 4.0, credits: 3 },
  { id: 'EE252', name: 'Electronic Devices & Circuits', grade: 'A', gradePoint: 4.0, credits: 3 },
  { id: 'EE253', name: 'Digital Logic Design', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EM211', name: 'Ordinary Differential Equations', grade: 'A+', gradePoint: 4.0, credits: 2 },
  { id: 'EM213', name: 'Probability & Statistics', grade: 'A+', gradePoint: 4.0, credits: 2 },
  { id: 'ME211', name: 'Mechanics of Machines', grade: 'A-', gradePoint: 3.7, credits: 3 },
  { id: 'CO253', name: 'Introduction to Programming & Networking for Electrical Engineering', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE254', name: 'Electronic Instrumentation', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE255', name: 'Electric Power', grade: 'A', gradePoint: 4.0, credits: 2 },
  { id: 'EE256', name: 'Power & Energy', grade: 'A+', gradePoint: 4.0, credits: 2 },
  { id: 'EE257', name: 'Signals & Systems', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EM212', name: 'Calculus', grade: 'A+', gradePoint: 4.0, credits: 2 },
  { id: 'ME210', name: 'Thermodynamics for Electrical & Electronic Engineers', grade: 'A+', gradePoint: 4.0, credits: 2 },
  { id: 'EE320', name: 'Electromagnetic Theory', grade: 'B+', gradePoint: 3.3, credits: 2 },
  { id: 'EE322', name: 'Embedded Systems Design', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE325', name: 'Digital Signal Processing', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE351', name: 'Electronic Circuits', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE352', name: 'Automatic Control', grade: 'A+', gradePoint: 4.0, credits: 2 },
  { id: 'EE358', name: 'Electrical Machines', grade: 'A-', gradePoint: 3.7, credits: 3 },
  { id: 'EM316', name: 'Numerical Methods for Electrical & Electronic Engineers', grade: 'A', gradePoint: 4.0, credits: 2 },
  { id: 'EE353', name: 'Discrete Time Control Systems', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE354', name: 'Power Engineering', grade: 'B', gradePoint: 3.0, credits: 3 },
  { id: 'EE355', name: 'Applied Electromagnetics', grade: 'B', gradePoint: 3.0, credits: 3 },
  { id: 'EE356', name: 'Electronic Product Design & Manufacture', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE357', name: 'Communication Systems', grade: 'C+', gradePoint: 2.3, credits: 3 },
  { id: 'EE401', name: 'Communication Theory', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE405', name: 'Undergraduate Project I', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE539', name: 'Nonlinear & Multivariable Systems', grade: 'A', gradePoint: 4.0, credits: 3 },
  { id: 'EM526', name: 'Industrial Statistics', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EM502', name: 'Optimization', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE406', name: 'Undergraduate Project II', grade: 'A+', gradePoint: 4.0, credits: 3 },
  { id: 'EE593', name: 'Advanced Signal Processing', grade: 'A', gradePoint: 4.0, credits: 3 },
  { id: 'EM505', name: 'Complex Analysis', grade: 'A+', gradePoint: 4.0, credits: 3 },
];

// General Electives (do not count towards GPA)
const GE_COURSES = [
  { id: 'EF519', name: 'Written English for Communication', grade: 'A', credits: 1 },
  { id: 'EF501', name: 'Engineer in Society', grade: 'B', credits: 2 },
  { id: 'MA501', name: 'Accounting and Finance for Engineers', grade: 'B+', credits: 3 },
  { id: 'EF524', name: 'Business Law', grade: 'A+', credits: 3 },
  { id: 'EF530', name: 'Engineering Management', grade: 'A-', credits: 3 },
  { id: 'EF516', name: 'Painting and Sculpture', grade: 'A+', credits: 2 },
  { id: 'EF520', name: 'Effective Communication in English through Speech', grade: 'A+', credits: 1 },
];

// Qualifying Course in Engineering (QE)
const QE_COURSES = [
  { id: 'GP101', name: 'English I', grade: 'A+', credits: 3 },
  { id: 'GP106', name: 'Computing', grade: 'A', credits: 3 },
  { id: 'GP109', name: 'Materials Science', grade: 'B', credits: 3 },
  { id: 'GP110', name: 'Engineering Mechanics', grade: 'B-', credits: 3 },
  { id: 'GP111', name: 'Elementary Thermodynamics', grade: 'B', credits: 3 },
  { id: 'GP115', name: 'Calculus I', grade: 'A', credits: 3 },
  { id: 'GP112', name: 'Engineering Measurements', grade: 'A-', credits: 3 },
  { id: 'GP113', name: 'Fundamentals of Manufacture', grade: 'B-', credits: 3 },
  { id: 'GP114', name: 'Engineering Drawing', grade: 'B+', credits: 3 },
  { id: 'GP116', name: 'Linear Algebra', grade: 'A+', credits: 3 },
  { id: 'GP118', name: 'Basic Electrical & Electronic Engineering', grade: 'A', credits: 3 },
];

const PASS_REQUIREMENTS = [
  { id: 'GP102', name: 'English II', grade: 'Pass', credits: 3 },
  { id: 'TR400', name: 'Industrial Training', grade: 'Pass', credits: 6 },
];

const EXCLUDED_TE = [
  { id: 'EF596', name: 'Image and Video Coding', grade: 'A', gradePoint: 4.0, credits: 3 },
  { id: 'EF595', name: 'Machine Intelligence and Smart Systems', grade: 'B+', gradePoint: 3.3, credits: 3 },
];

const coreTeCredits = CORE_TE.reduce((acc, c) => acc + (c.credits ?? 0), 0);
const geCredits = GE_COURSES.reduce((acc, c) => acc + (c.credits ?? 0), 0);
const qeCredits = QE_COURSES.reduce((acc, c) => acc + (c.credits ?? 0), 0);
const totalCredits = coreTeCredits + geCredits;

function formatGradePoint(value) {
  if (value === null || value === undefined) return '—';
  return Number(value).toFixed(1);
}

function HeaderRow() {
  return (
    <div className={styles.headerRow}>
      <div className={styles.code}>Code</div>
      <div className={styles.name}>Course Unit</div>
      <div className={styles.grade}>Grade</div>
      <div className={styles.gp}>GP</div>
      <div className={styles.credits}>Cr</div>
    </div>
  );
}

function Row({ id, name, grade, gradePoint, credits }) {
  return (
    <div className={styles.row}>
      <div className={styles.code}>{id}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.grade}>{grade ?? '—'}</div>
      <div className={styles.gp}>{formatGradePoint(gradePoint)}</div>
      <div className={styles.credits}>{credits ?? '—'}</div>
    </div>
  );
}

function Courses() {
  return (
    <section id="academic-record" className={styles.container}>
      <h1 className="sectionTitle">Academic Record</h1>

      <div className={styles.summary}>
        <div className={styles.summaryGroup}>
          <div><strong>Registration Number:</strong> {SUMMARY.registration}</div>
          <div><strong>Name in Full:</strong> {SUMMARY.nameFull}</div>
          <div><strong>Date of Birth:</strong> {SUMMARY.dateOfBirth}</div>
          <div><strong>Degree:</strong> {SUMMARY.degree}</div>
          <div><strong>Field of Specialization:</strong> {SUMMARY.specialization}</div>
          <div><strong>Medium of Instruction:</strong> {SUMMARY.medium}</div>
        </div>
        <div className={styles.summaryGroup}>
          <div><strong>Final Course GPA:</strong> {SUMMARY.gpa.toFixed(2)}</div>
          <div><strong>Credits (Core + Technical Electives):</strong> {coreTeCredits}</div>
          <div><strong>Credits (General Electives):</strong> {geCredits}</div>
          <div><strong>Total Credits (Core + TE + GE):</strong> {totalCredits}</div>
          <div><strong>QE Credits Earned (for advancement):</strong> {qeCredits}</div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Core & Technical Electives (GPA)</h2>
        <div className={styles.caption}>
          Credits Offered = {coreTeCredits} | Credits Earned = {coreTeCredits} | Credit Deficit = 0
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {CORE_TE.map((c) => (
            <Row
              key={c.id}
              id={c.id}
              name={c.name}
              grade={c.grade}
              gradePoint={c.gradePoint}
              credits={c.credits}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>General Electives (Not in GPA)</h2>
        <div className={styles.caption}>
          Credits Offered = {geCredits} | Credits Earned = {geCredits} | Credit Deficit = 0
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {GE_COURSES.map((c) => (
            <Row
              key={c.id}
              id={c.id}
              name={c.name}
              grade={c.grade}
              gradePoint={c.gradePoint}
              credits={c.credits}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Qualifying Course in Engineering (QE)</h2>
        <div className={styles.caption}>
          Students advance to the Final Course in Engineering after earning at least 33 credits from QE (excluding GP102: English II).
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {QE_COURSES.map((c) => (
            <Row
              key={c.id}
              id={c.id}
              name={c.name}
              grade={c.grade}
              gradePoint={c.gradePoint}
              credits={c.credits}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Technical Elective Courses Excluded from Degree Claim</h2>
        <div className={styles.caption}>Not counted towards earned credits or GPA calculations.</div>
        <div className={styles.table}>
          <HeaderRow />
          {EXCLUDED_TE.map((c) => (
            <Row
              key={c.id}
              id={c.id}
              name={c.name}
              grade={c.grade}
              gradePoint={c.gradePoint}
              credits={c.credits}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>GP102: English II and TR400: Industrial Training</h2>
        <div className={styles.caption}>
          Both courses must be passed to complete the specialization programme. Passing adds 9 credits (3 + 6) towards degree eligibility.
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {PASS_REQUIREMENTS.map((c) => (
            <Row
              key={c.id}
              id={c.id}
              name={c.name}
              grade={c.grade}
              gradePoint={c.gradePoint}
              credits={c.credits}
            />
          ))}
        </div>
      </div>

      <div className={styles.notes}>
        <div>Core and Technical Elective courses contribute to the Final Course GPA of {SUMMARY.gpa.toFixed(2)}.</div>
        <div>General Electives do not affect GPA but count towards earned credits for the degree.</div>
      </div>
    </section>
  );
}

export default Courses;
