import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  year: number;
  event: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-forest-green"></div>
      
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="mb-8 flex items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Circle on the timeline */}
          <div className="absolute left-4 w-3 h-3 bg-forest-green rounded-full transform -translate-x-1/2 mt-1.5"></div>
          
          {/* Year */}
          <div className="ml-12 w-20 font-bold text-forest-green">{event.year}</div>
          
          {/* Event description */}
          <div className="flex-grow ml-4">
            <p className="text-gray-700">{event.event}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;