import React from 'react';
import useCountdown from '../hooks/useCountdown';

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const { days, hours, minutes, seconds, isEventLive } = useCountdown(targetDate);

  if (isEventLive) {
    return (
      <h2 className="text-5xl md:text-6xl font-bold text-[#FF7B00] animate-pulse">
        Welcome to Ignite '25!
      </h2>
    );
  }

  return (
    <div className="flex justify-center space-x-4 md:space-x-8 text-white">
      <div className="text-center">
        <p className="text-4xl md:text-6xl font-bold">{days}</p>
        <p className="text-sm md:text-base">Days</p>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-6xl font-bold">{hours}</p>
        <p className="text-sm md:text-base">Hours</p>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-6xl font-bold">{minutes}</p>
        <p className="text-sm md:text-base">Minutes</p>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-6xl font-bold">{seconds}</p>
        <p className="text-sm md:text-base">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;