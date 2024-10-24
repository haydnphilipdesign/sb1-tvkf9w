import React from 'react';
import OptimizedImage from '../components/OptimizedImage';
import TimelineComponent from '../components/TimelineComponent';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-100 rounded-full transform translate-x-2 translate-y-2"></div>
                <OptimizedImage
                  src="/debbie_obrien_new.png"
                  alt="Debbie O'Brien"
                  className="relative w-80 h-80 rounded-full object-cover shadow-xl"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Meet Debbie O'Brien
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                With over 30 years of experience in the real estate industry, 
                I founded PA Real Estate Support Services, LLC to provide dedicated 
                transaction coordination for Keller Williams agents in the Pocono Mountains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:debbie@parealestatesupport.com"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Me
                </a>
                <a
                  href="tel:+5705884637"
                  className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                >
                  <FaPhone className="mr-2" />
                  (570) 588-4637
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Experience & Expertise</h2>
              <p className="text-gray-700 leading-relaxed">
                My passion for efficient real estate processes, personal dedication to
                client satisfaction, and meticulous attention to detail have made me
                a trusted partner to real estate professionals throughout the region.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>30+ years in PA real estate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Detail-oriented approach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Expert multi-tasking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Cultural sensitivity</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-semibold text-indigo-600">Experienced Professional</h4>
                  <p className="text-gray-600">Three decades of real estate expertise at your service</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-semibold text-indigo-600">Dedicated Support</h4>
                  <p className="text-gray-600">Personal attention to every transaction detail</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h4 className="font-semibold text-indigo-600">Local Knowledge</h4>
                  <p className="text-gray-600">Deep understanding of the Pocono Mountains market</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TimelineComponent />
    </div>
  );
};

export default About;
