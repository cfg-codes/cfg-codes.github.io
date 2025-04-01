import { CodeBlock } from "@/components/code-block"
import { CodeLine } from "@/components/code-line"
import { PageLayout } from "@/components/page-layout"
import Link from "next/link"

export default function Skills() {
  return (
    <PageLayout pageName="skills">
      <CodeBlock functionName="skills" paramName="">
        <CodeLine delay={500}>
          <span className="text-syntax-yellow">Lenguajes de programación</span>
          <div className="text-white/70 text-sm mt-1">PHP, Python, C, C#, HTML/CSS</div>
        </CodeLine>

        <CodeLine delay={1000}>
          <span className="text-syntax-yellow">Bases de datos</span>
          <div className="text-white/70 text-sm mt-1">Modelado, diseño de esquemas, consultas SQL básicas</div>
        </CodeLine>

        <CodeLine delay={1500}>
          <span className="text-syntax-yellow">Desarrollo web</span>
          <div className="text-white/70 text-sm mt-1">
            Creación de sistemas empresariales (gestión de florerías, directorios ciudadanos)
          </div>
        </CodeLine>

        <CodeLine delay={2000}>
          <span className="text-syntax-yellow">Metodologías ágiles</span>
          <div className="text-white/70 text-sm mt-1">
            Trabajo colaborativo con GitHub, gestión de proyectos iterativos
          </div>
        </CodeLine>

        <CodeLine delay={2500}>
          <span className="text-syntax-yellow">Habilidades blandas</span>
          <div className="text-white/70 text-sm mt-1">
            Comunicación efectiva, pensamiento crítico, trabajo en equipo, proactividad, adaptabilidad
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

