
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 85 },
    { name: 'AI/Machine Learning', percentage: 75 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'Database Management', percentage: 80 }
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
          <div className="skills-bars">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
