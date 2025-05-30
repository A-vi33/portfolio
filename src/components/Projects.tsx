import { ExternalLink, Github } from 'lucide-react';
import CAR from '../assets/Car_Zone.png';
import NGO from '../assets/ngo.png';
import PORT from '../assets/portfolio.png';
import PET from '../assets/Petstore.png';
import RECIPE from '../assets/Recipe.png';
import ASSISTANCE from '../assets/Assistance.png';

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
  },
  {
    title: 'Petstore',
    description: 'PetStore is a user-friendly platform designed to provide a seamless and intuitive experience for users to explore and purchase pets online.',
    image: PET,
    technologies: ['Frontend', 'MYSQL', 'Django', 'Python'],
    githubLink: 'https://github.com/A-vi33/Petstore.git',
  },
  {
    title: 'Recipe_Book',
    description: 'Recipe Book is an Angular-based web application that allows users to view, add, and edit a collection of recipes through an intuitive and interactive interface.',
    image: RECIPE,
    technologies: ['HTML', 'CSS', 'Angular.js', 'Json Server'],
    githubLink: 'https://github.com/A-vi33/Recipe-Book-Angular.git',
    githubBuildLink: 'https://github.com/A-vi33/Recipe-Book-build.git',
    deployLink: 'https://kaleidoscopic-kringle-fe01ff.netlify.app/recipes',
  },
  {
    title:'AI Chat Assistant',
    description: 'AI Chat Assistant is a web application that allows users to chat with an AI assistant.',
    image: ASSISTANCE,
    technologies: ['React.js', 'TypeScript', 'Vite', 'Node.js', 'OpenAI API', 'Custom API integration'],
    githubLink: 'https://github.com/A-vi33/Assistance.git',
    deployLink: 'https://assistance-rose.vercel.app/',
  },
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
                  {project.githubBuildLink && (
                    <a
                      href={project.githubBuildLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Build
                    </a>
                  )}
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                      onClick={(e) => {
                        if (project.title === 'Recipe_Book') {
                          alert('This is an Angular project. Please make sure to run the JSON server before accessing the deploy link.');
                        }
                      }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live
                    </a>
                  )}
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