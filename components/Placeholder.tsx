
import React from 'react';

interface PlaceholderProps {
  text: string;
  className?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-800/50 border-2 border-dashed border-gray-700 ${className}`}>
      <span className="text-gray-500 text-xs sm:text-sm font-semibold text-center p-2">{text}</span>
    </div>
  );
};

export default Placeholder;
