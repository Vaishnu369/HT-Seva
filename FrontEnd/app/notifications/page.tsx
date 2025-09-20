import { DashboardHeader } from "@/components/dashboard-header"
import { NotificationDepartments } from "@/components/notification-departments"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notification Center</h1>
          <p className="text-gray-600">Stay updated with all your event management activities</p>
        </div>
        <NotificationDepartments />
      </main>
    </div>
  )
}
