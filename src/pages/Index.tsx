
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, CheckCircle, Lightbulb, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Smart Learning',
      description: 'Adaptive learning paths tailored to your unique needs and goals.'
    },
    {
      icon: Lightbulb,
      title: 'Interactive Exercises',
      description: 'Engage with practical exercises that reinforce your understanding.'
    },
    {
      icon: BookOpen,
      title: 'Vast Library',
      description: 'Access thousands of resources across various subjects and topics.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with other learners and get help when you need it.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Math Student',
      content: 'Brainly has transformed my learning experience. The intuitive interface and personalized approach have helped me excel in subjects I once struggled with.',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Michael Chen',
      role: 'Science Teacher',
      content: 'As an educator, I appreciate how Brainly makes complex topics accessible. My students are more engaged and showing remarkable progress.',
      avatar: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[40%] top-0 h-[500px] w-[700px] rounded-full bg-brainly-100/30 blur-3xl"></div>
          <div className="absolute right-[0%] bottom-0 h-[500px] w-[500px] rounded-full bg-brainly-200/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brainly-100 text-brainly-700 text-xs font-medium mb-3">
                Redefining Online Learning
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                Unlock Your Learning Potential with <span className="bg-clip-text text-transparent bg-gradient-to-r from-brainly-700 via-brainly-600 to-brainly-500">Brainly</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Personalized learning experiences designed to help you master any subject with ease and confidence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/sign-up')}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/sign-in')}
              >
                Sign In
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 w-full max-w-4xl mx-auto relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/20 aspect-[16/9]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-brainly-200/50 to-brainly-50/50">
                  <div className="text-center">
                    <Brain size={48} className="text-brainly-600 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900">Learning Dashboard Preview</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-6 flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brainly-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brainly-600"></span>
                </span>
                <span className="text-sm font-medium">2,500+ active users</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brainly-100 text-brainly-700 text-xs font-medium mb-3">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Brainly?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the tools and features that make learning with Brainly an exceptional experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard 
                key={index}
                className="p-6"
                delay={index * 0.1}
              >
                <div className="p-3 rounded-lg bg-brainly-100 text-brainly-600 w-fit mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brainly-100 text-brainly-700 text-xs font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied learners who have transformed their educational journey with Brainly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard 
                key={index}
                className="p-6"
                delay={index * 0.1}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brainly-600 to-brainly-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Join Brainly today and discover a more intelligent way to learn and grow.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brainly-200" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brainly-200" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brainly-200" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <Button 
                size="lg" 
                className="w-full bg-white text-brainly-700 hover:bg-brainly-50"
                onClick={() => navigate('/sign-up')}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brainly-400 to-brainly-600"></div>
              <span className="font-bold text-xl">Brainly</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#" className="text-gray-600 hover:text-brainly-600">About</a>
              <a href="#" className="text-gray-600 hover:text-brainly-600">Features</a>
              <a href="#" className="text-gray-600 hover:text-brainly-600">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-brainly-600">Support</a>
              <a href="#" className="text-gray-600 hover:text-brainly-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-brainly-600">Terms</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Brainly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
