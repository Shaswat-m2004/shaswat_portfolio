import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    image: '/public/lovable-uploads/image.png',
    title: 'Project One',
    description: 'This is a description of project one. It showcases the main features and technologies used.',
    techStack: ['React', 'Node.js', 'Tailwind CSS']
  },
  {
    id: 2,
    image: '/public/lovable-uploads/s.jpg',
    title: 'Project Two',
    description: 'This is a description of project two. It is focused on backend development and APIs.',
    techStack: ['Express', 'MongoDB', 'Docker']
  },
  {
    id: 3,
    image: '/public/lovable-uploads/823800d9-32e4-4bb6-9363-c2d8333e65d5.png',
    title: 'Project Three',
    description: 'This project involves AI and machine learning techniques for data analysis.',
    techStack: ['Python', 'TensorFlow', 'Scikit-learn']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My <span className="accent-text">Projects</span></h2>
        <div className="projects-list">
          {projects.map(({ id, image, title, description, techStack }) => (
            <div key={id} className="project-card">
              <img src={image} alt={title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <ul className="project-techstack">
                  {techStack.map((tech, index) => (
                    <li key={index} className="tech-item">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
