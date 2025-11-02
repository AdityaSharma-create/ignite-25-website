import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { culturalEvents, sportsEvents } from '../constants/eventsData';
import EventCard from '../components/EventCard';
import { Event } from '../types';

const EventsCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: 'cultural' | 'sports' }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  
  if (!category || (category !== 'cultural' && category !== 'sports')) {
    navigate('/');
    return null;
  }

  const events: Event[] = category === 'cultural' ? culturalEvents : sportsEvents;
  
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-glow-orange">{category} Events</h1>
          <p className="text-lg text-gray-400 mt-2">Discover the competitions that await.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link 
              to="/events/cultural" 
              className={`py-2 px-6 rounded-full font-semibold transition-colors ${category === 'cultural' ? 'bg-[#FF7B00] text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              Cultural
            </Link>
            <Link 
              to="/events/sports" 
              className={`py-2 px-6 rounded-full font-semibold transition-colors ${category === 'sports' ? 'bg-[#FF4500] text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              Sports
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCategoryPage;