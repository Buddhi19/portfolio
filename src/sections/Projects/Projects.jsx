import styles from './ProjectsStyles.module.css';
import tunerimg from '../../assets/tuner.png';
import proptable from '../../assets/proptables.png';
import solvista from '../../assets/solvista.jpg';
import git from '../../assets/git.png';
import ProjectCard from '../../common/ProjectCard';
import YouTubeCard from '../../common/YoutubeCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project Highlights</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={solvista}
          link="https://github.com/Buddhi19/Customizable-Smart-Calculator-for-Solving-Handwritten-Equations-and-Advanced-Graphical-Analysis"
          h3="Smart Calculator"
          p = "Customizable Smart Calculator for" 
          s = "Solving Handwritten Equations and" 
          k = "Advanced Graphical Analysis"
        />
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
        <YouTubeCard className={styles.youtubeCard}
          videoId="wpvRqxPGnFs"
          h3="Discrete Time Control Systems"
          p="Brief explanation of how a discrete time control system works"
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
