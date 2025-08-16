'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cpu, Rocket, ClipboardCheck, Zap } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-yellow-400" />,
    title: '1. Discuss Your Idea',
    description: 'We start by understanding your project vision, goals, and requirements.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-yellow-400" />,
    title: '2. Plan & Design',
    description: 'We create circuit diagrams, select components, and design the layout.',
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: '3. Develop & Build',
    description: 'We start prototyping using Arduino, ESP, Raspberry Pi, or custom PCBs.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-yellow-400" />,
    title: '4. Test & Deliver',
    description: 'We test thoroughly and deliver your complete working solution.',
  },
];

const ProceessToWork = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Working Process
        </h2>
        <p className="text-gray-400 text-lg">
          We make every project count — from concept to completion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProceessToWork;




