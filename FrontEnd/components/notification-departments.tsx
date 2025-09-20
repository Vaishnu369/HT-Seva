"use client"

import { useState } from "react"
import { Users, Calendar, CreditCard, AlertTriangle, MessageSquare, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  priority: "high" | "medium" | "low"
  read: boolean
  type: string
}

interface Department {
  id: string
  name: string
  icon: any
  color: string
  bgColor: string
  count: number
  notifications: Notification[]
}

const departments: Department[] = [
  {
    id: "registrations",
    name: "Event Registrations",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    count: 12,
    notifications: [
      {
        id: "1",
        title: "New Registration",
        message: "Sarah Johnson registered for Mindfulness Retreat",
        time: "2 minutes ago",
        priority: "medium",
        read: false,
        type: "new_registration",
      },
      {
        id: "2",
        title: "Capacity Alert",
        message: "Digital Detox Workshop is 90% full (27/30 spots)",
        time: "15 minutes ago",
        priority: "high",
        read: false,
        type: "capacity_alert",
      },
      {
        id: "3",
        title: "Age Group Balance",
        message: "Beach Healing Retreat needs more participants aged 30-40",
        time: "1 hour ago",
        priority: "low",
        read: true,
        type: "demographics",
      },
    ],
  },
  {
    id: "events",
    name: "Event Management",
    icon: Calendar,
    color: "text-green-600",
    bgColor: "bg-green-50",
    count: 8,
    notifications: [
      {
        id: "4",
        title: "Event Starting Soon",
        message: "Mindfulness Retreat starts in 2 days - 25 participants confirmed",
        time: "30 minutes ago",
        priority: "high",
        read: false,
        type: "event_reminder",
      },
      {
        id: "5",
        title: "Registration Deadline",
        message: "Digital Detox Workshop registration closes tomorrow",
        time: "2 hours ago",
        priority: "medium",
        read: false,
        type: "deadline",
      },
      {
        id: "6",
        title: "Venue Confirmation",
        message: "Mountain Retreat Center confirmed for next month",
        time: "4 hours ago",
        priority: "low",
        read: true,
        type: "venue",
      },
    ],
  },
  {
    id: "payments",
    name: "Financial Operations",
    icon: CreditCard,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    count: 5,
    notifications: [
      {
        id: "7",
        title: "Payment Received",
        message: "$299 payment confirmed for Michael Chen - Beach Retreat",
        time: "45 minutes ago",
        priority: "medium",
        read: false,
        type: "payment_success",
      },
      {
        id: "8",
        title: "Refund Processed",
        message: "Refund of $199 processed for Emma Wilson",
        time: "3 hours ago",
        priority: "low",
        read: true,
        type: "refund",
      },
    ],
  },
  {
    id: "system",
    name: "System Alerts",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    count: 3,
    notifications: [
      {
        id: "9",
        title: "Server Maintenance",
        message: "Scheduled maintenance tonight 2:00 AM - 4:00 AM EST",
        time: "1 hour ago",
        priority: "high",
        read: false,
        type: "maintenance",
      },
      {
        id: "10",
        title: "Backup Complete",
        message: "Daily database backup completed successfully",
        time: "6 hours ago",
        priority: "low",
        read: true,
        type: "backup",
      },
    ],
  },
  {
    id: "feedback",
    name: "User Feedback",
    icon: MessageSquare,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    count: 7,
    notifications: [
      {
        id: "11",
        title: "New Review",
        message: "5-star review for Mindfulness Retreat by Lisa Park",
        time: "20 minutes ago",
        priority: "medium",
        read: false,
        type: "review",
      },
      {
        id: "12",
        title: "Support Request",
        message: "Help request about dietary restrictions from John Doe",
        time: "1 hour ago",
        priority: "medium",
        read: false,
        type: "support",
      },
    ],
  },
  {
    id: "analytics",
    name: "Performance Analytics",
    icon: TrendingUp,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    count: 4,
    notifications: [
      {
        id: "13",
        title: "Weekly Report",
        message: "Registration increased by 23% this week",
        time: "2 hours ago",
        priority: "low",
        read: false,
        type: "analytics",
      },
      {
        id: "14",
        title: "Popular Event",
        message: "Digital Detox Workshop trending - 85% capacity in 2 days",
        time: "5 hours ago",
        priority: "medium",
        read: true,
        type: "trending",
      },
    ],
  },
]

export function NotificationDepartments() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [notifications, setNotifications] = useState(departments)

  const markAsRead = (deptId: string, notificationId: string) => {
    setNotifications((prev) =>
      prev.map((dept) =>
        dept.id === deptId
          ? {
              ...dept,
              notifications: dept.notifications.map((notif) =>
                notif.id === notificationId ? { ...notif, read: true } : notif,
              ),
            }
          : dept,
      ),
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (selectedDepartment) {
    const dept = notifications.find((d) => d.id === selectedDepartment)
    if (!dept) return null

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => setSelectedDepartment(null)} className="text-sm">
              ← Back to Departments
            </Button>
            <div className={`p-2 rounded-lg ${dept.bgColor}`}>
              <dept.icon className={`h-6 w-6 ${dept.color}`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
              <p className="text-gray-600">{dept.notifications.length} notifications</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {dept.notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-all hover:shadow-md cursor-pointer ${
                !notification.read ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""
              }`}
              onClick={() => markAsRead(dept.id, notification.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-700"}`}>
                        {notification.title}
                      </h3>
                      <Badge className={getPriorityColor(notification.priority)}>{notification.priority}</Badge>
                      {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                    </div>
                    <p className="text-gray-600 mb-3">{notification.message}</p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Department Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notifications.map((department) => (
          <Card
            key={department.id}
            className="hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
            onClick={() => setSelectedDepartment(department.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${department.bgColor}`}>
                  <department.icon className={`h-8 w-8 ${department.color}`} />
                </div>
                <Badge variant="secondary" className="text-lg font-bold">
                  {department.count}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">{department.name}</CardTitle>
              <div className="space-y-2">
                {department.notifications.slice(0, 2).map((notification) => (
                  <div key={notification.id} className="flex items-center space-x-2">
                    {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>}
                    <p className="text-sm text-gray-600 truncate">{notification.title}</p>
                  </div>
                ))}
                {department.notifications.length > 2 && (
                  <p className="text-xs text-gray-500">+{department.notifications.length - 2} more notifications</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">
            {notifications.reduce((acc, dept) => acc + dept.notifications.filter((n) => !n.read).length, 0)}
          </div>
          <div className="text-sm text-gray-600">Unread</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-red-600">
            {notifications.reduce(
              (acc, dept) => acc + dept.notifications.filter((n) => n.priority === "high").length,
              0,
            )}
          </div>
          <div className="text-sm text-gray-600">High Priority</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">
            {notifications.reduce((acc, dept) => acc + dept.count, 0)}
          </div>
          <div className="text-sm text-gray-600">Total Today</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">6</div>
          <div className="text-sm text-gray-600">Departments</div>
        </Card>
      </div>
    </div>
  )
}
