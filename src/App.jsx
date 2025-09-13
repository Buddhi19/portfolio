import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import News from './sections/News/News';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Work from './sections/Work-Experience/work';

function App() {
  return (
    <>
      <Hero />
      <News />
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
