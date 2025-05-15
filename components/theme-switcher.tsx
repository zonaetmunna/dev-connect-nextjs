"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/lib/i18n"

export function ThemeSwitcher() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const { t, dir } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<string>("system")

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
    setCurrentTheme(theme || resolvedTheme || "system")
  }, [theme, resolvedTheme])

  const handleThemeChange = (newTheme: string) => {
    // Store the selected theme in localStorage for persistence
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-preference", newTheme)
    }

    // Update the UI immediately for better user experience
    setCurrentTheme(newTheme)

    // Then update the theme
    setTheme(newTheme)
  }

  if (!mounted) {
    return <Button variant="ghost" size="sm" className="h-8 w-8 px-0 opacity-0" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0 theme-transition">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("common.toggleTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className={currentTheme === "light" ? "bg-accent" : ""}
        >
          <Sun className={`${dir === "rtl" ? "ml-2" : "mr-2"} h-4 w-4`} />
          <span>{t("common.theme.light")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className={currentTheme === "dark" ? "bg-accent" : ""}
        >
          <Moon className={`${dir === "rtl" ? "ml-2" : "mr-2"} h-4 w-4`} />
          <span>{t("common.theme.dark")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("system")}
          className={currentTheme === "system" ? "bg-accent" : ""}
        >
          <Monitor className={`${dir === "rtl" ? "ml-2" : "mr-2"} h-4 w-4`} />
          <span>{t("common.theme.system")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

