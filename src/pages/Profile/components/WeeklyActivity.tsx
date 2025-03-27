
import React from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { learningActivity } from '../data/learningActivity';

const WeeklyActivity: React.FC = () => {
  return (
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
  );
};

export default WeeklyActivity;
