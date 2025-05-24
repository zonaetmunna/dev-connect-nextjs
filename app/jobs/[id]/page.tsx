import { JobDetail } from "@/components/job-detail";
import { Metadata } from "next";

// Define the job data type
interface JobData {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  type: string;
  location: string;
  salary: string;
  posted: string;
  applicationDeadline: string;
  skills: string[];
  description: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  companyDescription: string;
  aboutCompany: {
    founded: string;
    size: string;
    industry: string;
    website: string;
    headquarters: string;
  };
  similarJobs: Array<{
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
  }>;
}

// This is a server component that fetches data
async function getJobData(id: string): Promise<JobData | null> {
  // In a real app, you would fetch the job details from an API
  // For now, we'll use mock data
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 10));
  
  // You could add validation here to return null for invalid IDs
  const jobId = Number.parseInt(id);
  if (isNaN(jobId) || jobId <= 0) {
    return null;
  }
  
  return {
    id: jobId,
    title: "Senior React Developer",
    company: "Tech Innovations Inc.",
    companyLogo: "/placeholder.svg?height=80&width=80",
    type: "Full-time",
    location: "Remote",
    salary: "$120,000 - $150,000",
    posted: "May 15, 2025 (2 days ago)",
    applicationDeadline: "June 15, 2025",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Redux",
      "Jest",
      "Webpack",
    ],
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
  };
}

// Generate metadata for the page
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const job = await getJobData(params.id);
  
  if (!job) {
    return {
      title: "Job Not Found | DevConnect",
      description: "The requested job posting could not be found.",
    };
  }
  
  return {
    title: `${job.title} at ${job.company} | DevConnect`,
    description: `Apply for the ${job.title} position at ${job.company}. ${job.type} role, ${job.location}. Salary range: ${job.salary}`,
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: `${job.type} role in ${job.location}. Salary: ${job.salary}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${job.title} at ${job.company}`,
      description: `${job.type} role in ${job.location}. Salary: ${job.salary}`,
    },
  };
}

// The page component
export default async function JobDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const job = await getJobData(params.id);
  
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">
            The job posting you're looking for could not be found.
          </p>
          <a 
            href="/jobs" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse All Jobs
          </a>
        </div>
      </div>
    );
  }
  
  return <JobDetail job={job} />;
}