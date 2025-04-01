import { ExternalLink, Github } from 'lucide-react';
import CAR from '../assets/Car_Zone.png';
import NGO from '../assets/ngo.png';
import PORT from '../assets/portfolio.png';

const projects = [
  {
    title: 'Car_Zone',
    description: 'A full-stack Car_Zone solution built with Django, Python, and Frontend.',
    image: CAR,
    technologies: ['Django', 'Python', 'MYSQL', 'Frontend'],
    githubLink: 'https://github.com/A-vi33/Car_Zone.git',
  },
  {
    title: 'NGO Management System (code-B)',
    description: 'NGO Management System is a web application that helps manage NGO operations.',
    image: NGO,
    technologies: ['Frontend', 'MYSQL', 'Django', 'Python'],
    githubLink: 'https://github.com/A-vi33/Code-B.git',
  },
  {
    title: 'portfolio',
    description: 'Portfolio is a personal project that showcases my skills and projects.',
    image: PORT,
    technologies: ['React', 'Frontend'],
    githubLink: 'https://github.com/A-vi33/portfolio.git',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;