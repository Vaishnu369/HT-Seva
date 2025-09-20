

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@/types/Event";

type EventCardsProps = {
  events: Event[];
};

export function EventCards({ events }: EventCardsProps) {
  if (events.length === 0) {
    return <p className="text-gray-500">No events available.</p>;
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Active Events</h3>
        <Button variant="outline" size="sm">
          View All Events
        </Button>
      </div>

      <div className="grid gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex">
              {/* Event Image */}
              <div className="w-48 h-32 relative flex-shrink-0">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      event.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : event.status === "Almost Full"
                        ? "bg-yellow-100 text-yellow-800"
                        : event.status === "Active"
                        ? "bg-blue-100 text-blue-800"
                        : event.status === "Closed"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }
                  >
                    {event.status}
                  </Badge>
                </div>

                {/* Registration Stats */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="font-semibold">
                        {event.registrations}
                      </span>
                      <span className="text-muted-foreground">
                        /{event.totalSlots} registered
                      </span>
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.totalSlots - event.registrations} slots remaining
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        event.totalSlots > 0
                          ? Math.min(
                              (Number(event.registrations) /
                                Number(event.totalSlots)) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>

                {/* Action Button */}
                <Link href={`/events/${event.id}/registrations`}>
                  <Button size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View Registrations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
