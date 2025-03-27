
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import PageTransition from '@/components/ui/PageTransition';
import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Eye, EyeOff, UserPlus } from 'lucide-react';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, let's just navigate to dashboard
      toast.success('Account created successfully');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 h-[500px] w-[500px] rounded-full bg-brainly-100/50 blur-3xl"></div>
          <div className="absolute right-[10%] bottom-0 h-[400px] w-[600px] rounded-full bg-brainly-200/30 blur-3xl"></div>
        </div>
        
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl px-8 pt-8 pb-10 border border-white/50"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join Brainly today
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brainly-500 focus:border-brainly-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brainly-500 focus:border-brainly-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brainly-500 focus:border-brainly-500 transition-all"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Password must be at least 8 characters long
                </p>
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-brainly-600 focus:ring-brainly-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-brainly-600 hover:text-brainly-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-brainly-600 hover:text-brainly-700">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <div>
                <Button
                  type="submit"
                  className="w-full py-2.5 mt-2"
                  isLoading={isLoading}
                  icon={<UserPlus size={18} />}
                >
                  Create Account
                </Button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/sign-in" className="font-medium text-brainly-600 hover:text-brainly-700">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SignUp;
