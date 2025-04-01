import { CodeBlock } from "@/components/code-block"
import { CodeLine } from "@/components/code-line"
import { PageLayout } from "@/components/page-layout"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <PageLayout pageName="contato">
      <CodeBlock functionName="formasDeContato" paramName="info">
        <CodeLine delay={500}>
          <div className="flex items-center">
            <span className="text-syntax-yellow">info.celular</span>
            <div className="ml-4 text-white/70">
              <Phone size={16} className="inline mr-2" />
              <Link
                href="https://wa.me/595972266248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                +595 972266248 (WhatsApp)
              </Link>
            </div>
          </div>
        </CodeLine>

        <CodeLine delay={1000}>
          <div className="flex items-center">
            <span className="text-syntax-yellow">info.email</span>
            <div className="ml-4 text-white/70">
              <Mail size={16} className="inline mr-2" />
              <Link href="mailto:carlosfgomezarr@gmail.com" className="text-white/70 hover:text-white">
                carlosfgomezarr@gmail.com
              </Link>
            </div>
          </div>
        </CodeLine>

        <CodeLine delay={1500}>
          <div className="flex items-center">
            <span className="text-syntax-yellow">info.linkedin</span>
            <div className="ml-4 text-white/70">
              <Linkedin size={16} className="inline mr-2" />
              <Link
                href="https://www.linkedin.com/in/cfg-codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                linkedin.com/in/cfg-codes
              </Link>
            </div>
          </div>
        </CodeLine>

        <CodeLine delay={2000}>
          <div className="flex items-center">
            <span className="text-syntax-yellow">info.github</span>
            <div className="ml-4 text-white/70">
              <Github size={16} className="inline mr-2" />
              <Link
                href="https://github.com/cfg-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                github.com/cfg-codes
              </Link>
            </div>
          </div>
        </CodeLine>
      </CodeBlock>

      <div className="mt-8 flex justify-start">
        <Link
          href="/"
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2"
        >
          <span className="text-xs">←</span> CV
        </Link>
      </div>
    </PageLayout>
  )
}

