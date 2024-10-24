import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageHero from '../components/PageHero';

const faqs = [
  {
    question: "What is a transaction coordinator?",
    answer: "A transaction coordinator is a real estate professional who manages the administrative and clerical tasks involved in a real estate transaction, from the time a property goes under contract until it closes. They ensure all necessary paperwork is completed, deadlines are met, and communication flows smoothly between all parties involved."
  },
  {
    question: "How can a transaction coordinator benefit my real estate business?",
    answer: "A transaction coordinator can significantly benefit your real estate business by freeing up your time to focus on client relationships and generating new business. They handle the time-consuming paperwork and follow-ups, ensure compliance with regulations, reduce the risk of errors, and help transactions close more smoothly and efficiently."
  },
  {
    question: "What specific services does PA Real Estate Support Services offer?",
    answer: "PA Real Estate Support Services offers comprehensive transaction coordination, including document management, timeline tracking, communication facilitation, and client support throughout the entire real estate transaction process. We specialize in working with Keller Williams agents and other real estate professionals in the Pocono Mountains area."
  },
  {
    question: "How experienced is your team?",
    answer: "Our team is led by Debbie O'Brien, who has over 30 years of experience in various aspects of the real estate industry. This extensive experience ensures that we can handle even the most complex transactions with expertise and professionalism."
  },
  {
    question: "How do I get started working with PA Real Estate Support Services?",
    answer: "Getting started is easy! Simply contact us through our website or give us a call. We'll schedule an initial consultation to discuss your specific needs and how we can best support your real estate business. From there, we'll create a customized plan and begin integrating our services into your workflow."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Find Answers to Common Queries"
        backgroundImage="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <div className="py-16">
        <div className="container mx-auto max-w-container px-4">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleFAQ(filteredFaqs.indexOf(faq))}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === filteredFaqs.indexOf(faq) ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openIndex === filteredFaqs.indexOf(faq) && (
                  <div className="p-4 bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Didn't find your answer?</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Question"
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
              />
              <button
                type="submit"
                className="bg-forest-green text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
