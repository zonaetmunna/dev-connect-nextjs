"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { useTranslation } from "@/lib/i18n"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  href: string
  label: string
  translationKey: string
}

export function Navbar() {
  const { t, dir, locale } = useTranslation()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems: NavItem[] = [
    { href: "/about", label: "About", translationKey: "common.about" },
    { href: "/how-it-works", label: "How It Works", translationKey: "common.howItWorks" },
    { href: "/pricing", label: "Pricing", translationKey: "common.pricing" },
    { href: "/blog", label: "Blog", translationKey: "common.blog" },
  ]

  if (!mounted) {
    return (
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-background">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-center">
            <Code className="h-6 w-6 mr-2" />
            <span className="font-bold">DevConnect</span>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-background">
      <div className="w-full flex justify-between items-center">
        <Link className="flex items-center justify-center" href="/">
          <Code className={`h-6 w-6 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
          <span className="font-bold">DevConnect</span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-0 text-base hover:bg-transparent focus:ring-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("common.toggleMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={dir === "rtl" ? "right" : "left"} className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium hover:text-primary ${pathname === item.href ? "text-primary" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.translationKey)}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <ThemeSwitcher />
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      {t("common.signIn")}
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full">{t("common.signUp")}</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                pathname === item.href ? "text-primary" : ""
              }`}
            >
              {t(item.translationKey)}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Link href="/signin">
            <Button variant="ghost" size="sm">
              {t("common.signIn")}
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">{t("common.signUp")}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

