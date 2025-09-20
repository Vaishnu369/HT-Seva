"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Calendar, User } from "lucide-react"
import { Participant } from "@/types/Participant"
import { useEffect, useState } from "react"

export function ParticipantGrid({ eventId }: { eventId: string }) {
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    // Fetch participants dynamically for a given event
    async function fetchParticipants() {
      try {
      // 👇 This is where you put your real backend API URL
      const res = await fetch(`http://localhost:5000/events/${eventId}/participants`)
      const data = await res.json()
      setParticipants(data)
    } catch (error) {
      console.error("Error fetching participants:", error)
    }
    }

    fetchParticipants()
  }, [eventId])

  const totalRegistered = participants.length
  const newParticipants = participants.filter((p) => p.type === "New").length
  const returningParticipants = participants.filter((p) => p.type === "Returning").length

  const slotsRemaining = 100 - totalRegistered // replace 100 with actual totalSlots

  return (
    <div className="space-y-4">
      {/* Stats Summary (you can also compute these dynamically later) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {participants.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Registered</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {participants.filter((p) => p.type === "New").length}
            </div>
            <div className="text-sm text-muted-foreground">New Participants</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {participants.filter((p) => p.type === "Returning").length}
            </div>
            <div className="text-sm text-muted-foreground">Returning</div>
          </CardContent>
        </Card>
        {/* Example: slots remaining (you can calculate this from backend event.totalSlots - registrations) */}
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-sm text-muted-foreground">Slots Remaining</div>
          </CardContent>
        </Card>
      </div>

      {/* Participant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {participants.map((participant) => (
          <Card key={participant.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {participant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{participant.name}</h3>
                    <Badge
                      variant={participant.type === "New" ? "default" : "secondary"}
                      className={
                        participant.type === "New"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {participant.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>
                      {participant.age} years • {participant.gender}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate">{participant.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{participant.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate">{participant.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Registered: {participant.registrationDate}</span>
                </div>
              </div>

              {/* Preferences */}
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">Preferences:</div>
                <div className="flex flex-wrap gap-1">
                  {participant.preferences.map((pref, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {pref}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="pt-3 border-t">
                <div className="text-xs text-muted-foreground">
                  <strong>Emergency:</strong> {participant.emergencyContact}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
