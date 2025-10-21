import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroPattern from '../assets/hero-pattern.svg';
import heroShapes from '../assets/hero-shapes.svg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroPattern} alt="" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="absolute inset-0 z-0">
        <img src={heroShapes} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" data-aos="fade-down" data-aos-delay="200">
          Hi, I'm <span className="text-indigo-600">Makala Vignesh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          A passionate python full-stack developer crafting beautiful and functional web experiences
        </p>
        <div className="flex justify-center space-x-4" data-aos="zoom-in" data-aos-delay="600">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition duration-300"
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;