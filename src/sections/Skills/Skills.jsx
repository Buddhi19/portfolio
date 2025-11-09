import styles from './SkillsStyles.module.css';
import checkMarkIcondark from '../../assets/checkmark-dark.svg';
import checkMarkIconlight from '../../assets/checkmark-light.svg';
// import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {

  const { theme, toggleTheme } = useTheme();

  const checkMarkIcon = theme === 'dark' ? checkMarkIcondark : checkMarkIconlight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PYTHON" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="MATLAB" />
        {/* <SkillList src={checkMarkIcon} skill="Node" /> */}
      </div>
      <hr className={styles.divider} />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Altium" />
        <SkillList src={checkMarkIcon} skill="Webots" />
        <SkillList src={checkMarkIcon} skill="AutoCad" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Revit" />
        <SkillList src={checkMarkIcon} skill="Jupyter Lab" />
      </div>
      <hr className={styles.divider} />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="sklearn" />
        <SkillList src={checkMarkIcon} skill="torch" />
        <SkillList src={checkMarkIcon} skill="tensorflow" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;
