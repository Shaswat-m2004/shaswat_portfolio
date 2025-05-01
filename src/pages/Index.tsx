
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import '../styles/global.css';

const Index = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
