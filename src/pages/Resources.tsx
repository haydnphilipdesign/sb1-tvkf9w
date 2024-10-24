import React, { useState } from 'react';
import { FileText, Search, Download, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const resources = [
  { 
    id: 1, 
    title: "Transaction Coordination Checklist", 
    type: 'Checklist', 
    downloadLink: '/resources/transaction-coordination-checklist.pdf',
    description: 'A comprehensive checklist for managing real estate transactions from start to finish.'
  },
  { 
    id: 2, 
    title: "Real Estate Transaction Timeline", 
    type: 'Guide', 
    downloadLink: '/resources/real-estate-transaction-timeline.pdf',
    description: 'Detailed timeline of key milestones in the real estate transaction process.'
  },
  { 
    id: 3, 
    title: "Common Real Estate Contract Terms Explained", 
    type: 'Guide', 
    downloadLink: '/resources/contract-terms-guide.pdf',
    description: 'Clear explanations of common terms found in real estate contracts.'
  },
  { 
    id: 4, 
    title: "Compliance Checklist for Real Estate Transactions", 
    type: 'Checklist', 
    downloadLink: '/resources/compliance-checklist.pdf',
    description: 'Essential compliance requirements for real estate transactions.'
  },
  { 
    id: 5, 
    title: "Effective Communication in Real Estate Transactions", 
    type: 'Guide', 
    downloadLink: '/resources/effective-communication-guide.pdf',
    description: 'Best practices for communication during real estate transactions.'
  },
  { 
    id: 6, 
    title: "Real Estate Transaction Management Software Comparison", 
    type: 'Comparison', 
    downloadLink: '/resources/software-comparison.pdf',
    description: 'Detailed comparison of popular transaction management software.'
  },
  { 
    id: 7, 
    title: "Best Practices for Document Management in Real Estate", 
    type: 'Guide', 
    downloadLink: '/resources/document-management-guide.pdf',
    description: 'Guidelines for organizing and managing real estate documents.'
  },
  { 
    id: 8, 
    title: "Understanding Escrow in Real Estate Transactions", 
    type: 'Guide', 
    downloadLink: '/resources/escrow-guide.pdf',
    description: 'Comprehensive guide to escrow in real estate transactions.'
  },
  { 
    id: 9, 
    title: "Real Estate Transaction Coordinator Job Description Template", 
    type: 'Template', 
    downloadLink: '/resources/tc-job-description.pdf',
    description: 'Customizable job description template for transaction coordinators.'
  },
  { 
    id: 10, 
    title: "Key Performance Indicators for Transaction Coordinators", 
    type: 'Guide', 
    downloadLink: '/resources/tc-kpi-guide.pdf',
    description: 'Essential metrics for measuring transaction coordinator performance.'
  },
];

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-light">
      <PageHero 
        title="Resources" 
        subtitle="Helpful Tools and Information for Real Estate Professionals"
        type="resources"
      />
      <AnimatedSection className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">Empower Your Real Estate Business</h2>
            <p className="text-xl text-gray-600 mb-8">
              Access our curated collection of resources designed to help you streamline your real estate transactions and grow your business.
            </p>
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-serif">{resource.title}</h3>
                <p className="text-gray-600 mb-2">Type: {resource.type}</p>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.downloadLink}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300"
                  download
                >
                  Download <Download className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 font-serif">Need More Assistance?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Our team of expert transaction coordinators is here to help you navigate the complexities of real estate transactions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Contact Us for Personalized Support <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Resources;
