import type React from "react"
import { NavBar } from "./nav-bar"
import { SocialIcons } from "./social-icons"
import Link from "next/link"

interface PageLayoutProps {
  children: React.ReactNode
  pageName: string
}

export function PageLayout({ children, pageName }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 left-4 text-white/50 text-sm">{pageName}</div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-primary rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex justify-center mb-4">
              <div className="text-syntax-yellow font-bold text-xl">
                {"<"} <span className="text-syntax-green">Carlos</span> {"/>"}
              </div>
            </div>

            <SocialIcons />

            <div className="flex flex-col mt-8 gap-8">
              <div className="flex-1">{children}</div>
            </div>
          </div>

          <div className="border-t border-white/10 py-3 px-6 text-center text-sm">
            <div className="flex justify-center space-x-4">
              <Link href="/education" className="text-white/60 hover:text-white transition-colors">
                educación
              </Link>
              <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
                proyectos
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                contacto
              </Link>
              <Link href="/skills" className="text-white/60 hover:text-white transition-colors">
                skills
              </Link>
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  )
}

