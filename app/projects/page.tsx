'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { ProjectsModule } from '@/components/modules/ProjectsModule'
import { ArrowLeft } from 'lucide-react'

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-background animate-in fade-in duration-500">
      <Header title="Projects" subtitle="All my work and projects" showToggle={true} />
      <div className="px-4 py-8 sm:px-6 lg:px-8 animate-in fade-in duration-500 delay-100">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:translate-x-1 animate-in slide-in-from-left"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

          <div className="animate-in fade-in duration-500 delay-200">
            <ProjectsModule />
          </div>
        </div>
      </div>
    </main>
  )
}
