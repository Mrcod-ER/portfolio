'use client'

import React from "react"

import { BentoGrid } from '@/components/BentoGrid'
import { Header } from '@/components/Header'
import { AboutModule } from '@/components/modules/AboutModule'
import { GoalsModule } from '@/components/modules/GoalsModule'
import { CodingProfileModule } from '@/components/modules/CodingProfileModule'
import { ProjectsModule } from '@/components/modules/ProjectsModule'
import { getEnabledModules } from '@/config/modules'
import {
  codeforces,
  codechef,
  geeksforgeeks,
  leetcode,
} from '@/data/profiles'

export default function Home() {
  const enabledModules = getEnabledModules()

  // Map module IDs to their components
  const moduleComponents: Record<string, React.ReactNode> = {
    about: <AboutModule key="about" />,
    goals: <GoalsModule key="goals" />,
    codeforces: <CodingProfileModule key="codeforces" profile={codeforces} icon="⚡" />,
    leetcode: <CodingProfileModule key="leetcode" profile={leetcode} icon="💻" />,
    codechef: <CodingProfileModule key="codechef" profile={codechef} icon="🍲" />,
    geeksforgeeks: (
      <CodingProfileModule key="geeksforgeeks" profile={geeksforgeeks} icon="👨‍🎓" />
    ),
    projects: <ProjectsModule key="projects" />,
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Header />

      {/* Content */}
      <div className="px-4 py-8 sm:px-6 lg:px-8 animate-in fade-in duration-500 delay-100">
        <BentoGrid>
          {enabledModules.map((module, index) => (
            <div
              key={module.id}
              className="animate-in fade-in duration-500"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              {moduleComponents[module.id]}
            </div>
          ))}
        </BentoGrid>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-8 text-center animate-in fade-in duration-500 delay-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
