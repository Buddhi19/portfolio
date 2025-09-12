import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Work from './sections/Work-Experience/work';

function App() {
  return (
    <>
      <Hero />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
