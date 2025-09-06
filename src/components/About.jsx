
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About <span className="accent-text">Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Hi, I’m Shaswat Mishra — a developer and educator passionate about building impactful digital solutions and sharing knowledge.
            </p>
            <p>
            With a strong foundation in React, Python, and Flutter, I love solving real-world problems using code. Whether it's building user-friendly interfaces or automating complex workflows, I enjoy turning ideas into functional, aesthetic products.
            <br/>
            <br/>
            I have hands-on experience in Web Development, Decentralized Applications (DApps), and AI/ML, where I enjoy combining problem-solving skills with creativity to turn ideas into real-world applications.
            <br/>
            <br/>
            I’ve completed a Web Development internship, which gave me practical exposure to modern tools and frameworks, and I’m currently working as a Programming Faculty, teaching C, C++, Java, and Python. Guiding students and breaking down complex concepts into simple, practical lessons has not only strengthened my own skills but also deepened my passion for technology.
            <br/>
            <br/>
            I’m always eager to learn, explore emerging technologies, and collaborate on innovative projects that create real impact.
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
