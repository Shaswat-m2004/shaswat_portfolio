
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Leading the development team in creating responsive web applications using React and Node.js. Implemented AI features for content recommendation and user behavior analysis.'
    },
    {
      title: 'AI Specialist',
      company: 'InnovateAI',
      period: '2019 - 2021',
      description: 'Developed machine learning models for natural language processing. Created a chatbot system that improved customer service efficiency by 40%.'
    },
    {
      title: 'Full Stack Developer',
      company: 'WebCraft Studio',
      period: '2017 - 2019',
      description: 'Built and maintained multiple client websites and web applications. Utilized React for front-end and Express for back-end services.'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'Stanford University',
      period: '2015 - 2017',
      description: 'Specialized in machine learning and neural networks. Conducted research on natural language processing applications.'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'MIT',
      period: '2011 - 2015',
      description: 'Focused on web development, algorithms, and data structures. Graduated with honors.'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">My <span className="accent-text">Experience</span></h2>
        
        <div className="timeline-container">
          <div className="timeline-header">
            <h3>Work Experience</h3>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header-content">
                    <h4>{exp.title}</h4>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-header">
            <h3>Education</h3>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header-content">
                    <h4>{edu.degree}</h4>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <h5>{edu.institution}</h5>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
