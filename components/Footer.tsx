import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-black tracking-tighter text-glow-orange mb-2">IGNITE '25</h3>
          <p className="text-gray-400 text-sm">Bangalore's Biggest Student-Run Festival.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-[#FF7B00] transition-colors">Home</Link></li>
            <li><Link to="/events/cultural" className="text-gray-400 hover:text-[#FF7B00] transition-colors">Events</Link></li>
            <li><Link to="/rules" className="text-gray-400 hover:text-[#FF7B00] transition-colors">Rules</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Key Contacts</h4>
          <div className="space-y-4 text-sm">
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">Ignite Heads</h5>
              <ul className="space-y-1 text-gray-400">
                <li>Amisha Sharma: <a href="mailto:amisha051273@greenwoodhigh.edu.in" className="hover:text-[#FF7B00]">email</a></li>
                <li>Varun Vasudevan Iyer: <a href="mailto:varun070052@greenwoodhigh.edu.in" className="hover:text-[#FF7B00]">email</a></li>
                <li>Shriya Reddy Ramakrishna: <a href="mailto:shriya025052@greenwoodhigh.edu.in" className="hover:text-[#FF7B00]">email</a></li>
                <li>Aahana Sigtia: <a href="mailto:aahana052306@greenwoodhigh.edu.in" className="hover:text-[#FF7B00]">email</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">Teachers-in-Charge</h5>
              <ul className="space-y-1 text-gray-400">
                <li>Ms. Saheli Gupta: <a href="mailto:sahelig@greenwoodhigh.edu.in" className="hover:text-[#FF7B00]">email</a></li>
                <li>Ms. Sowmya S: <a href="mailto:sowmyas@greenwoodhigh.edu.in" className="hover:text-[#FF7B00]">email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="mailto:ignite@greenwoodhigh.edu.in" className="hover:text-[#FF7B00] transition-colors">ignite@greenwoodhigh.edu.in</a></li>
            <li className="flex items-center justify-center md:justify-start">
              <a href="https://www.instagram.com/ignite.gwh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FF7B00] transition-colors">
                <InstagramIcon className="w-5 h-5" />
                @ignite.gwh
              </a>
            </li>
            <li className="font-semibold mt-2">Greenwood High International School</li>
            <li className="text-xs">No. 8-14, Chikkawadayarapura, near Heggondahalli, Gunjur Post, Varthur Sarjapur Road, Bangalore, Karnataka 560087, India</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-10 text-sm border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Ignite '25. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
