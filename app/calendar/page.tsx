"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { CalendarIcon, Code, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CalendarPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Mock data for demonstration
  const events = [
    {
      id: 1,
      title: "Technical Interview with Tech Innovations Inc.",
      date: new Date(2025, 4, 20), // May 20, 2025
      time: "10:00 AM - 11:30 AM",
      type: "Interview",
      with: "David Kim, Lead Developer",
      description:
        "Technical interview for the Senior React Developer position. Be prepared to discuss your experience with React, TypeScript, and Node.js.",
    },
    {
      id: 2,
      title: "Initial Screening with DataFlow Systems",
      date: new Date(2025, 4, 25), // May 25, 2025
      time: "2:00 PM - 3:00 PM",
      type: "Screening",
      with: "HR Team",
      description:
        "Initial screening call for the Backend Node.js Engineer position. Will discuss your experience, availability, and salary expectations.",
    },
    {
      id: 3,
      title: "Follow-up Interview with StartupXYZ",
      date: new Date(2025, 4, 28), // May 28, 2025
      time: "11:00 AM - 12:00 PM",
      type: "Interview",
      with: "Emily Rodriguez, CTO",
      description:
        "Follow-up interview to discuss the technical test you completed for the Full Stack Developer position.",
    },
  ]

  // Get events for the selected date
  const selectedDateEvents = events.filter(
    (event) => selectedDate && event.date.toDateString() === selectedDate.toDateString(),
  )

  // Get all dates with events
  const eventDates = events.map((event) => event.date.toDateString())

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-background">
        <Link className="flex items-center justify-center" href="/">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold">DevConnect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard/developer">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/profile/developer">
            Profile
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="/calendar">
            Calendar
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Calendar</h1>
              <p className="text-muted-foreground">Manage your interviews and events</p>
            </div>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{format(date, "MMMM yyyy")}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                    <DialogDescription>Create a new event or interview in your calendar</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-title">Event Title</Label>
                      <Input id="event-title" placeholder="e.g., Interview with Company X" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="event-date">Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="event-type">Event Type</Label>
                        <Select>
                          <SelectTrigger id="event-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="interview">Interview</SelectItem>
                            <SelectItem value="screening">Screening</SelectItem>
                            <SelectItem value="technical-test">Technical Test</SelectItem>
                            <SelectItem value="meeting">Meeting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-time">Start Time</Label>
                        <Select>
                          <SelectTrigger id="start-time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, hour) => (
                              <SelectItem key={hour} value={`${hour}:00`}>
                                {hour === 0
                                  ? "12:00 AM"
                                  : hour < 12
                                    ? `${hour}:00 AM`
                                    : hour === 12
                                      ? "12:00 PM"
                                      : `${hour - 12}:00 PM`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end-time">End Time</Label>
                        <Select>
                          <SelectTrigger id="end-time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, hour) => (
                              <SelectItem key={hour} value={`${hour}:00`}>
                                {hour === 0
                                  ? "12:00 AM"
                                  : hour < 12
                                    ? `${hour}:00 AM`
                                    : hour === 12
                                      ? "12:00 PM"
                                      : `${hour - 12}:00 PM`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-description">Description</Label>
                      <Textarea id="event-description" placeholder="Add details about the event..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Event</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Select a date to view events</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvent: (date) => eventDates.includes(date.toDateString()),
                  }}
                  modifiersStyles={{
                    hasEvent: { backgroundColor: "hsl(var(--primary) / 0.1)" },
                  }}
                />
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-primary/10"></div>
                  <span>Dates with events</span>
                </div>
              </CardFooter>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "No date selected"}</CardTitle>
                <CardDescription>
                  {selectedDateEvents.length === 0
                    ? "No events scheduled for this day"
                    : `${selectedDateEvents.length} event${selectedDateEvents.length === 1 ? "" : "s"} scheduled`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Events</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      There are no events scheduled for this day. Click the "Add Event" button to create a new event.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <Card key={event.id}>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle>{event.title}</CardTitle>
                              <CardDescription>{event.time}</CardDescription>
                            </div>
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {event.type}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="text-sm">
                              <span className="font-medium">With:</span> {event.with}
                            </div>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your scheduled interviews and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .map((event) => (
                    <div key={event.id} className="flex items-start gap-4">
                      <div className="min-w-24 text-center">
                        <div className="font-medium">{format(event.date, "MMM d")}</div>
                        <div className="text-sm text-muted-foreground">{format(event.date, "EEEE")}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.time}</div>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {event.type}
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4 px-4 md:px-6">
        <div className="container flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2025 DevConnect. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
              Privacy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

