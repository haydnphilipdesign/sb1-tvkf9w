import React from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { format } from 'date-fns';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

// Import all blog post content
import * as choosingTheRightTC from '../blog-posts/choosing-the-right-transaction-coordinator.mdx';
import * as closeDealsFaster from '../blog-posts/close-deals-faster-with-transaction-coordination.mdx';
import * as commonPitfalls from '../blog-posts/common-pitfalls-in-real-estate.mdx';
import * as contractToClose from '../blog-posts/contract-to-close-transaction-coordination-guide.mdx';
import * as importanceOfStayingOrganized from '../blog-posts/importance-of-staying-organized-in-real-estate.mdx';
import * as outsourcingVsDIY from '../blog-posts/outsourcing-vs-diy-transaction-coordination.mdx';
import * as scalingWithTC from '../blog-posts/scaling-with-transaction-coordinators.mdx';
import * as timeSavingTips from '../blog-posts/time-saving-tips-with-transaction-coordinator.mdx';
import * as tcSupportsCompliance from '../blog-posts/transaction-coordination-supports-compliance.mdx';
import * as whatIsTC from '../blog-posts/what-is-transaction-coordination.mdx';

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

const blogPosts: { [key: string]: any } = {
  'choosing-the-right-transaction-coordinator': choosingTheRightTC,
  'close-deals-faster-with-transaction-coordination': closeDealsFaster,
  'common-pitfalls-in-real-estate': commonPitfalls,
  'contract-to-close-transaction-coordination-guide': contractToClose,
  'importance-of-staying-organized-in-real-estate': importanceOfStayingOrganized,
  'outsourcing-vs-diy-transaction-coordination': outsourcingVsDIY,
  'scaling-with-transaction-coordinators': scalingWithTC,
  'time-saving-tips-with-transaction-coordinator': timeSavingTips,
  'transaction-coordination-supports-compliance': tcSupportsCompliance,
  'what-is-transaction-coordination': whatIsTC,
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  const PostContent = post.default;
  const featuredImage = imageMap[slug || ''];
  const readingTime = Math.ceil(post.content?.split(/\s+/).length / 200) || 5; // Assumes 200 words per minute reading speed

  return (
    <div className="bg-gray-50">
      <PageHero 
        title={post.title} 
        subtitle="PA Real Estate Support Services Blog"
        backgroundImage={featuredImage}
      />
      <AnimatedSection className="py-16">
        <div className="container max-w-4xl mx-auto">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-[400px] w-full">
              <img 
                src={featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Metadata */}
            <div className="px-8 py-6 border-b border-gray-100">
              <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  <span>{format(new Date(), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  <span>PA Real Estate Support Services</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 prose prose-lg max-w-none">
              <PostContent />
            </div>

            {/* Article Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Share this article:
                  {/* Add social sharing buttons here if desired */}
                </div>
                <div className="text-sm">
                  <a href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                    ← Back to Blog
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPost;
