import styles from './HeroStyles.module.css';
// import FallingStars from './FallingStars';
import heroImg from '../../assets/dp.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? moon : sun;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      {/* <FallingStars theme={theme}/> */}
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Buddhi Wijenayake"
        />
        {/* <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        /> */}
      </div>
      <div className={styles.info}>
        <h1>
          Buddhi
          Wijenayake
        </h1>
        <h2>Electrical and electronic engineering student
        </h2>
        <span>
          <a href="https://twitter.com/Buddhi1100" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Buddhi19" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/buddhi-wijenayake-696707321/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://scholar.google.com/citations?user=HDFMos8AAAAJ&hl=en" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar icon" style={{width: '24px', height: '24px'}} />
          </a>
          <a href="https://www.youtube.com/channel/UC0hLpWIMpegCzoTwPbYtQ6g" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube icon" style={{width: '28px', height: '24px'}} />
          </a>
        </span>
        <p className={styles.description}>
        I am a final year Electrical and Electronic Engineering student at the <a href="https://eng.pdn.ac.lk/" target="_blank" style={{color: 'blue', textDecoration: 'none'}}> University of Peradeniya</a>, Sri Lanka.
        <br/>
        <br/>
        <br/>
        My research interests include Computer Vision, Remote Sensing, Signal Processing, and Deep Learning, with a focus on Semantic Change Detection and data-driven approaches for real-world applications.   
        </p>
        <a href={CV} view>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
