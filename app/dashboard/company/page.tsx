"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Briefcase,
  Building,
  Calendar,
  Code,
  FileText,
  Filter,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
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

export default function CompanyDashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mock data for demonstration
  const jobPostings = [
    {
      id: 1,
      title: "Senior React Developer",
      type: "Full-time",
      location: "Remote",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      applicants: 12,
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Node.js Engineer",
      type: "Contract",
      location: "New York, NY",
      salary: "$80/hour",
      posted: "1 week ago",
      applicants: 8,
      status: "Active",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
      applicants: 5,
      status: "Active",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Remote",
      salary: "$50/hour",
      posted: "2 weeks ago",
      applicants: 20,
      status: "Closed",
    },
  ]

  const applicants = [
    {
      id: 1,
      name: "John Doe",
      position: "Senior React Developer",
      appliedDate: "May 15, 2025",
      status: "Screening",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "8 years",
      matchScore: 92,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Senior React Developer",
      appliedDate: "May 14, 2025",
      status: "Interview Scheduled",
      skills: ["React", "JavaScript", "CSS"],
      experience: "6 years",
      matchScore: 85,
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Backend Node.js Engineer",
      appliedDate: "May 10, 2025",
      status: "New",
      skills: ["Node.js", "Express", "MongoDB"],
      experience: "5 years",
      matchScore: 78,
    },
    {
      id: 4,
      name: "Emily Williams",
      position: "DevOps Engineer",
      appliedDate: "May 12, 2025",
      status: "Technical Test",
      skills: ["Docker", "Kubernetes", "AWS"],
      experience: "4 years",
      matchScore: 88,
    },
  ]

  const interviews = [
    {
      id: 1,
      candidate: "Jane Smith",
      position: "Senior React Developer",
      date: "May 20, 2025",
      time: "10:00 AM - 11:30 AM",
      type: "Technical Interview",
      interviewers: ["David Kim", "Sarah Johnson"],
    },
    {
      id: 2,
      candidate: "Emily Williams",
      position: "DevOps Engineer",
      date: "May 22, 2025",
      time: "2:00 PM - 3:00 PM",
      type: "Final Interview",
      interviewers: ["Michael Chen", "Sarah Johnson"],
    },
  ]

  const analytics = {
    totalApplicants: 45,
    newApplicants: 12,
    interviewsScheduled: 5,
    averageTimeToHire: "18 days",
    topSources: [
      { name: "Direct", percentage: 45 },
      { name: "LinkedIn", percentage: 30 },
      { name: "Referrals", percentage: 15 },
      { name: "Other", percentage: 10 },
    ],
  }

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
                href="/dashboard/company"
                className="flex items-center gap-2 text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Briefcase className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/profile/company"
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Building className="h-5 w-5" />
                <span>Company Profile</span>
              </Link>
              <Link href="/jobs/post" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <FileText className="h-5 w-5" />
                <span>Post a Job</span>
              </Link>
              <Link href="/messages" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
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
            placeholder="Search applicants, jobs..."
            className="w-full rounded-lg bg-background pl-8 md:w-80"
          />
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="/dashboard/company" className="flex items-center gap-2 text-lg font-medium text-primary">
            <Briefcase className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/profile/company" className="flex items-center gap-2 text-lg font-medium">
            <Building className="h-5 w-5" />
            <span>Company</span>
          </Link>
          <Link href="/jobs/post" className="flex items-center gap-2 text-lg font-medium">
            <FileText className="h-5 w-5" />
            <span>Post Job</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  5
                </span>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-96 overflow-auto">
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium">New applicant: John Doe</div>
                  <div className="text-sm text-muted-foreground">Applied for Senior React Developer • 2 hours ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium">Interview reminder: Jane Smith</div>
                  <div className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium">Job posting expiring soon</div>
                  <div className="text-sm text-muted-foreground">Backend Node.js Engineer • 3 days left</div>
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
                alt="Company Logo"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>TechSolutions Inc.</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile/company" className="flex w-full">
                Company Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/team" className="flex w-full">
                Team Management
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
            <h1 className="text-3xl font-bold">Company Dashboard</h1>
            <p className="text-muted-foreground">Manage your job postings and applicants</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Job Postings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.totalApplicants}</div>
                <p className="text-xs text-muted-foreground">+{analytics.newApplicants} new this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.interviewsScheduled}</div>
                <p className="text-xs text-muted-foreground">Next: May 20, 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Time to Hire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.averageTimeToHire}</div>
                <p className="text-xs text-muted-foreground">-2 days from last quarter</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="jobs">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="jobs">Job Postings</TabsTrigger>
              <TabsTrigger value="applicants">Applicants</TabsTrigger>
              <TabsTrigger value="interviews">Interviews</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs" className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                <h2 className="text-2xl font-bold">Your Job Postings</h2>
                <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>
                  <Link href="/jobs/post">
                    <Button className="w-full md:w-auto">
                      <Plus className="mr-2 h-4 w-4" />
                      Post New Job
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                {jobPostings.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription>
                            {job.type} • {job.location} • {job.salary}
                          </CardDescription>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            job.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Posted:</span>
                          <span className="text-sm">{job.posted}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Applicants:</span>
                          <span className="text-sm">{job.applicants}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col md:flex-row gap-2">
                      <Button variant="outline" className="w-full md:w-auto">
                        View Applicants
                      </Button>
                      <Button variant="outline" className="w-full md:w-auto">
                        Edit
                      </Button>
                      <Button
                        variant={job.status === "Active" ? "destructive" : "default"}
                        className="w-full md:w-auto"
                      >
                        {job.status === "Active" ? "Close Job" : "Reopen Job"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="applicants" className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                <h2 className="text-2xl font-bold">Recent Applicants</h2>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Positions</SelectItem>
                      <SelectItem value="react">Senior React Developer</SelectItem>
                      <SelectItem value="node">Backend Node.js Engineer</SelectItem>
                      <SelectItem value="devops">DevOps Engineer</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="screening">Screening</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="test">Technical Test</SelectItem>
                      <SelectItem value="offer">Offer</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                {applicants.map((applicant) => (
                  <Card key={applicant.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <CardTitle>{applicant.name}</CardTitle>
                          <CardDescription>
                            {applicant.position} • Applied {applicant.appliedDate}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                            {applicant.matchScore}% Match
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              applicant.status === "New"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                                : applicant.status === "Interview Scheduled"
                                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                            }`}
                          >
                            {applicant.status}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Experience:</span>
                          <span className="text-sm">{applicant.experience}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {applicant.skills.map((skill, index) => (
                              <span key={index} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col md:flex-row gap-2">
                      <Button variant="outline" className="w-full md:w-auto">
                        View Profile
                      </Button>
                      <Button variant="outline" className="w-full md:w-auto">
                        Download Resume
                      </Button>
                      <Button className="w-full md:w-auto">
                        {applicant.status === "New"
                          ? "Start Screening"
                          : applicant.status === "Screening"
                            ? "Schedule Interview"
                            : applicant.status === "Interview Scheduled"
                              ? "Record Feedback"
                              : applicant.status === "Technical Test"
                                ? "Review Test"
                                : "Move to Next Stage"}
                      </Button>
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
              {interviews.length > 0 ? (
                <div className="grid gap-4">
                  {interviews.map((interview) => (
                    <Card key={interview.id}>
                      <CardHeader>
                        <CardTitle>{interview.candidate}</CardTitle>
                        <CardDescription>{interview.position}</CardDescription>
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
                            <span className="text-sm font-medium">Interviewers:</span>
                            <span className="text-sm">{interview.interviewers.join(", ")}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col md:flex-row gap-2">
                        <Button variant="outline" className="w-full md:w-auto">
                          View Details
                        </Button>
                        <Button variant="outline" className="w-full md:w-auto">
                          Reschedule
                        </Button>
                        <Button className="w-full md:w-auto">Prepare Questions</Button>
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
                      You don't have any interviews scheduled at the moment. Schedule interviews with your applicants to
                      see them here.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-2xl font-bold">Hiring Analytics</h2>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Applicant Sources</CardTitle>
                    <CardDescription>Where your applicants are coming from</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analytics.topSources.map((source, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{source.name}</span>
                            <span className="text-sm">{source.percentage}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-secondary">
                            <div className="h-2 rounded-full bg-primary" style={{ width: `${source.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Hiring Funnel</CardTitle>
                    <CardDescription>Applicant progression through stages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Applications</span>
                          <span className="text-sm">45</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "100%" }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Screening</span>
                          <span className="text-sm">28</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "62%" }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Interview</span>
                          <span className="text-sm">15</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "33%" }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Technical Test</span>
                          <span className="text-sm">8</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "18%" }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Offer</span>
                          <span className="text-sm">3</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "7%" }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Hired</span>
                          <span className="text-sm">2</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "4%" }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Hiring Efficiency</CardTitle>
                    <CardDescription>Key metrics for your hiring process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Time to Hire</h3>
                        <p className="text-2xl font-bold">{analytics.averageTimeToHire}</p>
                        <p className="text-xs text-muted-foreground">-2 days from last quarter</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Cost per Hire</h3>
                        <p className="text-2xl font-bold">$1,250</p>
                        <p className="text-xs text-muted-foreground">-$200 from last quarter</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Offer Acceptance Rate</h3>
                        <p className="text-2xl font-bold">85%</p>
                        <p className="text-xs text-muted-foreground">+5% from last quarter</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

