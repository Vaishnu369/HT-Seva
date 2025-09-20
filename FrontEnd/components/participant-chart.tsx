"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"


interface ParticipantChartProps {
  newCount: number
  returningCount: number
}


// const COLORS = ["#06b6d4", "#8b5cf6"]

export function ParticipantChart({ newCount, returningCount }: ParticipantChartProps) {
  const data = [
    { name: "New Participants", value: newCount, color: "#06b6d4" },
    { name: "Returning Participants", value: returningCount, color: "#8b5cf6" },
  ]

  const COLORS = ["#06b6d4", "#8b5cf6"]
  const total = newCount + returningCount
  // const total = data.reduce((sum, entry) => sum + entry.value, 0)

  
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Participant Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend with Counts */}
        <div className="space-y-3 mt-4">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-sm font-medium">{entry.name}</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">{entry.value}</div>
                <div className="text-xs text-muted-foreground">{((entry.value / total) * 100).toFixed(1)}%</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
