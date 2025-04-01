import { CodeBlock } from "@/components/code-block"
import { PageLayout } from "@/components/page-layout"
import { TerminalText } from "@/components/terminal-text"

export default function Home() {
  return (
    <PageLayout pageName="home.cat">
      <CodeBlock functionName="helloWorld" paramName="CFG">
        <div className="mb-4">
          <span className="text-syntax-blue">public </span>
          <span className="text-syntax-purple">static </span>
          <span className="text-syntax-blue">void </span>
          <span className="text-syntax-green">main</span>
          <span className="text-white">(</span>
          <span className="text-syntax-blue">String</span>
          <span className="text-white">[] </span>
          <span className="text-syntax-yellow">args</span>
          <span className="text-white">) {`{`}</span>
        </div>

        <div className="pl-6 mb-4">
          <TerminalText
            text="Analista de Sistemas y Desarrollador FullStack con 3 años de experiencia."
            delay={500}
            className="text-white mb-2"
          />
          <TerminalText
            text="Diseño soluciones web en Python y PHP para optimizar procesos en PYMEs,"
            delay={2000}
            className="text-white mb-2"
          />
          <TerminalText
            text="aplicando tipado estricto y arquitecturas escalables."
            delay={3500}
            className="text-white mb-2"
          />
          <TerminalText
            text="Mis proyectos han logrado reducir tiempos operativos en un 30% para negocios locales."
            delay={5000}
            className="text-white mb-2"
          />
          <TerminalText
            text="Actualmente estudiante de Ingeniería Informática en la Universidad Católica de Asunción."
            delay={6500}
            className="text-white"
          />
        </div>

        <div className="text-white">{`}`}</div>
      </CodeBlock>

      <div className="mt-8 flex justify-start">
        <a
          href="https://drive.google.com/file/d/12gztBawDI3KdlslK0Jqtd7l3rWthPxpZ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2"
        >
          Curriculum <span className="text-xs">→</span>
        </a>
      </div>
    </PageLayout>
  )
}

