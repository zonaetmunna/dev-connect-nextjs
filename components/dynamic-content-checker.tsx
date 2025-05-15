"use client"

import { useTranslation } from "@/lib/i18n"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DynamicContentChecker() {
  const { t, locale, dir } = useTranslation()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setMounted(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-background border rounded-md p-4 shadow-lg max-w-xs">
      <h3 className="font-bold mb-2">Dynamic Content Status</h3>
      <ul className="text-xs space-y-1">
        <li>
          <span className="font-medium">Language:</span> {locale}
        </li>
        <li>
          <span className="font-medium">Direction:</span> {dir}
        </li>
        <li>
          <span className="font-medium">Theme:</span> {theme}
        </li>
        <li>
          <span className="font-medium">Screen Width:</span> {windowWidth}px
        </li>
        <li>
          <span className="font-medium">Translation Test:</span> {t("common.signIn")}
        </li>
      </ul>
    </div>
  )
}

