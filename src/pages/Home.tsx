import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Statistics />
      <Contact />
    </div>
  );
};

export default Home;
