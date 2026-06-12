import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Clients from '../pages/Clients';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import WaterDropsBackground from '../components/WaterDropsBackground';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
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
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-hidden selection:bg-brand-teal/30 selection:text-white bg-gradient-to-tr from-[#02040a] via-[#080d1a] to-[#0f172a]">
        {/* Modern Dark Ambient Gradients (Vibrant glowing blobs with slow floating animations) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-blue/25 blur-[130px] pointer-events-none -z-10 animate-float-slow"></div>
        <div className="absolute top-[20%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none -z-10 animate-float-reverse"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[60vw] h-[60vw] rounded-full bg-brand-blue-light blur-[130px] pointer-events-none -z-10 animate-pulse-subtle"></div>
        <div className="absolute top-[45%] left-[35%] w-[40vw] h-[40vw] rounded-full bg-brand-teal/20 blur-[120px] pointer-events-none -z-10 animate-float-slow"></div>
        
        {/* Subtle grid pattern for premium tech-feel - increased opacity for high visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
        
        {/* Animated Water Drops */}
        <WaterDropsBackground />

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
