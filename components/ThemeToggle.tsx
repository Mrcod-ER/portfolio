'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const isDarkMode =
      document.documentElement.classList.contains('dark') ||
      localStorage.getItem('theme') === 'dark'
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!isMounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-lg bg-transparent border border-border/40 transition-all duration-300 hover:scale-110 hover:bg-muted/50 hover:border-primary/50 active:scale-95"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className={`transition-all duration-500 ${isDark ? 'rotate-180' : ''}`}>
        {isDark ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-slate-600 dark:text-slate-400" />
        )}
      </div>
    </Button>
  )
}
