import Link from "next/link";

export default function DashboardFooter() {
  return (
    <footer className="border-t py-4 px-4 md:px-6">
      <div className="container flex flex-col gap-2 sm:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © 2025 DevConnect. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
