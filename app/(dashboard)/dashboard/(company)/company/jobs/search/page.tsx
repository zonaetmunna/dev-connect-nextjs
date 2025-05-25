"use client";

import {
  Briefcase,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal
} from "lucide-react";
import Link from "next/link";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

export default function JobSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 200000]);

  // Mock data for demonstration
  const jobListings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Innovations Inc.",
      companyLogo: "/placeholder.svg?height=40&width=40",
      type: "Full-time",
      location: "Remote",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      skills: ["React", "TypeScript", "Node.js"],
      description:
        "We're looking for an experienced React developer to join our team and help build innovative web applications...",
      experienceLevel: "Senior",
    },
    {
      id: 2,
      title: "Backend Node.js Engineer",
      company: "DataFlow Systems",
      companyLogo: "/placeholder.svg?height=40&width=40",
      type: "Contract",
      location: "New York, NY",
      salary: "$80/hour",
      posted: "1 week ago",
      skills: ["Node.js", "Express", "MongoDB"],
      description:
        "Join our backend team to develop scalable APIs and microservices for our growing platform...",
      experienceLevel: "Mid-Level",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      companyLogo: "/placeholder.svg?height=40&width=40",
      type: "Part-time",
      location: "Remote",
      salary: "$60,000 - $80,000",
      posted: "3 days ago",
      skills: ["React", "Node.js", "PostgreSQL"],
      description:
        "Looking for a part-time developer to help with our growing product. Flexible hours and great team...",
      experienceLevel: "Mid-Level",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "AppWorks",
      companyLogo: "/placeholder.svg?height=40&width=40",
      type: "Project-based",
      location: "Remote",
      salary: "$15,000 per project",
      posted: "5 days ago",
      skills: ["React Native", "iOS", "Android"],
      description:
        "We need an experienced mobile developer to build a cross-platform app for our clients...",
      experienceLevel: "Senior",
    },
    {
      id: 5,
      title: "Junior Frontend Developer",
      company: "WebSolutions",
      companyLogo: "/placeholder.svg?height=40&width=40",
      type: "Full-time",
      location: "San Francisco, CA",
      salary: "$70,000 - $90,000",
      posted: "1 day ago",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      description:
        "Great opportunity for a junior developer to join our team and grow their skills...",
      experienceLevel: "Junior",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      companyLogo: "/placeholder.svg?height=40&width=40",
      type: "Full-time",
      location: "Remote",
      salary: "$110,000 - $140,000",
      posted: "1 week ago",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description:
        "Looking for a DevOps engineer to help us scale our infrastructure and improve our deployment processes...",
      experienceLevel: "Senior",
    },
  ];

  const handleJobTypeToggle = (value: string) => {
    setJobType(
      jobType.includes(value)
        ? jobType.filter((type) => type !== value)
        : [...jobType, value]
    );
  };

  // Filter jobs based on search criteria
  const filteredJobs = jobListings.filter((job) => {
    // Search query filter
    const matchesQuery =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Job type filter
    const matchesType = jobType.length === 0 || jobType.includes(job.type);

    // Location filter
    const matchesLocation = location === "" || job.location.includes(location);

    // Experience level filter
    const matchesExperience =
      experienceLevel === "" || job.experienceLevel === experienceLevel;

    // Salary range filter
    const jobSalaryLower = Number.parseInt(job.salary.replace(/[^0-9]/g, ""));
    const matchesSalary =
      jobSalaryLower >= salaryRange[0] && jobSalaryLower <= salaryRange[1];

    return (
      matchesQuery &&
      matchesType &&
      matchesLocation &&
      matchesExperience &&
      matchesSalary
    );
  });

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Find Your Next Opportunity</h1>
            <p className="text-muted-foreground">
              Search for jobs that match your skills and preferences
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs, skills, companies..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Location</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="San Francisco">
                    San Francisco, CA
                  </SelectItem>
                  <SelectItem value="New York">New York, NY</SelectItem>
                  <SelectItem value="Austin">Austin, TX</SelectItem>
                  <SelectItem value="Seattle">Seattle, WA</SelectItem>
                </SelectContent>
              </Select>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[400px] overflow-auto">
                  <SheetHeader>
                    <SheetTitle>Filter Jobs</SheetTitle>
                    <SheetDescription>
                      Refine your job search with filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Job Type</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="full-time"
                            checked={jobType.includes("Full-time")}
                            onCheckedChange={() =>
                              handleJobTypeToggle("Full-time")
                            }
                          />
                          <Label htmlFor="full-time">Full-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="part-time"
                            checked={jobType.includes("Part-time")}
                            onCheckedChange={() =>
                              handleJobTypeToggle("Part-time")
                            }
                          />
                          <Label htmlFor="part-time">Part-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="contract"
                            checked={jobType.includes("Contract")}
                            onCheckedChange={() =>
                              handleJobTypeToggle("Contract")
                            }
                          />
                          <Label htmlFor="contract">Contract</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="project"
                            checked={jobType.includes("Project-based")}
                            onCheckedChange={() =>
                              handleJobTypeToggle("Project-based")
                            }
                          />
                          <Label htmlFor="project">Project-based</Label>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Experience Level</h3>
                      <RadioGroup
                        value={experienceLevel}
                        onValueChange={setExperienceLevel}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="" id="any-experience" />
                          <Label htmlFor="any-experience">Any Experience</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Junior" id="junior" />
                          <Label htmlFor="junior">Junior</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Mid-Level" id="mid-level" />
                          <Label htmlFor="mid-level">Mid-Level</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Senior" id="senior" />
                          <Label htmlFor="senior">Senior</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Salary Range</h3>
                        <p className="text-sm text-muted-foreground">
                          ${salaryRange[0].toLocaleString()} - $
                          {salaryRange[1].toLocaleString()}
                        </p>
                      </div>
                      <Slider
                        defaultValue={[0, 200000]}
                        max={200000}
                        step={10000}
                        value={salaryRange}
                        onValueChange={setSalaryRange}
                      />
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setJobType([]);
                          setLocation("");
                          setExperienceLevel("");
                          setSalaryRange([0, 200000]);
                        }}
                      >
                        Reset Filters
                      </Button>
                      <Button>Apply Filters</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredJobs.length} jobs
            </p>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="salary-high">Highest Salary</SelectItem>
                <SelectItem value="salary-low">Lowest Salary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <img
                      src={job.companyLogo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{job.type}</span>
                      <span className="text-muted-foreground">•</span>
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                      <span>{job.salary}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Posted {job.posted}
                    </p>
                    <Link href={`/jobs/${job.id}`}>
                      <Button size="sm">View Job</Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          {filteredJobs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No jobs found</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                We couldn't find any jobs matching your search criteria. Try
                adjusting your filters or search query.
              </p>
            </div>
          )}
          {filteredJobs.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load More Jobs</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
