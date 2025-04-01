import { CodeBlock } from "@/components/code-block"
import { CodeLine } from "@/components/code-line"
import { PageLayout } from "@/components/page-layout"
import Link from "next/link"

export default function Education() {
  return (
    <PageLayout pageName="formacao">
      <CodeBlock functionName="sobreMim" paramName="education">
        <CodeLine delay={500}>
          <span className="text-syntax-yellow">Universidad Católica de Asunción (2022 - Actualidad)</span>
          <div className="text-white/70 text-sm mt-1">
            Ingeniería en Informática. Desarrollo de sistemas, programación estructurada, fundamentos de IA, seguridad
            cibernética básica y gestión de redes. Proyecto destacado: Simulación de un sistema corporativo integral con
            nota máxima 5/5.
          </div>
        </CodeLine>

        <CodeLine delay={1500}>
          <span className="text-syntax-yellow">Colegio Nacional EMD Villa Permanente (2019 - 2021)</span>
          <div className="text-white/70 text-sm mt-1">
            Enseñanza Media Técnica en Informática. Desarrollo web con HTML y CSS, programación estructurada con C y C#,
            diseño de diagramas de flujo y pseudocódigo PSeInt. Proyectos destacados: Creación de aplicaciones de
            consola C/C# para gestión escolar.
          </div>
        </CodeLine>

        <CodeLine delay={2500}>
          <span className="text-syntax-yellow">School of Tomorrow (2007 - 2018)</span>
          <div className="text-white/70 text-sm mt-1">
            Enseñanza Básica. Bilingüismo temprano con estudio continuo de inglés, certificación en herramientas
            ofimáticas Microsoft (Word, Excel, Corel) y formación integral con enfoque en matemáticas, castellano,
            ciencias y estudios sociales.
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

