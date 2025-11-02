
import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
}

const DateTimeDisplay: React.FC<{ value: number; type: string }> = ({ value, type }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-6 w-20 md:w-32">
      <p className="text-3xl md:text-5xl font-black text-white">{value.toString().padStart(2, '0')}</p>
      <span className="text-xs md:text-sm uppercase tracking-widest text-gray-400">{type}</span>
    </div>
  );
};


const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      <DateTimeDisplay value={days} type={'Days'} />
      <DateTimeDisplay value={hours} type={'Hours'} />
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

export default CountdownTimer;
