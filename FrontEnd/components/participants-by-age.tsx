"use client"

import { useEffect, useState } from "react"
import { Participant } from "@/types/Participant"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, User, ChevronLeft, ChevronRight } from "lucide-react"

// Helper: categorize age groups
const getAgeGroup = (age: number) => {
  if (age <= 30) return "Young Adults (18-30)"
  if (age <= 40) return "Adults (31-40)"
  if (age <= 50) return "Middle Age (41-50)"
  return "Seniors (50+)"
}

const ITEMS_PER_PAGE = 4

export function ParticipantsByAge({ eventId }: { eventId: string }) {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({})

  // 🔹 Fetch data dynamically
  useEffect(() => {
    async function fetchParticipants() {
      try {
        // put your backend url here
        const res = await fetch(`http://localhost:5000/events/${eventId}/participants`)
        const data: Participant[] = await res.json()
        setParticipants(data)
      } catch (error) {
        console.error("Error fetching participants:", error)
      }
    }

    fetchParticipants()
  }, [eventId])

  // 🔹 Group participants by age and gender
  const groupParticipants = () => {
    const groups: Record<string, { male: Participant[]; female: Participant[] }> = {}
    participants.forEach((p) => {
      const ageGroup = getAgeGroup(p.age)
      if (!groups[ageGroup]) groups[ageGroup] = { male: [], female: [] }
      if (p.gender.toLowerCase() === "male") groups[ageGroup].male.push(p)
      else groups[ageGroup].female.push(p)
    })
    return groups
  }

  const groupedParticipants = groupParticipants()

  // 🔹 Pagination logic
  const getPageData = (participants: Participant[], ageGroup: string) => {
    const currentPage = currentPages[ageGroup] || 0
    const startIndex = currentPage * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return {
      items: participants.slice(startIndex, endIndex),
      totalPages: Math.ceil(participants.length / ITEMS_PER_PAGE),
      currentPage,
    }
  }

  const changePage = (ageGroup: string, direction: "prev" | "next") => {
    setCurrentPages((prev) => {
      const current = prev[ageGroup] || 0
      const totalParticipants = [
        ...groupedParticipants[ageGroup].male,
        ...groupedParticipants[ageGroup].female,
      ]
      const totalPages = Math.ceil(totalParticipants.length / ITEMS_PER_PAGE)
      if (direction === "prev" && current > 0) return { ...prev, [ageGroup]: current - 1 }
      if (direction === "next" && current < totalPages - 1) return { ...prev, [ageGroup]: current + 1 }
      return prev
    })
  }

  // 🔹 Render (same as before, but now uses `participants` state)
  return (
    <div className="space-y-8">
      {/* Overall Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{participants.length}</div>
            <div className="text-sm text-muted-foreground">Total Registered</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-pink-600">
              {participants.filter((p) => p.gender === "Female").length}
            </div>
            <div className="text-sm text-muted-foreground">Female</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {participants.filter((p) => p.gender === "Male").length}
            </div>
            <div className="text-sm text-muted-foreground">Male</div>
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
      </div>

      {/* Age Groups */}
      {Object.entries(groupedParticipants).map(([ageGroup, genderGroups]) => {
        const allParticipants = [...genderGroups.male, ...genderGroups.female]
        const pageData = getPageData(allParticipants, ageGroup)

        return (
          <Card key={ageGroup}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{ageGroup}</CardTitle>
                {/* Pagination buttons same as before */}
              </div>
            </CardHeader>
            <CardContent>
              {/* Tabs for All, Female, Male */}
              {/* Render ParticipantCard here (same as your original code) */}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
