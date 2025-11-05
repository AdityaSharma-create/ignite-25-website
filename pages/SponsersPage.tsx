
import React, { useEffect } from 'react';

const goldSponsors = [
  { name: 'Nivia Sports', image: '/images/sponsors/nivia.png', description: 'An Indian sports equipment company established in 1934, Nivia Sports manufactures a wide range of athletic gear, apparel, and footwear for sports like football, volleyball, and basketball.' },
  { name: 'Rewiser Test Prep', image: '/images/sponsors/rewiser.png', description: 'This company provides high school students from grades 8 to 12 with preparation services for standardized tests such as the SAT, ACT, and AP exams to help them achieve their academic goals.' },
  { name: 'Credila Education Loan Company', image: '/images/sponsors/credila.png', description: 'As an Indian non-banking financial company, Credila specializes in providing education loans to students for the purpose of pursuing higher education both within India and internationally.' }
];

const bronzeSponsors = [
  { name: 'Posterwa', image: '/images/sponsors/posterwa.png', description: 'An e-commerce platform driven by a community of fans, Posterwa offers affordable, high-quality merchandise related to anime, sports, television shows, and other pop culture phenomena.' },
  { name: 'Hult Business School', image: '/images/sponsors/hult.png', description: 'A private business school with multiple global campuses, Hult International Business School provides undergraduate, master\'s, and MBA programs that emphasize a practical and international approach to business education.' },
  { name: 'Plateo Shoes', image: '/images/sponsors/plateo.png', description: 'A Bengaluru-based footwear brand, Plateo designs and creates innovative and multi-purpose shoes specifically for Indian children, emphasizing foot health and sustainable manufacturing practices.' },
  { name: 'Pixie Photobooth', image: '/images/sponsors/pixie.png', description: 'A premium photobooth rental service in India, Pixie Photobooth offers modern and interactive photo booths for weddings and a variety of other events.' },
  { name: 'Dash Square', image: '/images/sponsors/dash.png', description: 'Bangalore-based luxury furniture retailer that has been curating a collection of fine furniture from leading global brands for over two decades. They offer a wide range of products, including sofas, dining sets, beds, and home decor, positioning themselves as a one-stop solution for premium home furnishings.' }
];

const SponsorCard: React.FC<{ name: string, description: string, image: string }> = ({ name, description, image }) => (
  <div className="bg-[#181818] rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
    <img 
      src={image} 
      alt={`${name} Logo`} 
      className="w-40 h-20 object-contain mb-4" 
    />
    <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const SponsorsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">Our Sponsors</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-[#FF7B00] mb-8">Gold Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goldSponsors.map(sponsor => <SponsorCard key={sponsor.name} {...sponsor} />)}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">Bronze Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bronzeSponsors.map(sponsor => <SponsorCard key={sponsor.name} {...sponsor} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SponsorsPage;
