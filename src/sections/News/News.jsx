import styles from './NewsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';

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
    id: '2025-09-icter',
    date: '2025-09-10',
    title: 'One paper accepted at ICTer 2025 🎉',
    summary: 'Our paper was accepted to International Conference on Advances in ICT for Emerging Regions (ICTer) 2025.',
    tag: 'Publication',
    href: '',
  },
  {
    id: '2025-09-instructor',
    date: '2025-08-25',
    title: 'Started a new position as a Temporary Instructor',
    summary: 'Dept. of Electrical & Electronic Engineering, Faculty of Engineering, University of Peradeniya',
    tag: 'Position',
    href: '',
  },
  {
    id: '2025-09-mercon',
    date: '2025-07-29',
    title: 'One paper accepted at MERCon 2025🎉',
    summary: 'Our paper "Enhanced SCanNet with CBAM and Dice Loss for Semantic Change Detection " has been accepted to the Moratuwa Engineering Research Conference (MERCon).',
    tag: 'Publication',
    href: '',
  },
];

function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <article className={styles.card} aria-labelledby={`${item.id}-title`}>
        <header className={styles.header}>
          <span className={styles.left}>
            {/* <img src={checkMarkIcon} alt="" /> */}
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