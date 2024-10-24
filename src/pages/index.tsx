import React from 'react';
import Statistics from '../components/Statistics';
import Partners from '../components/Partners';
import Metrics from '../components/Metrics';
import Gallery from '../components/Gallery';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>{/* ... */}</header>
      <main>
        <Statistics />
        <Gallery />
        <Metrics />
        <Partners />
      </main>
      <footer>{/* ... */}</footer>
    </div>
  );
};

export default HomePage;
