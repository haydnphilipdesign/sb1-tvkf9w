import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParallaxBackground from './ParallaxBackground';

const Hero: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center z-10 max-w-3xl px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 font-serif text-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">PA Real Estate Support Services</span>
        </motion.h1>
        <motion.p 
          className="text-2xl mb-12 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I streamline your real estate transactions with personal attention and precision
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <Link 
            to="/services" 
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={scrollToTop}
          >
            See How I Can Help
          </Link>
          <Link 
            to="/contact" 
            className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={scrollToTop}
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;