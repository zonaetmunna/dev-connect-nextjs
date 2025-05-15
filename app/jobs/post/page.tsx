"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function PostJobPage() {
  const [jobType, setJobType] = useState("full-time")
  const [skills, setSkills] = useState<string[]>([])

  const commonSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "C#",
    ".NET",
    "PHP",
    "Ruby",
    "Go",
    "Rust",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "REST API",
  ]

  const handleSkillToggle = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill))
    } else {
      setSkills([...skills, skill])
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-background">
        <Link className="flex items-center justify-center" href="/">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold">DevConnect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard/company">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/profile/company">
            Company Profile
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="/jobs/post">
            Post Job
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Post a New Job</h1>
            <p className="text-muted-foreground">Create a job listing to find the perfect candidate</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Basic information about the position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="e.g., Senior React Developer" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="e.g., Engineering" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reports-to">Reports To</Label>
                  <Input id="reports-to" placeholder="e.g., CTO, Engineering Manager" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Job Type</Label>
                <RadioGroup defaultValue="full-time" onValueChange={setJobType} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time" className="font-normal">
                      Full-time
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="part-time" id="part-time" />
                    <Label htmlFor="part-time" className="font-normal">
                      Part-time
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="contract" id="contract" />
                    <Label htmlFor="contract" className="font-normal">
                      Contract
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="project" id="project" />
                    <Label htmlFor="project" className="font-normal">
                      Project-based
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location-type">Location Type</Label>
                  <Select defaultValue="remote">
                    <SelectTrigger id="location-type">
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g., New York, NY or Remote" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="salary-min">Salary Range (Min)</Label>
                  <Input id="salary-min" type="number" placeholder="e.g., 80000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary-max">Salary Range (Max)</Label>
                  <Input id="salary-max" type="number" placeholder="e.g., 120000" />
                </div>
              </div>
              {jobType === "contract" && (
                <div className="space-y-2">
                  <Label htmlFor="hourly-rate">Hourly Rate ($)</Label>
                  <Input id="hourly-rate" type="number" placeholder="e.g., 75" />
                </div>
              )}
              {jobType === "project" && (
                <div className="space-y-2">
                  <Label htmlFor="project-budget">Project Budget ($)</Label>
                  <Input id="project-budget" type="number" placeholder="e.g., 10000" />
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Detailed information about the role</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  placeholder="Brief overview of the position and your company"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="responsibilities">Responsibilities</Label>
                <Textarea
                  id="responsibilities"
                  placeholder="Key responsibilities and day-to-day activities"
                  className="min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Required qualifications, skills, and experience"
                  className="min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits</Label>
                <Textarea id="benefits" placeholder="Compensation, perks, and benefits" className="min-h-[100px]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Skills & Qualifications</CardTitle>
              <CardDescription>Select the required skills for this position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`skill-${skill}`}
                        checked={skills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill)}
                      />
                      <Label htmlFor={`skill-${skill}`} className="font-normal">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="custom-skills">Additional Skills (comma separated)</Label>
                  <Input id="custom-skills" placeholder="e.g., Figma, Sketch, Adobe XD" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select defaultValue="3-5">
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                      <SelectItem value="1-3">1-3 years (Junior)</SelectItem>
                      <SelectItem value="3-5">3-5 years (Mid-Level)</SelectItem>
                      <SelectItem value="5-8">5-8 years (Senior)</SelectItem>
                      <SelectItem value="8+">8+ years (Lead/Principal)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Education Level</Label>
                  <Select defaultValue="bachelors">
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No specific requirement</SelectItem>
                      <SelectItem value="highschool">High School</SelectItem>
                      <SelectItem value="associates">Associate's Degree</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
              <CardDescription>Configure how candidates can apply</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Application Method</Label>
                <RadioGroup defaultValue="platform" className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="platform" id="platform" />
                    <Label htmlFor="platform" className="font-normal">
                      Apply through DevConnect
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email" className="font-normal">
                      Apply via Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="website" id="website" />
                    <Label htmlFor="website" className="font-normal">
                      Apply on Company Website
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-to">Email Applications To (if applicable)</Label>
                <Input id="email-to" type="email" placeholder="e.g., careers@yourcompany.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website-url">Application URL (if applicable)</Label>
                <Input id="website-url" type="url" placeholder="e.g., https://yourcompany.com/careers/apply" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="closing-date">Application Closing Date</Label>
                <Input id="closing-date" type="date" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="screening-questions" />
                <Label htmlFor="screening-questions" className="font-normal">
                  Include screening questions with application
                </Label>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col sm:flex-row gap-2 justify-end">
            <Button variant="outline">Save as Draft</Button>
            <Button variant="outline">Preview</Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Publish Job
            </Button>
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

