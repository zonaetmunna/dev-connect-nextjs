"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Briefcase,
  Calendar,
  Code,
  Filter,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DeveloperDashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mock data for demonstration
  const jobListings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Innovations Inc.",
      type: "Full-time",
      location: "Remote",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      skills: ["React", "TypeScript", "Node.js"],
      description:
        "We're looking for an experienced React developer to join our team and help build innovative web applications...",
    },
    {
      id: 2,
      title: "Backend Node.js Engineer",
      company: "DataFlow Systems",
      type: "Contract",
      location: "New York, NY",
      salary: "$80/hour",
      posted: "1 week ago",
      skills: ["Node.js", "Express", "MongoDB"],
      description: "Join our backend team to develop scalable APIs and microservices for our growing platform...",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      type: "Part-time",
      location: "Remote",
      salary: "$60,000 - $80,000",
      posted: "3 days ago",
      skills: ["React", "Node.js", "PostgreSQL"],
      description:
        "Looking for a part-time developer to help with our growing product. Flexible hours and great team...",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "AppWorks",
      type: "Project-based",
      location: "Remote",
      salary: "$15,000 per project",
      posted: "5 days ago",
      skills: ["React Native", "iOS", "Android"],
      description: "We need an experienced mobile developer to build a cross-platform app for our clients...",
    },
  ]

  const applications = [
    {
      id: 1,
      position: "Senior React Developer",
      company: "Tech Innovations Inc.",
      status: "Interview Scheduled",
      date: "May 15, 2025",
      nextStep: "Technical Interview on May 20, 2025",
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "StartupXYZ",
      status: "Application Submitted",
      date: "May 10, 2025",
      nextStep: "Waiting for review",
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "WebSolutions",
      status: "Rejected",
      date: "April 28, 2025",
      nextStep: "Application closed",
    },
  ]

  const messages = [
    {
      id: 1,
      from: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      preview: "Thanks for your application. We'd like to schedule an interview...",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      from: "Michael Chen",
      company: "DataFlow Systems",
      preview: "Do you have experience with GraphQL? We're looking for...",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      from: "Emily Rodriguez",
      company: "StartupXYZ",
      preview: "We've reviewed your application and would like to move forward...",
      time: "3 days ago",
      unread: false,
    },
  ]

  const upcomingInterviews = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior React Developer",
      date: "May 20, 2025",
      time: "10:00 AM - 11:30 AM",
      type: "Technical Interview",
      with: "David Kim, Lead Developer",
    },
    {
      id: 2,
      company: "DataFlow Systems",
      position: "Backend Node.js Engineer",
      date: "May 25, 2025",
      time: "2:00 PM - 3:00 PM",
      type: "Initial Screening",
      with: "HR Team",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Code className="h-6 w-6" />
                <span>DevConnect</span>
              </Link>
              <Link
                href="/dashboard/developer"
                className="flex items-center gap-2 text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Briefcase className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/profile/developer"
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link href="/messages" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
              </Link>
              <Link href="/calendar" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </Link>
              <Link href="/settings" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
              <Link href="/signin" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Code className="h-6 w-6" />
          <span>DevConnect</span>
        </Link>
        <div className="relative ml-auto flex-1 md:grow-0 md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search jobs, companies..."
            className="w-full rounded-lg bg-background pl-8 md:w-80"
          />
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="/dashboard/developer" className="flex items-center gap-2 text-lg font-medium text-primary">
            <Briefcase className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/profile/developer" className="flex items-center gap-2 text-lg font-medium">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link href="/messages" className="flex items-center gap-2 text-lg font-medium">
            <MessageSquare className="h-5 w-5" />
            <span>Messages</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  3
                </span>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-96 overflow-auto">
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium">New message from Tech Innovations Inc.</div>
                  <div className="text-sm text-muted-foreground">2 hours ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium">Your application was viewed by StartupXYZ</div>
                  <div className="text-sm text-muted-foreground">Yesterday</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium">Interview scheduled with DataFlow Systems</div>
                  <div className="text-sm text-muted-foreground">2 days ago</div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-center">
                <Button variant="ghost" className="w-full">
                  View All
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full border h-8 w-8 md:h-10 md:w-10">
              <img
                src="/placeholder.svg?height=40&width=40"
                width="40"
                height="40"
                className="rounded-full"
                alt="Avatar"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile/developer" className="flex w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings" className="flex w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/billing" className="flex w-full">
                Billing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/signin" className="flex w-full">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's what's happening with your job search.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Next: May 20, 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">2 new since yesterday</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="jobs">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="jobs">Job Listings</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="interviews">Upcoming Interviews</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs" className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                <h2 className="text-2xl font-bold">Recommended Jobs</h2>
                <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="project">Project-based</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>
                  <Button size="sm" className="w-full md:w-auto">
                    Save Search
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {jobListings.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Type:</span>
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Location:</span>
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Salary:</span>
                          <span className="text-sm">{job.salary}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Posted:</span>
                          <span className="text-sm">{job.posted}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-sm font-medium">Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {job.skills.map((skill, index) => (
                              <span key={index} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">{job.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button>Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More Jobs</Button>
              </div>
            </TabsContent>
            <TabsContent value="applications" className="space-y-4">
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-2xl font-bold">My Applications</h2>
                <Button size="sm">Track All</Button>
              </div>
              <div className="grid gap-4">
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader>
                      <CardTitle>{application.position}</CardTitle>
                      <CardDescription>{application.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Status:</span>
                          <span
                            className={`text-sm ${application.status === "Rejected" ? "text-destructive" : application.status === "Interview Scheduled" ? "text-green-500" : ""}`}
                          >
                            {application.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Date Applied:</span>
                          <span className="text-sm">{application.date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Next Step:</span>
                          <span className="text-sm">{application.nextStep}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button disabled={application.status === "Rejected"}>
                        {application.status === "Rejected" ? "Closed" : "Check Status"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="messages" className="space-y-4">
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-2xl font-bold">Messages</h2>
                <Button size="sm">Mark All Read</Button>
              </div>
              <div className="grid gap-4">
                {messages.map((message) => (
                  <Card key={message.id} className={message.unread ? "border-primary" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{message.from}</CardTitle>
                          <CardDescription>{message.company}</CardDescription>
                        </div>
                        {message.unread && (
                          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                            New
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{message.preview}</p>
                      <p className="text-xs text-muted-foreground mt-2">{message.time}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View</Button>
                      <Button>Reply</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="interviews" className="space-y-4">
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-2xl font-bold">Upcoming Interviews</h2>
                <Button size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
              {upcomingInterviews.length > 0 ? (
                <div className="grid gap-4">
                  {upcomingInterviews.map((interview) => (
                    <Card key={interview.id}>
                      <CardHeader>
                        <CardTitle>{interview.position}</CardTitle>
                        <CardDescription>{interview.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Date:</span>
                            <span className="text-sm">{interview.date}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Time:</span>
                            <span className="text-sm">{interview.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Type:</span>
                            <span className="text-sm">{interview.type}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">With:</span>
                            <span className="text-sm">{interview.with}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">View Details</Button>
                        <Button>Prepare</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-10">
                    <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Upcoming Interviews</h3>
                    <p className="text-sm text-muted-foreground text-center max-w-md">
                      You don't have any interviews scheduled at the moment. Keep applying to jobs and check back later.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
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

