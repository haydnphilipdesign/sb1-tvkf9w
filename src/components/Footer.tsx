import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <OptimizedImage
              src="/pa-real-estate-logo-new.png"
              alt="PA Real Estate Support Services"
              className="h-12 w-auto mb-4"
            />
            <p>Your trusted partner in real estate transaction coordination in the Pocono Mountains.</p>
          </div>
          {/* Column 2: Quick Links Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Quick Links Column 2 including Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/work-with-us" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  Work With Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition duration-300" onClick={scrollToTop}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                Email:{' '}
                <a href="mailto:debbie@parealestatesupport.com" className="hover:text-primary transition duration-300">
                  debbie@parealestatesupport.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+15705884637" className="hover:text-primary transition duration-300">
                  +1 (570) 588-4637
                </a>
              </li>
              <li>
                Business Hours:{' '}
                <span>Monday - Friday 9am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} PA Real Estate Support Services LLC. All rights reserved.
          </p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-10"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      />
    </footer>
  );
};

export default Footer;
