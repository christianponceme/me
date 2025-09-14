"use client"

import type React from "react"

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <div
      className={`bg-black/90 border border-green-500/30 rounded-lg p-4 font-mono text-green-400 relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-pulse"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
