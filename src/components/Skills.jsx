import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    // 'Flutter',
    'Python',
    'AI/Machine Learning',
    'DBMS',
    'Java'
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My <span className="accent-text">Skills</span></h2>
        <div className="skills-content">
          <div className="skills-text">
            <p>
              I've developed a diverse set of skills throughout my career, focusing on both 
              front-end and back-end technologies, as well as AI and machine learning.
            </p>
            <p>
              My approach involves continuous learning and adapting to new technologies, 
              ensuring that I can provide the best solutions for any project I work on.
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
