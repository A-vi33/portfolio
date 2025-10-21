import React from 'react';

const skills = {
  'Frontend': ['HTML','React', 'JavaScript', 'CSS', 'Next.js'],
  'Backend': ['Node.js', 'Python', 'MYSQL', 'MongoDB', 'PHP'],
  'Tools & Others': ['Git', 'Docker', 'AWS']
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-down">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6" data-aos="fade-up" data-aos-delay={catIndex * 100}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between"
                    data-aos="zoom-in" 
                    data-aos-delay={index * 50 + 200}
                  >
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;