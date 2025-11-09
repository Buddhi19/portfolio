import styles from './CoursesStyles.module.css';

// Summary
const SUMMARY = {
  registration: 'E/19/445',
  nameShort: 'W.M.B.S.K. Wijenayake',
  nameFull:
    'Warnasooriya Mudiyanselage Buddhi Saumya Kumara Wijenayake',
  gpa: 3.823,
  earnedCoreTeGe: 93,
  ccd: 3,
  coreTe: { offered: 81, earned: 81, deficit: 0 },
  ge: { offered: 15, earned: 12, deficit: 3 },
};

// Core + Technical Electives (contribute to GPA)
const CORE_TE_COURSES = [
  { id: 'EE201', name: 'Network Analysis' },
  { id: 'EE251', name: 'Principles of Electrical Measurements' },
  { id: 'EE252', name: 'Electronic Devices & Circuits' },
  { id: 'EE253', name: 'Digital Logic Design' },
  { id: 'EM211', name: 'Ordinary Differential Equations' },
  { id: 'EM213', name: 'Probability & Statistics' },
  { id: 'ME211', name: 'Mechanics of Machines' },
  { id: 'CO253', name: 'Introduction to Programming & Networking for Electrical Engineering' },
  { id: 'EE254', name: 'Electronic Instrumentation' },
  { id: 'EE255', name: 'Electric Power' },
  { id: 'EE256', name: 'Power & Energy' },
  { id: 'EE257', name: 'Signals & Systems' },
  { id: 'EM212', name: 'Calculus' },
  { id: 'ME210', name: 'Thermodynamics for Electrical & Electronic Engineers' },
  { id: 'EE320', name: 'Electromagnetic Theory' },
  { id: 'EE322', name: 'Embedded Systems Design' },
  { id: 'EE325', name: 'Digital Signal Processing' },
  { id: 'EE351', name: 'Electronic Circuits' },
  { id: 'EE352', name: 'Automatic Control' },
  { id: 'EE358', name: 'Electrical Machines' },
  { id: 'EM316', name: 'Numerical Methods for Electrical & Electronic Engineers' },
  { id: 'EE353', name: 'Discrete Time Control Systems' },
  { id: 'EE354', name: 'Power Engineering' },
  { id: 'EE355', name: 'Applied Electromagnetics' },
  { id: 'EE356', name: 'Electronic Product Design & Manufacture' },
  { id: 'EE357', name: 'Communication Systems' },
  { id: 'EE401', name: 'Communication Theory' },
  { id: 'EE539', name: 'Nonlinear & Multivariable Systems' },
  { id: 'EE596', name: 'Image & Video Coding' },
  { id: 'EM526', name: 'Industrial Statistics' },
];

// Raw data provided for Core/TE in order
const CORE_TE_GRADES_TEXT =
  'A+AAA+A+A+A-A+A+AA+A+A+A+B+A+A+A+A+A-AA+BBA+C+A+AAA+';
const CORE_TE_GRADE_POINTS_TEXT =
  '4444443.744444443.344443.7443342.34444';
const CORE_TE_CREDITS_TEXT = '333322333223222333232333333333';

function tokenizeGradeLetters(src) {
  const allowed2 = ['A+', 'A-', 'B+', 'B-', 'C+', 'C-', 'D+', 'D-'];
  const allowed1 = ['A', 'B', 'C', 'D', 'E'];
  const out = [];
  let i = 0;
  while (i < src.length) {
    const pair = src.slice(i, i + 2);
    if (allowed2.includes(pair)) {
      out.push(pair);
      i += 2;
      continue;
    }
    const ch = src[i];
    if (allowed1.includes(ch)) {
      out.push(ch);
      i += 1;
      continue;
    }
    // skip any unexpected character (e.g., whitespace)
    i += 1;
  }
  return out;
}

function tokenizeGradePoints(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '4') {
      out.push(4);
      i += 1;
      continue;
    }
    if (ch === '3') {
      if (src.slice(i, i + 3) === '3.7') {
        out.push(3.7);
        i += 3;
      } else if (src.slice(i, i + 3) === '3.3') {
        out.push(3.3);
        i += 3;
      } else {
        out.push(3.0);
        i += 1;
      }
      continue;
    }
    if (ch === '2') {
      if (src.slice(i, i + 3) === '2.7') {
        out.push(2.7);
        i += 3;
      } else if (src.slice(i, i + 3) === '2.3') {
        out.push(2.3);
        i += 3;
      } else {
        out.push(2.0);
        i += 1;
      }
      continue;
    }
    if (ch === '1') {
      if (src.slice(i, i + 3) === '1.7') {
        out.push(1.7);
        i += 3;
      } else if (src.slice(i, i + 3) === '1.3') {
        out.push(1.3);
        i += 3;
      } else if (src[i + 1] === '.') {
        out.push(1.0);
        i += 1;
      } else {
        out.push(1.0);
        i += 1;
      }
      continue;
    }
    if (ch === '0') {
      out.push(0.0);
      i += 1;
      continue;
    }
    // skip others
    i += 1;
  }
  return out;
}

