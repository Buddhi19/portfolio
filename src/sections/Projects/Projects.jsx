import styles from './ProjectsStyles.module.css';
import tunerimg from '../../assets/tuner.png';
import proptable from '../../assets/proptables.png';
import solvista from '../../assets/solvista.jpg';
import calmquest from '../../assets/calmquest.png';
import imagecodec from '../../assets/image_codec.png';
import cd from '../../assets/changedetection.png';
import pop from '../../assets/pop.png';
import ml from '../../assets/ml.png';

function Projects() {
  const projects = [
    {
      title:
        'Understanding the Correlation between Population Demographics and Mortality Causes through Quantifying the Population Pyramid (Ongoing)',
      tools: 'Tools: Python, pandas',
      dates: 'March 2023–present',
      img: pop,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/PythonLibrary-proptables' },
      ],
      bullets: [
        'Initiated in 3rd year of undergraduate study to quantify how population-pyramid shape relates to cause-specific mortality.',
        'Designed two novel metrics: PoPDivergence — a scalar representation of complex demographic structure — and PoPStat — a statistic linking pyramid shape to mortality patterns.',
        'Building an algorithm to reconstruct noisy / incomplete mortality records using PoPDivergence.',
        'Supervised by Prof. Roshan Godaliyadda, Prof. Samath Dharmaratne, Prof. Parakrama Ekanayake, and Prof. Vijitha Herath.',
      ],
    },
    {
      title:
        'Satellite Image–based Remote Sensing for Change Detection and Landscape Mapping (Ongoing)',
      tools: 'Tools: Python, PyTorch',
      dates: 'March 2024–present',
      img: cd,
      links: [
        { label: 'MambaCD', href: 'https://github.com/Buddhi19/MambaCD.git' },
        { label: 'Enhanced-SCanNet', href: 'https://github.com/Buddhi19/Enhanced-SCanNet.git' },
        { label: 'Project Site', href: 'https://sites.google.com/view/buddhi-fyp?usp=sharing' },
      ],
      bullets: [
        'Final Year Project: improve semantic change detection by combining spatial and frequency-domain cues.',
        'Enhanced SCanNet with custom loss functions and noise-suppression techniques for more robust predictions.',
        'Developed a novel Mamba-based architecture to jointly model spatial and frequency information; exploring wavelets for further gains.',
        'Supervised by Prof. Roshan Godaliyadda, Prof. Parakrama Ekanayake, and Prof. Vijitha Herath.',
      ],
    },
    {
      title: 'Entropy-Based Hallucination Detection in Large Language Models (Ongoing)',
      tools: 'Tools: Python, PyTorch',
      dates: 'March 2024–present',
      img: ml,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/Semantic-Entropy-Probes-Improved.git' },
      ],
      bullets: [
        'Cluster LLM responses using spectral clustering to reveal response modes.',
        'Propose an entropy-based detector that flags likely hallucinations from cluster distributions.',
        'Supervised by Prof. Roshan Godaliyadda, Prof. Parakrama Ekanayake, and Prof. Vijitha Herath.',
      ],
    },
    {
      title: 'PythonLibrary — proptables: Thermodynamic Properties Library (Ongoing)',
      tools: 'Tools: Python, pandas, PyPI',
      dates: '2022–present',
      img: proptable,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/PythonLibrary-proptables' },
      ],
      bullets: [
        'Developed a lightweight Python library to retrieve thermodynamic properties for R134a and water.',
        'Packaged and published on PyPI for easy installation (pip install proptables).',
        'Designed for use in engineering calculations and research workflows.',
      ],
    },
    {
      title: 'Calm Quest — Counselor Student Management System',
      tools: 'Tools: TypeScript, React, Emotion Detection',
      dates: '2023',
      img: calmquest,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/ACES-Hackathon-Cookie-Bytes-Calm-Quest-Front-End' },
        { label: 'Website', href: 'https://team-cookiebytes.github.io/' },
      ],
      bullets: [
        'Developed a web platform to manage counselor–student interactions and monitor student well-being via emotion detection.',
        'Designed user-friendly interfaces and stress-management features.',
        'Awarded 3rd Place — ACES Hackathon 2023 (Smart Solutions for Healthcare).',
      ],
    },
    {
      title: 'Solvista — Customizable Smart Calculator (UG)',
      tools: 'Tools: TensorFlow, Python, GUI frameworks',
      dates: '2024–2025',
      img: solvista,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/Solvista' },
      ],
      bullets: [
        'Multi-functional touchscreen calculator integrating symbolic/numeric tools and handwritten input recognition.',
        'Created a CNN that converts handwritten mathematical expressions to LaTeX; trained on public datasets.',
        'Focused on an intuitive UI to streamline complex numeric workflows.',
      ],
    },
    {
      title: 'Automatic Tuner for String Instruments (Assembly) (UG)',
      tools: 'Tools: Assembly, Proteus',
      dates: '2023',
      img: tunerimg,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/EE322-AutomaticTuner' },
      ],
      bullets: [
        'Implemented frequency-detection algorithms on a microcontroller using Assembly.',
        'Built a hardware prototype for automatic tuning of string instruments.',
      ],
    },
    {
      title: 'Image Codec Lab — Toolkit for Image/Video Compression (UG)',
      tools: 'Tools: Python, OpenCV',
      dates: '2023',
      img: imagecodec,
      links: [
        { label: 'GitHub', href: 'https://github.com/Buddhi19/ImageCodecLab.git' },
      ],
      bullets: [
        'Implemented DCT-based encoding, Huffman coding, and adaptive quantization modules.',
        'Built an end-to-end pipeline to explore bitrate–quality trade-offs and optimize compression parameters.',
      ],
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Selected Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((proj, idx) => (
          <article key={idx} className={styles.project}>
            {proj.img && (
              <div className={styles.thumbWrap}>
                <img src={proj.img} className={styles.thumb} alt={proj.title} />
              </div>
            )}
            <div className={styles.content}>
              <header className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.tools}>{proj.tools}</span>
                  <span className={styles.dates}>{proj.dates}</span>
                </div>
                {!!proj.links?.length && (
                  <div className={styles.links}>
                    {proj.links.map((l, i) => (
                      <a key={i} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </header>
              <ul className={styles.bullets}>
                {proj.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
