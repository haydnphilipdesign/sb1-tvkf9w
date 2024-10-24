import React, { useState } from 'react';
import { CheckCircle, ArrowRight, FileText, Search, Download, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const benefits = [
  "Focus on client relationships while we handle the paperwork",
  "Ensure compliance with all real estate regulations",
  "Streamline your transaction process",
  "Reduce stress and minimize errors",
  "Increase your productivity and close more deals",
  "Access to 30+ years of real estate expertise",
  "Customized support for your specific needs"
];

const process = [
  { title: "Initial Consultation", description: "We'll discuss your needs and how we can support your business." },
  { title: "Customized Plan", description: "We'll create a tailored plan to fit your specific requirements." },
  { title: "Onboarding", description: "We'll integrate our services seamlessly into your workflow." },
  { title: "Ongoing Support", description: "We'll provide continuous support throughout each transaction." }
];

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
  }
];

const faqs = [
  {
    id: 'faq-1',
    question: "What is a Transaction Coordinator?",
    answer: "A Transaction Coordinator manages all administrative aspects of real estate transactions, from contract to closing. We handle paperwork, deadlines, and communication between all parties involved."
  },
  {
    id: 'faq-2',
    question: "How quickly do you respond to inquiries?",
    answer: "We aim to respond to all inquiries within 1 business hour during normal business hours. For urgent matters, we're available by phone."
  },
  {
    id: 'faq-3',
    question: "What areas do you service?",
    answer: "We primarily serve real estate agents in the Pocono Mountains region, working with Keller Williams agents and other brokerages in the area."
  }
];

const WorkWithUs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Work With Us" 
        subtitle="Partner with PA Real Estate Support Services for Streamlined Transactions"
        type="services"
      />
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits of Our Services</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-forest-green mr-2 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <p className="mb-4">
                With over 30 years of experience in the PA real estate industry, we bring unparalleled knowledge and skills to every transaction. Our founder, Debbie O'Brien, has worked in various roles including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Transaction Coordinator</li>
                <li>Compliance Review Officer</li>
                <li>Executive Assistant to Broker of Record</li>
                <li>Office Manager for real estate and mortgage companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-container px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Free Resources</h2>
          <p className="text-center text-xl text-gray-600 mb-8">
            Access our curated collection of resources designed to help you streamline your real estate transactions.
          </p>
          <div className="relative w-full max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-forest-green"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FileText className="w-12 h-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-2">Type: {resource.type}</p>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.downloadLink}
                  className="inline-flex items-center text-forest-green font-semibold hover:text-forest-green-dark transition-colors duration-300"
                  download
                >
                  Download <Download className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-forest-green mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+5705884637" className="text-gray-600 hover:text-forest-green">
                        (570) 588-4637
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-forest-green mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:debbie@parealestatesupport.com" className="text-gray-600 hover:text-forest-green">
                        debbie@parealestatesupport.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-forest-green mr-4" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Pocono Mountains, PA</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-forest-green mr-4" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: By Appointment</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="border-b border-gray-200 pb-4 last:border-0"
                    >
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get Started Today</h2>
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forest-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-forest-green-dark transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
