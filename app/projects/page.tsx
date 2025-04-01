import { CodeBlock } from "@/components/code-block"
import { CodeLine } from "@/components/code-line"
import { PageLayout } from "@/components/page-layout"
import Link from "next/link"
import { Github } from "lucide-react"

export default function Projects() {
  return (
    <PageLayout pageName="projeto">
      <CodeBlock functionName="projetos" paramName="">
        <CodeLine delay={500}>
          <span className="text-syntax-yellow">Sistema de Gestión de Florerías</span>
          <div className="text-white/70 text-sm mt-1">
            Desarrollo de una aplicación web para optimizar procesos en florerías locales. Implementado con PHP y bases
            de datos SQL, permitiendo gestión de inventario, ventas y seguimiento de pedidos.
          </div>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white/50 hover:text-white mt-2 text-sm"
          >
            <Github size={16} className="mr-1" /> link github
          </Link>
        </CodeLine>

        <CodeLine delay={1500}>
          <span className="text-syntax-yellow">Directorio Ciudadano</span>
          <div className="text-white/70 text-sm mt-1">
            Plataforma web para conectar servicios locales con ciudadanos en Ayolas, Paraguay. Desarrollado con Python y
            frameworks modernos, facilitando la búsqueda y contacto con negocios y profesionales de la zona.
          </div>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white/50 hover:text-white mt-2 text-sm"
          >
            <Github size={16} className="mr-1" /> link github
          </Link>
        </CodeLine>

        <CodeLine delay={2500}>
          <span className="text-syntax-yellow">Sistema de Catastro Municipal</span>
          <div className="text-white/70 text-sm mt-1">
            Colaboración en el desarrollo y mantenimiento del sistema de catastro para la Municipalidad de Ayolas.
            Implementación de funcionalidades para carga y gestión de datos catastrales, optimizando procesos
            administrativos.
          </div>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white/50 hover:text-white mt-2 text-sm"
          >
            <Github size={16} className="mr-1" /> link github
          </Link>
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

