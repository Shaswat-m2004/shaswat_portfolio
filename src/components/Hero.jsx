
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            <span className="accent-text">SHASWAT</span> MISHRA
          </h1>
          <h2>WEB AND AI EXPERT</h2>
          <p>
            Trary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#about" className="btn btn-secondary">About Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/lovable-uploads/823800d9-32e4-4bb6-9363-c2d8333e65d5.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
