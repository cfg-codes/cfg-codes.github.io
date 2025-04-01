"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface CodeLineProps {
  children: React.ReactNode
  delay?: number
}

export function CodeLine({ children, delay = 0 }: CodeLineProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  if (!isVisible) return null

  return <div className="code-line my-3">{children}</div>
}

