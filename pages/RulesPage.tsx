
import React, { useEffect } from 'react';

const rules: string[] = [
    "All participants must be from Grade 9 to Grade 12.",
    "Participants must carry their school ID cards at all times.",
    "The decision of the judges will be final and binding.",
    "Any form of malpractice will lead to immediate disqualification.",
    "Vulgarity in any form will not be tolerated and will lead to disqualification.",
    "Participants must adhere to the time limits specified for each event.",
    "Teams must report to the venue at least 30 minutes prior to the event.",
    "The organizers are not responsible for any loss of personal belongings.",
    "Damage to school property will result in serious consequences.",
    "Use of mobile phones is strictly prohibited during events unless specified.",
    "Participants are expected to maintain decorum and sportsmanship.",
    "The registration fee is non-refundable.",
    "Online registration is mandatory for all events.",
    "Slots will be filled on a first-come, first-served basis.",
    "Participants must bring their own materials unless stated otherwise.",
    "The event schedule is subject to change without prior notice.",
    "Rules specific to each event will be provided before the event begins.",
    "Participants must follow all safety guidelines provided by the organizers.",
    "The organizers reserve the right to change any rules at any point.",
    "By participating, you agree to be photographed or filmed for promotional purposes."
];

const RulesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider">Rules & Regulations</h1>
          <p className="text-lg text-gray-400 mt-2">Please read carefully to ensure a smooth and fair competition for everyone.</p>
        </div>
        <div className="bg-[#181818] p-6 sm:p-8 rounded-lg shadow-lg shadow-black/30">
          <ol className="list-decimal list-inside space-y-4 text-gray-300 text-lg">
            {rules.map((rule, index) => (
              <li key={index} className="pl-2 leading-relaxed">
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
