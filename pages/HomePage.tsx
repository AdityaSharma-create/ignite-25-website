import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import { useInView } from '../hooks/useInView';

const HomePage: React.FC = () => {
    const scheduleDay1 = ["Dress to Impress", "Insync - Round 1", "Wolf of Wall Street - Round 1 & 2", "Caesar's Cipher", "Kryptos Visos", "Thespian of Melody"];
    const scheduleDay2 = ["Dress to Impress FINALS", "Insync - Round 2", "Wolf of Wall Street FINALS", "Battle of the Bands", "Dyed in Crimson", "Respawn Finals"];
    
    const heroRef = useRef<HTMLElement>(null);
    const [missionTitleRef, isMissionTitleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true });


    useEffect(() => {
        const heroElement = heroRef.current;
        if (!heroElement) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!heroElement) return;
            const { left, top, width, height } = heroElement.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / (width / 2);
            const y = (e.clientY - top - height / 2) / (height / 2);
            
            const content = heroElement.querySelector('.hero-content') as HTMLElement;
            const bg = heroElement.querySelector('.hero-bg') as HTMLElement;

            const contentIntensity = 6;
            const bgIntensity = 3;

            if (content) {
                content.style.transform = `rotateY(${x * contentIntensity}deg) rotateX(${-y * contentIntensity}deg)`;
            }
            if (bg) {
                bg.style.transform = `translateX(${-x * bgIntensity}px) translateY(${-y * bgIntensity}px) scale(1.1)`;
            }
        };

        const handleMouseLeave = () => {
            if (!heroElement) return;
            const content = heroElement.querySelector('.hero-content') as HTMLElement;
            const bg = heroElement.querySelector('.hero-bg') as HTMLElement;

            if (content) {
                content.style.transform = `rotateY(0deg) rotateX(0deg)`;
            }
            if (bg) {
                bg.style.transform = `translateX(0px) translateY(0px) scale(1.1)`;
            }
        };

        heroElement.addEventListener('mousemove', handleMouseMove);
        heroElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            heroElement.removeEventListener('mousemove', handleMouseMove);
            heroElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="h-screen min-h-[700px] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        <div 
            className="absolute inset-0 bg-cover bg-center hero-bg"
            style={{ 
                backgroundImage: "url('images/main logo.webp')",
                transition: 'transform 0.3s ease-out',
                willChange: 'transform',
                transform: 'scale(1.1)'
            }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center hero-content" style={{ transition: 'transform 0.3s ease-out', willChange: 'transform' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-glow-orange">
            IGNITE '25
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold tracking-wider text-gray-300">
            21st & 22nd NOVEMBER '25
            </p>
            <div className="my-8 md:my-12">
            <CountdownTimer targetDate="2025-11-21T00:00:00" />
            </div>
            <p className="text-gray-400 text-sm tracking-widest uppercase">A C.A.S Initiative</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2
              ref={missionTitleRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-white overflow-hidden py-2"
            >
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isMissionTitleInView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-[30px] opacity-0'
                }`}
              >
                Our
              </span>{' '}
              <span
                className={`inline-block transition-all duration-500 ease-out delay-200 ${
                  isMissionTitleInView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-[30px] opacity-0'
                }`}
              >
                Mission
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
            IGNITE is not just another fest—it is Bangalore's biggest student-run festival, and what makes it truly special is that it stands for something larger than itself. Every moment of celebration, every competition, and every memory created helps us raise funds for the education of underprivileged girls. At the heart of IGNITE is our beloved mascot, the Phoenix—a timeless symbol of resilience, rebirth, and boundless energy. Just like the phoenix, IGNITE rises each year, brighter and stronger, to inspire everyone who becomes part of it.
            </p>
        </div>
      </section>

      {/* Events Gateway Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Explore The Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/events/cultural" className="group relative block h-80 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: "url('images/Culture BG 16-9 .webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black/70 transition-all duration-300 group-hover:bg-black/50"></div>
                <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white uppercase tracking-wider transition-transform duration-300 group-hover:scale-105">Cultural Events</h3>
            </Link>
            <Link to="/events/sports" className="group relative block h-80 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: "url('images/Sports BG 16-9.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black/70 transition-all duration-300 group-hover:bg-black/50"></div>
                <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white uppercase tracking-wider transition-transform duration-300 group-hover:scale-105">Sports Events</h3>
            </Link>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Event Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#181818] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#FF7B00] mb-4 border-b-2 border-[#FF7B00] pb-2">Day 1: 21st November</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-300">
                    {scheduleDay1.map(event => <li key={event}>{event} <span className="text-gray-500 text-sm">(Timing TBD)</span></li>)}
                </ul>
            </div>
            <div className="bg-[#181818] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#FF4500] mb-4 border-b-2 border-[#FF4500] pb-2">Day 2: 22nd November</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-300">
                    {scheduleDay2.map(event => <li key={event}>{event} <span className="text-gray-500 text-sm">(Timing TBD)</span></li>)}
                </ul>
            </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Compete?</h2>
        <p className="text-lg text-gray-400 mb-8">
        Explore our lineup of 11 cultural and 7 sports events. Find your stage, gather your team, and get ready to set the city on fire.
        </p>
        <Link to="/events/cultural" className="inline-block bg-gradient-to-r from-[#FF4500] to-[#FF7B00] text-white font-bold text-lg py-4 px-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg shadow-orange-500/30">
        SEE ALL EVENTS
        </Link>
      </section>
    </div>
  );
};

export default HomePage;