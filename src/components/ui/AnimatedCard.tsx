
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      className={cn(
        "rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-sm",
        "transition-all duration-300 hover:shadow-md hover:border-white/30",
        "bg-white/80 dark:bg-black/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
