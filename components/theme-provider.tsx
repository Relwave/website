'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read from localStorage or check document class (set by inline script)
    const stored = localStorage.getItem('relwave-theme')
    const isDarkMode = stored === 'dark' ||
      (!stored && document.documentElement.classList.contains('dark'))

    setIsDark(isDarkMode)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('relwave-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('relwave-theme', 'light')
    }
  }, [isDark, mounted])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
