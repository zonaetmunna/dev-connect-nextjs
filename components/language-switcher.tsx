"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Check, ChevronDown, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { languages } from "@/lib/i18n"
import { useTranslation } from "@/lib/i18n"

export function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = router
  const { t, dir } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<string>("en")

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
    setCurrentLanguage(locale || "en")
  }, [locale])

  const handleLanguageChange = (newLocale: string) => {
    // Store the selected language in localStorage for persistence
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLocale)
    }

    // Update the UI immediately for better user experience
    setCurrentLanguage(newLocale)

    // Then update the router
    router.push(router.pathname, router.asPath, { locale: newLocale })
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="opacity-0">
        {t("common.loading")}
      </Button>
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 language-fade-in">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline-block">
            {languages[currentLanguage as keyof typeof languages]?.name || "English"}
          </span>
          <span className="inline-block md:hidden">
            {languages[currentLanguage as keyof typeof languages]?.flag || "🇺🇸"}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={dir === "rtl" ? "start" : "end"} className="w-40">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`flex items-center justify-between ${currentLanguage === code ? "bg-accent" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span>{flag}</span>
              <span>{name}</span>
            </span>
            {currentLanguage === code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

