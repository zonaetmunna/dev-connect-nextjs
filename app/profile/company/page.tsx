"use client"

import { Code, Globe, Mail, MapPin, Plus, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanyProfilePage() {
  // Mock data for demonstration
  const companyData = {
    name: "TechSolutions Inc.",
    tagline: "Building the future of technology",
    logo: "/placeholder.svg?height=96&width=96",
    location: "San Francisco, CA",
    website: "https://techsolutions.example.com",
    email: "contact@techsolutions.example.com",
    founded: "2015",
    size: "51-200 employees",
    industry: "Software Development",
    about:
      "TechSolutions is a leading software development company specializing in creating innovative solutions for businesses of all sizes. Our team of experts is dedicated to delivering high-quality products that meet our clients' needs and exceed their expectations.",
    openPositions: [
      {
        id: 1,
        title: "Senior React Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$120,000 - $150,000",
        posted: "2 days ago",
        applicants: 12,
      },
      {
        id: 2,
        title: "Backend Node.js Engineer",
        type: "Contract",
        location: "San Francisco, CA",
        salary: "$80/hour",
        posted: "1 week ago",
        applicants: 8,
      },
      {
        id: 3,
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Remote",
        salary: "$110,000 - $140,000",
        posted: "3 days ago",
        applicants: 5,
      },
    ],
    team: [
      {
        name: "Sarah Johnson",
        title: "CEO & Founder",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        name: "Michael Chen",
        title: "CTO",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        name: "Emily Rodriguez",
        title: "HR Director",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        name: "David Kim",
        title: "Lead Developer",
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
    reviews: [
      {
        author: "John Smith",
        role: "Full Stack Developer",
        rating: 4.5,
        text: "Great company to work with! They have a fantastic team and a positive work environment.",
        date: "March 15, 2025",
      },
      {
        author: "Lisa Wong",
        role: "UI/UX Designer",
        rating: 5,
        text: "TechSolutions is an amazing place to grow your career. The projects are challenging and the team is supportive.",
        date: "February 28, 2025",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
          <Code className="h-6 w-6" />
          <span>DevConnect</span>
        </Link>
        <nav className="ml-auto flex gap-4 md:gap-6">
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/profile/company" className="text-sm font-medium text-primary">
            Profile
          </Link>
          <Link href="/messages" className="text-sm font-medium">
            Messages
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                    <img
                      alt={companyData.name}
                      className="h-full w-full object-cover"
                      src={companyData.logo || "/placeholder.svg"}
                    />
                  </div>
                  <CardTitle>{companyData.name}</CardTitle>
                  <CardDescription>{companyData.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{companyData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{companyData.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{companyData.email}</span>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium">Founded</h3>
                    <p className="text-sm">{companyData.founded}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Company Size</h3>
                    <p className="text-sm">{companyData.size}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Industry</h3>
                    <p className="text-sm">{companyData.industry}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Company</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="md:w-2/3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {companyData.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{companyData.about}</p>
                </CardContent>
              </Card>
              <Tabs defaultValue="positions">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="positions">Open Positions</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="positions" className="space-y-4 mt-4">
                  {companyData.openPositions.map((position) => (
                    <Card key={position.id}>
                      <CardHeader>
                        <CardTitle>{position.title}</CardTitle>
                        <CardDescription>
                          {position.type} • {position.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Salary:</span>
                          <span className="text-sm">{position.salary}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Posted:</span>
                          <span className="text-sm">{position.posted}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Applicants:</span>
                          <span className="text-sm">{position.applicants}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">View Details</Button>
                        <Button>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                  <div className="flex justify-center">
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Post New Position
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="team" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meet Our Team</CardTitle>
                      <CardDescription>The people behind {companyData.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {companyData.team.map((member, index) => (
                          <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-2 h-16 w-16 overflow-hidden rounded-full">
                              <img
                                alt={member.name}
                                className="h-full w-full object-cover"
                                src={member.image || "/placeholder.svg"}
                              />
                            </div>
                            <h3 className="font-medium">{member.name}</h3>
                            <p className="text-xs text-muted-foreground">{member.title}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button variant="outline">
                        <Users className="mr-2 h-4 w-4" />
                        View All Team Members
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="reviews" className="space-y-4 mt-4">
                  {companyData.reviews.map((review, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between">
                          <div>
                            <CardTitle>{review.author}</CardTitle>
                            <CardDescription>{review.role}</CardDescription>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-1">{review.rating}</span>
                            <span className="text-yellow-400">★</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{review.text}</p>
                        <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="flex justify-center">
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Write a Review
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-4 px-4 md:px-6">
        <div className="container flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2025 DevConnect. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

