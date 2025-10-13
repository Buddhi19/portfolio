import { useState } from 'react';
import styles from './NavBar.module.css';
import { useTheme } from '../../common/ThemeContext.jsx';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const icon = theme === 'light' ? moon : sun;

  const closeMenu = () => setOpen(false);

  const goHomeAndScroll = (e, id) => {
    e.preventDefault();
    setOpen(false);
    navigate('/');
    // Give React a tick to render Home, then scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand} onClick={(e) => goHomeAndScroll(e, 'hero')}>
          Buddhi19
        </a>

        <div className={styles.links}>
          <a className={styles.link} href="#hero" onClick={(e) => goHomeAndScroll(e, 'hero')}>Home</a>
          <a className={styles.link} href="#news" onClick={(e) => goHomeAndScroll(e, 'news')}>News</a>
          <a className={styles.link} href="#education" onClick={(e) => goHomeAndScroll(e, 'education')}>Education</a>
          <a className={styles.link} href="#publications" onClick={(e) => goHomeAndScroll(e, 'publications')}>Publications</a>
          <a className={styles.link} href="#awards" onClick={(e) => goHomeAndScroll(e, 'awards')}>Awards</a>
          <a className={styles.link} href="#work" onClick={(e) => goHomeAndScroll(e, 'work')}>Experience</a>
          <a className={styles.link} href="#projects" onClick={(e) => goHomeAndScroll(e, 'projects')}>Projects</a>
          <a className={styles.link} href="#skills" onClick={(e) => goHomeAndScroll(e, 'skills')}>Skills</a>
          <a className={styles.link} href="#contact" onClick={(e) => goHomeAndScroll(e, 'contact')}>Contact</a>
          {/* <a className={styles.link} href="#/courses" onClick={(e) => { e.preventDefault(); setOpen(false); navigate('/courses'); }}>Courses</a> */}
        </div>

        <div className={styles.right}>
          <button className={styles.themeBtn} aria-label="Toggle theme" onClick={toggleTheme}>
            <img className={styles.icon} src={icon} alt="Theme toggle" />
          </button>
          <button className={styles.menuBtn} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            ☰
          </button>
        </div>
      </div>

      <div className={open ? styles.drawerOpen : styles.drawer}>
        <a className={styles.drawerLink} href="#hero" onClick={(e) => goHomeAndScroll(e, 'hero')}>Home</a>
        <a className={styles.drawerLink} href="#news" onClick={(e) => goHomeAndScroll(e, 'news')}>News</a>
        <a className={styles.drawerLink} href="#education" onClick={(e) => goHomeAndScroll(e, 'education')}>Education</a>
        <a className={styles.drawerLink} href="#publications" onClick={(e) => goHomeAndScroll(e, 'publications')}>Publications</a>
        <a className={styles.drawerLink} href="#awards" onClick={(e) => goHomeAndScroll(e, 'awards')}>Awards</a>
        <a className={styles.drawerLink} href="#work" onClick={(e) => goHomeAndScroll(e, 'work')}>Experience</a>
        <a className={styles.drawerLink} href="#projects" onClick={(e) => goHomeAndScroll(e, 'projects')}>Projects</a>
        <a className={styles.drawerLink} href="#skills" onClick={(e) => goHomeAndScroll(e, 'skills')}>Skills</a>
        <a className={styles.drawerLink} href="#contact" onClick={(e) => goHomeAndScroll(e, 'contact')}>Contact</a>
        <a className={styles.drawerLink} href="#/courses" onClick={(e) => { e.preventDefault(); goHomeAndScroll(e, 'hero'); navigate('/courses'); }}>Courses</a>
      </div>
    </nav>
  );
}

export default NavBar;
