  import { Event } from '../types';

  // Define shared contacts to avoid repetition
  const culturalHeads = [
    { name: 'Aditi Koorse', email: 'aditi051052@greenwoodhigh.edu.in' },
    { name: 'Deepti Prabhakar', email: 'deepti052092@greenwoodhigh.edu.in' }
  ];

  const sportsHeads = [
    { name: 'Arjun Nori', email: 'arjuno23195@greenwoodhigh.edu.in' },
    { name: 'Anvita Reddy Guddeti', email: 'anvita024020@greenwoodhigh.edu.in' }
  ];

  export const culturalEvents: Event[] = [
    {
      id: 'battle-of-the-bands',
      name: 'Battle of the Bands',
      description: "Teams of 3-8 will compete with each other using their chosen set of songs and presenting their musical skills. On the second day, each band must add a 50-60 second practiced sequence that is not part of the original piece—for example, inserting an instrumental solo into one of their chosen songs. Each band will be given 6-9 minutes for their performance on both days.",
      fee: '₹1000',
      participants: '3-8',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/BOB.png',
      image: '/images/event-cards/BOB.png'
    },
    {
      id: 'caesars-cipher',
      name: "Caesar's Cipher",
      description: "In a breach of a government database, teams must work together to solve cryptography and cipher challenges to break through digital firewalls set by enemy hackers in order to save government secrets.",
      fee: '₹600',
      participants: '1-3',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/cc.png',
      image: '/images/event-cards/cc.png'
    },
    {
      id: 'dress-to-impress',
      name: 'Dress to Impress',
      description: "Teams of 4-6 will take the stage for an 8-minute runway performance showcasing their interpretation of assigned themes, followed by a brief design explanation. Round 1 explores fashion Through the Eras—from Victorian Royale to Y2K Pop Culture. Finalists advance to Round 2, where they reimagine classic characters from the movies Alice in Wonderland, Rapunzle, and Cinderella with a dark and eerie twist while preserving their essence.",
      fee: '₹1000',
      participants: '4-6',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/dti.png',
      image: '/images/event-cards/dti.png'
    },
    {
      id: 'dyed-in-crimson',
      name: 'Dyed in Crimson',
      description: "Dyed in Crimson is a murder mystery event. Over the course of two days, participants will have to search the campus for hidden clues, crack ciphers, and decode information to solve the case. Live performances will be held that will unfold key details and bring participants one step closer to solving the mystery.",
      fee: '₹700',
      participants: '1-3',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/dic.png',
      image: '/images/event-cards/dic.png'
    },
    {
      id: 'in-sync',
      name: 'In Sync',
      description: "Step into InSync—where every dance tells a story and movement becomes a language. Feel the rhythm, witness battles of creativity, and be amazed as dancers push boundaries with props and innovation. More than a competition, InSync is a celebration of unity, expression, and the power of movement to inspire.",
      fee: '₹800',
      participants: '1-8',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/IS.png',
      image: '/images/event-cards/IS.png'
    },
    {
      id: 'integration-bee',
      name: 'Integration Bee',
      description: "Integration bee: Individuals compete to solve complex integration problems under a set time limit. Algebee: Participants solve challenging problems in Number theory, Algebra, Geometry, etc.",
      fee: '₹400',
      participants: '1',
      isTeamEvent: false,
      contacts: { culturalHeads },
      logo: '/images/ib.png',
      image: '/images/event-cards/ib.png'
    },
    {
      id: 'kryptos-visos',
      name: 'Kryptos Visos',
      description: "Painting competition where participants in teams of 2 are assigned a theme and have to create a face painting artwork following the provided themes. The theme for day 1 is provided prior to the event starting, and on the second day, participants who make it into the second round will be given a theme 10 minutes before they can start painting.",
      fee: '₹600',
      participants: '2',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/kv.png',
      image: '/images/event-cards/kv.png'
    },
    {
      id: 'respawn',
      name: 'Respawn',
      description: "All competitors will face off in intense 1v1 battles in a single-bracket elimination tournament, putting their EAFC24 and Rocket League skills to the test. Winners progress to the next round, with all rounds culminating in a grand finale, where a victor will be decided for either game. Day 1 - EAFC24, Day 2 – Rocket League.",
      fee: '₹500',
      participants: '1',
      isTeamEvent: false,
      contacts: { culturalHeads },
      logo: '/images/respwan.png',
      image: '/images/event-cardsrespwan.png'
    },
    {
      id: 'thespian-of-melody',
      name: 'Thespian of Melody',
      description: "Step into the spotlight with Thespian of Melody. Perform your favorite songs as dramatic monologues. Every pause, glance, and word will bring the lyrics to life. With a curated track list, turn melodies into unforgettable moments and engage the audience with the essence of true performance. One day, give it your best. Sit on the thespian throne, and be crowned, or be left in the dust, or in this case, the melody.",
      fee: '₹400',
      participants: '1',
      isTeamEvent: false,
      contacts: { culturalHeads },
      logo: '/images/tom.png',
      image: '/images/event-cards/tom.png'
    },
    {
      id: 'through-the-lens',
      name: 'Through the Lens',
      description: "Join our three round photography event where each round explores a different theme, ranging from emotions, sports, music, and beyond. Show your creativity, capture moments, and compete to be the best.",
      fee: '₹500',
      participants: '1',
      isTeamEvent: false,
      contacts: { culturalHeads },
      logo: '/images/ttl.png',
      image: '/images/event-cards/ttl.png'
    },
    {
      id: 'wolf-of-wall-street',
      name: 'Wolf of Wall Street',
      description: "Teams battle it out in a high-stakes stock market simulation inspired by the film. Earn insider info, trade smart under the watchful eyes of inspectors, and face the auditors in a dramatic final showdown.",
      fee: '₹800',
      participants: '3-4',
      isTeamEvent: true,
      contacts: { culturalHeads },
      logo: '/images/wows.png',
      image: '/images/event-cardswows.png'
    }
  ];

  export const sportsEvents: Event[] = [
    {
      id: 'football',
      name: 'Football',
      description: "The tournament will be played in a knockout-style format (single elimination). Matches will be officiated based on FIFA Laws of the Game. Team sizes are 11-18 players for Boys and 7-12 players for Girls.",
      fee: '₹1300',
      participants: '11-18',
      isTeamEvent: true,
      contacts: { eventHeads: [{ name: 'Shourya Sandhu', email: 'shourya051150@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/football.png',
      image: '/images/event-cards/football.png',
      timings: "Day 1: 9:30 AM - 2:00 PM | Day 2: 8:30 AM - 2:00 PM",
      schedule: {
        day1: [
          { Time: '9:30 AM - 10:00 AM', Category: 'Girls QF', Teams: 'Team 1 vs Team 2' },
          { Time: '10:00 AM - 10:30 AM', Category: 'Girls QF', Teams: 'Team 3 vs Team 4' },
          { Time: '10:30 AM - 11:00 AM', Category: 'Boys R16', Teams: 'Team 1 vs Team 2' },
          { Time: '11:00 AM - 11:30 AM', Category: 'Boys R16', Teams: 'Team 3 vs Team 4' },
          { Time: '11:30 AM - 12:00 PM', Category: 'Girls QF', Teams: 'Team 5 vs Team 6' },
          { Time: '12:00 PM - 12:30 PM', Category: 'Girls QF', Teams: 'Team 7 vs Team 8' },
          { Time: '12:30 PM - 1:00 PM', Category: 'Boys R16', Teams: 'Team 7 vs Team 8' },
          { Time: '1:00 PM - 1:30 PM', Category: 'Boys R16', Teams: 'Team 9 vs Team 10' },
          { Time: '1:30 PM - 2:00 PM', Category: 'Buffer', Teams: 'Wrap up / Hard Stop' }
        ],
        day2: [
          { Time: '8:30 AM - 9:00 AM', Category: 'Boys QF', Teams: 'Winner (T1/T2) vs Bye Team 5' },
          { Time: '9:00 AM - 9:30 AM', Category: 'Boys QF', Teams: 'Winner (T3/T4) vs Bye Team 6' },
          { Time: '9:30 AM - 10:00 AM', Category: 'Boys QF', Teams: 'Winner (T7/T8) vs Bye Team 11' },
          { Time: '10:00 AM - 10:30 AM', Category: 'Boys QF', Teams: 'Winner (T9/T10) vs Bye Team 12' },
          { Time: '10:30 AM - 11:00 AM', Category: 'Boys SF', Teams: 'Winner B-QF-1 vs Winner B-QF-2' },
          { Time: '11:00 AM - 11:30 AM', Category: 'Boys SF', Teams: 'Winner B-QF-3 vs Winner B-QF-4' },
          { Time: '11:30 AM - 12:00 PM', Category: '3rd Place', Teams: 'Combined Boys 3rd Place then Girls 3rd Place' },
          { Time: '12:00 PM - 12:30 PM', Category: 'Girls SF', Teams: 'Winner G-QF-1 vs Winner G-QF-2' },
          { Time: '12:30 PM - 1:00 PM', Category: 'Girls SF', Teams: 'Winner G-QF-3 vs Winner G-QF-4' },
          { Time: '1:00 PM - 1:30 PM', Category: 'Girls FINAL', Teams: 'Winner G-SF-1 vs Winner G-SF-2' },
          { Time: '1:30 PM - 2:00 PM', Category: 'Boys FINAL', Teams: 'Winner B-SF-1 vs Winner B-SF-2' }
        ]
      }
    },
    {
      id: 'badminton',
      name: 'Badminton',
      description: "There will be 2 pools of teams each, matches will be conducted in a Round Robin format. The top 2 teams from each pool will advance to the semifinals round, which will be a knockout round.",
      fee: '₹700',
      participants: '2-6',
      isTeamEvent: true,
      contacts: { eventHeads: [{ name: 'Inesh Dora Kanati', email: 'inesh052089@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/badi.png',
      image: '/images/event-cards/badi.png',
      timings: "Day 1: 9:30 AM - 2:00 PM | Day 2: 10:00 AM - 1:30 PM",
      schedule: {
        day1Boys: [
          { Court: 'Court 1', Time: '9:30 AM - 10:15 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 8 vs Team 9' },
          { Court: 'Court 2', Time: '9:30 AM - 10:15 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 5 vs Team 12' },
          { Court: 'Court 1', Time: '10:15 AM - 11:00 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 6 vs Team 11' },
          { Court: 'Court 2', Time: '10:15 AM - 11:00 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 7 vs Team 10' },
          { Court: 'Court 1', Time: '11:00 AM - 11:45 AM', Round: 'Quarter-Final', Teams: 'Winner M1 (Team 1) vs Winner M2' },
          { Court: 'Court 2', Time: '11:00 AM - 11:45 AM', Round: 'Quarter-Final', Teams: 'Winner M3 vs Winner M4 (Team 4)' },
          { Court: 'Court 1', Time: '12:30 PM - 1:15 PM', Round: 'Quarter-Final', Teams: 'Winner M5 (Team 3) vs Winner M6' },
          { Court: 'Court 2', Time: '12:30 PM - 1:15 PM', Round: 'Quarter-Final', Teams: 'Winner M7 vs Winner M8 (Team 2)' },
          { Court: 'Court 1', Time: '1:15 PM - 2:00 PM', Round: 'Semi-Final', Teams: 'Winner QF1 vs Winner QF2' },
          { Court: 'Court 2', Time: '1:15 PM - 2:00 PM', Round: 'Semi-Final', Teams: 'Winner QF3 vs Winner QF4' }
        ],
        day1Girls: [
          { Court: 'Court 3', Time: '9:30 AM - 10:15 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 8 vs Team 9' },
          { Court: 'Court 4', Time: '9:30 AM - 10:15 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 5 vs Team 12' },
          { Court: 'Court 3', Time: '10:15 AM - 11:00 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 6 vs Team 11' },
          { Court: 'Court 4', Time: '10:15 AM - 11:00 AM', Round: 'Round 1 (Play-in)', Teams: 'Team 7 vs Team 10' },
          { Court: 'Court 3', Time: '11:00 AM - 11:45 AM', Round: 'Quarter-Final', Teams: 'Winner M1 (Team 1) vs Winner M2' },
          { Court: 'Court 4', Time: '11:00 AM - 11:45 AM', Round: 'Quarter-Final', Teams: 'Winner M3 vs Winner M4 (Team 4)' },
          { Court: 'Court 3', Time: '12:30 PM - 1:15 PM', Round: 'Quarter-Final', Teams: 'Winner M5 (Team 3) vs Winner M6' },
          { Court: 'Court 4', Time: '12:30 PM - 1:15 PM', Round: 'Quarter-Final', Teams: 'Winner M7 vs Winner M8 (Team 2)' },
          { Court: 'Court 3', Time: '1:15 PM - 2:00 PM', Round: 'Semi-Final', Teams: 'Winner QF1 vs Winner QF2' },
          { Court: 'Court 4', Time: '1:15 PM - 2:00 PM', Round: 'Semi-Final', Teams: 'Winner QF3 vs Winner QF4' }
        ],
        day2Boys: [
          { Court: 'Court 2', Time: '10:00 AM - 11:00 AM', Round: '3rd Place', Teams: 'Loser SF1 vs Loser SF2' },
          { Court: 'Court 1', Time: '12:30 PM - 1:30 PM', Round: 'Final', Teams: 'Winner SF1 vs Winner SF2' }
        ],
        day2Girls: [
          { Court: 'Court 3', Time: '10:00 AM - 11:00 AM', Round: '3rd Place', Teams: 'Loser SF1 vs Loser SF2' },
          { Court: 'Court 4', Time: '11:00 AM - 12:00 PM', Round: 'Final', Teams: 'Winner SF1 vs Winner SF2' }
        ]
      }
    },
    {
      id: 'tennis',
      name: 'Tennis',
      description: "Matches will follow AITA rules. The format will be first to four games (best of seven) until the semifinals. For the semifinals and finals, matches will consist of one full set.",
      fee: '₹600',
      participants: '3-4',
      isTeamEvent: true,
      contacts: { eventHeads: [{ name: 'Arjun Voruganti', email: 'arjun052378@greenwoodhigh.edu.in' }, { name: 'Rishikesh Muralimohan', email: 'rishikesh052634@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/tennis.png',
      image: '/images/event-cards/tennis.png',
      timings: "Day 1: 9:30 AM - 1:45 PM | Day 2: 8:30 AM - 12:00 PM",
      schedule: {
        day1: [
          { Court: 'Court 1', Time: '9:30 AM - 10:15 AM', Round: 'Group Match', Teams: '1 vs 2' },
          { Court: 'Court 2', Time: '9:30 AM - 10:15 AM', Round: 'Group Match', Teams: '3 vs 4' },
          { Court: 'Court 1', Time: '10:15 AM - 11:00 AM', Round: 'Group Match', Teams: '5 vs 6' },
          { Court: 'Court 2', Time: '10:15 AM - 11:00 AM', Round: 'Group Match', Teams: '7 vs 8' },
          { Court: 'Court 1', Time: '11:00 AM - 11:45 AM', Round: 'Group Match', Teams: '1 vs 3' },
          { Court: 'Court 2', Time: '11:00 AM - 11:45 AM', Round: 'Group Match', Teams: '2 vs 4' },
          { Court: 'Court 1', Time: '12:30 PM - 1:15 PM', Round: 'Group Match', Teams: '5 vs 7' },
          { Court: 'Court 2', Time: '12:30 PM - 1:15 PM', Round: 'Group Match', Teams: '6 vs 8' },
          { Court: 'Court 1', Time: '1:15 PM - 1:45 PM', Round: 'Group Match', Teams: '1 vs 4' },
          { Court: 'Court 2', Time: '1:15 PM - 1:45 PM', Round: 'Group Match', Teams: '2 vs 3' }
        ],
        day2: [
          { Court: 'Court 1', Time: '8:30 AM - 9:15 AM', Round: 'Group Match', Teams: '6 vs 7' },
          { Court: 'Court 2', Time: '8:30 AM - 9:15 AM', Round: 'Group Match', Teams: '5 vs 8' },
          { Court: 'Court 1', Time: '9:15 AM - 10:30 AM', Round: 'Semi-Final', Teams: 'SF1' },
          { Court: 'Court 2', Time: '9:15 AM - 10:30 AM', Round: 'Semi-Final', Teams: 'SF2' },
          { Court: 'Court 1', Time: '10:30 AM - 12:00 PM', Round: 'Final', Teams: 'Finals Singles' },
          { Court: 'Court 2', Time: '10:30 AM - 12:00 PM', Round: 'Final', Teams: 'Finals Doubles' }
        ]
      }
    },
    {
      id: 'shooting',
      name: 'Shooting',
      description: `
      <p>The event will consist of a single 40-shot match, and the highest scorer wins. All athletes compete individually on a paper target.</p>
      <br />
      <strong>Important Notes:</strong>
      <ul class="list-disc list-inside mt-2">
        <li>All shooters are requested to report 10-15 minutes before their registration timings.</li>
        <li>There will be 8 shooters per detail, with all of them competing in paper targets.</li>
        <li>There will be no separation of ISSF and NR shooters.</li>
      </ul>
    `,
      fee: '₹500',
      participants: '1 (Individual)',
      isTeamEvent: false,
      contacts: { eventHeads: [{ name: 'Sandhya Jothi Pandiyan', email: 'sandhya053140@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/shooting.png',
      image: '/images/event-cards/shooting.webp',
      timings: "Day 1: 9:15 AM - 1:45 PM | Day 2: 9:00 AM - 1:55 PM",
      schedule: {
        day1: [
          { Time: '09:15 - 09:30', Schedule: 'Detail 1 sighting time' },
          { Time: '09:30 - 10:30', Schedule: 'Detail 1 match time' },
          { Time: '10:35 - 10:50', Schedule: 'Detail 2 sighting time' },
          { Time: '10:50 - 11:50', Schedule: 'Detail 2 match time' },
          { Time: '11:50 - 12:10', Schedule: 'Lunch break' },
          { Time: '12:30 - 12:45', Schedule: 'Detail 3 sighting time' },
          { Time: '12:45 - 01:45', Schedule: 'Detail 3 match time' }
        ],
        day2: [
          { Time: '09:15 - 09:30', Schedule: 'Detail 1 sighting time' },
          { Time: '09:30 - 10:30', Schedule: 'Detail 1 match time' },
          { Time: '10:35 - 10:50', Schedule: 'Detail 2 sighting time' },
          { Time: '10:50 - 11:50', Schedule: 'Detail 2 match time' },
          { Time: '11:50 - 12:10', Schedule: 'Lunch break' },
          { Time: '12:30 - 12:45', Schedule: 'Detail 3 sighting time' },
          { Time: '12:45 - 01:45', Schedule: 'Detail 3 match time' },
          { Time: '01:55', Schedule: 'Match results posted' }
        ]
      }
    },
    {
      id: 'flag-football',
      name: 'Flag Football',
      description: "9 v 9 on the field with 2 substitutes allowed per team. The field is a canvas of speed and strategy. No pads, no tackles, just pure instinct, precision, and trust.",
      fee: '₹800',
      participants: '9-11',
      isTeamEvent: true,
      contacts: { eventHeads: [{ name: 'Aditya Ganesh', email: 'aditya051758@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/flag-football.png',
      image: '/images/event-cards/flag-football.png',
      timings: "Day 1: 9:30 AM - 1:30 PM | Day 2: 8:30 AM - 2:00 PM",
      schedule: {
        day1: [
          { Time: '9:30 AM - 10:30 AM', Round: 'Qualifier 1', Teams: '(7) vs (10)' },
          { Time: '10:30 AM - 11:30 AM', Round: 'Qualifier 2', Teams: '(8) vs (9)' },
          { Time: '11:30 AM - 12:30 PM', Round: 'Quarterfinal 1', Teams: '(4) vs (5)' },
          { Time: '12:30 PM - 1:30 PM', Round: 'Quarterfinal 2', Teams: '(3) vs (6)' }
        ],
        day2: [
          { Time: '8:30 AM - 9:30 AM', Round: 'Quarterfinal 3', Teams: 'Q1(W) vs (2)' },
          { Time: '9:30 AM - 10:30 AM', Round: 'Quarterfinal 4', Teams: 'Q2(W) vs (1)' },
          { Time: '10:30 AM - 11:30 AM', Round: 'Semifinal 1', Teams: 'QF2(W) vs QF3(W)' },
          { Time: '11:30 AM - 12:30 PM', Round: 'Semifinal 2', Teams: 'QF1(W) vs QF4(W)' },
          { Time: '1:00 PM - 2:00 PM', Round: 'Final', Teams: 'SF1(W) vs SF2(W)' }
        ]
      }
    },
    {
      id: 'table-tennis',
      name: 'Table Tennis',
      description: "Teams of 2-5 are eligible to register, with 2 being subs. There will be 3 rounds. Matches will have 2 levels: Singles and Doubles (11 points each), with a deciding Singles if tied 1-1. Official TTFI Rules will be followed.",
      fee: '₹600',
      participants: '2-4',
      isTeamEvent: true,
      contacts: { eventHeads: [{ name: 'Youkai Duan', email: 'youkai052173@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/table-tennis.png',
      image: '/images/event-cards/table-tennis.png',
      timings: "Day 1: 9:30 AM - 1:45 PM | Day 2: 8:30 AM - 1:15 PM",
      schedule: {
        day1: [
          { Time: '9:30 AM - 10:15 AM', Tables: '1/2/3/4', Matches: '1v2 | 3v4 | 5v6 | 7v8' },
          { Time: '10:15 AM - 11:00 AM', Tables: '1/2', Matches: '9v10 | 1v3' },
          { Time: '11:00 AM - 11:45 AM', Tables: '3/4', Matches: '2v4 | 5v7' },
          { Time: '12:30 PM - 1:15 PM', Tables: '1/2/3/4', Matches: '6v8 | 1v4 | 2v3 | 9v10' },
          { Time: '1:15 PM - 1:45 PM', Tables: 'All', Matches: 'Catch-up / Buffer' }
        ],
        day2: [
          { Time: '8:30 AM - 9:15 AM', Tables: '1/2/3/4', Matches: '6v7 | 5v8 | 9v10 | 1v3' },
          { Time: '9:15 AM - 10:30 AM', Tables: '1/2', Matches: 'Semi-Final 1 | Semi-Final 2' },
          { Time: '10:30 AM - 12:00 PM', Tables: '1', Matches: 'Finals (Singles)' },
          { Time: '12:30 PM - 1:15 PM', Tables: '1', Matches: 'Finals (Doubles) / Secret Format' }
        ]
      }
    },
    {
      id: 'basketball',
      name: 'Basketball',
      description: "Brackets will consist of 12 teams (4 byes will be given). The tournament will be played in a knockout-style format.",
      fee: '₹1300',
      participants: '10-12',
      isTeamEvent: true,
      contacts: { eventHeads: [{ name: 'Samrath Singh Dhingra', email: 'samrath053134@greenwoodhigh.edu.in' }, { name: 'Vikrant Shetty Tomar', email: 'vikrant052641@greenwoodhigh.edu.in' }], sportsHeads },
      logo: '/images/basketball.png',
      image: '/images/event-cards/basketball.png',
      timings: "Day 1: 9:30 AM - 1:50 PM | Day 2: 8:30 AM - 12:50 PM",
      schedule: {
        day1: [
          { 'Match Number': 'R1 Match 1 (Boys)', Court: 'ICSE Court 1', 'Time Period': '9:30 AM - 10:25 AM' },
          { 'Match Number': 'R1 Match 2 (Boys)', Court: 'ICSE Court 2', 'Time Period': '9:30 AM - 10:25 AM' },
          { 'Match Number': 'R1 Match 1 (Girls)', Court: 'IB Court', 'Time Period': '9:30 AM - 10:15 AM' },
          { 'Match Number': 'R1 Match 3 (Boys)', Court: 'ICSE Court 1', 'Time Period': '10:35 AM - 11:30 AM' },
          { 'Match Number': 'R1 Match 4 (Boys)', Court: 'ICSE Court 2', 'Time Period': '10:35 AM - 11:30 AM' },
          { 'Match Number': 'R1 Match 2 (Girls)', Court: 'IB Court', 'Time Period': '10:35 AM - 11:20 AM' },
          { 'Match Number': 'R2 Match 1 (Boys)', Court: 'ICSE Court 1', 'Time Period': '11:30 AM - 12:25 PM' },
          { 'Match Number': 'R2 Match 2 (Boys)', Court: 'ICSE Court 2', 'Time Period': '11:30 AM - 12:25 PM' },
          { 'Match Number': 'R1 Match 3 (Girls)', Court: 'IB Court', 'Time Period': '11:30 AM - 12:15 PM' },
          { 'Match Number': 'R2 Match 3 (Boys)', Court: 'ICSE Court 1', 'Time Period': '12:55 PM - 1:50 PM' },
          { 'Match Number': 'R2 Match 4 (Boys)', Court: 'ICSE Court 2', 'Time Period': '12:55 PM - 1:50 PM' },
          { 'Match Number': 'R1 Match 4 (Girls)', Court: 'IB Court', 'Time Period': '12:55 PM - 1:40 PM' }
        ],
        day2: [
          { 'Match Number': "Boy's Semifinal 1", Court: 'ICSE Court 1', 'Time Period': '8:30 AM - 9:25 AM' },
          { 'Match Number': "Girl's Semifinal 1", Court: 'ICSE Court 2', 'Time Period': '8:30 AM - 9:15 AM' },
          { 'Match Number': "Boy's Semifinal 2", Court: 'IB Court', 'Time Period': '8:30 AM - 9:25 AM' },
          { 'Match Number': "Girl's Semifinal 2", Court: 'ICSE Court 2', 'Time Period': '9:40 AM - 10:25 AM' },
          { 'Match Number': "Boy's Third Place Match", Court: 'ICSE Court 1', 'Time Period': '9:40 AM - 10:35 AM' },
          { 'Match Number': "Girl's Third Place Match", Court: 'IB Court', 'Time Period': '11:00 AM - 11:45 AM' },
          { 'Match Number': "Girl's Finals", Court: 'ICSE Court 2', 'Time Period': '11:00 AM - 11:45 AM' },
          { 'Match Number': "Boy's Finals", Court: 'ICSE Court 1', 'Time Period': '11:45 AM - 12:50 PM' }
        ]
      }
    }
  ];