"use client";

import { Plus, Save, Trash2, Upload } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileEditPage() {
  // Mock data for demonstration
  const [skills, setSkills] = useState([
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "GraphQL", level: 75 },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Senior Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Led development of a SaaS platform serving over 10,000 users. Implemented CI/CD pipelines and reduced deployment time by 40%.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "WebSolutions",
      period: "2019 - 2022",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Improved application performance by 30%.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "DesignHub",
      period: "2017 - 2019",
      description:
        "Created responsive web applications with modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs.",
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "M.S. Computer Science",
      institution: "Stanford University",
      year: "2017",
    },
    {
      id: 2,
      degree: "B.S. Computer Science",
      institution: "University of California, Berkeley",
      year: "2015",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "Developed a collaborative task management application with real-time updates using WebSockets. Features include task assignment, progress tracking, and file sharing.",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
    },
  ]);

  const [newSkill, setNewSkill] = useState({ name: "", level: 50 });
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
  });
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  });
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    technologies: "",
  });

  const handleAddSkill = () => {
    if (newSkill.name.trim() === "") return;
    setSkills([...skills, { ...newSkill }]);
    setNewSkill({ name: "", level: 50 });
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleAddExperience = () => {
    if (
      newExperience.title.trim() === "" ||
      newExperience.company.trim() === ""
    )
      return;
    setExperiences([
      ...experiences,
      { ...newExperience, id: experiences.length + 1 },
    ]);
    setNewExperience({
      title: "",
      company: "",
      period: "",
      description: "",
    });
  };

  const handleRemoveExperience = (id: number) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleAddEducation = () => {
    if (
      newEducation.degree.trim() === "" ||
      newEducation.institution.trim() === ""
    )
      return;
    setEducation([...education, { ...newEducation, id: education.length + 1 }]);
    setNewEducation({
      degree: "",
      institution: "",
      year: "",
    });
  };

  const handleRemoveEducation = (id: number) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const handleAddProject = () => {
    if (newProject.name.trim() === "") return;
    setProjects([
      ...projects,
      {
        ...newProject,
        id: projects.length + 1,
        technologies: newProject.technologies
          .split(",")
          .map((tech) => tech.trim()),
      },
    ]);
    setNewProject({
      name: "",
      description: "",
      technologies: "",
    });
  };

  const handleRemoveProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Edit Profile</h1>
            <p className="text-muted-foreground">
              Update your professional profile
            </p>
          </div>
          <Link href="/profile/developer">
            <Button variant="outline">Cancel</Button>
          </Link>
        </div>
        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Update your personal and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      defaultValue="Senior Full Stack Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue="Experienced full stack developer with 8+ years of experience building web applications with React, Node.js, and Python. Passionate about clean code and user-centered design."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="hourly-rate">Hourly Rate ($)</Label>
                    <Input id="hourly-rate" type="number" defaultValue="85" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Select defaultValue="available">
                      <SelectTrigger id="availability">
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">
                          Available for work
                        </SelectItem>
                        <SelectItem value="limited">
                          Limited availability
                        </SelectItem>
                        <SelectItem value="unavailable">
                          Not available
                        </SelectItem>
                        <SelectItem value="employed">
                          Employed, open to offers
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Basic Information
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Profile Photo</CardTitle>
                <CardDescription>Update your profile picture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full">
                    <img
                      alt="Profile"
                      className="h-full w-full object-cover"
                      src="/placeholder.svg?height=96&width=96"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload New Photo
                    </Button>
                    <Button variant="ghost" size="sm">
                      Remove Photo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Social Profiles</CardTitle>
                <CardDescription>
                  Connect your social media accounts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input
                    id="github"
                    placeholder="https://github.com/username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio Website</Label>
                  <Input id="portfolio" placeholder="https://yourwebsite.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Social Profiles</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="skills" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>
                  Add and manage your technical skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveSkill(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove skill</span>
                    </Button>
                  </div>
                ))}
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Add New Skill</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="skill-name">Skill Name</Label>
                      <Input
                        id="skill-name"
                        placeholder="e.g., React, Python, AWS"
                        value={newSkill.name}
                        onChange={(e) =>
                          setNewSkill({ ...newSkill, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skill-level">
                        Proficiency Level ({newSkill.level}%)
                      </Label>
                      <Input
                        id="skill-level"
                        type="range"
                        min="0"
                        max="100"
                        value={newSkill.level}
                        onChange={(e) =>
                          setNewSkill({
                            ...newSkill,
                            level: Number.parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddSkill}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Skill
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Skills</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="experience" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>
                  Add and manage your professional experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveExperience(exp.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove experience</span>
                      </Button>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                    <Separator />
                  </div>
                ))}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Add New Experience</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input
                        id="job-title"
                        placeholder="e.g., Senior Developer"
                        value={newExperience.title}
                        onChange={(e) =>
                          setNewExperience({
                            ...newExperience,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="e.g., Tech Company Inc."
                        value={newExperience.company}
                        onChange={(e) =>
                          setNewExperience({
                            ...newExperience,
                            company: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="period">Period</Label>
                    <Input
                      id="period"
                      placeholder="e.g., 2020 - Present"
                      value={newExperience.period}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          period: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-description">Description</Label>
                    <Textarea
                      id="job-description"
                      placeholder="Describe your responsibilities and achievements..."
                      value={newExperience.description}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button onClick={handleAddExperience}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Experience</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="education" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                  Add and manage your educational background
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution} • {edu.year}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveEducation(edu.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove education</span>
                      </Button>
                    </div>
                    <Separator />
                  </div>
                ))}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Add New Education</h3>
                  <div className="space-y-2">
                    <Label htmlFor="degree">Degree</Label>
                    <Input
                      id="degree"
                      placeholder="e.g., B.S. Computer Science"
                      value={newEducation.degree}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          degree: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      placeholder="e.g., Stanford University"
                      value={newEducation.institution}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          institution: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      placeholder="e.g., 2020"
                      value={newEducation.year}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          year: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button onClick={handleAddEducation}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Education</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="projects" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>
                  Add and manage your portfolio projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{project.name}</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove project</span>
                      </Button>
                    </div>
                    <p className="text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Separator />
                  </div>
                ))}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Add New Project</h3>
                  <div className="space-y-2">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input
                      id="project-name"
                      placeholder="e.g., E-commerce Platform"
                      value={newProject.name}
                      onChange={(e) =>
                        setNewProject({ ...newProject, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-description">Description</Label>
                    <Textarea
                      id="project-description"
                      placeholder="Describe your project..."
                      value={newProject.description}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="technologies">
                      Technologies (comma separated)
                    </Label>
                    <Input
                      id="technologies"
                      placeholder="e.g., React, Node.js, MongoDB"
                      value={newProject.technologies}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          technologies: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button onClick={handleAddProject}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Project
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Projects</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="flex justify-end gap-4">
          <Link href="/profile/developer">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button>Save All Changes</Button>
        </div>
      </div>
    </main>
  );
}
