import styles from './AwardsStyles.module.css';

function extractBadges(text = '') {
  const t = `${text}`.toLowerCase();
  const chips = [];

  const push = (label, tone) => chips.push({ label, tone });

  if (/(gold)/.test(t)) push('Gold', 'gold');
  if (/(silver)/.test(t)) push('Silver', 'silver');
  if (/(bronze)/.test(t)) push('Bronze', 'bronze');
  if (/(finalist)/.test(t)) push('Finalist', 'finalist');
  if (/(merit)/.test(t)) push('Merit', 'merit');
  if (/(champion|overall\s+champions?)/.test(t)) push('Champion', 'champion');
  if (/(runner|runners\s*up)/.test(t)) push('Runner-up', 'runner');

  const rankMatch = t.match(/ranked\s+(\d+)(st|nd|rd|th)?/);
  if (rankMatch) push(`${rankMatch[1]}${rankMatch[2] || 'th'}`, 'rank');

  return chips;
}

function AwardItem({ item }) {
  const chips = extractBadges(`${item.title || ''} ${item.details || ''}`);
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.org && <p className={styles.org}>{item.org}</p>}
        </div>
        <div className={styles.meta}>
          {item.host && <span className={styles.host}>{item.host}</span>}
          {item.date && <span className={styles.date}>{item.date}</span>}
          {!!chips.length && (
            <div className={styles.chips} aria-label="badges">
              {chips.map((c, i) => (
                <span
                  key={i}
                  className={[
                    styles.chip,
                    c.tone === 'gold' && styles.chipGold,
                    c.tone === 'silver' && styles.chipSilver,
                    c.tone === 'bronze' && styles.chipBronze,
                    c.tone === 'finalist' && styles.chipFinalist,
                    c.tone === 'champion' && styles.chipChampion,
                    c.tone === 'runner' && styles.chipRunner,
                    c.tone === 'merit' && styles.chipMerit,
                    c.tone === 'rank' && styles.chipRank,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {c.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {item.details && <p className={styles.details}>{item.details}</p>}

      {!!item.links?.length && (
        <div className={styles.links}>
          {item.links.map((l, i) => (
            <a key={i} className={styles.link} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

const AWARDS = [
  {
    title: 'Sri Lanka Mathematics Olympiad (SLMO)',
    host: 'Sri Lanka Olympiad Mathematics Foundation (SLOMF)',
    org: '',
    date: '2019',
    details: 'Bronze Medal',
    links: [
      { label: 'Award', href: 'https://www.slmathsolympiad.org/results/slmc-2019-results-high-distinctions-distinctions-honourable-mentions#:~:text=10073062,ST.%20SYLVESTER%E2%80%99S%20COLLEGE' },
      { label: 'Certificate & Medal', href: 'https://drive.google.com/file/d/1r5zlv31p3FkLPW7-LjqZvfbhb3j47Fw7/view?usp=drive_link' },
    ],
  },
  {
    title: 'Chemistry Olympiad Sri Lanka (COSL)',
    host: 'Institute of Chemistry Ceylon (IChem)',
    date: 'May 2019',
    details: 'Merit Award, Ranked 4th All Island',
    links: [
      { label: 'Award', href: 'https://www.web.ichemc.edu.lk/cosl/cosl-awards/#:~:text=Merit%20award,Sylvester%E2%80%99s%20College%2C%20Kandy' },
      { label: 'Certificate', href: 'https://drive.google.com/file/d/16CELZu6LoGniDSwgab50ArxFO2USMGwe/view?usp=drive_link' },
    ],
  },
  {
    title: 'Chemistry Olympiad Sri Lanka (COSL)',
    host: 'Institute of Chemistry Ceylon (IChem)',
    date: 'Feb 2020',
    details: 'Finalist',
    links: [
      { label: 'Award', href: 'https://www.web.ichemc.edu.lk/cosl/finalists/#:~:text=36,Sylvester%E2%80%99s%20College%2C%20Kandy' },
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1WeufbVL7GR27_Z6Y3AYQ9_Gyabh2yF_A/view?usp=drive_link' },
    ],
  },
  {
    title: 'Hong Kong International Mathematical Olympiad (HKIMO)',
    host: 'Sri Lanka Olympiad Mathematics Foundation (SLOMF)',
    date: 'June 2019',
    details: 'Heat Round, Silver Medal',
    links: [
      { label: 'Award', href: 'https://www.slmathsolympiad.org/results/hkimo-2019' },
      { label: 'Certificate & Medal', href: 'https://drive.google.com/file/d/1tO2lmNPqgd7AXojUA_EqGZhc3MEa3WGK/view?usp=drive_link' },
    ],
  },
  {
    title: 'Sri Lankan Physics Olympiad (SLPhO)',
    host: 'Institute of Physics Sri Lanka',
    date: 'November 2019',
    details: 'Bronze Medal',
    links: [
      { label: 'Award', href: 'https://ipsl.lk/documents/Olympiad/slpho_2019_final_marks.pdf' },
      { label: 'Certificate & Medal', href: 'https://drive.google.com/file/d/1_KQgBJhymTSrHHW8j4NHu8qDgGvXDj7q/view?usp=drive_link' },
    ],
  },
  {
    title: 'Sri Lankan Astronomy and Astrophysics Olympiad (SLAAO)',
    host: 'Institute of Physics Sri Lanka',
    date: 'Nov 2018',
    details: 'Merit Medal',
    links: [
      { label: 'Award', href: 'https://drive.google.com/file/d/1Bb6UCG7AeQWpMjMZp8vRKH7IKfPagza2/view' },
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1Bu0s6QwfnTaZedqRpIswu51mFx_-tbg_/view?usp=drive_link' },
    ],
  },
  {
    title: 'IEEEXtreme 17.0',
    host: '24-hour global programming competition',
    date: 'October 2023',
    details: 'Ranked 1st in Sri Lanka, Ranked 65th Globally, Team Insomniacs',
    links: [
      { label: 'Award', href: 'https://ieeextreme.org/ieeextreme-17-0-ranking/#:~:text=University%20Rank-,Insomniacs,1,-TeamGlory' },
    ],
  },
  {
    title: 'IEEEXtreme 18.0',
    host: '24-hour global programming competition',
    date: 'October 2024',
    details: 'Ranked 1st in Sri Lanka, Ranked 66th Globally, Team Insomniacs',
    links: [
      { label: 'Award', href: 'https://ieeextreme.org/ieeextreme-18-0-ranking/' },
    ],
  },
  {
    title: 'IEEE Electronic Design Competition 2023',
    host: 'Electronic Circuit Designing competition',
    date: 'September 2023',
    details: 'Ranked 3rd in Sri Lanka',
    links: [],
  },
  {
    title: 'IESL ROBOGAMES 2022',
    host: 'Institute of Engineers Sri Lanka',
    date: 'Dec 2022',
    details: 'University Category - 1st Runners Up',
    links: [
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1Uv8eP4bdHkymArG2c2tsk2fJrs3nfT_s/view?usp=drive_link' },
    ],
  },
  {
    title: 'Sri Lanka Robotics Challenge 2023',
    host: 'Electronic Club, University of Moratuwa',
    date: 'March 2023',
    details: 'University Category Finalist',
    links: [
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1lJHKG-lZdvqZf7oTASNZeP5vv-NSdssL/view?usp=drive_link' },
    ],
  },
  {
    title: 'RealHack 5.0',
    host: '24-hour National Software Hackathon',
    date: 'Apr 2024',
    details: '2nd Runners Up',
    links: [
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1PZJQL6bzeJfs57-1ns5IvUDjmMccpMce/view?usp=drive_link' },
    ],
  },
  {
    title: 'Coders 11.0',
    host: '12-hour national programming competition',
    date: 'October 2024',
    details: 'Overall Champions, Team Insomniacs',
    links: [
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1pU9w8oWLidz_QPdA2L-Oc4TPRXnIN57a/view?usp=drive_link' },
    ],
  },
  {
    title: 'CYPHER 2.0',
    host: 'Hackathon Competition',
    date: 'March 2024',
    details: '2nd Runners Up',
    links: [
      { label: 'Certificate', href: 'https://drive.google.com/file/d/1YoVY-ZZWOHNYHPIGc4dguuGytMNH0_i4/view?usp=drive_link' },
    ],
  },
  {
    title: 'MoraXtreme 2023, Sri Lanka',
    host: '12-hour national programming competition',
    date: 'October 2023',
    details: 'Overall Champions, Team Insomniacs',
    links: [],
  },
];

function Awards() {
  return (
    <section id="awards" className={styles.container}>
      <h1 className="sectionTitle">Honors &amp; Awards</h1>
      <ul className={styles.list}>
        {AWARDS.map((a, idx) => (
          <li key={idx} className={styles.item}>
            <AwardItem item={a} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;
