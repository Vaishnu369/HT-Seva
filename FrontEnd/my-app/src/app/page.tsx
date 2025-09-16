import Card from "./components/Card";
import EventCard from "./components/EventCard";
import ChartPlaceholder from "./components/ChartPlaceholder";
import { Calendar, Users, Repeat, MapPin } from "lucide-react"; // icons

// Dummy events array (can be replaced with API data later)
const events = [
  {
    id: "1",
    title: "Mindful Mountain Retreat",
    date: "March 15-17, 2024",
    location: "Himachal Pradesh",
    registered: 0,
    capacity: 50,
    status: "Active" as "Active" | "Closed" | "Open",
    image: "/events/peaceful-mountain-retreat.png",
  },
  {
    id: "2",
    title: "Digital Detox Meditation",
    date: "March 22-24, 2024",
    location: "Goa",
    registered: 0,
    capacity: 30,
    status: "Closed" as "Active" | "Closed" | "Open",
    image: "/events/digital-detox-meditation.jpg",
  },
  {
    id: "3",
    title: "Beach Healing Workshop",
    date: "April 5-7, 2024",
    location: "Kerala",
    registered: 0,
    capacity: 40,
    status: "Open" as "Active" | "Closed" | "Open",
    image: "/events/beach-nature-healing-retreat.jpg",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 ">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Total Participants"
          value={0}
          subtitle="+0% from last month"
          subtitleColor="green"
          icon={<Users size={20} />}
        />
        <Card
          title="Active Events"
          value={0}
          subtitle="+0 from last month"
          subtitleColor="green"
          icon={<Calendar size={20} />}
        />
        <Card
          title="Repeat Participants"
          value={0}
          subtitle="+0% from last month"
          subtitleColor="green"
          icon={<Repeat size={20} />}
        />
        <Card
          title="Available Slots"
          value={0}
          subtitle="-0 from last month"
          subtitleColor="red"
          icon={<MapPin size={20} />}
        />
      </div>

      {/* Participant Distribution + Active Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="bg-gray-50 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Participant Distribution</h2>
          <ChartPlaceholder />
          <div className="flex justify-between mt-4 text-sm">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              New Participants: 0
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
              Returning Participants: 0
            </p>
          </div>
        </div>

        {/* Active Events */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">Active Events</h2>
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
