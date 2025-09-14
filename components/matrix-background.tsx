"use client"

import { useEffect, useRef } from "react"

// Global state for persistent matrix animation
let globalCanvas: HTMLCanvasElement | null = null
let globalCtx: CanvasRenderingContext2D | null = null
let globalDrops: number[] = []
let globalInterval: NodeJS.Timeout | null = null
let animationInstances = 0

interface MatrixBackgroundProps {
  className?: string
  intensity?: number
}

export function MatrixBackground({ className = "", intensity = 0.1 }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    animationInstances++

    // Matrix characters - Japanese katakana, numbers, and code symbols
    const matrixChars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]()_+-=|\\:;\"',.?/!@#$%^&*"
    const fontSize = 12

    const initGlobalCanvas = () => {
      if (!globalCanvas) {
        globalCanvas = document.createElement('canvas')
        globalCanvas.style.position = 'fixed'
        globalCanvas.style.top = '0'
        globalCanvas.style.left = '0'
        globalCanvas.style.width = '100vw'
        globalCanvas.style.height = '100vh'
        globalCanvas.style.pointerEvents = 'none'
        globalCanvas.style.zIndex = '1'
        globalCanvas.style.opacity = intensity.toString()
        document.body.appendChild(globalCanvas)

        globalCtx = globalCanvas.getContext("2d")
      }

      if (globalCanvas && globalCtx) {
        globalCanvas.width = window.innerWidth
        globalCanvas.height = window.innerHeight
        globalCanvas.style.opacity = intensity.toString()
      }
    }

    const initDrops = () => {
      if (globalCanvas) {
        const cols = Math.floor(globalCanvas.width / fontSize)
        if (globalDrops.length !== cols) {
          globalDrops = []
          for (let x = 0; x < cols; x++) {
            globalDrops[x] = Math.random() * -100
          }
        }
      }
    }

    const draw = () => {
      if (!globalCtx || !globalCanvas) return

      // Semi-transparent black background for trail effect
      globalCtx.fillStyle = `rgba(0, 0, 0, ${0.05})`
      globalCtx.fillRect(0, 0, globalCanvas.width, globalCanvas.height)

      globalCtx.font = fontSize + "px 'Courier New', monospace"

      // Draw the characters
      for (let i = 0; i < globalDrops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length))

        // Varying shades of green for depth
        const opacity = Math.random() * 0.8 + 0.2
        const brightness = Math.random() * 100 + 155
        globalCtx.fillStyle = `rgba(0, ${brightness}, 0, ${opacity})`

        globalCtx.fillText(text, i * fontSize, globalDrops[i] * fontSize)

        // Reset drop to top randomly
        if (globalDrops[i] * fontSize > globalCanvas.height && Math.random() > 0.975) {
          globalDrops[i] = 0
        }

        globalDrops[i]++
      }
    }

    const startAnimation = () => {
      if (!globalInterval) {
        globalInterval = setInterval(draw, 50)
      }
    }

    const handleResize = () => {
      if (globalCanvas && globalCtx) {
        globalCanvas.width = window.innerWidth
        globalCanvas.height = window.innerHeight
        initDrops()
      }
    }

    // Initialize or update global canvas
    initGlobalCanvas()
    initDrops()
    startAnimation()

    window.addEventListener("resize", handleResize)

    return () => {
      animationInstances--

      // Only clean up when no more instances exist
      if (animationInstances === 0) {
        if (globalInterval) {
          clearInterval(globalInterval)
          globalInterval = null
        }
        if (globalCanvas && globalCanvas.parentNode) {
          globalCanvas.parentNode.removeChild(globalCanvas)
          globalCanvas = null
          globalCtx = null
          globalDrops = []
        }
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [intensity])

  // Return empty div since we're using global canvas
  return <div className={className} />
}
