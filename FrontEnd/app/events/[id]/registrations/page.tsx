import { DashboardHeader } from "@/components/dashboard-header"
import { ParticipantsByAge } from "@/components/participants-by-age"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Filter } from "lucide-react"
import Link from "next/link"

// Mock data for the event
const eventData = {
  id: 1,
  title: "Mindful Mountain Retreat",
  date: "March 15-17, 2024",
  location: "Himachal Pradesh",
  totalSlots: 50,
  registrations: 42,
}

export default function EventRegistrations({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{eventData.title}</h1>
              <p className="text-muted-foreground">
                {eventData.date} • {eventData.location} • {eventData.registrations}/{eventData.totalSlots} participants
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Participant Grid */}
        <ParticipantsByAge eventId={params.id} />
      </div>
    </div>
  )
}
