"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Briefcase,
  Building,
  Calendar,
  Code,
  Globe,
  Heart,
  MapPin,
  Share2,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job details from an API
  // For now, we'll use mock data
  const job = {
    id: Number.parseInt(params.id),
    title: "Senior React Developer",
    company: "Tech Innovations Inc.",
    companyLogo: "/placeholder.svg?height=80&width=80",
    type: "Full-time",
    location: "Remote",
    salary: "$120,000 - $150,000",
    posted: "May 15, 2025 (2 days ago)",
    applicationDeadline: "June 15, 2025",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "Redux", "Jest", "Webpack"],
    description: `
      <p>Tech Innovations Inc. is looking for a Senior React Developer to join our growing team. You will be responsible for building and maintaining high-quality web applications using React and related technologies.</p>
      
      <p>As a Senior React Developer, you will work closely with our product and design teams to implement new features and improve existing ones. You will also mentor junior developers and contribute to our technical architecture.</p>
    `,
    responsibilities: `
      <ul>
        <li>Develop and maintain high-quality web applications using React</li>
        <li>Write clean, maintainable, and efficient code</li>
        <li>Collaborate with cross-functional teams to define, design, and ship new features</li>
        <li>Identify and address performance bottlenecks</li>
        <li>Participate in code reviews and provide constructive feedback</li>
        <li>Mentor junior developers</li>
        <li>Stay up-to-date with emerging trends and technologies</li>
      </ul>
    `,
    requirements: `
      <ul>
        <li>5+ years of experience in frontend development</li>
        <li>3+ years of experience with React and its ecosystem</li>
        <li>Strong proficiency in JavaScript, including ES6+ features</li>
        <li>Experience with TypeScript</li>
        <li>Familiarity with RESTful APIs and GraphQL</li>
        <li>Understanding of state management patterns and solutions</li>
        <li>Experience with testing frameworks such as Jest</li>
        <li>Knowledge of modern frontend build tools</li>
        <li>Strong problem-solving skills and attention to detail</li>
        <li>Excellent communication and collaboration skills</li>
      </ul>
    `,
    benefits: `
      <ul>
        <li>Competitive salary and equity package</li>
        <li>Comprehensive health, dental, and vision insurance</li>
        <li>401(k) matching</li>
        <li>Flexible work hours and remote work options</li>
        <li>Professional development budget</li>
        <li>Home office stipend</li>
        <li>Unlimited PTO policy</li>
        <li>Regular team events and retreats</li>
      </ul>
    `,
    companyDescription: `
      <p>Tech Innovations Inc. is a leading technology company specializing in building innovative software solutions for businesses of all sizes. Founded in 2015, we have grown to a team of over 100 talented individuals across the globe.</p>
      
      <p>Our mission is to create technology that makes businesses more efficient, productive, and successful. We believe in fostering a culture of innovation, collaboration, and continuous learning.</p>
      
      <p>We're backed by top-tier investors and have been recognized as one of the fastest-growing tech companies in our industry.</p>
    `,
    aboutCompany: {
      founded: "2015",
      size: "101-500 employees",
      industry: "Software Development",
      website: "https://techinnovations.example.com",
      headquarters: "San Francisco, CA",
    },
    similarJobs: [
      {
        id: 2,
        title: "Frontend Developer",
        company: "WebSolutions",
        location: "Remote",
        salary: "$90,000 - $110,000",
      },
      {
        id: 3,
        title: "React Native Developer",
        company: "AppWorks",
        location: "San Francisco, CA",
        salary: "$110,000 - $130,000",
      },
      {
        id: 4,
        title: "Full Stack Engineer",
        company: "StartupXYZ",
        location: "Remote",
        salary: "$100,000 - $140,000",
      },
    ],
  }

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
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="/jobs/search">
            Find Jobs
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/jobs/search">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Link>
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3 space-y-6">
              <Card>
                <CardHeader className="flex flex-col md:flex-row gap-4 items-start">
                  <img
                    src={job.companyLogo || "/placeholder.svg"}
                    alt={job.company}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.company}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Posted: {job.posted}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Tabs defaultValue="description">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                      <TabsTrigger value="requirements">Requirements</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="mt-4">
                      <div dangerouslySetInnerHTML={{ __html: job.description }} />
                    </TabsContent>
                    <TabsContent value="responsibilities" className="mt-4">
                      <div dangerouslySetInnerHTML={{ __html: job.responsibilities }} />
                    </TabsContent>
                    <TabsContent value="requirements" className="mt-4">
                      <div dangerouslySetInnerHTML={{ __html: job.requirements }} />
                    </TabsContent>
                    <TabsContent value="benefits" className="mt-4">
                      <div dangerouslySetInnerHTML={{ __html: job.benefits }} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>About {job.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div dangerouslySetInnerHTML={{ __html: job.companyDescription }} />
                  <Separator className="my-4" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Founded</p>
                      <p className="text-muted-foreground">{job.aboutCompany.founded}</p>
                    </div>
                    <div>
                      <p className="font-medium">Company Size</p>
                      <p className="text-muted-foreground">{job.aboutCompany.size}</p>
                    </div>
                    <div>
                      <p className="font-medium">Industry</p>
                      <p className="text-muted-foreground">{job.aboutCompany.industry}</p>
                    </div>
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-muted-foreground">{job.aboutCompany.headquarters}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={job.aboutCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {job.aboutCompany.website}
                    </a>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={`/profile/company`}>
                      <Building className="h-4 w-4 mr-2" />
                      View Company Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="md:w-1/3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Deadline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>{job.applicationDeadline}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {job.similarJobs.map((similarJob) => (
                    <div key={similarJob.id} className="space-y-2">
                      <Link href={`/jobs/${similarJob.id}`} className="font-medium hover:underline">
                        {similarJob.title}
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        {similarJob.company} • {similarJob.location}
                      </div>
                      <div className="text-sm">{similarJob.salary}</div>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/jobs/search">View More Jobs</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
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

