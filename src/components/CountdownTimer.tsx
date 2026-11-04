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
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-crusade-gold-400">
        <Clock className="w-3.5 h-3.5 text-crusade-orange-500 animate-pulse" />
        <span>Live Countdown to December 2, 2026</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-crusade-navy-900/90 border border-white/10 shadow-lg text-center"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-none">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-400 mt-1 uppercase">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
