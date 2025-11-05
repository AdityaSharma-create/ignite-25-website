
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventsCategoryPage from './pages/EventsCategoryPage';
import EventDetailPage from './pages/EventDetailPage';
import RulesPage from './pages/RulesPage';
import SponsorsPage from './pages/SponsersPage';

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <div key={location.pathname} className="animate-fadeIn">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events/:category" element={<EventsCategoryPage />} />
                <Route path="/events/:category/:slug" element={<EventDetailPage />} />
                <Route path="/rules" element={<RulesPage />} />
                <Route path="/sponsors" element={<SponsorsPage />} />
            </Routes>
        </div>
    );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-[#101010] text-gray-200 min-h-screen font-poppins">
        <Header />
        <main>
            <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;