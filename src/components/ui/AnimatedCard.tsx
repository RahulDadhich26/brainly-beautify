
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  fadeUp?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className,
  delay = 0,
  hoverEffect = false,
  fadeUp = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: fadeUp ? 20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn(
        "rounded-2xl overflow-hidden backdrop-blur-sm border border-white/30 shadow-sm",
        "transition-all duration-300 hover:shadow-md hover:border-white/50",
        "bg-white/70 dark:bg-black/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
