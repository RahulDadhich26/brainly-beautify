
import React from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { menuItems } from '../data/menuItems';

const SettingsMenu: React.FC = () => {
  return (
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
  );
};

export default SettingsMenu;
