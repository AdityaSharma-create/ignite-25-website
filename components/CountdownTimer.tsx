import React from 'react';
import useCountdown from '../hooks/useCountdown';

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const { days, hours, minutes, seconds, isEventLive } = useCountdown(targetDate);

  if (isEventLive) {
    return (
      <h2 
        className="text-5xl md:text-6xl font-extrabold text-white animate-pulse"
        style={{ textShadow: '0 0 15px rgba(255, 123, 0, 0.8), 0 0 25px rgba(220, 20, 60, 0.6)' }}
      >
         Ignite '25 is Live 🔥
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