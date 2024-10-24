import React from 'react';
import { motion } from 'framer-motion';

const MeetTheOwner: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-h2 font-bold text-center mb-12">Meet the Owner</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <motion.img 
            src="/debbie_obrien_new.png" 
            alt="Debbie O'Brien" 
            className="w-64 h-64 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Debbie O'Brien</h3>
            <p className="mb-4">
              With over 30 years of experience in the real estate industry, Debbie O'Brien founded PA Real Estate Support Services, LLC to provide exceptional transaction coordination services to Keller Williams Agents in the Pocono Mountains.
            </p>
            <p className="mb-4">
              Debbie's extensive knowledge of the local market, combined with her passion for streamlining real estate processes, has made her a trusted partner for agents throughout the region.
            </p>
            <p>
              Her commitment to excellence and client satisfaction has been the driving force behind the company's success and growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheOwner;