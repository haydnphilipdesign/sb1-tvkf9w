import React from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  rows?: number;
  className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ rows = 5, className = '' }) => {
  const loadingRows = Array.from({ length: rows }, (_, i) => `loading-row-${i}`);

  return (
    <div className={`space-y-4 ${className}`}>
      {loadingRows.map((id) => (
        <motion.div
          key={id}
          className="h-4 bg-gray-200 rounded animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

export default LoadingState;
