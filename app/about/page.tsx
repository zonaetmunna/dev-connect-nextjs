import { ArrowRight, Code, Shield, Star, Users } from "lucide-react";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About DevConnect
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Connecting talented developers with innovative companies since
                  2020
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Mission
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  At DevConnect, our mission is to bridge the gap between
                  talented developers and companies seeking technical expertise.
                  We believe in creating meaningful connections that benefit
                  both parties, fostering a community where skills are valued
                  and opportunities are accessible.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  We're committed to providing a platform that simplifies the
                  hiring process, ensures fair compensation for developers, and
                  helps companies find the perfect match for their technical
                  needs.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Team Collaboration"
                  className="rounded-lg object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    We foster a supportive community where developers and
                    companies can connect, collaborate, and grow together.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    We build trust through transparency, security, and ensuring
                    quality connections between developers and companies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Star className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    We strive for excellence in everything we do, from our
                    platform's user experience to the quality of our service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Team
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The dedicated people behind DevConnect
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Head of Operations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <h3 className="text-xl font-bold">David Kim</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  How DevConnect came to be
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-6 py-12">
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                DevConnect was founded in 2020 by Sarah Johnson, a former tech
                recruiter who saw firsthand the challenges both developers and
                companies faced in the hiring process. After years of watching
                talented developers struggle to find meaningful work and
                companies struggle to find the right technical talent, Sarah
                decided to create a solution.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Starting with just a small team of passionate individuals,
                DevConnect has grown into a thriving platform connecting
                thousands of developers with companies around the world. Our
                journey has been guided by our commitment to creating a more
                efficient, transparent, and fair hiring process for everyone
                involved.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Today, we continue to innovate and improve our platform, always
                keeping our users' needs at the forefront of everything we do.
                We're proud of how far we've come, but we're even more excited
                about where we're going.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join us in our mission
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Whether you're a developer looking for your next opportunity or
                a company seeking top talent, we'd love to have you as part of
                our community.
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
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 DevConnect. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-6 md:ml-auto">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/terms"
            >
              Terms
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/privacy"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
