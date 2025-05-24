"use client"

import {
    ArrowLeft,
    Briefcase,
    Calendar,
    Code,
    Globe,
    Heart,
    MapPin,
    Share2,
    SlidersHorizontal
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface JobDetailProps {
  job: {
    id: number
    title: string
    company: string
    companyLogo: string
    type: string
    location: string
    salary: string
    posted: string
    applicationDeadline: string
    skills: string[]
    description: string
    responsibilities: string
    requirements: string
    benefits: string
    companyDescription: string
    aboutCompany: {
      founded: string
      size: string
      industry: string
      website: string
      headquarters: string
    }
    similarJobs: Array<{
      id: number
      title: string
      company: string
      location: string
      salary: string
    }>
  }
}

export function JobDetail({ job }: JobDetailProps) {
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
                      className="text-sm hover:underline"
                    >
                      {job.aboutCompany.website}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:w-1/3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {job.similarJobs.map((similarJob) => (
                      <div key={similarJob.id} className="space-y-2">
                        <Link href={`/jobs/${similarJob.id}`} className="block hover:underline">
                          <h3 className="font-medium">{similarJob.title}</h3>
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          <p>{similarJob.company}</p>
                          <p>{similarJob.location}</p>
                          <p>{similarJob.salary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 