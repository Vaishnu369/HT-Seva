// "use client"

// import type React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import { Users, Calendar, Clock, UserPlus } from "lucide-react"

// interface StatCardProps {
//   title: string
//   value: string
//   subtitle: string
//   icon: React.ReactNode
//   bgColor: string
//   textColor: string
// }

// function StatCard({ title, value, subtitle, icon, bgColor, textColor }: StatCardProps) {
//   return (
//     <Card className={`${bgColor} border-0`}>
//       <CardContent className="p-6">
//         <div className="flex flex-col items-center text-center">
//           <div className={`${textColor} mb-3`}>{icon}</div>
//           <h3 className={`text-sm font-medium ${textColor} mb-2`}>{title}</h3>
//           <div className={`text-2xl font-bold ${textColor} mb-1`}>{value}</div>
//           <p className={`text-xs ${textColor}`}>{subtitle}</p>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export function DashboardStats() {
//   const stats = [
//     {
//       title: "Total Enrollment",
//       value: "0",
//       subtitle: "Events",
//       icon: <Users className="w-8 h-8" />,
//       bgColor: "bg-blue-100",
//       textColor: "text-blue-600",
//     },
//     {
//       title: "Enrolled Events",
//       value: "0",
//       subtitle: "Active",
//       icon: <Calendar className="w-8 h-8" />,
//       bgColor: "bg-green-100",
//       textColor: "text-green-600",
//     },
//     {
//       title: "Past Events",
//       value: "0",
//       subtitle: "Completed",
//       icon: <Clock className="w-8 h-8" />,
//       bgColor: "bg-orange-100",
//       textColor: "text-orange-600",
//     },
//     {
//       title: "Enrolled for Others",
//       value: "0",
//       subtitle: "Family",
//       icon: <UserPlus className="w-8 h-8" />,
//       bgColor: "bg-purple-100",
//       textColor: "text-purple-600",
//     },
//   ]

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       {stats.map((stat, index) => (
//         <StatCard key={index} {...stat} />
//       ))}
//     </div>
//   )
// }
