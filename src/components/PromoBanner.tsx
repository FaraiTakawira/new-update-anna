import { X, Coffee } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('af-ZA', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('af-ZA', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: "auto", 
            opacity: 1,
            position: isSticky ? 'fixed' : 'relative',
            top: isSticky ? 0 : 'auto',
            left: 0,
            right: 0,
            zIndex: isSticky ? 100 : 'auto'
          }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-cream-light text-accent py-2 md:py-3 text-center w-full shadow-sm"
        >
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <Coffee className="w-4 h-4 text-primary hidden sm:block" />
            <span className="font-medium text-xs md:text-sm">
              <span className="hidden sm:inline">Vars koffie gereed! </span>
              <span className="text-primary">{formatDate(currentTime)}</span>
              <span className="mx-1 md:mx-2">•</span>
              <span className="text-primary font-bold">{formatTime(currentTime)}</span>
            </span>
            <span className="text-xs md:text-sm hidden md:inline"> — Kom kuier by ANNABeleef!</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-accent hover:text-primary transition-colors p-1"
          >
            <X className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </motion.div>
      </AnimatePresence>
      {/* Spacer when sticky - increased for more separation from navbar */}
      {isSticky && <div className="h-16 md:h-20" />}
    </>
  );
};

export default PromoBanner;
