
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-links">
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('skills');
            }}
          >
            Skills
          </a>
          {/* <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}
          >
            Projects
          </a> */}
          <a 
            href="#experience" 
            className={activeSection === 'experience' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('experience');
            }}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
