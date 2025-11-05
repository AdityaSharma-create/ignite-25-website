
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkBaseClasses = "px-3 py-2 text-sm uppercase font-semibold tracking-wider transition-colors duration-300 hover:text-[#FF7B00]";
  const activeLinkClasses = "text-[#FF7B00]";
  const inactiveLinkClasses = "text-gray-300";

  const getNavLinkClass = ({ isActive }: { isActive: boolean; }) => 
    `${navLinkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;


  const navLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass} onClick={closeMenu} end>Home</NavLink>
      <NavLink to="/events/cultural" className={getNavLinkClass} onClick={closeMenu}>Events</NavLink>
      <NavLink to="/rules" className={getNavLinkClass} onClick={closeMenu}>Rules</NavLink>
      <NavLink to="/sponsors" className={getNavLinkClass} onClick={closeMenu}>SPONSORS</NavLink>
      <a href="#contact" onClick={handleContactClick} className={`${navLinkBaseClasses} ${inactiveLinkClasses}`}>Contact</a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#101010]/90 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-glow-orange">
          IGNITE '25
        </Link>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-[#101010]/95 backdrop-blur-sm flex flex-col items-center py-4 space-y-4">
          {navLinks}
        </div>
      )}
    </header>
  );
};

export default Header;