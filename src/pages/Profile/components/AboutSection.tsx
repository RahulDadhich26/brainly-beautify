
import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { toast } from 'sonner';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/Button';
import { profileData } from '../data/profileData';

const AboutSection: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(profileData.bio);

  const handleSaveBio = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  return (
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
  );
};

export default AboutSection;
