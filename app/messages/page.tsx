"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, MessageSquare, PaperclipIcon, Search, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<number | null>(1)
  const [messageText, setMessageText] = useState("")

  // Mock data for demonstration
  const conversations = [
    {
      id: 1,
      with: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for your application. We'd like to schedule an interview...",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      with: "Michael Chen",
      company: "DataFlow Systems",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Do you have experience with GraphQL? We're looking for...",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      with: "Emily Rodriguez",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We've reviewed your application and would like to move forward...",
      time: "3 days ago",
      unread: false,
    },
    {
      id: 4,
      with: "David Kim",
      company: "WebSolutions",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can you tell me more about your experience with React Native?",
      time: "1 week ago",
      unread: false,
    },
  ]

  const messages = [
    {
      id: 1,
      conversationId: 1,
      sender: "Sarah Johnson",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content: "Hi John, thanks for applying to the Senior React Developer position at Tech Innovations Inc.",
      time: "May 15, 2025 10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      conversationId: 1,
      sender: "Me",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content: "Hi Sarah, thank you for considering my application. I'm very interested in the position.",
      time: "May 15, 2025 10:45 AM",
      isMe: true,
    },
    {
      id: 3,
      conversationId: 1,
      sender: "Sarah Johnson",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Your experience looks great! We'd like to schedule a technical interview with our lead developer. Are you available next week?",
      time: "May 15, 2025 11:00 AM",
      isMe: false,
    },
    {
      id: 4,
      conversationId: 1,
      sender: "Me",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content: "Yes, I'm available next week. I have free slots on Tuesday and Thursday afternoon.",
      time: "May 15, 2025 11:15 AM",
      isMe: true,
    },
    {
      id: 5,
      conversationId: 1,
      sender: "Sarah Johnson",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Great! Let's schedule for Tuesday at 2:00 PM. I'll send you a calendar invite with the details. The interview will be about 1 hour and will focus on your React experience and some problem-solving exercises.",
      time: "May 15, 2025 11:30 AM",
      isMe: false,
    },
    {
      id: 6,
      conversationId: 2,
      sender: "Michael Chen",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Hello John, I saw your profile on DevConnect and I'm impressed with your backend experience. We're looking for a Node.js developer for a contract position. Do you have experience with GraphQL?",
      time: "May 14, 2025 3:15 PM",
      isMe: false,
    },
    {
      id: 7,
      conversationId: 2,
      sender: "Me",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Hi Michael, thanks for reaching out. Yes, I have about 3 years of experience with GraphQL, primarily with Apollo Server and Client. I'd be interested in learning more about the position.",
      time: "May 14, 2025 4:30 PM",
      isMe: true,
    },
  ]

  const handleSendMessage = () => {
    if (messageText.trim() === "" || !activeConversation) return

    // In a real app, you would send the message to the server here
    // For now, we'll just clear the input
    setMessageText("")
  }

  const filteredMessages = messages.filter((message) => message.conversationId === activeConversation)

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
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="/messages">
            Messages
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 border-r">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="w-full pl-8" />
            </div>
          </div>
          <Tabs defaultValue="all">
            <div className="px-4 pt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">All Messages</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <ScrollArea className="h-[calc(100vh-12rem)]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-muted ${activeConversation === conversation.id ? "bg-muted" : ""}`}
                    onClick={() => setActiveConversation(conversation.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar || "/placeholder.svg"}
                          alt={conversation.with}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        {conversation.unread && (
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{conversation.with}</p>
                          <p className="text-xs text-muted-foreground">{conversation.time}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{conversation.company}</p>
                        <p className="text-sm truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="unread" className="mt-0">
              <ScrollArea className="h-[calc(100vh-12rem)]">
                {conversations
                  .filter((c) => c.unread)
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 cursor-pointer hover:bg-muted ${activeConversation === conversation.id ? "bg-muted" : ""}`}
                      onClick={() => setActiveConversation(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <img
                            src={conversation.avatar || "/placeholder.svg"}
                            alt={conversation.with}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground" />
                        </div>
                        <div className="flex-1 space-y-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{conversation.with}</p>
                            <p className="text-xs text-muted-foreground">{conversation.time}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{conversation.company}</p>
                          <p className="text-sm truncate">{conversation.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex-1 flex flex-col">
          {activeConversation ? (
            <>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={conversations.find((c) => c.id === activeConversation)?.avatar || "/placeholder.svg"}
                    alt={conversations.find((c) => c.id === activeConversation)?.with}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{conversations.find((c) => c.id === activeConversation)?.with}</p>
                    <p className="text-xs text-muted-foreground">
                      {conversations.find((c) => c.id === activeConversation)?.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">View Profile</span>
                  </Button>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {filteredMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[80%] ${message.isMe ? "flex-row-reverse" : ""}`}>
                        <img
                          src={message.senderAvatar || "/placeholder.svg"}
                          alt={message.sender}
                          className="h-8 w-8 rounded-full object-cover self-end"
                        />
                        <div>
                          <div
                            className={`rounded-lg p-3 ${message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <PaperclipIcon className="h-5 w-5" />
                    <span className="sr-only">Attach File</span>
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No Conversation Selected</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Select a conversation from the list to start messaging.
              </p>
            </div>
          )}
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

