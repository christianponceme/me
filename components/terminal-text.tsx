"use client"

import { useState, useEffect } from "react"

interface TerminalTextProps {
  text: string
  className?: string
  speed?: number
  showCursor?: boolean
}

export function TerminalText({ text, className = "", speed = 50, showCursor = true }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && currentIndex <= text.length && <span className="animate-pulse text-green-400">|</span>}
    </span>
  )
}
