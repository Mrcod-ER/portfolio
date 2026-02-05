'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getLikes, toggleUserLike, hasUserLiked } from '@/lib/likes'

interface LikeButtonProps {
  id: string
  className?: string
}

export function LikeButton({ id, className }: LikeButtonProps) {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setLikes(getLikes(id))
    setIsLiked(hasUserLiked(id))
  }, [id])

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const newStatus = toggleUserLike(id)
    setIsLiked(newStatus)
    setLikes(getLikes(id))
  }

  if (!isMounted) {
    return null
  }

  return (
    <button
      onClick={handleLike}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group flex items-center gap-1.5 rounded-lg px-3 py-2 transition-all duration-300',
        'border border-border/40 hover:border-primary/50 hover:scale-105 active:scale-95',
        isLiked ? 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900' : 'bg-muted/50 hover:bg-muted',
        className,
      )}
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <Heart
        size={16}
        className={cn(
          'transition-all duration-300',
          isLiked ? 'fill-red-500 text-red-500 drop-shadow-sm' : 'text-muted-foreground group-hover:text-red-500',
          (isHovered || isLiked) && 'scale-125',
        )}
      />
      <span
        className={cn(
          'text-xs font-semibold transition-all duration-300',
          isLiked ? 'text-red-600 dark:text-red-300' : 'text-muted-foreground group-hover:text-red-500',
        )}
      >
        {likes}
      </span>
    </button>
  )
}
