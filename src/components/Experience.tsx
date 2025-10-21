import React from 'react';
import EXP from '../assets/Code-B certification.pdf';
import XL_M_S from '../assets/Vignesh Internship certificate.pdf';
import { Download, Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  'Key Contributions'?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: " Full Stack Developer Intern",
    company: "Code-B",
    location: "Bungalow No-23, RDP 2, MHADA Colony, Mulund East, Mumbai 400081",
    period: "Feb 2025 - April 2025",
    description: [
      "Developed a responsive web application using Django as the backend framework and MySQL for database management.",
      "Designed and implemented intuitive user interfaces using HTML, CSS, JavaScript, and Bootstrap."
    ],
    technologies: ["Frontend", "Python", "MySql", "Django"],
    'Key Contributions': [
      "Built dynamic web pages with Django views, templates, and models, ensuring a robust backend structure.",
      "Integrated MySQL database functionalities for efficient data storage, retrieval, and management.", 
      "Implemented user authentication and authorization features using Django's built-in authentication system.",
      "Optimized SQL queries and Django ORM logic to enhance application performance and scalability.",
      "Collaborated using Git for version control and participated in code reviews to maintain code quality.",
      "Integrated third-party APIs to enhance functionality and deliver richer user experiences.",
      "Developed and maintained RESTful APIs for frontend-backend communication.",
      "Ensured mobile responsiveness and cross-browser compatibility across all web pages.",
      "Followed Agile development practices, including sprint planning, task tracking, and daily standups.",
      "Wrote clean, reusable, and well-documented code, adhering to best practices and design patterns."
    ]
  },
  {
    title: " Full Stack Developer",
    company: "XL Management Services",
    location: "Chennai, Tamil Nadu, India",
    period: "July 2025 - October 2025",
    description: [
      "Completed a Full Stack Developer internship at XL Management Services, where I contributed to responsive Web design.",
      "Front-end development and SEO optimization to improve site performance and user experience."
    ],
    technologies: ["HTML", "CSS", "Javascript", "React", "TypeScript", "Tailwind CSS", "React-Native", "PHP", "Firebase"],
    'Key Contributions': [
      "Developed and maintained responsive web applications using React.js, HTML, CSS, and JavaScript, ensuring smooth user experiences across devices.",
      "Built mobile-friendly interfaces using React Native, enabling consistent performance across Android and iOS platforms.",
      "Integrated Firebase services (Authentication, Firestore, and Hosting) for real-time database management and secure user login systems.",
      "Designed and implemented RESTful APIs using PHP and Node.js, connecting front-end applications with dynamic data sources.",
      "Converted UI/UX mockups from Figma into pixel-perfect web and mobile layouts with Tailwind CSS and responsive design principles.",
      "Enhanced website visibility by applying SEO optimization techniques, including structured metadata, keyword targeting, and content organization.",
      "Collaborated on cross-platform projects, handling both React (web) and React Native (mobile) components for unified brand experiences.",
      "Tested and debugged web apps using browser DevTools and React Developer Tools to ensure high performance and zero major runtime issues.",
      "Implemented version control and deployment workflows using Git, GitHub, and Firebase Hosting for streamlined collaboration.",
      "Worked on branding and UX consistency, ensuring every web and mobile interface aligned with the company’s design standards.",
      "Developed reusable components and modular architecture to speed up future project development cycles.",
      "Documented technical processes and development insights to support handover and future maintenance."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2" data-aos="fade-right">
              Professional Experience
            </h2>
            <p className="text-gray-600" data-aos="fade-right" data-aos-delay="100">My journey in software development</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0 w-full md:w-auto" data-aos="fade-left" data-aos-delay="200">
            <a
              href={EXP} download="CODE-B certification.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Code-B Certificate</span>
            </a>
            <a
              href={XL_M_S} download="XL_Management_Services_certificate.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>XL Certificate</span>
            </a>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 space-y-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Briefcase className="w-5 h-5" />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-gray-800 font-medium">{exp.company}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp['Key Contributions'] && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {exp['Key Contributions'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <ArrowRight className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;