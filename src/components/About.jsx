
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About <span className="accent-text">Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Shaswat Mishra, a passionate Web and AI Expert with a 
              strong foundation in creating responsive, user-friendly websites 
              and integrating cutting-edge AI solutions.
            </p>
            <p>
              With over 5 years of experience in the industry, I've worked on a 
              variety of projects ranging from small business websites to complex 
              enterprise applications. My expertise includes front-end development 
              with React, back-end programming, and implementing machine learning models.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to stay ahead 
              in this ever-evolving field. When I'm not coding, you can find me 
              hiking, reading tech blogs, or experimenting with new AI models.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <span className="info-title">Name:</span>
              <span className="info-value">Shaswat Mishra</span>
            </div>
            <div className="info-item">
              <span className="info-title">Email:</span>
              <span className="info-value">contact@shaswatmishra.com</span>
            </div>
            <div className="info-item">
              <span className="info-title">Phone:</span>
              <span className="info-value">+1 (123) 456-7890</span>
            </div>
            <div className="info-item">
              <span className="info-title">Location:</span>
              <span className="info-value">San Francisco, CA</span>
            </div>
            <div className="info-item">
              <span className="info-title">Availability:</span>
              <span className="info-value">Available for freelance</span>
            </div>
            <a href="#contact" className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
