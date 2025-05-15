"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

import { RTLProvider } from "@/components/rtl-provider"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <RTLProvider>{children}</RTLProvider>
    </NextThemesProvider>
  )
}

