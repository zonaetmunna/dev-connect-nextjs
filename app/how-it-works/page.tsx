"use client";

import { ArrowRight, Code, FileText, MessageSquare, Search, Shield, Users } from "lucide-react";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import {
  CardAnimation,
  FadeUpSection,
  ParallaxSection,
  StaggeredCards,
  TextReveal
} from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeUpSection>
                <div className="space-y-2">
                  <TextReveal>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How DevConnect Works</h1>
                  </TextReveal>
                  <TextReveal delay={0.2}>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      A simple, streamlined process for connecting developers and companies
                    </p>
                  </TextReveal>
                </div>
              </FadeUpSection>
            </div>
          </div>
        </section>
        <ParallaxSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <FadeUpSection>
                  <div className="space-y-2">
                    <TextReveal>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Developers</h2>
                    </TextReveal>
                    <TextReveal delay={0.2}>
                      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        How to find your next opportunity on DevConnect
                      </p>
                    </TextReveal>
                  </div>
                </FadeUpSection>
              </div>
              <StaggeredCards>
                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                          <FileText className="h-6 w-6" />
                          <span className="sr-only">Create Profile</span>
                        </div>
                        <CardTitle>1. Create Your Profile</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          Sign up and create a comprehensive profile showcasing your skills, experience, and portfolio. The
                          more detailed your profile, the better your chances of finding the right match.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                          <Search className="h-6 w-6" />
                          <span className="sr-only">Browse Opportunities</span>
                        </div>
                        <CardTitle>2. Browse Opportunities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          Explore job listings that match your skills and preferences. Filter by job type, location, salary
                          range, and more to find the perfect opportunity.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                          <MessageSquare className="h-6 w-6" />
                          <span className="sr-only">Connect and Interview</span>
                        </div>
                        <CardTitle>3. Connect and Interview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          Apply to positions that interest you. If there's a match, you'll be invited to interview with the
                          company. Our platform facilitates seamless communication throughout the process.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                </div>
              </StaggeredCards>
            </div>
          </section>
        </ParallaxSection>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeUpSection>
                <div className="space-y-2">
                  <TextReveal>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Companies</h2>
                  </TextReveal>
                  <TextReveal delay={0.2}>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      How to find the right talent for your team
                    </p>
                  </TextReveal>
                </div>
              </FadeUpSection>
            </div>
            <StaggeredCards>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <CardAnimation>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                        <Users className="h-6 w-6" />
                        <span className="sr-only">Create Company Profile</span>
                      </div>
                      <CardTitle>1. Create Company Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        Sign up and create a detailed company profile. Showcase your company culture, tech stack, and what
                        makes your team unique to attract the right candidates.
                      </p>
                    </CardContent>
                  </Card>
                </CardAnimation>
                <CardAnimation>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                        <FileText className="h-6 w-6" />
                        <span className="sr-only">Post Job Listings</span>
                      </div>
                      <CardTitle>2. Post Job Listings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        Create detailed job listings specifying the skills, experience, and qualifications you're looking
                        for. Choose from full-time, part-time, contract, or project-based arrangements.
                      </p>
                    </CardContent>
                  </Card>
                </CardAnimation>
                <CardAnimation>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                        <Shield className="h-6 w-6" />
                        <span className="sr-only">Review and Hire</span>
                      </div>
                      <CardTitle>3. Review and Hire</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        Review applications from pre-vetted developers, conduct interviews, and make hiring decisions. Our
                        platform streamlines the entire process from initial contact to final hire.
                      </p>
                    </CardContent>
                  </Card>
                </CardAnimation>
              </div>
            </StaggeredCards>
          </div>
        </section>
        <ParallaxSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <FadeUpSection>
                  <div className="space-y-2">
                    <TextReveal>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        The DevConnect Difference
                      </h2>
                    </TextReveal>
                    <TextReveal delay={0.2}>
                      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        What sets us apart from other platforms
                      </p>
                    </TextReveal>
                  </div>
                </FadeUpSection>
              </div>
              <StaggeredCards>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <CardTitle>Pre-vetted Talent</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          All developers on our platform go through a thorough vetting process to ensure they have the skills
                          and experience they claim. This saves companies time and ensures quality matches.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <CardTitle>Transparent Process</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          Our platform provides complete transparency throughout the hiring process. Both developers and
                          companies have clear visibility into where they stand at each stage.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <CardTitle>Flexible Arrangements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          Whether you're looking for full-time employment, part-time work, hourly contracts, or project-based
                          gigs, DevConnect supports all types of working arrangements.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                  <CardAnimation>
                    <Card>
                      <CardHeader>
                        <CardTitle>Dedicated Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          Our team is here to help both developers and companies navigate the platform and resolve any issues
                          that arise. We're committed to providing exceptional support at every step.
                        </p>
                      </CardContent>
                    </Card>
                  </CardAnimation>
                </div>
              </StaggeredCards>
            </div>
          </section>
        </ParallaxSection>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to get started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join DevConnect today and experience a better way to connect developers and companies.
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <Link href="/signup?type=developer">
                <Button>
                  Join as Developer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup?type=company">
                <Button variant="outline">Join as Company</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span className="font-semibold">DevConnect</span>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 DevConnect. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-6 md:ml-auto">
            <Link className="text-xs hover:underline underline-offset-4" href="/about">
              About
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/how-it-works">
              How It Works
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/pricing">
              Pricing
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/blog">
              Blog
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/contact">
              Contact
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/terms">
              Terms
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
