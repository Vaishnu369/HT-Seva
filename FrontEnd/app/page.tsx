import { DashboardHeader } from "@/components/dashboard-header"
import { AdminStats } from "@/components/admin-stats"
import { ParticipantChart } from "@/components/participant-chart"
import { EventCards } from "@/components/event-cards"
import { Event } from "@/types/Event";

 const events: Event[] = [
    {
      id: 1,
      title: "Mindful Mountain Retreat",
      image: "/peaceful-mountain-retreat.png",
      date: "March 15-17, 2024",
      location: "Himachal Pradesh",
      totalSlots: 100,
      registrations: 17,
      status: "Active",
      participants: [
        {id: 1,name: "Priya Sharma",email: "priya.sharma@email.com",phone: "+91 98765 43210",age: 28,gender: "Female",location: "Mumbai, Maharashtra",registrationDate: "2024-02-15",type: "New",
           avatar: "/diverse-woman-smiling.png",
           preferences: ["Vegetarian", "Morning Sessions"],
           emergencyContact: "Raj Sharma - +91 98765 43211"}
      ],
    },
  ];

  

export default async function AdminDashboard() {

  // put your backend url here


  // const res = await fetch("http://localhost:5000/api/events", {
  //   cache: "no-store", // ensures fresh data on each request
  // });

         // Parse JSON into your Event type
  // const events: Event[] = await res.json();

  // Flatten all participants from all events
  const allParticipants = events.flatMap(event => event.participants)

  // Compute counts dynamically
  const newCount = allParticipants.filter(p => p.type === "New").length
  const returningCount = allParticipants.filter(p => p.type === "Returning").length

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="p-6 space-y-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h2>
          <p className="text-muted-foreground">
            Manage events, track registrations, and monitor participant engagement
          </p>
        </div>

        {/* Admin Stats */}
        <AdminStats />

        {/* Participant Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
             <ParticipantChart newCount={newCount} returningCount={returningCount} />
          </div>
          <div className="lg:col-span-2">
            <EventCards events={events} />
          </div>
        </div>
      </div>
    </div>
  )
}
