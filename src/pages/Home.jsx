import Hero from '../sections/Hero/Hero';
import News from '../sections/News/News';
import Education from '../sections/Education/Education';
import Awards from '../sections/Awards/Awards';
import Publications from '../sections/Publications/Publications';
import Work from '../sections/Work-Experience/work';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Extra from '../sections/Extra/Extra';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <News />
      <Education />
      <Publications />
      <Awards />
      <Work />
      <Projects />
      <Skills />
      <Extra />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
