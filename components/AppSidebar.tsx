'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Home, Folder, Star } from 'lucide-react'

interface NavItem {
  title: string
  url: string
  icon: React.ReactNode
}

const mainNav: NavItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: <Home size={16} />,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: <Folder size={16} />,
  },
  {
    title: 'Featured',
    url: '/featured',
    icon: <Star size={16} />,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 py-4">
        <Link 
          href="/about" 
          className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-sidebar-accent/50 transition-all duration-200 group hover:scale-105 active:scale-95"
        >
          <Avatar className="h-10 w-10 flex-shrink-0 ring-2 ring-sidebar-accent/50 group-hover:ring-primary/50 transition-all">
            <AvatarImage src="https://avatar.vercel.sh/user?size=40" alt="Profile" />
            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white">MR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold text-sidebar-foreground truncate">Profile</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">View more</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="flex-1">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.url || pathname.startsWith(item.url + '/')
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`transition-all duration-200 rounded-lg hover:scale-105 active:scale-95 ${
                        isActive ? 'bg-primary/10 text-primary' : 'hover:bg-sidebar-accent/50'
                      }`}
                      tooltip={item.title}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <span className="flex-shrink-0 text-lg">{item.icon}</span>
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
