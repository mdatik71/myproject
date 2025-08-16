import React from 'react';
import Image from 'next/image';
import Pic6 from '../../assets/pic6.jpg';

// Example project data — replace images and text with your own
const projects = [
  {
    title: 'Autonomous Robot',
    description: 'A robot that navigates using sensors and AI algorithms.',
    image: Pic6 // put your images in public/projects/
  },
  {
    title: 'Smart IoT Home',
    description: 'IoT system for smart home automation and energy saving.',
    image: Pic6
  },
  {
    title: 'PCB Design Project',
    description: 'Custom PCB design for an embedded control system.',
    image: Pic6
  },
  {
    title: 'Raspberry Pi Weather Station',
    description: 'Weather monitoring station with real-time data display.',
    image: Pic6
  },
];

const OurProjects = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
       <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
  Check out some of the innovative projects we've built, combining robotics, IoT, and electronics.
</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
                priority={idx === 0} // prioritize loading for first image
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
