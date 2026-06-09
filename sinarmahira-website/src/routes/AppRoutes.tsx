import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
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
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-hidden selection:bg-brand-teal/30 selection:text-white bg-[#0B101E]">
        {/* Modern Dark Ambient Gradients (Holographic blobs matching the reference) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1B2749] blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2A1B3D] blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#102A43] blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-[50%] left-[45%] w-[30vw] h-[30vw] rounded-full bg-brand-teal/10 blur-[100px] pointer-events-none -z-10"></div>
        
        {/* Subtle grid pattern for premium tech-feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

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
