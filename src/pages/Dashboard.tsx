
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Brain, Lightbulb, Book, Award, 
  BarChart2, TrendingUp, BookOpen, CheckCircle, Star,
  Clock, Sparkles, Users, Gift
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/Button';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 28 },
  { name: 'Fri', value: 32 },
  { name: 'Sat', value: 24 },
  { name: 'Sun', value: 16 },
];

const progressData = [
  { name: 'Week 1', value: 20 },
  { name: 'Week 2', value: 35 },
  { name: 'Week 3', value: 45 },
  { name: 'Week 4', value: 40 },
  { name: 'Week 5', value: 55 },
  { name: 'Week 6', value: 60 },
  { name: 'Week 7', value: 78 },
  { name: 'Week 8', value: 85 },
];

const categories = [
  { name: 'Mathematics', icon: BarChart2, progress: 65, color: 'bg-blue-500', gradient: 'from-blue-400 to-blue-600' },
  { name: 'Science', icon: Brain, progress: 82, color: 'bg-green-500', gradient: 'from-green-400 to-green-600' },
  { name: 'Literature', icon: Book, progress: 45, color: 'bg-amber-500', gradient: 'from-amber-400 to-amber-600' },
  { name: 'History', icon: BookOpen, progress: 30, color: 'bg-red-500', gradient: 'from-red-400 to-red-600' },
];

const recentActivities = [
  { id: 1, title: 'Completed Mathematics Quiz', time: '2 hours ago', icon: CheckCircle, iconColor: 'text-green-500' },
  { id: 2, title: 'Started Science Course', time: '1 day ago', icon: Brain, iconColor: 'text-blue-500' },
  { id: 3, title: 'Earned "Fast Learner" Badge', time: '3 days ago', icon: Award, iconColor: 'text-amber-500' },
  { id: 4, title: 'Joined Literature Study Group', time: '1 week ago', icon: Book, iconColor: 'text-purple-500' },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'courses', name: 'Courses' },
    { id: 'achievements', name: 'Achievements' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[0%] top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brainly-100/40 to-brainly-300/20 blur-3xl"></div>
          <div className="absolute right-[0%] top-[30%] h-[300px] w-[400px] rounded-full bg-gradient-to-tr from-blue-200/20 to-brainly-200/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <header className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Hey, <span className="bg-clip-text text-transparent bg-gradient-to-r from-brainly-700 to-brainly-500">John!</span> 👋
                </h1>
                <p className="mt-2 text-gray-600">
                  Welcome back to your learning dashboard
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 px-3 py-2 rounded-xl">
                  <Clock size={16} className="text-brainly-500" />
                  <span className="text-sm font-medium">Last login: Today, 9:42 AM</span>
                </div>
                <Button size="sm" variant="outline" icon={<Gift size={16} />}>
                  3 Rewards
                </Button>
              </div>
            </motion.div>
            
            <div className="mt-6 flex space-x-1 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-2 px-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-brainly-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="dashboard-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brainly-400 to-brainly-700"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </header>
          
          <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Stats Cards Row */}
            <AnimatedCard className="lg:col-span-2 p-6 bg-white/90">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Learning Progress</h2>
                  <p className="text-sm text-gray-500">Your weekly learning activity</p>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  View Details
                </Button>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progressData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255,255,255,0.95)', 
                        border: 'none', 
                        borderRadius: '0.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }} 
                      labelStyle={{
                        fontWeight: 'bold',
                        color: '#1f2937'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorProgress)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="p-6 bg-white/90">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Daily Streak</h2>
              <p className="text-sm text-gray-500 mb-6">You're on fire! 🔥</p>
              
              <div className="flex justify-center mb-4">
                <div className="relative flex items-center justify-center">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      className="text-gray-200"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className="text-brainly-500"
                      strokeWidth="6"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                      strokeDasharray="364.4"
                      strokeDashoffset="91.1" // 25% of 364.4
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-bold text-gray-900">7</span>
                    <span className="text-sm text-gray-500">days</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-3 py-1.5 px-3 bg-gradient-to-r from-amber-50 to-amber-100 rounded-md inline-flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Best streak: 12 days</span>
                </div>
                <Button size="sm" icon={<TrendingUp size={16} />} className="w-full">
                  Continue Learning
                </Button>
              </div>
            </AnimatedCard>
            
            {/* Category Cards */}
            <AnimatedCard className="p-6 bg-white/90" delay={0.1}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                <button className="text-brainly-600 hover:text-brainly-700 text-sm font-medium flex items-center gap-1">
                  View all <ArrowUpRight size={14} />
                </button>
              </div>
              
              <div className="space-y-5">
                {categories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-md bg-gradient-to-br ${category.gradient} text-white`}>
                          <category.icon size={16} className="text-current" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{category.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`} 
                        style={{ width: `${category.progress}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            
            {/* Recent Activity Card */}
            <AnimatedCard className="lg:col-span-2 p-6 bg-white/90" delay={0.2}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <p className="text-sm text-gray-500">Your latest learning actions</p>
                </div>
                <button className="text-brainly-600 hover:text-brainly-700 text-sm font-medium flex items-center gap-1">
                  View all <ArrowUpRight size={14} />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <div className={`p-2 rounded-lg ${activity.iconColor.replace('text-', 'bg-')} bg-opacity-10 mt-0.5`}>
                      <activity.icon size={16} className={activity.iconColor} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                    </div>
                    <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            
            {/* Recommended Card */}
            <AnimatedCard className="p-6 bg-white/90" delay={0.3}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recommended</h2>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Users size={12} />
                  <span>420+ enrolled</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-brainly-50 to-white border border-brainly-200 p-4 hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-brainly-400 to-brainly-600 text-white mr-3">
                      <Lightbulb size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Advanced Mathematics</h3>
                      <p className="text-xs text-gray-500 mt-1">Calculus & Linear Algebra</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">+248 enrolled</span>
                    </div>
                    <div className="flex items-center bg-amber-50 px-1.5 py-0.5 rounded">
                      <Star size={12} className="text-amber-500" />
                      <span className="text-xs font-medium ml-1 text-amber-700">4.9</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm">Start Course</Button>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white mr-3">
                      <Brain size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Cognitive Science</h3>
                      <p className="text-xs text-gray-500 mt-1">Brain & Behavior</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">+172 enrolled</span>
                    </div>
                    <div className="flex items-center bg-amber-50 px-1.5 py-0.5 rounded">
                      <Star size={12} className="text-amber-500" />
                      <span className="text-xs font-medium ml-1 text-amber-700">4.7</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm" variant="outline">Start Course</Button>
                </div>
              </div>
            </AnimatedCard>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
