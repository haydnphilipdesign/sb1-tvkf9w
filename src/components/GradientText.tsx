import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-dark ${className}`}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
    >
      {text}
    </motion.span>
  );
};

export default GradientText;