import Hero from '../sections/Hero/Hero';
import News from '../sections/News/News';
import Education from '../sections/Education/Education';
import Work from '../sections/Work-Experience/work';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <News />
      <Education />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

