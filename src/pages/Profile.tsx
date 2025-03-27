
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Camera, Edit2, Mail, MapPin, Calendar, Award,
  Bookmark, Settings, User, Lock, ChevronRight, 
  Bell, LogOut, Sparkles, Clock, Users, BarChart2
} from 'lucide-react';

import PageTransition from '@/components/ui/PageTransition';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/calendar';

const profileData = {
  name: 'John Doe',
  username: '@johndoe',
  avatar: '/placeholder.svg',
  email: 'john.doe@example.com',
  location: 'San Francisco, CA',
  joinDate: 'January 2023',
  bio: 'Passionate learner focused on mathematics and science. I love solving complex problems and sharing knowledge.',
  achievements: [
    { name: 'Quick Learner', description: 'Completed 5 courses in one week', icon: Award },
    { name: 'Problem Solver', description: 'Solved 100 math problems', icon: Award },
    { name: 'Knowledge Sharer', description: 'Helped 25 students with their questions', icon: Award },
  ],
  stats: [
    { label: 'Courses', value: 12 },
    { label: 'Completed', value: 8 },
    { label: 'Hours', value: 147 },
    { label: 'Certificates', value: 3 },
  ]
};

const menuItems = [
  { icon: User, label: 'Personal Information', href: '#' },
  { icon: Lock, label: 'Privacy & Security', href: '#' },
  { icon: Bell, label: 'Notifications', href: '#' },
  { icon: Bookmark, label: 'Saved Items', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

const learningActivity = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 1.0 },
  { day: 'Wed', hours: 3.5 },
  { day: 'Thu', hours: 1.5 },
  { day: 'Fri', hours: 4.0 },
  { day: 'Sat', hours: 2.0 },
  { day: 'Sun', hours: 0.5 },
];

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(profileData.bio);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSaveBio = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-0 h-[400px] w-[500px] rounded-full bg-gradient-to-br from-brainly-100/40 to-brainly-300/20 blur-3xl"></div>
          <div className="absolute right-[10%] top-[40%] h-[300px] w-[400px] rounded-full bg-gradient-to-tr from-blue-200/20 to-brainly-200/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Profile Sidebar */}
            <div className="md:col-span-1">
              <AnimatedCard className="sticky top-24 p-6 bg-white/90">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm">
                      <img 
                        src={profileData.avatar} 
                        alt={profileData.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-gradient-to-br from-brainly-500 to-brainly-700 text-white p-1.5 rounded-full hover:from-brainly-600 hover:to-brainly-800 transition-colors shadow-sm">
                      <Camera size={16} />
                    </button>
                  </div>
                  
                  <h2 className="mt-4 text-xl font-bold text-gray-900">{profileData.name}</h2>
                  <p className="text-sm text-gray-500">{profileData.username}</p>
                  
                  <div className="w-full mt-6 grid grid-cols-4 gap-2 text-center">
                    {profileData.stats.map((stat, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                        <span className="text-xs text-gray-500">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 w-full space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail size={16} className="text-brainly-500" />
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="text-brainly-500" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} className="text-brainly-500" />
                      <span>Joined {profileData.joinDate}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6" 
                    variant="outline"
                    icon={<LogOut size={16} />}
                  >
                    Sign Out
                  </Button>
                </div>
              </AnimatedCard>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <AnimatedCard className="p-6 bg-white/90">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">About Me</h2>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-brainly-600 hover:text-brainly-700 flex items-center gap-1 text-sm font-medium"
                  >
                    {isEditing ? 'Cancel' : (
                      <>
                        <Edit2 size={14} />
                        Edit
                      </>
                    )}
                  </button>
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brainly-500 focus:border-brainly-500 transition-all"
                      rows={4}
                    />
                    <Button 
                      onClick={handleSaveBio}
                      size="sm"
                    >
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-600">{bio}</p>
                )}
              </AnimatedCard>
              
              {/* Activity Heatmap */}
              <AnimatedCard className="p-6 bg-white/90" delay={0.05}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Learning Schedule</h2>
                    <p className="text-sm text-gray-500">Plan your study sessions</p>
                  </div>
                  <div className="flex items-center gap-2 bg-brainly-50 px-2 py-1 rounded text-xs text-brainly-700">
                    <Clock size={14} />
                    <span>Weekly planner</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border bg-white"
                  />
                </div>
              </AnimatedCard>
              
              {/* Activity Summary */}
              <AnimatedCard className="p-6 bg-white/90" delay={0.1}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Weekly Activity</h2>
                    <p className="text-sm text-gray-500">Your learning hours this week</p>
                  </div>
                  <div className="text-sm font-medium text-brainly-600">
                    Total: 15 hours
                  </div>
                </div>
                
                <div className="mt-2">
                  <div className="flex items-end h-40 gap-2">
                    {learningActivity.map((day, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: `${day.hours * 10}%` }}>
                          <div className="absolute inset-0 bg-gradient-to-t from-brainly-500 to-brainly-400 rounded-t-lg opacity-80"></div>
                          <div className="absolute top-0 left-0 right-0 transform -translate-y-6 text-xs font-medium text-gray-700 text-center">
                            {day.hours}h
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
              
              <AnimatedCard className="p-6 bg-white/90" delay={0.15}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
                
                <div className="space-y-4">
                  {profileData.achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-brainly-50/80 to-white border border-brainly-100 hover:shadow-sm transition-all"
                    >
                      <div className="p-2 bg-gradient-to-br from-brainly-500 to-brainly-600 rounded-lg text-white shadow-sm">
                        <achievement.icon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900">{achievement.name}</h3>
                          <div className="bg-amber-100 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles size={10} className="text-amber-500" />
                            <span className="text-[10px] font-medium text-amber-700">+50 XP</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
              
              <AnimatedCard className="p-6 bg-white/90" delay={0.2}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings</h2>
                
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-brainly-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-brainly-500 group-hover:text-brainly-600">
                          <item.icon size={18} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                      </div>
                      <ChevronRight size={18} className="text-gray-400 group-hover:text-brainly-500 transition-colors" />
                    </a>
                  ))}
                </nav>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profile;
