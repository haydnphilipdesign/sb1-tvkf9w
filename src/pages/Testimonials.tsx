import React from 'react';
import { Star } from 'lucide-react';
import PageHero from '../components/PageHero';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Keller Williams Agent',
    content: 'PA Real Estate Support Services has been a game-changer for my business. Their attention to detail and professionalism is unmatched.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    role: 'Broker',
    content: 'Working with Debbie and her team has allowed me to focus on growing my client base while they handle the intricate details of transactions.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'Real Estate Investor',
    content: 'The level of expertise and support provided by PA Real Estate Support Services is truly exceptional. Highly recommended!',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Client Testimonials" 
        subtitle="What Our Clients Say About Us"
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <section className="py-16">
        <div className="container mx-auto max-w-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;