function lettersFromPoints(p) {
  if (p >= 3.95) return 'A'; // A or A+
  if (p >= 3.65) return 'A-';
  if (p >= 3.25) return 'B+';
  if (p >= 2.85) return 'B';
  if (p >= 2.55) return 'B-';
  if (p >= 2.15) return 'C+';
  if (p >= 1.85) return 'C';
  if (p >= 1.55) return 'C-';
  if (p >= 1.15) return 'D+';
  if (p >= 0.85) return 'D';
  return 'E';
}

function tokenizeCredits(src) {
  // single-digit credits concatenated, e.g., 33322...
  return src
    .split('')
    .filter((c) => /[0-9]/.test(c))
    .map((c) => parseInt(c, 10));
}

// Build enriched Core/TE courses with grade and credits
const CORE_TE_LETTERS = tokenizeGradeLetters(CORE_TE_GRADES_TEXT);
const CORE_TE_POINTS = tokenizeGradePoints(CORE_TE_GRADE_POINTS_TEXT);
const CORE_TE_CREDITS = tokenizeCredits(CORE_TE_CREDITS_TEXT);

const CORE_TE = CORE_TE_COURSES.map((c, i) => {
  const gradePoint = CORE_TE_POINTS[i];
  const credits = CORE_TE_CREDITS[i];
  const letter = CORE_TE_LETTERS.length === CORE_TE_COURSES.length
    ? CORE_TE_LETTERS[i]
    : lettersFromPoints(gradePoint ?? 0);
  return { ...c, grade: letter, credits };
});

// General Electives (do not count towards GPA)
const GE_COURSES = [
  { id: 'EF519', name: 'Written English for Communication', grade: 'A', credits: 1 },
  { id: 'EF528', name: 'Introduction to Digital Art', grade: 'E', credits: 3 },
  { id: 'EF501', name: 'The Engineer in Society', grade: 'B', credits: 2 },
  { id: 'MA501', name: 'Accounting and Finance for Engineers', grade: 'B+', credits: 3 },
  { id: 'EF524', name: 'Business Law', grade: 'A+', credits: 3 },
  { id: 'EF530', name: 'Engineering Management', grade: 'A-', credits: 3 },
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

function HeaderRow() {
  return (
    <div className={styles.headerRow}>
      <div className={styles.code}>Code</div>
      <div className={styles.name}>Course Unit</div>
      <div className={styles.grade}>Grade</div>
      <div className={styles.credits}>Cr</div>
    </div>
  );
}

function Row({ id, name, grade, credits }) {
  return (
    <div className={styles.row}>
      <div className={styles.code}>{id}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.grade}>{grade ?? '—'}</div>
      <div className={styles.credits}>{credits ?? '—'}</div>
    </div>
  );
}

function Courses() {
  return (
    <section id="courses" className={styles.container}>
      <h1 className="sectionTitle">Undergraduate Courses</h1>

      <div className={styles.summary}>
        <div>
          <div><strong>Registration:</strong> {SUMMARY.registration}</div>
          <div><strong>Name:</strong> {SUMMARY.nameShort}</div>
        </div>
        <div>
          <div><strong>Final Course GPA:</strong> {SUMMARY.gpa.toFixed(3)}</div>
          <div>
            <strong>Credits (Core+TE+GE):</strong> {SUMMARY.earnedCoreTeGe}
            {`  |  CCD: ${SUMMARY.ccd}`}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Core & Technical Electives (GPA)</h2>
        <div className={styles.caption}>
          Credits Offered = {SUMMARY.coreTe.offered} | Credits Earned = {SUMMARY.coreTe.earned} | Credit Deficit = {SUMMARY.coreTe.deficit}
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {CORE_TE.map((c) => (
            <Row key={c.id} id={c.id} name={c.name} grade={c.grade} credits={c.credits} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>General Electives (Not in GPA)</h2>
        <div className={styles.caption}>
          Credits Offered = {SUMMARY.ge.offered} | Credits Earned = {SUMMARY.ge.earned} | Credit Deficit = {SUMMARY.ge.deficit}
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {GE_COURSES.map((c) => (
            <Row key={c.id} id={c.id} name={c.name} grade={c.grade} credits={c.credits} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Qualifying Course in Engineering (QE)</h2>
        <div className={styles.caption}>
          A student who advances to follow the Final Course in Engineering has earned a minimum of 33 credits from QE (excluding QE 102: English II).
        </div>
        <div className={styles.table}>
          <HeaderRow />
          {QE_COURSES.map((c) => (
            <Row key={c.id} id={c.id} name={c.name} grade={c.grade} credits={c.credits} />
          ))}
        </div>
      </div>

      <div className={styles.notes}>
        <div>
          <strong>TR400: Industrial Training</strong> must be passed to successfully complete the Specialization Programme in Engineering. After passing TR400, the student earns 6 additional credits towards claiming the degree.
        </div>
        <div>
          <strong>GP102: English II</strong> must be passed to successfully complete the General Programme in Engineering. After passing GP102, the student earns 3 additional credits.
        </div>
      </div>
    </section>
  );
}

export default Courses;
