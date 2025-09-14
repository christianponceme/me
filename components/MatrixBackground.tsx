"use client"

import { useEffect, useRef } from "react"

interface MatrixBackgroundProps {
  className?: string
  intensity?: number
}

export function MatrixBackground({ className = "", intensity = 0.1 }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Matrix characters - Japanese katakana, numbers, and code symbols
    const matrixChars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]()_+-=|\\:;\"',.?/!@#$%^&*"
    const fontSize = 12
    const drops: number[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initDrops = () => {
      const cols = Math.floor(canvas.width / fontSize)
      for (let x = 0; x < cols; x++) {
        drops[x] = Math.random() * -100
      }
    }

    resizeCanvas()
    initDrops()

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${0.05})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = fontSize + "px 'Courier New', monospace"

      // Draw the characters
      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length))

        // Varying shades of green for depth
        const opacity = Math.random() * 0.8 + 0.2
        const brightness = Math.random() * 100 + 155
        ctx.fillStyle = `rgba(0, ${brightness}, 0, ${opacity})`

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      resizeCanvas()
      initDrops()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1, opacity: intensity }}
    />
  )
}
