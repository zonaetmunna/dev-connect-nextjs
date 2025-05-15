"use client"

import type React from "react"

import { useTranslation } from "@/lib/i18n"
import { useEffect } from "react"

interface RTLProviderProps {
  children: React.ReactNode
}

export function RTLProvider({ children }: RTLProviderProps) {
  const { dir, mounted, locale } = useTranslation()

  useEffect(() => {
    if (mounted) {
      // Set document direction
      document.documentElement.dir = dir

      // Set document language
      document.documentElement.lang = locale

      // Add RTL class to body for additional styling if needed
      if (dir === "rtl") {
        document.body.classList.add("rtl")
        document.body.classList.remove("ltr")
      } else {
        document.body.classList.add("ltr")
        document.body.classList.remove("rtl")
      }

      // Add data attributes for easier styling
      document.documentElement.setAttribute("data-direction", dir)
      document.documentElement.setAttribute("data-language", locale)

      // Log direction change for debugging
      console.log(`Direction changed to: ${dir}, Language: ${locale}`)
    }
  }, [dir, mounted, locale])

  return <>{children}</>
}

