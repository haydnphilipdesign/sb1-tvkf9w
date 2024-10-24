import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: '30+', label: 'Years Experience' },
  { id: 2, value: '1000+', label: 'Transactions Coordinated' },
  { id: 3, value: '100%', label: 'Client Satisfaction' },
  { id: 4, value: '24/7', label: 'Support' },
];

const Statistics: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <h2 className="section-title text-center mb-12">Our Track Record</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2 font-serif">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
