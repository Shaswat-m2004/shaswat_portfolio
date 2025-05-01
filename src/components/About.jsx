
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About <span className="accent-text">Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Hey there! I'm Shaswat, a passionate and curious developer who loves building meaningful digital experiences. Currently diving deep into full-stack development, I've worked on projects ranging from art-based e-commerce platforms to AI-powered tools and even lost & found systems.

            </p>
            <p>
            With a strong foundation in React, Python, and Flutter, I love solving real-world problems using code. Whether it's building user-friendly interfaces or automating complex workflows, I enjoy turning ideas into functional, aesthetic products.

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
              <span className="info-value">shaswat.mishra.7376@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-title">Phone:</span>
              <span className="info-value">+91 7021895392</span>
            </div>
            <div className="info-item">
              <span className="info-title">Location:</span>
              <span className="info-value">Navi Mumbai, Maharashtra</span>
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
