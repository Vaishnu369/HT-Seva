"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, ChevronLeft, ChevronRight } from "lucide-react"

export function EventsSection() {
  const [activeTab, setActiveTab] = useState("enrolled-events")

  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="enrolled-events" className="text-sm">
              Enrolled Events
            </TabsTrigger>
            <TabsTrigger value="past-events" className="text-sm">
              Past Events
            </TabsTrigger>
            <TabsTrigger
              value="enrolled-for-others"
              className="text-sm bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Enrolled for Others
            </TabsTrigger>
          </TabsList>

          <TabsContent value="enrolled-events" className="space-y-4">
            <EventsTable />
          </TabsContent>

          <TabsContent value="past-events" className="space-y-4">
            <EventsTable />
          </TabsContent>

          <TabsContent value="enrolled-for-others" className="space-y-4">
            <EventsTable />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function EventsTable() {
  return (
    <div className="space-y-4">
      {/* Table Header */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="text-left font-medium text-muted-foreground">Members</TableHead>
              <TableHead className="text-left font-medium text-muted-foreground">Gender</TableHead>
              <TableHead className="text-left font-medium text-muted-foreground">Event Title</TableHead>
              <TableHead className="text-left font-medium text-muted-foreground">Mode</TableHead>
              <TableHead className="text-left font-medium text-muted-foreground">Event Date</TableHead>
              <TableHead className="text-left font-medium text-muted-foreground">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Empty state */}
            <TableRow>
              <TableCell colSpan={6} className="text-center py-12">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="bg-muted rounded-full p-4">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-sm">No data</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 pt-4">
        <Button variant="outline" size="sm" disabled>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
        </div>
        <Button variant="outline" size="sm" disabled>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
