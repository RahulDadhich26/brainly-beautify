
import React, { useState } from 'react';
import { Clock, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const LearningSchedule: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
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
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[240px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-3 pointer-events-auto rounded-md border bg-white"
            />
          </PopoverContent>
        </Popover>
      </div>
    </AnimatedCard>
  );
};

export default LearningSchedule;
