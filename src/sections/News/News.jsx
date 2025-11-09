import styles from './NewsStyles.module.css';

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

const NEWS = [
  {
    id: '2025-11-manamperi',
    date: '2025-11-15',
    title: 'Won the Manamperi Merit Award for Best undergraduate research engineering project carried out at a faculty of engineering in a Sri Lankan university 🎉',
    summary: 'Our final year project titled “Satellite Image based Remote Sensing Change Detection and Landscape Mapping” has been selected as the First Runner-up of the Manamperi Award 2025 (Group Category).',
    tag: 'Award',
    href: '',
  },
  {
    id: '2025-10-icas',
    date: '2025-10-11',
    title: 'One paper accepted at ICAS 2025 🎉',
    summary:
      'Our paper titled "Correlation Analysis of Age Structure Metrics and Cause-Specific Mortality: A Global and WHO Regional Comparison Using the Top 5 Causes of Death in 2021", was accepted to the International Conference on Applied Sciences, University of Vavuniya.',
    tag: 'Publication',
    href: '',
  },
  {
    id: '2025-09-icter',
    date: '2025-09-10',
    title: 'One paper accepted at ICTer 2025 🎉',
    summary:
      'Our paper titled “PoPStat: Leveraging Population Pyramids to quantify demographic vulnerability to COVID‑19” was accepted to International Conference on Advances in ICT for Emerging Regions 2025.',
    tag: 'Publication',
    href: 'https://www.arxiv.org/abs/2509.14213',
  },
  {
    id: '2025-08-instructor',
    date: '2025-08-25',
    title: 'Started a new position as a Temporary Instructor',
    summary:
      'Dept. of Electrical & Electronic Engineering, Faculty of Engineering, University of Peradeniya.',
    tag: 'Position',
    href: '',
  },
  {
    id: '2025-07-mercon',
    date: '2025-07-29',
    title: 'One paper accepted at MERCon 2025 🎉',
    summary:
      'Our paper titled “Enhanced SCanNet with CBAM and Dice Loss for Semantic Change Detection” accepted to Moratuwa Engineering Research Conference 2025 (International Conference).',
    tag: 'Publication',
    href: 'https://arxiv.org/abs/2505.04199',
  },
];

function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <article className={styles.card} aria-labelledby={`${item.id}-title`}>
        <header className={styles.header}>
          <span className={styles.left}>
            <time className={styles.date} dateTime={item.date}>
              [{formatDate(item.date)}]
            </time>
          </span>
          {item.tag ? <span className={styles.tag}>{item.tag}</span> : null}
        </header>

        <h3 id={`${item.id}-title`} className={styles.title}>
          {item.title}
        </h3>
        {item.summary && <p className={styles.desc}>{item.summary}</p>}
        {item.href ? (
          <a className={styles.link} href={item.href} target="_blank" rel="noreferrer">
            Read more →
          </a>
        ) : null}
      </article>
    </li>
  );
}

function News() {
  return (
    <section id="news" className={styles.container}>
      <h1 className="sectionTitle">News</h1>
      <ul className={styles.newsList}>
        {NEWS.map((n) => (
          <NewsItem key={n.id} item={n} />
        ))}
      </ul>
    </section>
  );
}

export default News;

