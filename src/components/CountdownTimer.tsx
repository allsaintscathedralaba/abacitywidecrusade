import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DATA.startDateISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isStarted: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isStarted: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3 text-xs md:text-sm font-semibold tracking-widest uppercase text-crusade-gold-400">
        <Clock className="w-4 h-4 text-crusade-orange-500 animate-pulse" />
        <span>Countdown to Divine Encounter</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-crusade-navy-900/90 to-crusade-navy-950/90 border border-crusade-royal-600/30 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-crusade-orange-500/50 hover:shadow-crusade-orange-500/20"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-crusade-orange-500/60 to-transparent" />
            
            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white group-hover:text-crusade-orange-400 transition-colors duration-300">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-slate-400 mt-1 uppercase">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
