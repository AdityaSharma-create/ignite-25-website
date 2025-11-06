
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { culturalEvents, sportsEvents } from '../constants/eventsData';
import { Event } from '../types';
import Modal from '../components/Modal';

const EventDetailPage: React.FC = () => {
  const { category, slug } = useParams<{ category: 'cultural' | 'sports'; slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const eventList = category === 'cultural' ? culturalEvents : sportsEvents;
  const event: Event | undefined = eventList.find(e => e.id === slug);


  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-16">
        <h1 className="text-4xl font-bold">Event Not Found</h1>
        <p className="text-gray-400 mt-4">The event you are looking for does not exist.</p>
        <Link to="/" className="mt-8 bg-[#FF7B00] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleRegisterClick = () => {
    if (category === 'cultural') {
      setIsModalOpen(true);
    }
  };
  
  const renderRegisterButton = () => {
    const commonClasses = "mt-8 block w-full text-center bg-gradient-to-r from-[#FF4500] to-[#FF7B00] text-white font-bold text-lg py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-orange-500/30";

    if (category === 'sports') {
      return (
        <a 
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=aCQie8M0_kqLKG-GTvOs8bgoXLrwVgpHn3WwS4WL3w5UME03QzJYQVhURFE1WTI3WktZNkM4N1NYRi4u" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={commonClasses}
        >
          REGISTER NOW
        </a>
      );
    }
    
    return (
      <button onClick={handleRegisterClick} className={commonClasses}>
        REGISTER NOW
      </button>
    );
  };

  return (
    <>
      <div className="relative isolate">
        <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10 -z-10" 
            style={{ backgroundImage: `url(${event.logo})` }}
        ></div>
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider text-glow-orange">{event.name}</h1>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-4 text-[#FF7B00]">Description</h2>
                  <p className="text-gray-300 leading-relaxed mb-8 whitespace-pre-line">{event.description}</p>
                  
                  {event.schedule && (
                    <section className="mt-12">
                      <h3 className="text-3xl font-bold text-center mb-8">Detailed Schedule</h3>
                      
                      {event.schedule.day1 && <ScheduleTable title="Day 1 Schedule" data={event.schedule.day1} />}
                      {event.schedule.day1Greenwood && <ScheduleTable title="Day 1 Schedule (Greenwood)" data={event.schedule.day1Greenwood} />}
                      {event.schedule.day2 && <ScheduleTable title="Day 2 Schedule" data={event.schedule.day2} />}

                      {event.schedule.day1Boys && <ScheduleTable title="Day 1 Schedule (Boys)" data={event.schedule.day1Boys} />}
                      {event.schedule.day1Girls && <ScheduleTable title="Day 1 Schedule (Girls)" data={event.schedule.day1Girls} />}
                      {event.schedule.day2Boys && <ScheduleTable title="Day 2 Schedule (Boys)" data={event.schedule.day2Boys} />}
                      {event.schedule.day2Girls && <ScheduleTable title="Day 2 Schedule (Girls)" data={event.schedule.day2Girls} />}
                    </section>
                  )}

                </div>

                {/* Right Column (Info Box) */}
                <div>
                  <div className="bg-[#181818] p-6 rounded-lg sticky top-28 shadow-lg shadow-black/30 border border-gray-800">
                      <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4 text-white">Event Info</h3>
                      <div className="space-y-4 text-lg">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-400">{event.isTeamEvent ? 'Fee per Team:' : 'Fee per Participant:'}</span>
                            <span className="font-bold text-white">{event.fee}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-400">{event.isTeamEvent ? 'Participants per Team:' : 'Participants:'}</span>
                            <span className="font-bold text-white">{event.participants}</span>
                        </div>
                         {event.timings && (
                            <div className="flex justify-between items-start">
                                <span className="font-semibold text-gray-400 flex-shrink-0 mr-2">Timings:</span>
                                <span className="font-bold text-white text-right">{event.timings}</span>
                            </div>
                        )}
                      </div>

                      {category === 'sports' && (
                        <div className="text-center border-t border-gray-700 pt-4 mt-4">
                          <p className="text-yellow-500 text-sm font-semibold">
                            Disclaimer: All sports registration fees will be collected in cash on the day of the event.
                          </p>
                        </div>
                      )}

                      {renderRegisterButton()}
                  </div>
                </div>
            </div>
            <p className="mt-8 text-center text-gray-400">
              Questions? Email us at <a href="mailto:ignite@greenwoodhigh.edu.in" className="text-[#FF7B00] hover:underline">ignite@greenwoodhigh.edu.in</a>
            </p>
            </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Registration">
        <div className="space-y-6">
            <p className="text-gray-400 text-center">Please select the appropriate registration form for your school.</p>
            <div className="flex flex-col space-y-4">
                <a 
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=aCQie8M0_kqLKG-GTvOs8SkH4rOjWkZFtWOfHWJarbJUQ09CVEVDODdGSEpNSjFZWVZUWlFDRE9XRS4u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-[#FF4500] to-[#FF7B00] text-white font-bold text-lg py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-orange-500/30"
                >
                    Register (GWH ICSE/Bannerghatta)
                </a>
                <a 
                    href="https://forms.gle/UwdR2UGXrNGBRzK67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-[#FF4500] to-[#FF7B00] text-white font-bold text-lg py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-orange-500/30"
                >
                    Register (Other Schools)
                </a>
            </div>
        </div>
      </Modal>
    </>
  );
};

const ScheduleTable: React.FC<{ title: string, data: any[] }> = ({ title, data }) => {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="bg-[#181818] text-xs uppercase">
            <tr>
              {headers.map(header => (
                <th key={header} scope="col" className="px-6 py-3">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                {headers.map(header => (
                  <td key={header} className="px-6 py-4">{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventDetailPage;