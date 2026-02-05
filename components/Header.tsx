'use client'

import React from 'react'
import { useSidebar } from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface HeaderProps {
  title?: string
  subtitle?: string
  showToggle?: boolean
}

export function Header({ 
  title = 'Developer Portfolio', 
  subtitle = 'Modular. Scalable. Elegant.',
  showToggle = true
}: HeaderProps) {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in duration-500">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left: Sidebar Toggle + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-10 w-10 rounded-lg transition-all duration-200 hover:bg-sidebar-accent hover:scale-110"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} className="text-foreground" />
          </Button>
          
          <div className="animate-in fade-in slide-in-from-left duration-500 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">{title}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Theme Toggle */}
        {showToggle && <ThemeToggle />}
      </div>
    </header>
  )
}
