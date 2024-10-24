import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaHome, FaInfoCircle, FaFileAlt, FaBlog } from "react-icons/fa";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.95)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(51, 51, 51, 1)']
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { id: 1, path: '/', label: 'Home', icon: <FaHome className="text-xl" /> },
    { id: 2, path: '/about', label: 'About', icon: <FaInfoCircle className="text-xl" /> },
    { id: 3, path: '/services', label: 'Services', icon: <FaFileAlt className="text-xl" /> },
    { id: 4, path: '/blog', label: 'Blog', icon: <FaBlog className="text-xl" /> },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <OptimizedImage
            src="/pa-real-estate-logo-new.png"
            alt="PA Real Estate Support Services"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li 
                key={item.id} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className={`flex flex-col items-center transition-all duration-300 relative group ${
                    isActivePath(item.path) ? 'text-indigo-600' : ''
                  }`}
                  onClick={scrollToTop}
                >
                  <motion.div 
                    className="mb-1"
                    style={{ color: textColor }}
                    whileHover={{ y: -2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.span 
                    style={{ color: textColor }}
                    className="text-sm"
                  >
                    {item.label}
                  </motion.span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-300 ${
                    isActivePath(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/work-with-us" 
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={scrollToTop}
            >
              Work With Us
            </Link>
          </motion.div>
        </div>

        <button 
          className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span style={{ color: textColor }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.span>
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white py-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Link
                  to={item.path}
                  className={`flex items-center justify-center space-x-2 px-4 py-2 transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              </motion.li>
            ))}
            <Link 
              to="/work-with-us" 
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 w-4/5 text-center"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              Work With Us
            </Link>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
