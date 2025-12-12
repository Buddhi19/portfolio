import styles from './SkillsStyles.module.css';
import checkMarkIcondark from '../../assets/checkmark-dark.svg';
import checkMarkIconlight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

const GROUPS = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C', 'C++', 'R', 'JavaScript', 'MATLAB'],
  },
  {
    title: 'Web Technologies',
    items: ['React', 'Node.js', 'HTML5', 'CSS3', 'TypeScript'],
  },
  {
    title: 'Data Science & Machine Learning',
    items: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'NumPy',
      'pandas',
      'Matplotlib',
      'Seaborn',
      'Jupyter',
      'OpenCV',
      'Hugging Face Transformers',
    ],
  },
  {
    title: 'Version Control',
    items: ['Git', 'GitHub'],
  },
  {
    title: 'Operating Systems',
    items: ['Linux', 'Raspbian'],
  },
];

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'dark' ? checkMarkIcondark : checkMarkIconlight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      {GROUPS.map((group, idx) => (
        <div key={group.title} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <div className={styles.skillList}>
            {group.items.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
          {idx < GROUPS.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </section>
  );
}

export default Skills;
