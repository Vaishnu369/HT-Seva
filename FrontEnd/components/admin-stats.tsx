"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, UserCheck, MapPin } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      title: "Total Participants",
      value: "0",
      change: "+0%",
      changeType: "positive" as const,
      icon: <Users className="w-5 h-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Events",
      value: "0",
      change: "+0%",
      changeType: "positive" as const,
      icon: <Calendar className="w-5 h-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Repeat Participants",
      value: "0",
      change: "+0%",
      changeType: "positive" as const,
      icon: <UserCheck className="w-5 h-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Available Slots",
      value: "0",
      change: "0",
      changeType: "negative" as const,
      icon: <MapPin className="w-5 h-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`${stat.bgColor} ${stat.color} p-2 rounded-lg`}>{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
