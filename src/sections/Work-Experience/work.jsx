import styles from './workstyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import WorkList from '../../common/worklist';

function Work() {
  return (
    <section id="work" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1> 
      <div className={styles.workList}>
        <WorkList src={checkMarkIcon} position="Embedded Systems Engineer - Intern" 
        company="SwartUp (PVT) Limited" date="July 2024 - Nov. 2024"/>
        {/* <SkillList src={checkMarkIcon} skill="Node" /> */}
      </div>
      <hr/>
      <div className={styles.workList}>
        <WorkList src={checkMarkIcon} position="Teaching Assistant" 
        company="University of Peradeniya" date="March 2024 - July 2024" description="For Computer Networking and Programming"/>
        {/* <SkillList src={checkMarkIcon} skill="Node" /> */}
      </div>
      <hr/>
      <div className={styles.workList}>
        <WorkList src={checkMarkIcon} position="Electrical and Electronic Engineer - Intern" 
        company="Vega Innovations" date="July 2023 - Oct. 2023"/>
        {/* <SkillList src={checkMarkIcon} skill="Node" /> */}
      </div>
    </section>
  );
}

export default Work;
