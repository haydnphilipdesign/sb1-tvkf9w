import React from 'react';
import PageHero from '../components/PageHero';
import AboutOwner from '../components/AboutOwner';
import TimelineComponent from '../components/TimelineComponent';
import AnimatedSection from '../components/AnimatedSection';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <PageHero 
        title="About PA Real Estate Support Services, LLC" 
        subtitle="Your Trusted Partner in Real Estate Transaction Coordination"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        overlay={true}
      />
      
      <AnimatedSection className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <p className="text-lg mb-8">
            PA Real Estate Support Services, LLC was founded with a vision to provide exceptional transaction coordination services to Keller Williams Agents and other real estate professionals in the Pocono Mountains of Pennsylvania. With over 30 years of experience in the real estate industry, we understand the unique challenges and opportunities in this beautiful region.
          </p>
          <p className="text-lg mb-8">
            Our mission is to streamline the real estate transaction process, allowing agents to focus on what they do best - building client relationships and closing deals. We take pride in our attention to detail, professionalism, and commitment to excellence in every transaction we handle.
          </p>
        </div>
      </AnimatedSection>

      <AboutOwner />

      <AnimatedSection className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Timeline</h2>
          <TimelineComponent />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment</h2>
          <p className="text-lg mb-8">
            At PA Real Estate Support Services, we are committed to providing the highest level of service to our clients. We continuously update our knowledge and skills to stay ahead of industry trends and regulations, ensuring that we can offer the most effective and efficient transaction coordination services possible.
          </p>
          <p className="text-lg">
            Our goal is to be more than just a service provider - we aim to be a trusted partner in your real estate business, helping you achieve success and growth in the competitive Pocono Mountains market.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutUs;