import styles from './PublicationsStyles.module.css';

const GROUPS = [
  {
    id: 'peer-reviewed-journals',
    title: 'Peer Reviewed Journals',
    items: [
      {
        code: 'J.1',
        title:
          'Mamba-FCS: Joint Spatio-Frequency Feature Fusion, Change-Guided Attention, and SeK Loss for Enhanced Semantic Change Detection in Remote Sensing',
        authors:
          'Buddhi Wijenayake, Athulya Ratnayake, Praveen Sumanasekara, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath, Nichula Wasalathilaka',
        href: 'https://doi.org/10.48550/arXiv.2508.08232',
        doi: '10.48550/arXiv.2508.08232',
        venue:
          'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (currently under second-round revision, following positive feedback from the initial review.)',
      },
    ],
  },
  {
    id: 'journals-under-review',
    title: 'Journals Under Review',
    items: [
      {
        code: 'J.2',
        title:
          'Devising PoPStat: A Metric to Assess Mortality Dynamics within Demographic Transition',
        authors:
          'Tharaka Fonseka, Buddhi Wijenayake, Athulya Ratnayake, Inosha Alwis, Supun Manathunge, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake, Isuru Pamuditha, Samath Dharmaratne',
        href: 'https://doi.org/10.48550/arXiv.2505.04199',
        doi: '10.48550/arXiv.2501.11514',
        venue: 'IEEE Transactions on Computational Social Systems.',
      },
      {
        code: 'J.3',
        title:
          'Preprocessing Algorithm Leveraging Geometric Modeling for Scale Correction in Hyperspectral Images for Improved Unmixing Performance',
        authors:
          'Praveen Sumanasekara, Athulya Ratnayake, Buddhi Wijenayake, Keshawa Rathnayake, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake',
        href: 'https://arxiv.org/abs/2508.08431',
        doi: '10.48550/arXiv.2508.08431',
        venue:
          'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing.',
      },
    ],
  },
  {
    id: 'international-conferences',
    title: 'International Conferences',
    items: [
      {
        code: 'C.1',
        title:
          'Enhanced SCanNet with CBAM and Dice Loss for Semantic Change Detection',
        authors:
          'Athulya Ratnayake, Buddhi Wijenayake, Praveen Sumanasekara, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake',
        href: 'https://doi.org/10.1109/MERCon67903.2025.11217111',
        venue:
          'Proceedings of the Moratuwa Engineering Research Conference (MERCon), University of Moratuwa, Sri Lanka, Aug. 2025 (11th Int. Conf.).',
      },
      {
        code: 'C.2',
        title:
          'Precision Spatio-Temporal Feature Fusion for Robust Remote Sensing Change Detection',
        authors:
          'Buddhi Wijenayake, Athulya Ratnayake, Praveen Sumanasekara, Nichula Wasalathilaka, Mathivathanan Piratheepan, Roshan Godaliyadda, Mervyn Ekanayake, Vijitha Herath',
        href: 'https://doi.org/10.48550/arXiv.2507.11523',
        venue:
          'Accepted at International Conference on Industrial and Information Systems (ICIIS) 2025.',
        doi: '10.48550/arXiv.2507.11523',
      },
      {
        code: 'C.3',
        title:
          'PoPStat–COVID19: Leveraging Population Pyramids to Quantify Demographic Vulnerability to COVID-19',
        authors:
          'Buddhi Wijenayake, Athulya Ratnayake, Lelumi Edirisinghe, U. Wijeratne, Tharaka Fonseka, Roshan Godaliyadda, Samath Dharmaratne, Parakrama Ekanayake, Vijitha Herath, Inosha Alwis, Supun Manathunga',
        href: 'https://www.arxiv.org/abs/2509.14213',
        venue:
          'Proceedings of the International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, Nov. 2025 (25th Int. Conf.).',
      },
      {
        code: 'C.4',
        title:
          'Demographic Insights into Disease Patterns: An Interactive Visualization Approach',
        authors:
          'Buddhi Wijenayake, Athulya Ratnayake, Tharaka Fonseka, Inosha Alwis, Supun Manathunge, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake, Samath Dharmaratne',
        href: 'https://site.pdn.ac.lk/ipurse/2025/assets/docs/Proceedings-1.pdf',
        venue:
          'Proceedings of Peradeniya University International Research Symposium and Exposition (iPURSE) 2025, Sri Lanka, Vol. 26, 28–29 Aug. 2025.',
      },
    ],
  },
  {
    id: 'poster-oral',
    title: 'Poster / Oral Presentations',
    items: [
      {
        code: 'P.1',
        title:
          'Demographic Insights into Disease Patterns: An Interactive Visualization Approach',
        href: 'https://drive.google.com/file/d/1rHKAKdGjCfFdifsxjlHLox9ilkpvdYqw/view?usp=drive_link',
        venue:
          'Peradeniya University International Research Symposium and Exposition (iPURSE) 2025, Sri Lanka. Oral presentation.',
      },
      {
        code: 'P.2',
        title: 'Machine Learning for Satellite Images',
        href: 'https://drive.google.com/file/d/1YiXygYd5npnFk1CR_ICfHXJzEuHkwamJ/view?usp=drive_link',
        venue:
          'Engineering Exhibition 2025 by the University of Peradeniya (EngEx 25), Faculty of Engineering, University of Peradeniya, Sept 23–27, 2025. Poster presentation.',
      },
      {
        code: 'P.3',
        title:
          'PoPStat–COVID19: Leveraging Population Pyramids to Quantify Demographic Vulnerability to COVID-19',
        href: 'https://www.arxiv.org/abs/2509.14213',
        venue:
          '25th International Conference on Advances in ICT for Emerging Regions, Colombo, Sri Lanka. Poster presentation.',
      },
    ],
  },
];

function PubItem({ item }) {
  return (
    <li className={styles.pubItem}>
      <span className={styles.code}>[{item.code}]</span>
      <div className={styles.content}>
        <a
          className={styles.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
        {item.authors && <p className={styles.authors}>{item.authors}</p>}
        {(item.venue || item.doi) && (
          <p className={styles.meta}>
            {item.venue ? <span>{item.venue}</span> : null}
            {item.venue && item.doi ? ' | ' : null}
            {item.doi ? <span>DOI: {item.doi}</span> : null}
          </p>
        )}
      </div>
    </li>
  );
}

export default function Publications() {
  return (
    <section id="publications" className={styles.container}>
      <h1 className="sectionTitle">Publications</h1>
      {GROUPS.map((g) => (
        <div key={g.id} className={styles.group}>
          <h2 className={styles.groupTitle}>{g.title}</h2>
          <ol className={styles.pubList}>
            {g.items.map((it, idx) => (
              <PubItem key={`${g.id}-${idx}`} item={it} />
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
