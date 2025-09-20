"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Users, Clock } from "lucide-react"

export function ProgramFinderContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [retreatType, setRetreatType] = useState("all-types")
  const [dateRange, setDateRange] = useState("all-dates")

  // Sample event data
  const events = [
    {
      id: 1,
      title: "Mindfulness Retreat",
      location: "Rishikesh, India",
      type: "In-Person",
      date: "March 15-20, 2024",
      duration: "5 days",
      participants: 25,
      maxParticipants: 30,
      price: "$299",
      image: "/peaceful-mountain-retreat.png",
      description: "A transformative 5-day mindfulness retreat in the spiritual heart of India.",
    },
    {
      id: 2,
      title: "Digital Detox Workshop",
      location: "Online",
      type: "Online",
      date: "March 22, 2024",
      duration: "3 hours",
      participants: 45,
      maxParticipants: 50,
      price: "$49",
      image: "/digital-detox-meditation.jpg",
      description: "Learn to disconnect from technology and reconnect with yourself.",
    },
    {
      id: 3,
      title: "Nature Healing Retreat",
      location: "Goa, India",
      type: "In-Person",
      date: "April 5-10, 2024",
      duration: "6 days",
      participants: 18,
      maxParticipants: 20,
      price: "$399",
      image: "/beach-nature-healing-retreat.jpg",
      description: "Reconnect with nature through healing practices by the ocean.",
    },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = !location || event.location.toLowerCase().includes(location.toLowerCase())
    const matchesType = retreatType === "all-types" || event.type === retreatType
    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Program Finder</h1>
        <p className="text-muted-foreground">Discover retreats and workshops that align with your journey</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search & Filter Programs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Search Programs</label>
              <Input
                placeholder="Search by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Location</label>
              <Input
                placeholder="Enter location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Retreat Type</label>
              <Select value={retreatType} onValueChange={setRetreatType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="in-person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Date Range</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-dates">All Dates</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                  <SelectItem value="next-3-months">Next 3 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Available Programs ({filteredEvents.length})</h2>
          <Button variant="outline" size="sm">
            Sort by Date
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <Badge
                  className={`absolute top-3 right-3 ${
                    event.type === "Online" ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {event.type}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      {event.participants}/{event.maxParticipants} participants
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{event.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="space-y-4">
                <div className="bg-muted rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground">No programs found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria to find more programs.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
