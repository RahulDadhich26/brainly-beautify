
import React from 'react';
import { Sparkles } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { profileData } from '../data/profileData';

const AchievementsSection: React.FC = () => {
  return (
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
  );
};

export default AchievementsSection;
