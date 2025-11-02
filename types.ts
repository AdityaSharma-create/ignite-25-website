export interface Contact {
  name: string;
  email: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  fee: string;
  participants: string;
  logo: string;
  image: string;
  isTeamEvent: boolean;
  contacts: {
    culturalHeads?: Contact[];
    sportsHeads?: Contact[];
    eventHeads?: Contact[];
  };
}