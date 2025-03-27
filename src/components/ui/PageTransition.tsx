
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex-1 flex flex-col min-h-[calc(100vh-4rem)]"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
