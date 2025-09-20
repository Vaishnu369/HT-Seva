// types/Event.ts
import type { Participant } from "./Participant"

export type Event = {
  id: number;
  title: string;
  image: string;
  date: string;
  location: string;
  totalSlots: number;
  registrations: number;
  status: "Active" | "Almost Full" | "Open" | "Closed";
  participants: Participant[];
};
