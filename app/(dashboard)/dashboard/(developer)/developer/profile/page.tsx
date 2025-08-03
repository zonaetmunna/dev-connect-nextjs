'use client';

import { Github, Linkedin, Mail, MapPin, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DeveloperProfilePage() {
	// Mock data for demonstration
	const developerData = {
		name: 'John Doe',
		title: 'Senior Full Stack Developer',
		location: 'San Francisco, CA',
		email: 'john.doe@example.com',
		bio: 'Experienced full stack developer with 8+ years of experience building web applications with React, Node.js, and Python. Passionate about clean code and user-centered design.',
		hourlyRate: '$85/hour',
		availability: 'Available from June 1, 2025',
		skills: [
			{ name: 'React', level: 95 },
			{ name: 'Node.js', level: 90 },
			{ name: 'TypeScript', level: 85 },
			{ name: 'Python', level: 80 },
			{ name: 'GraphQL', level: 75 },
		],
		experience: [
			{
				title: 'Senior Developer',
				company: 'TechCorp Inc.',
				period: '2022 - Present',
				description:
					'Led development of a SaaS platform serving over 10,000 users. Implemented CI/CD pipelines and reduced deployment time by 40%.',
			},
			{
				title: 'Full Stack Developer',
				company: 'WebSolutions',
				period: '2019 - 2022',
				description:
					'Developed and maintained multiple client projects using React, Node.js, and MongoDB. Improved application performance by 30%.',
			},
			{
				title: 'Frontend Developer',
				company: 'DesignHub',
				period: '2017 - 2019',
				description:
					'Created responsive web applications with modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs.',
			},
		],
		education: [
			{
				degree: 'M.S. Computer Science',
				institution: 'Stanford University',
				year: '2017',
			},
			{
				degree: 'B.S. Computer Science',
				institution: 'University of California, Berkeley',
				year: '2015',
			},
		],
		projects: [
			{
				name: 'E-commerce Platform',
				description:
					'Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and analytics dashboard.',
				technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
			},
			{
				name: 'Task Management App',
				description:
					'Developed a collaborative task management application with real-time updates using WebSockets. Features include task assignment, progress tracking, and file sharing.',
				technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
			},
		],
	};

	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1 p-4 md:p-6'>
				<div className='mx-auto max-w-4xl space-y-8'>
					<div className='flex flex-col md:flex-row gap-6'>
						<div className='md:w-1/3'>
							<Card>
								<CardHeader className='text-center'>
									<div className='mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full'>
										<img
											alt={developerData.name}
											className='h-full w-full object-cover'
											src='/placeholder.svg?height=96&width=96'
										/>
									</div>
									<CardTitle>{developerData.name}</CardTitle>
									<CardDescription>{developerData.title}</CardDescription>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='flex items-center gap-2'>
										<MapPin className='h-4 w-4 text-muted-foreground' />
										<span className='text-sm'>{developerData.location}</span>
									</div>
									<div className='flex items-center gap-2'>
										<Mail className='h-4 w-4 text-muted-foreground' />
										<span className='text-sm'>{developerData.email}</span>
									</div>
									<Separator />
									<div>
										<h3 className='font-medium'>Rate</h3>
										<p className='text-sm'>{developerData.hourlyRate}</p>
									</div>
									<div>
										<h3 className='font-medium'>Availability</h3>
										<p className='text-sm'>{developerData.availability}</p>
									</div>
									<Separator />
									<div className='space-y-2'>
										<h3 className='font-medium'>Connect</h3>
										<div className='flex gap-2'>
											<Button variant='outline' size='icon'>
												<Github className='h-4 w-4' />
											</Button>
											<Button variant='outline' size='icon'>
												<Linkedin className='h-4 w-4' />
											</Button>
											<Button variant='outline' size='icon'>
												<Mail className='h-4 w-4' />
											</Button>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<Button className='w-full'>Contact Me</Button>
								</CardFooter>
							</Card>
						</div>
						<div className='md:w-2/3 space-y-6'>
							<Card>
								<CardHeader>
									<CardTitle>About Me</CardTitle>
								</CardHeader>
								<CardContent>
									<p>{developerData.bio}</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Skills</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									{developerData.skills.map((skill, index) => (
										<div key={index} className='space-y-1'>
											<div className='flex items-center justify-between'>
												<span className='text-sm font-medium'>{skill.name}</span>
												<span className='text-sm text-muted-foreground'>{skill.level}%</span>
											</div>
											<Progress value={skill.level} />
										</div>
									))}
								</CardContent>
							</Card>
							<Tabs defaultValue='experience'>
								<TabsList className='grid w-full grid-cols-3'>
									<TabsTrigger value='experience'>Experience</TabsTrigger>
									<TabsTrigger value='education'>Education</TabsTrigger>
									<TabsTrigger value='projects'>Projects</TabsTrigger>
								</TabsList>
								<TabsContent value='experience' className='space-y-4 mt-4'>
									{developerData.experience.map((exp, index) => (
										<Card key={index}>
											<CardHeader>
												<div className='flex justify-between'>
													<div>
														<CardTitle>{exp.title}</CardTitle>
														<CardDescription>{exp.company}</CardDescription>
													</div>
													<span className='text-sm text-muted-foreground'>{exp.period}</span>
												</div>
											</CardHeader>
											<CardContent>
												<p className='text-sm'>{exp.description}</p>
											</CardContent>
										</Card>
									))}
									<div className='flex justify-center'>
										<Button variant='outline'>
											<Plus className='mr-2 h-4 w-4' />
											Add Experience
										</Button>
									</div>
								</TabsContent>
								<TabsContent value='education' className='space-y-4 mt-4'>
									{developerData.education.map((edu, index) => (
										<Card key={index}>
											<CardHeader>
												<div className='flex justify-between'>
													<div>
														<CardTitle>{edu.degree}</CardTitle>
														<CardDescription>{edu.institution}</CardDescription>
													</div>
													<span className='text-sm text-muted-foreground'>{edu.year}</span>
												</div>
											</CardHeader>
										</Card>
									))}
									<div className='flex justify-center'>
										<Button variant='outline'>
											<Plus className='mr-2 h-4 w-4' />
											Add Education
										</Button>
									</div>
								</TabsContent>
								<TabsContent value='projects' className='space-y-4 mt-4'>
									{developerData.projects.map((project, index) => (
										<Card key={index}>
											<CardHeader>
												<CardTitle>{project.name}</CardTitle>
											</CardHeader>
											<CardContent className='space-y-2'>
												<p className='text-sm'>{project.description}</p>
												<div className='flex flex-wrap gap-2'>
													{project.technologies.map((tech, techIndex) => (
														<span
															key={techIndex}
															className='rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium'>
															{tech}
														</span>
													))}
												</div>
											</CardContent>
										</Card>
									))}
									<div className='flex justify-center'>
										<Button variant='outline'>
											<Plus className='mr-2 h-4 w-4' />
											Add Project
										</Button>
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
