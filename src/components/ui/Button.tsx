
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

// Omit the HTML button properties that conflict with motion props
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-brainly-600 text-white hover:bg-brainly-700 focus:ring-brainly-500/50',
    secondary: 'bg-brainly-100 text-brainly-700 hover:bg-brainly-200 focus:ring-brainly-300/50',
    outline: 'bg-transparent border border-brainly-300 text-brainly-700 hover:bg-brainly-50 focus:ring-brainly-300/50',
    ghost: 'bg-transparent text-brainly-700 hover:bg-brainly-50 focus:ring-brainly-300/50',
    link: 'bg-transparent text-brainly-600 hover:underline p-0 h-auto focus:ring-0'
  };

  const sizeClasses = {
    sm: 'text-xs px-3 h-8 rounded-md',
    md: 'text-sm px-4 h-10 rounded-lg',
    lg: 'text-base px-5 h-12 rounded-lg'
  };

  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      whileTap={{ scale: isDisabled ? 1 : 0.97 }}
      className={cn(
        'relative inline-flex items-center justify-center font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant !== 'link' && sizeClasses[size],
        variantClasses[variant],
        isDisabled && 'opacity-60 cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="animate-spin h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      <span className={cn(
        'flex items-center gap-2',
        isLoading && 'opacity-0'
      )}>
        {icon && iconPosition === 'left' && (
          <span className="inline-flex">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="inline-flex">{icon}</span>
        )}
      </span>
    </motion.button>
  );
};

export default Button;
