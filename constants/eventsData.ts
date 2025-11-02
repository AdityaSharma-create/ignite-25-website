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
    image: '/images/event-cards/respawn.png'
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
    image: '/images/event-cards/top.png'
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
    image: '/images/event-cards/wows.png'
  }
];

export const sportsEvents: Event[] = [
  {
    id: 'badminton',
    name: 'Badminton',
    description: "There will be 2 pools of teams each, matches will be conducted in a Round Robin format. The top 2 teams from each pool will advance to the semifinals round, which will be a knockout round. Each match between teams consists of 1 singles match, 1 doubles match and reverse singles.",
    fee: '₹700',
    participants: '2-6',
    isTeamEvent: true,
    contacts: {
      eventHeads: [
        { name: 'Inesh Dora Kanati', email: 'inesh052089@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/badi.png',
    image: '/images/event-cards/badi.png'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: "Brackets will consist of 14 teams (2 byes will enter in the second round). The tournament will be played in a knockout-style format. Matches will be officiated based on FIBA Rules. Matches will be played in 10-minute quarters for boys, 8-minute quarters for girls.",
    fee: '₹1300',
    participants: '10-12',
    isTeamEvent: true,
    contacts: {
      eventHeads: [
        { name: 'Samrath Singh Dhingra', email: 'samrath053134@greenwoodhigh.edu.in' },
        { name: 'Vikrant Shetty Tomar', email: 'vikrant052641@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/basketball.png',
    image: '/images/event-cards/basketball.png'
  },
  {
    id: 'flag-football',
    name: 'Flag Football',
    description: "9 v 9 on the field with 2 substitutes allowed per team. Gameplay includes 4 downs to gain 10 yards, with rules for passing, rushing, and blocking. The field is a canvas of speed and strategy. No pads, no tackles, just pure instinct, precision, and trust.",
    fee: '₹800',
    participants: '6-8',
    isTeamEvent: true,
    contacts: {
      eventHeads: [
        { name: 'Aditya Ganesh', email: 'aditya051758@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/flag-football.png',
    image: '/images/event-cards/flag-football.png'
  },
  {
    id: 'football',
    name: 'Football',
    description: "The tournament will be played in a knockout-style format (single elimination). Matches will be officiated based on FIFA Laws of the Game. Boys' Matches: 30-minute halves. Girls' Matches: 20-minute halves. Tie-breaking will be decided by Extra Time & Penalty Shootouts.",
    fee: '₹1300',
    participants: '11-18',
    isTeamEvent: true,
    contacts: {
      eventHeads: [
        { name: 'Shourya Sandhu', email: 'shourya051150@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/football.png',
    image: '/images/event-cards/football.png'
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    description: "Teams of 2-5 are eligible to register, with 2 being subs. There will be 3 rounds (qualifiers, semi-finals, finals). Matches will have 2 levels: Singles and Doubles (11 points each). Official TTFI Rules will be followed.",
    fee: '₹600',
    participants: '2-4',
    isTeamEvent: true,
    contacts: {
      eventHeads: [
        { name: 'Youkai Duan', email: 'youkai052173@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/table-tennis.png',
    image: '/images/event-cards/table-tennis.png'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    description: "Matches will follow AITA rules. The format will be first to four games (best of seven) until the semifinals. For the semifinals and finals, matches will consist of one full set. Each participating team may have up to three members.",
    fee: '₹600',
    participants: '4',
    isTeamEvent: true,
    contacts: {
      eventHeads: [
        { name: 'Arjun Voruganti', email: 'arjun052378@greenwoodhigh.edu.in' },
        { name: 'Rishikesh Muralimohan', email: 'rishikesh052634@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/tennis.png',
    image: '/images/event-cards/tennis.png'
  },
  {
    id: 'shooting',
    name: 'Shooting',
    description: "The event will consist of a single round (40/60 shot match) in a league format; the highest scorer wins. All athletes compete individually. All matches will be conducted following the ISSF 10M Air Pistol or 10M Air Rifle Shooting handbook.",
    fee: '₹500',
    participants: '1 (Individual)',
    isTeamEvent: false,
    contacts: {
      eventHeads: [
        { name: 'Sandhya Jothi Pandiyan', email: 'sandhya053140@greenwoodhigh.edu.in' }
      ],
      sportsHeads
    },
    logo: '/images/shooting.png',
    image: '/images/event-cards/shooting.png'
  }
];