'use client'

import React from "react"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LikeButton } from './LikeButton'

interface ModuleCardProps {
  id: string
  title: string
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  expandedContent?: React.ReactNode
  className?: string
}

export function ModuleCard({
  id,
  title,
  icon,
  size = 'medium',
  children,
  expandedContent,
  className,
}: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.01]',
        sizeClasses[size],
        isExpanded && 'md:col-span-3 lg:col-span-3 row-span-auto',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 px-5 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 min-w-0">
          {icon && <div className="text-2xl flex-shrink-0">{icon}</div>}
          <h3 className="font-semibold text-foreground truncate text-sm sm:text-base">{title}</h3>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 ml-2">
          <LikeButton id={id} />
          {expandedContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-md p-2 transition-all duration-200 hover:bg-muted hover:scale-110 active:scale-95"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              <ChevronDown
                size={18}
                className={cn(
                  'transition-transform duration-300 text-muted-foreground group-hover:text-foreground',
                  isExpanded && 'rotate-180',
                )}
              />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        <div className={cn('transition-all duration-300', isExpanded && 'hidden')}>
          {children}
        </div>

        {isExpanded && expandedContent && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="max-h-96 overflow-y-auto pr-2">
              {expandedContent}
            </div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
