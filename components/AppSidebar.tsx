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
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <Link href="/about" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-sidebar-accent transition-colors duration-200 group">
          <Avatar className="h-9 w-9 flex-shrink-0">
            <AvatarImage src="https://avatar.vercel.sh/user?size=36" alt="Profile" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold text-sidebar-foreground truncate">Profile</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">View more</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => {
                const isActive = pathname === item.url || pathname.startsWith(item.url + '/')
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="transition-all duration-200"
                      tooltip={item.title}
                    >
                      <Link href={item.url} className="flex items-center gap-2">
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span>{item.title}</span>
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
