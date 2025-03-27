
import React from 'react';
import { Camera, Mail, MapPin, CalendarIcon, LogOut } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/Button';
import { profileData } from '../data/profileData';

const ProfileSidebar: React.FC = () => {
  return (
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
            <CalendarIcon size={16} className="text-brainly-500" />
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
  );
};

export default ProfileSidebar;
