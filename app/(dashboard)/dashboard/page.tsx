"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    },
    {
      id: 2,
      title: "Backend Node.js Engineer",
      company: "DataFlow Systems",
      type: "Contract",
      location: "New York, NY",
      salary: "$80/hour",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      type: "Part-time",
      location: "Remote",
      salary: "$60,000 - $80,000",
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "AppWorks",
      type: "Project-based",
      location: "Remote",
      salary: "$15,000 per project",
      posted: "5 days ago",
    },
  ];

  const applications = [
    {
      id: 1,
      position: "Senior React Developer",
      company: "Tech Innovations Inc.",
      status: "Interview Scheduled",
      date: "May 15, 2025",
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "StartupXYZ",
      status: "Application Submitted",
      date: "May 10, 2025",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      preview:
        "Thanks for your application. We'd like to schedule an interview...",
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
  ];

  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1  p-4 md:p-6">
        <div className="grid gap-6 mx-auto max-w-7xl  ">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your job search.
            </p>
          </div>
          <Tabs defaultValue="jobs">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="jobs">Job Listings</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Job Listings</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Filter
                  </Button>
                  <Button size="sm">Save Search</Button>
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
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button>Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="applications" className="space-y-4">
              <div className="flex items-center justify-between">
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
                          <span className="text-sm">{application.status}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Date Applied:
                          </span>
                          <span className="text-sm">{application.date}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button>Check Status</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="messages" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Messages</h2>
                <Button size="sm">Mark All Read</Button>
              </div>
              <div className="grid gap-4">
                {messages.map((message) => (
                  <Card
                    key={message.id}
                    className={message.unread ? "border-primary" : ""}
                  >
                    <CardHeader>
                      <CardTitle>{message.from}</CardTitle>
                      <CardDescription>{message.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{message.preview}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {message.time}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View</Button>
                      <Button>Reply</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
    </div>
  );
}
