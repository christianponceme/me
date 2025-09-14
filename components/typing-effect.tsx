"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  phrases: string[]
  className?: string
}

export function TypingEffect({ phrases, className = "" }: TypingEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          } else {
            setCurrentText(currentPhrase.substring(0, currentText.length - 1))
          }
        } else {
          if (currentText === currentPhrase) {
            setIsPaused(true)
          } else {
            setCurrentText(currentPhrase.substring(0, currentText.length + 1))
          }
        }
      },
      isPaused ? 2000 : isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  )
}
