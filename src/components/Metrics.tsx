import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { id: 1, value: '250', label: 'Sqm' },
  { id: 2, value: '3', label: 'Floors' },
  { id: 3, value: '5', label: 'Bedrooms' },
  { id: 4, value: '2', label: 'Parking Spots' },
];

const Metrics: React.FC = () => {
  return (
    <section className="py-16 bg-deep-blue text-white">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Property Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <motion.div 
              key={metric.id}
              className="text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: metric.id * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
