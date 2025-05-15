"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Code, CreditCard, Lock, Mail, Save, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState({
    messages: true,
    applications: true,
    interviews: true,
    jobAlerts: true,
    marketing: false,
  })

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
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="/settings">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Account Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and settings</p>
          </div>
          <Tabs defaultValue="profile">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <TabsList className="flex flex-col h-auto p-0 bg-transparent">
                  <TabsTrigger value="profile" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="account" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                    <Mail className="mr-2 h-4 w-4" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted"
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger value="security" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                    <Lock className="mr-2 h-4 w-4" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="md:w-3/4 space-y-6">
                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="title">Professional Title</Label>
                          <Input id="title" defaultValue="Senior Full Stack Developer" />
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
                              <SelectItem value="available">Available for work</SelectItem>
                              <SelectItem value="limited">Limited availability</SelectItem>
                              <SelectItem value="unavailable">Not available</SelectItem>
                              <SelectItem value="employed">Employed, open to offers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
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
                      <CardDescription>Connect your social media accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                        <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub URL</Label>
                        <Input id="github" placeholder="https://github.com/username" />
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
                <TabsContent value="account" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Email Address</CardTitle>
                      <CardDescription>Update your email address</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Email</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Type</CardTitle>
                      <CardDescription>Change your account type</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <RadioGroup defaultValue="developer">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="developer" id="developer" />
                          <Label htmlFor="developer">Developer Account</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="company" id="company" />
                          <Label htmlFor="company">Company Account</Label>
                        </div>
                      </RadioGroup>
                      <p className="text-sm text-muted-foreground">
                        Changing your account type will affect your dashboard, profile, and available features.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Account Type</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Delete Account</CardTitle>
                      <CardDescription>Permanently delete your account and all data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Once you delete your account, there is no going back. All information associated with your
                        account will be permanently deleted.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="destructive">Delete Account</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="notifications" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Email Notifications</CardTitle>
                      <CardDescription>Manage your email notification preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="messages">Messages</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications when you get a new message
                          </p>
                        </div>
                        <Switch
                          id="messages"
                          checked={emailNotifications.messages}
                          onCheckedChange={(checked) =>
                            setEmailNotifications({ ...emailNotifications, messages: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="applications">Applications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about your job applications
                          </p>
                        </div>
                        <Switch
                          id="applications"
                          checked={emailNotifications.applications}
                          onCheckedChange={(checked) =>
                            setEmailNotifications({ ...emailNotifications, applications: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="interviews">Interviews</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about scheduled interviews
                          </p>
                        </div>
                        <Switch
                          id="interviews"
                          checked={emailNotifications.interviews}
                          onCheckedChange={(checked) =>
                            setEmailNotifications({ ...emailNotifications, interviews: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="job-alerts">Job Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about new job opportunities
                          </p>
                        </div>
                        <Switch
                          id="job-alerts"
                          checked={emailNotifications.jobAlerts}
                          onCheckedChange={(checked) =>
                            setEmailNotifications({ ...emailNotifications, jobAlerts: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketing">Marketing</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email updates about DevConnect features and promotions
                          </p>
                        </div>
                        <Switch
                          id="marketing"
                          checked={emailNotifications.marketing}
                          onCheckedChange={(checked) =>
                            setEmailNotifications({ ...emailNotifications, marketing: checked })
                          }
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Notification Preferences</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="security" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>Update your password</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                      <CardDescription>Add an extra layer of security to your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Protect your account with an additional security layer
                          </p>
                        </div>
                        <Switch id="2fa" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Set Up Two-Factor Authentication</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Login Sessions</CardTitle>
                      <CardDescription>Manage your active sessions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-muted-foreground">San Francisco, CA • Chrome on macOS</p>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-800 dark:text-green-100">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Mobile Session</p>
                            <p className="text-sm text-muted-foreground">San Francisco, CA • Safari on iOS</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Log Out All Other Sessions</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="billing" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subscription Plan</CardTitle>
                      <CardDescription>Manage your subscription plan</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Pro Plan</p>
                            <p className="text-sm text-muted-foreground">$19/month • Renews on June 1, 2025</p>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-800 dark:text-green-100">
                            Active
                          </span>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                            <span className="text-sm">Enhanced profile with portfolio</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                            <span className="text-sm">Unlimited job applications</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                            <span className="text-sm">Priority in search results</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                            <span className="text-sm">Early access to new jobs</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="outline">Cancel Subscription</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Manage your payment methods</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                            </div>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-800 dark:text-green-100">
                            Default
                          </span>
                        </div>
                      </div>
                      <Button variant="outline">Add Payment Method</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing History</CardTitle>
                      <CardDescription>View your billing history</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border divide-y">
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium">Pro Plan - Monthly</p>
                            <p className="text-sm text-muted-foreground">May 1, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$19.00</p>
                            <p className="text-xs text-green-600">Paid</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium">Pro Plan - Monthly</p>
                            <p className="text-sm text-muted-foreground">April 1, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$19.00</p>
                            <p className="text-xs text-green-600">Paid</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium">Pro Plan - Monthly</p>
                            <p className="text-sm text-muted-foreground">March 1, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$19.00</p>
                            <p className="text-xs text-green-600">Paid</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline">Download Invoices</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </Tabs>
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

