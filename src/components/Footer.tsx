import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Makala Vignesh</h3>
            <p className="text-gray-400 mt-2">Python Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/A-vi33"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/makala-vignesh-7a101a25b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vigneshmakala@gmail.com"
              className="hover:text-gray-400 transition duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Makala Vignesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;