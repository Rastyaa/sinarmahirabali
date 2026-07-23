import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useEffect, Suspense, lazy } from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import WaterDropsBackground from '../components/WaterDropsBackground';
import WhatsAppButton from '../components/WhatsAppButton';

const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Clients = lazy(() => import('../pages/Clients'));

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const useSEO = ({ title, description, keywords }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }
  }, [title, description, keywords]);
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/clients" element={<PageTransition><Clients /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </LazyMotion>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-hidden selection:bg-brand-blue/30 selection:text-white bg-[#030712]">
        {/* Cinematic Backdrop Glows */}
        <div className="absolute top-[-15%] left-[-15%] w-[70vw] h-[70vw] rounded-full bg-brand-blue/15 blur-[150px] pointer-events-none -z-10 animate-float-slow"></div>
        <div className="absolute top-[15%] right-[-20%] w-[65vw] h-[65vw] rounded-full bg-brand-coral/10 blur-[150px] pointer-events-none -z-10 animate-float-reverse"></div>
        <div className="absolute bottom-[-15%] left-[0%] w-[70vw] h-[70vw] rounded-full bg-brand-teal/15 blur-[150px] pointer-events-none -z-10 animate-pulse-subtle"></div>
        
        {/* Sophisticated fine grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
        
        {/* Animated Water Drops */}
        <WaterDropsBackground />
        <WhatsAppButton />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
