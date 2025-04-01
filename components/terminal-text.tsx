"use client"

import { useEffect, useState } from "react"

interface TerminalTextProps {
  text: string
  delay?: number
  className?: string
}

export function TerminalText({ text, delay = 0, className = "" }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (delay > 0) {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, delay)
    } else {
      setIsTyping(true)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index + 1))
      index++

      if (index === text.length) {
        clearInterval(interval)

        // Hide cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false)
        }, 1000) // Wait 1 second before hiding cursor
      }
    }, 50)

    return () => clearInterval(interval)
  }, [text, isTyping])

  return (
    <div className={`font-mono ${className}`}>
      <span>{displayText}</span>
      {showCursor && <span className="terminal-cursor">|</span>}
    </div>
  )
}

