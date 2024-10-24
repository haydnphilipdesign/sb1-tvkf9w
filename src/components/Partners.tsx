import React from 'react';

const partners = [
  { id: 1, name: 'Partner 1' },
  { id: 2, name: 'Partner 2' },
  { id: 3, name: 'Partner 3' },
  { id: 4, name: 'Partner 4' },
  { id: 5, name: 'Partner 5' },
  { id: 6, name: 'Partner 6' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Our Partners</h2>
        <p className="section-subtitle text-center mb-12">
          We combine our extensive knowledge of the local market with our strong negotiation skills to help you get the best possible deal.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center h-20 border border-gray-200">
              <span className="text-xl font-semibold">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
