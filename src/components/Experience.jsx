
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'ZeltaClimb Solutions',
      period: 'Jan 2025 - Apr 2025',
      description: 'During my internship, I developed scalable web solutions using React.js, improving load time by 25%, led lead generation efforts that increased qualified leads by 15%, and collaborated on integrating AI-powered workflows, reducing manual tasks by 30%.'
    },
    {
      title: 'Web Developer',
      company: 'Datta Meghe College of Engineering',
      period: 'Jan 2024 - present',
      description: 'I managed and updated the official college website, implementing new features that optimized performance and enhanced security by 20%, while coordinating with faculty and students to deliver accurate content, reducing delays by 20%'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Datta Meghe College of Engineering',
      period: '2022 - 2026',
      description: 'CGPA: 9.12 (Sem 1-5)'
    },
    {
      degree : 'HSC (Science - PCM + CS)',
      institution: 'Yashwantrao College of Arts, Science and Commerce',
      period: '2020 - 2022',
      description: '75.5% (Math: 84%) '
    },
    {
      degree : 'SSC',
      institution: 'Modern School, Vashi ',
      period: '2019 - 2020',
      description: '82.4% (Math: 95%) '
    },
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
