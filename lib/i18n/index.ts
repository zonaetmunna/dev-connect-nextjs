"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// Import all translation files
import ar from "./translations/ar.json"
import en from "./translations/en.json"
import es from "./translations/es.json"
import fr from "./translations/fr.json"

// Define available languages
export const languages = {
  en: { name: "English", flag: "🇺🇸", dir: "ltr" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
  fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
  de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  ja: { name: "日本語", flag: "🇯🇵", dir: "ltr" },
}

// Create translations object with all languages
const translations = {
  en,
  es,
  fr,
  ar,
  // Add placeholders for languages without full translations yet
  de: en, // Fallback to English for now
  ja: en, // Fallback to English for now
}

// Helper function to get nested translation values using dot notation
const getNestedTranslation = (obj: any, path: string) => {
  const keys = path.split(".")
  return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

// Custom hook to use translations
export const useTranslation = () => {
  const router = useRouter()
  const { locale = "en" } = router
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to get translation by key
  const t = (key: string, params?: Record<string, string>) => {
    // Get the translations for the current locale
    const localeTranslations = translations[locale as keyof typeof translations] || translations.en

    // Get the translation using the key
    let translation = getNestedTranslation(localeTranslations, key)

    // Fallback to English if translation is not found
    if (translation === undefined) {
      translation = getNestedTranslation(translations.en, key)
    }

    // If still undefined, return the key itself
    if (translation === undefined) {
      return key
    }

    // Replace parameters if provided
    if (params && typeof translation === "string") {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue),
        translation,
      )
    }

    return translation
  }

  // Function to change the language
  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  // Get the text direction for the current locale
  const dir = languages[locale as keyof typeof languages]?.dir || "ltr"

  return {
    t,
    locale,
    changeLanguage,
    languages,
    dir,
    mounted,
  }
}

