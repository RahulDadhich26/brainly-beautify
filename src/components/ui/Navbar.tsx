
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { 
  User, Menu, X, Home, BarChart2, 
  UserCircle, LogOut, LogIn 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For demo purposes, let's simulate authentication
  useEffect(() => {
    // Check if user is on sign-in or sign-up page
    const onAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';
    if (onAuthPage) {
      setIsAuthenticated(false);
    } else {
      // Simulate authenticated state for demo
      setIsAuthenticated(true);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = isAuthenticated
    ? [
        { name: 'Dashboard', path: '/dashboard', icon: Home },
        { name: 'Profile', path: '/profile', icon: UserCircle },
      ]
    : [
        { name: 'Sign In', path: '/sign-in', icon: LogIn },
        { name: 'Sign Up', path: '/sign-up', icon: User },
      ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/80 dark:bg-black/50 backdrop-blur-xl shadow-sm' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo size="md" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-1 font-medium text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-brainly-700'
                    : 'text-gray-600 hover:text-brainly-600'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <link.icon size={16} />
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-brainly-100 rounded-md -z-0"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            
            {isAuthenticated && (
              <button 
                className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 rounded-md transition-colors hover:bg-red-50"
                onClick={() => {
                  // Simulate logout for demo purposes
                  console.log('Logging out...');
                }}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 text-gray-600 hover:text-brainly-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-black/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-brainly-50 text-brainly-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-brainly-600'
                  }`}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated && (
                <button 
                  className="mt-2 flex items-center gap-2 py-3 px-4 text-red-600 rounded-lg transition-colors hover:bg-red-50"
                  onClick={() => {
                    // Simulate logout for demo purposes
                    console.log('Logging out...');
                  }}
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
