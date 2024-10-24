import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  category: string;
  image: string;
}

const imageMap: {[key: string]: string} = {
  'choosing-the-right-transaction-coordinator': '/images/blog/choosing-coordinator.jpg',
  'close-deals-faster-with-transaction-coordination': '/images/blog/faster-deals.jpg',
  'common-pitfalls-in-real-estate': '/images/blog/common-pitfalls.jpg',
  'contract-to-close-transaction-coordination-guide': '/images/blog/contract-to-close.jpg',
  'importance-of-staying-organized-in-real-estate': '/images/blog/staying-organized.jpg',
  'outsourcing-vs-diy-transaction-coordination': '/images/blog/outsourcing.jpg',
  'scaling-with-transaction-coordinators': '/images/blog/scaling-business.jpg',
  'time-saving-tips-with-transaction-coordinator': '/images/blog/time-saving.jpg',
  'transaction-coordination-supports-compliance': '/images/blog/compliance.jpg',
  'what-is-transaction-coordination': '/images/blog/transaction-coordination.jpg'
};

const Blog: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Real Estate", "Transactions", "Market Updates", "Tips & Tricks"];

  const featuredPosts = [
    {
      id: 1,
      title: "Essential Tips for Smooth Real Estate Transactions",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      excerpt: "Discover the key strategies for managing successful real estate transactions and ensuring client satisfaction.",
      category: "Transactions",
      image: "/images/blog/featured/smooth-transactions.jpg"
    },
    {
      id: 2,
      title: "Market Trends: What to Expect in 2024",
      author: "Michael Chen",
      date: "March 10, 2024",
      excerpt: "An in-depth analysis of real estate market trends and predictions for the upcoming year.",
      category: "Market Updates",
      image: "/images/blog/featured/market-trends.jpg"
    },
    {
      id: 3,
      title: "Maximizing Efficiency in Transaction Coordination",
      author: "Emily Brown",
      date: "March 5, 2024",
      excerpt: "Learn how to streamline your transaction coordination process and increase productivity.",
      category: "Tips & Tricks",
      image: "/images/blog/featured/efficiency.jpg"
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      title: 'How to Choose the Right Transaction Coordinator for Your Real Estate Business',
      excerpt: 'Find out what to look for when selecting the right transaction coordinator for your real estate business.',
      date: '2024-10-22',
      author: 'PA Real Estate Support Services',
      slug: 'choosing-the-right-transaction-coordinator',
      category: 'Real Estate',
      image: '/images/blog/choosing-coordinator.jpg'
    },
    {
      title: 'How Professional Transaction Coordination Can Help You Close Deals Faster',
      excerpt: 'Discover how professional transaction coordination can speed up the real estate closing process.',
      date: '2024-10-15',
      author: 'PA Real Estate Support Services',
      slug: 'close-deals-faster-with-transaction-coordination',
      category: 'Real Estate',
      image: '/images/blog/faster-deals.jpg'
    },
    {
      title: 'Common Pitfalls in Real Estate Transactions and How Transaction Coordination Prevents Them',
      excerpt: 'Avoid common real estate transaction pitfalls with the help of a professional transaction coordinator.',
      date: '2024-10-18',
      author: 'PA Real Estate Support Services',
      slug: 'common-pitfalls-in-real-estate',
      category: 'Real Estate',
      image: '/images/blog/common-pitfalls.jpg'
    },
    {
      title: 'From Contract to Close: A Step-by-Step Guide to Real Estate Transaction Coordination',
      excerpt: 'A comprehensive guide to real estate transaction coordination from contract to closing.',
      date: '2024-10-23',
      author: 'PA Real Estate Support Services',
      slug: 'contract-to-close-transaction-coordination-guide',
      category: 'Real Estate',
      image: '/images/blog/contract-to-close.jpg'
    },
    {
      title: 'The Importance of Staying Organized in Real Estate Transactions',
      excerpt: 'Learn why organization is key to successful real estate transactions and how to achieve it.',
      date: '2024-10-16',
      author: 'PA Real Estate Support Services',
      slug: 'importance-of-staying-organized-in-real-estate',
      category: 'Real Estate',
      image: '/images/blog/staying-organized.jpg'
    },
    {
      title: 'The Benefits of Outsourcing Transaction Coordination vs. Doing It Yourself',
      excerpt: 'Explore the pros and cons of outsourcing transaction coordination versus handling it yourself.',
      date: '2024-10-20',
      author: 'PA Real Estate Support Services',
      slug: 'outsourcing-vs-diy-transaction-coordination',
      category: 'Real Estate',
      image: '/images/blog/outsourcing.jpg'
    },
    {
      title: 'Why Real Estate Teams Should Rely on Transaction Coordinators for Scaling Their Business',
      excerpt: 'Learn how transaction coordinators can help real estate teams scale their operations efficiently.',
      date: '2024-10-21',
      author: 'PA Real Estate Support Services',
      slug: 'scaling-with-transaction-coordinators',
      category: 'Real Estate',
      image: '/images/blog/scaling-business.jpg'
    },
    {
      title: 'Top 5 Time-Saving Tips for Real Estate Agents Using a Transaction Coordinator',
      excerpt: 'Discover five time-saving tips for real estate agents who use a professional transaction coordinator.',
      date: '2024-10-17',
      author: 'PA Real Estate Support Services',
      slug: 'time-saving-tips-with-transaction-coordinator',
      category: 'Real Estate',
      image: '/images/blog/time-saving.jpg'
    },
    {
      title: 'How Transaction Coordination Supports Compliance with Real Estate Regulations',
      excerpt: 'Learn how transaction coordination ensures compliance with real estate laws and regulations.',
      date: '2024-10-19',
      author: 'PA Real Estate Support Services',
      slug: 'transaction-coordination-supports-compliance',
      category: 'Real Estate',
      image: '/images/blog/compliance.jpg'
    },
    {
      title: 'What Is Transaction Coordination and Why Is It Essential for Real Estate Agents?',
      excerpt: 'Learn how transaction coordination can help real estate agents streamline their processes.',
      date: '2024-10-14',
      author: 'PA Real Estate Support Services',
      slug: 'what-is-transaction-coordination',
      category: 'Real Estate',
      image: '/images/blog/transaction-coordination.jpg'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1));
  };

  const filteredPosts = blogPosts.filter((post) =>
    selectedCategory === "All" ? true : post.category === selectedCategory
  );

  return (
    <div className="bg-gray-light">
      <PageHero 
        title="Our Blog" 
        subtitle="Insights and Updates from PA Real Estate Support Services"
        type="blog"
      />
      <AnimatedSection className="py-16">
        <div className="container">
          {/* Featured Posts Carousel */}
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredPosts.map((post) => (
                  <div key={post.id} className="w-full flex-shrink-0">
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-0 p-6 text-white">
                          <div className="flex items-center mb-2">
                            <BsBookmark className="mr-2" />
                            <span className="text-sm font-semibold">Featured</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                          <p className="mb-2">{post.excerpt}</p>
                          <div className="flex items-center text-sm">
                            <span className="mr-4">{post.author}</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>
                      <span className="mr-4">{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Blog;
