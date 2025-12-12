import styles from './ExtraStyles.module.css';

const GROUPS = [
  {
    title: 'Workshops and Presentations',
    items: [
      'A Journey to AI – Involved in a workshop for approximately 500 school children and teachers in Sri Lanka, introducing concepts of Artificial Intelligence (AI) and sharing insights from research projects.',
      'Path to IEEEXtreme – Conducted inspirational sessions for undergraduate students in Sri Lanka, motivating them to participate in IEEEXtreme.',
      'Future Makers Arduino Workshop series for Inventors – Conducted a workshop on PID controllers for undergraduate students at the Faculty of Engineering, University of Peradeniya.',
      'The Winning Strategy – Conducted a lecture series on Dynamic Programming for university students.',
    ],
  },
  {
    title: 'Volunteer Tutor',
    items: [
      'Provided tutoring in Linear Algebra, Programming in Python, C, and C++, Signals and Systems, Control Systems for undergraduate students, and Advanced Level Combined Mathematics for school students.',
      'Find posted videos on YouTube.',
    ],
    links: [
      {
        label: 'YouTube Channel',
        href: 'https://youtube.com/@buddhiwijenayake2000?si=DgKyjuW1V36koyIb',
      },
    ],
  },
  {
    title: 'Societies',
    items: [
      'Chairperson of the Microwave Theory and Techniques Society of University of Peradeniya (2024/2025).',
    ],
    links: [
      {
        label: 'Extracurricular Record (School)',
        href: 'https://drive.google.com/file/d/1OfBgdNV3bmIMEgeuX0JQEv7mQqRe6x8i/view?usp=drive_link',
      },
    ],
  },
];

function Extra() {
  return (
    <section id="extra" className={styles.container}>
      <h1 className="sectionTitle">Extra Curricular</h1>
      <div className={styles.grid}>
        {GROUPS.map((group) => (
          <article key={group.title} className={styles.card}>
            <h2 className={styles.title}>{group.title}</h2>
            <ul className={styles.list}>
              {group.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {group.links && group.links.length > 0 && (
              <div className={styles.links}>
                {group.links.map((l, i) => (
                  <a key={i} className={styles.link} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Extra;

