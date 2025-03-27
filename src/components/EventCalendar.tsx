
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);

  // Function to check if a date has events
  const hasEvents = (date: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    
    if (date) {
      const eventsOnDate = getEventsForDate(date);
      setSelectedEvents(eventsOnDate);
    } else {
      setSelectedEvents([]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border"
          modifiersClassNames={{
            selected: "bg-primary text-primary-foreground",
          }}
          modifiers={{
            hasEvent: (date) => hasEvents(date),
          }}
          modifiersStyles={{
            hasEvent: {
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationColor: "hsl(var(--primary))",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            },
          }}
        />
      </div>
      <div>
        <div className="rounded-md border border-border p-4">
          <h3 className="font-medium text-lg mb-4">
            {selectedDate ? (
              <>Events for {selectedDate.toLocaleDateString()}</>
            ) : (
              <>Select a date</>
            )}
          </h3>
          
          {selectedEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-md border border-border p-3 transition-colors hover:bg-muted/50"
                >
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              {selectedDate
                ? "No events scheduled for this date."
                : "Please select a date to view events."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
