
import React, { useEffect } from 'react';

const rules: string[] = [
    "Attendees will be given a wrist band of different colors for easy identification. Attendees must wear the bands throughout the event. Anyone found without the band will be asked to leave the campus.",
    "Participants representing their school are required to be in school uniform only.",
    "Sports participants should be accompanied by their coaches.",
    "No food and drinks from outside are allowed. Participants can buy food inside if required. Only empty water bottles are allowed. Any breach of rules will result in food and drinks being confiscated.",
    "Participants carrying medicines need to send an email to ignite@greenwoodhigh.edu.in stating the prescription being carried and the reason for it. No medicines are allowed without a prior email.",
    "Participants in cultural events must come in their formal school uniform and must carry photo ID cards of the current academic year. No student will be allowed in the school campus without their ID card. For any events that require participants to carry external clothing, participants are required to change before their event within the campus in allotted bathrooms.",
    "Participants for all sports events must wear their PE uniforms/jerseys and must carry photo ID cards of the current academic year. All sports gear (as needed) must be brought by the participants during registration. No participant will be allowed to leave the venue until their event is over.",
    "ALL walk-in attendees can wear coloured uniform but must be modestly dressed. No tank tops or sleeveless clothing allowed. If the school feels the students are inappropriately dressed, they will be asked to leave immediately.",
    "All students need their current school ID card in order to enter GWH campus.",
    "Attendees must not loiter around in the venue and should stick to their allocated spaces.",
    "Participants are not allowed to bring food, water, or any other drinks on campus. Empty water bottles may be brought which can be filled at water stations throughout the venue. Any lunch boxes, chips packets, packaged foods.",
    "Food will be complementary for accompanying teachers/coaches.",
    "If lunch boxes are brought, they will be confiscated and stored in the reception with your name labeled on it; they may be collected before exiting the campus.",
    "Attendees are encouraged to bring money to purchase items from a selection of food trucks and stalls that will be available on campus during the event.",
    "The school is not liable for damage to or loss of the participant's belongings during the event.",
    "Participants are expected to maintain proper decorum while waiting in queues at all times, including during registration or while purchasing food. Any misconduct seen including pushing, talking loudly, disrespecting volunteers will result in the participant being removed from the line and sent to the back.",
    "Attendees are required to ensure that they are careful with any school property that they use. The Organising Committee will note any damages to school property and attendees will be held liable for the costs.",
    "IGNITE follows a strict zero-tolerance policy for drugs, narcotics, and alcohol of any kind. Any participant found violating this policy will be immediately removed from campus, and their school will be notified and will be blacklisted for the remainder of the fest and future installments of IGNITE.",
    "Attendees are expected to comply with all instructions provided by the Organising Committee and security volunteers at various points throughout the event. Direct infringement of such rules will result in disciplinary action.",
    "Any violation of these rules will lead to immediate elimination from events and getting kicked out of Ignite.",
    "The IGNITE Organising Committee reserves the right to expel a participant from further participation in an event should the Organising Committee or any faculty, at their sole discretion, deem the participant's behavior inappropriate or offensive to other participants or staff. No refund of the registration fee will be given to a participant who has been expelled from the event."
];

const RuleCard: React.FC<{ rule: string; }> = ({ rule }) => {
  return (
    <div className="bg-[#181818] p-6 rounded-lg shadow-lg shadow-black/30 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,123,0,0.5)] border border-transparent hover:border-orange-500/50">
      <p className="text-gray-300 leading-relaxed">
        {rule}
      </p>
    </div>
  );
};


const RulesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-glow-orange">Rules & Regulations</h1>
          <p className="text-lg text-gray-400 mt-2">Please read carefully to ensure a smooth and fair competition for everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, index) => (
              <RuleCard key={index} rule={rule} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RulesPage;