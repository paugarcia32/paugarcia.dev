export interface PersonalEvent {
  date: string;
  name: string;
  url?: string;
}

export const personalEvents: PersonalEvent[] = [
  {
    date: "May, 2024",
    name: "HackUPC",
    url: "/projects/IoT%20Real-Time%20Sensoring",
  },
  {
    date: "Jun, 2024",
    name: "HackBCN",
    url: "/projects/TrafficFlow%20AI",
  },
];
