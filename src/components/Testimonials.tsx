import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'John Doe', role: 'Keller Williams Agent', content: 'PA Real Estate Support Services has been a game-changer for my business. Their attention to detail and professionalism is unmatched.', rating: 5, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Jane Smith', role: 'Broker', content: 'Working with Debbie and her team has allowed me to focus on growing my client base while they handle the intricate details of transactions.', rating: 5, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Robert Hoffman', role: 'Real Estate Professional', content: 'Working with Debbie feels effortless. She’s always on top of things, and her communication and customer service are easily 5-star. What makes Debbie special is her calm, professional approach. She handles challenges with grace, keeping things on track without getting caught up in the emotions. My clients constantly praise her, which speaks volumes. With her wealth of experience, Debbie is much more than a transaction coordinator—she’s a trusted advisor and someone I truly value. I often turn to her for advice, and I’m always glad I did. Debbie isn’t just a part of my business; she’s an important part of my success.', rating: 5, image: 'https://randomuser.me/api/portraits/men/4.jpg' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-h2 font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
