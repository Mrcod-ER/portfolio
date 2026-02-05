'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/profiles'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

export default function FeaturedPage() {
  const router = useRouter()
  const featuredProjects = projects.filter((p) => p.featured)

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

        <div className="animate-in fade-in slide-in-from-top duration-500 delay-100 mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Featured Projects</h1>
          <p className="text-lg text-muted-foreground">
            My best work and most proud projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-top duration-500 rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              onClick={() => router.push(`/project/${project.id}`)}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-foreground flex-1">{project.name}</h3>
                <Badge className="capitalize whitespace-nowrap">Featured</Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border/50">
                {project.github && (
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="flex-1 gap-1 transition-all duration-200 hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      <span className="text-xs">Code</span>
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="flex-1 gap-1 transition-all duration-200 hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      <span className="text-xs">Demo</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {featuredProjects.length === 0 && (
          <div className="animate-in fade-in duration-500 delay-200 rounded-lg border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground mb-4">No featured projects yet</p>
            <Button
              onClick={() => router.push('/projects')}
              variant="outline"
              className="bg-transparent"
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
