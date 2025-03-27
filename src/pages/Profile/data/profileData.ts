
import { Award } from 'lucide-react';

export const profileData = {
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
