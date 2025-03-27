
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import ProfileSidebar from './components/ProfileSidebar';
import AboutSection from './components/AboutSection';
import LearningSchedule from './components/LearningSchedule';
import WeeklyActivity from './components/WeeklyActivity';
import AchievementsSection from './components/AchievementsSection';
import SettingsMenu from './components/SettingsMenu';

const Profile: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-0 h-[400px] w-[500px] rounded-full bg-gradient-to-br from-brainly-100/40 to-brainly-300/20 blur-3xl"></div>
          <div className="absolute right-[10%] top-[40%] h-[300px] w-[400px] rounded-full bg-gradient-to-tr from-blue-200/20 to-brainly-200/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <ProfileSidebar />
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <AboutSection />
              <LearningSchedule />
              <WeeklyActivity />
              <AchievementsSection />
              <SettingsMenu />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profile;
