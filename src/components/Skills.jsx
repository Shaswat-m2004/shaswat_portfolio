import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js / Express.js',
    'Python',
    'C / C++',
    'Java',
    'AI / Machine Learning',
    'DApps / Blockchain',
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Skills</span>
        </h2>
        <div className="skills-content">
          <div className="skills-text">
            <p>
              I have built expertise in <strong>web development</strong>, 
              <strong> decentralized applications (DApps)</strong>, and 
              <strong> artificial intelligence / machine learning</strong>. 
              My technical journey spans both front-end and back-end 
              development, along with cutting-edge technologies in blockchain 
              and AI.
            </p>
            <p>
              Beyond development, I also work as a <strong>Programming Faculty</strong>, 
              teaching <strong>C, C++, Java, and Python</strong>. Sharing knowledge 
              has not only sharpened my skills but also strengthened my passion 
              for guiding others in their coding journey.
            </p>
          </div>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-name">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
