"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface CodeBlockProps {
  functionName: string
  paramName?: string
  children: React.ReactNode
  delay?: number
}

export function CodeBlock({ functionName, paramName, children, delay = 0 }: CodeBlockProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  if (!isVisible) return null

  return (
    <div className="my-6">
      <div>
        <span className="text-syntax-blue">function </span>
        <span className="text-syntax-green">{functionName}</span>
        <span className="text-white">(</span>
        {paramName && <span className="text-syntax-red">{paramName}</span>}
        <span className="text-white">) {`{`}</span>
      </div>

      <div className="code-block pl-6 my-4">{children}</div>

      <div className="text-white">{`}`}</div>
    </div>
  )
}

