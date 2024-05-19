import styles from './ProjectsStyles.module.css';
import tunerimg from '../../assets/tuner.png';
import proptable from '../../assets/proptables.png';
import ml from '../../assets/ml.png';
import git from '../../assets/git.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project Highlights</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tunerimg}
          link="https://github.com/Buddhi19/EE322-AutomaticTuner"
          h3="String Sync"
          p="Fully Functional Guitar Tuner"
          s = "Undergraduate Project"
        />
        <ProjectCard
          src={proptable}
          link="https://github.com/Buddhi19/PythonLibrary-proptables"
          h3="PropTables:Python Library"
          p="Reads property table values of Thermodynamics" 
          s = "Passion Project"
        />
        <ProjectCard
          src={ml}
          link="https://github.com/Buddhi19/MachineLearningAlgorithms"
          h3="Machine Learning Projects"
          p="Various Machine Learning Projects,"
          s = "Algorithms Implemented"
        />
        <ProjectCard
          src={git}
          link="https://github.com/Buddhi19"
          h3="View All Projects on Github"
        />
      </div>
    </section>
  );
}

export default Projects;
