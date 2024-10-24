import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import AccessibilityMenu from './components/AccessibilityMenu';
import ScrollProgress from './components/ScrollProgress';
import LoadingState from './components/LoadingState';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'));
const FAQ = lazy(() => import('./pages/FAQ'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingState rows={5} className="p-8" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/work-with-us" element={<PageTransition><WorkWithUs /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <ScrollProgress />
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <AccessibilityMenu />
      </div>
    </Router>
  );
}

export default App;
