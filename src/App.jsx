import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

// Loading screen component
function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-cyber-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-4xl font-bold text-cyber-blue mb-8"
        >
          Nand<span className="text-cyber-purple"> Kishor</span>
        </motion.div>
        
        {/* Loading animation */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-cyber-blue rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 text-sm"
        >
          Initializing System...
        </motion.p>
      </div>
    </motion.div>
  );
}

// Scroll to top button
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-cyber-blue/20 border border-cyber-blue/50 rounded-full flex items-center justify-center text-cyber-blue hover:bg-cyber-blue/30 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      {/* Scanline effect */}
      <div className="scanline" />
      
      {/* Custom cursor (disabled on mobile) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
