'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ProjectsModule } from '@/components/modules/ProjectsModule'
import { ArrowLeft } from 'lucide-react'

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-background animate-in fade-in duration-500">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 hover:translate-x-1 animate-in slide-in-from-left"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>

        <div className="animate-in fade-in slide-in-from-top duration-500 delay-100">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Projects</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore all my projects and work
          </p>
        </div>

        <div className="animate-in fade-in duration-500 delay-200">
          <ProjectsModule />
        </div>
      </div>
    </main>
  )
}
