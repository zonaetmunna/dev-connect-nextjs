"use client";
import {
    Bell,
    Briefcase,
    Calendar,
    Code,
    CreditCard,
    LogOut,
    Menu,
    MessageSquare,
    Search,
    Settings,
    User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
export default function DashboardHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const [isDeveloper, setIsDeveloper] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const companyLink = [
    {
      label: "Dashboard",
      href: "/dashboard/company",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "/profile/company",
      icon: <User className="h-5 w-5" />,
    },

    {
      label: "Jobs",
      href: "/dashboard/company/jobs/search",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Calendar    ",
      href: "/dashboard/company/calendar",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      label: "Post a Job",
      href: "/dashboard/company/jobs/post",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const developerLink = [
    {
      label: "Dashboard",
      href: "/dashboard/developer", 
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "/dashboard/developer/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "Find Jobs",
      href: "/dashboard/developer/jobs",
      icon: <Briefcase className="h-5 w-5" />,
    },

    {
      label: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/signin");
  };

  const companyDropdownMenu = [
    {
      label: "Dashboard",
      href: "/dashboard/company",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "/dashboard/company/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "Billing",
      href: "/dashboard/billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      label: "Post a Job",
      href: "/dashboard/company/jobs/post",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Jobs",
      href: "/dashboard/company/jobs/search",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Calendar",
      href: "/dashboard/company/calendar",
      icon: <Calendar className="h-5 w-5" />,
    },

    {
      label: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      label: "Logout",
      href: "/signin",
      icon: <LogOut className="h-5 w-5" />,
    },
  ];

  const developerDropdownMenu = [
    {
      label: "Dashboard",
      href: "/dashboard/developer",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "/dashboard/developer/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "Billing",
      href: "/dashboard/billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      label: "Find Jobs",
      href: "/dashboard/developer/jobs",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      label: "Logout",
      href: "/signin",
      icon: <LogOut className="h-5 w-5" />,
    },
  ];

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Code className="h-6 w-6" />
              <span>DevConnect</span>
            </Link>
            {isDeveloper
              ? developerLink.map((link) => (
                  <Link
                    href={link.href}
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))
              : companyLink.map((link) => (
                  <Link
                    href={link.href}
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
            <Link
              href="/signin"
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <Code className="h-6 w-6" />
        <span>DevConnect</span>
      </Link>
      <div className="relative ml-auto flex-1 md:grow-0 md:w-80">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search jobs, companies..."
          className="w-full rounded-lg bg-background pl-8 md:w-80"
        />
      </div>
      <nav className="hidden gap-6 md:flex">
        {isDeveloper
          ? developerLink.map((link) => (
              <Link href={link.href} className="flex items-center gap-2">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))
          : companyLink.map((link) => (
              <Link href={link.href} className="flex items-center gap-2">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-96 overflow-auto">
              <DropdownMenuItem className="flex flex-col items-start p-4">
                <div className="font-medium">
                  New message from Tech Innovations Inc.
                </div>
                <div className="text-sm text-muted-foreground">2 hours ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-4">
                <div className="font-medium">
                  Your application was viewed by StartupXYZ
                </div>
                <div className="text-sm text-muted-foreground">Yesterday</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-4">
                <div className="font-medium">
                  Interview scheduled with DataFlow Systems
                </div>
                <div className="text-sm text-muted-foreground">2 days ago</div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-center">
              <Button variant="ghost" className="w-full">
                View All
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border h-8 w-8 md:h-10 md:w-10"
          >
            <img
              src="/placeholder.svg?height=40&width=40"
              width="40"
              height="40"
              className="rounded-full"
              alt="Avatar"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {isDeveloper
            ? developerDropdownMenu.map((link) => (
                <DropdownMenuItem>
                  <Link href={link.href} className="flex w-full">
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))
            : companyDropdownMenu.map((link) => (
                <DropdownMenuItem>
                  <Link href={link.href} className="flex w-full">
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
          <DropdownMenuItem>
            <Link href="/signin" className="flex w-full">
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
