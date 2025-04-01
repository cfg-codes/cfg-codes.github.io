import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <Link
        href="https://github.com/cfg-codes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Github size={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/cfg-codes/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Linkedin size={20} />
      </Link>
      <Link href="mailto:carlosfgomezarr@gmail.com" className="text-white/70 hover:text-white transition-colors">
        <Mail size={20} />
      </Link>
      <Link
        href="https://wa.me/595972266248"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Phone size={20} />
      </Link>
    </div>
  )
}

