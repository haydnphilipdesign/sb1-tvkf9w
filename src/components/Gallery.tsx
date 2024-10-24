import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858', alt: 'Kitchen', caption: 'Modern Kitchen' },
  { id: 2, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', alt: 'Bedroom', caption: 'Cozy Bedroom' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', alt: 'Living Room', caption: 'Spacious Living Room' },
  { id: 4, src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea', alt: 'Bathroom', caption: 'Elegant Bathroom' },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Featured Properties</h2>
        <p className="section-subtitle text-center">Hundreds of modern homes and apartments are waiting for you to discover!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image) => (
            <motion.div 
              key={image.id}
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-lg font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
