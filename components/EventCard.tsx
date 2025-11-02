import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  category: 'cultural' | 'sports';
}

const EventCard: React.FC<EventCardProps> = ({ event, category }) => {
  return (
    <Link 
      to={`/events/${category}/${event.id}`} 
      className="group block bg-[#181818] rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
    >
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-white group-hover:text-[#FF7B00] transition-colors">{event.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;