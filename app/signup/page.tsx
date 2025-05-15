"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "developer"
  const [activeTab, setActiveTab] = useState(defaultType)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center">
        <Code className="h-6 w-6 mr-2" />
        <span className="font-bold">DevConnect</span>
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Sign up to start using DevConnect</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="developer">Developer</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
            </TabsList>
            <TabsContent value="developer">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dev-name">Full Name</Label>
                  <Input id="dev-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dev-email">Email</Label>
                  <Input id="dev-email" placeholder="john@example.com" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dev-password">Password</Label>
                  <Input id="dev-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dev-skills">Primary Skills</Label>
                  <Input id="dev-skills" placeholder="React, Node.js, Python, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dev-experience">Years of Experience</Label>
                  <Input id="dev-experience" type="number" min="0" placeholder="5" />
                </div>
                <Button type="submit" className="w-full">
                  Create Developer Account
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="company">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Acme Inc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Business Email</Label>
                  <Input id="company-email" placeholder="contact@acme.com" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-password">Password</Label>
                  <Input id="company-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Input id="company-size" placeholder="e.g., 1-10, 11-50, 51-200, 201+" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-industry">Industry</Label>
                  <Input id="company-industry" placeholder="e.g., Technology, Finance, Healthcare" />
                </div>
                <Button type="submit" className="w-full">
                  Create Company Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-gray-500">
            By creating an account, you agree to our{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            .
          </div>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

