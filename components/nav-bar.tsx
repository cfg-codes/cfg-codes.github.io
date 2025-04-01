"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "home", path: "/" },
  { name: "educación", path: "/education" },
  { name: "proyectos", path: "/projects" },
  { name: "contacto", path: "/contact" },
  { name: "skills", path: "/skills" },
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <nav className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        <ul className="flex space-x-2 text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "px-3 py-1.5 rounded-full transition-colors",
                  pathname === item.path ? "text-syntax-white font-bold" : "text-white/60 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

