"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Brain, Code, Zap, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// MatrixRain component integrado en navigation.tsx
const MatrixRain = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const matrixChars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?"
    const fontSize = 10
    const drops: number[] = []

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    const initDrops = () => {
      const cols = Math.floor(canvas.width / fontSize)
      drops.length = 0
      for (let x = 0; x < cols; x++) {
        drops[x] = Math.random() * -50
      }
    }

    resizeCanvas()
    initDrops()

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length))
        ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.3 + 0.1})` // Más sutil para navigation
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 80) // Más lento para navigation

    const handleResize = () => {
      resizeCanvas()
      initDrops()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className={`pointer-events-none absolute inset-0 ${className}`} 
      style={{ zIndex: 1 }} 
    />
  )
}

const navigation = [
  { name: "Mi Historia", href: "/mi-historia", icon: Brain },
  { name: "Mi Visión", href: "/mi-vision", icon: Zap },
  { name: "Mis Proyectos", href: "/mis-proyectos", icon: Code },
  { name: "Contacto", href: "/contacto", icon: Mail },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleNavClick = () => {
    setOpen(false)
    // Small delay to ensure navigation happens first, then scroll
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-500/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 shadow-lg shadow-green-500/20 relative overflow-hidden">
      <MatrixRain className="absolute inset-0 w-full h-full opacity-30" />
      <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={handleNavClick}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow border border-blue-400/50 overflow-hidden">
              <Image
                src="/i8.webp?height=40&width=40&text=CP"
                alt="Christian Ponce"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
            <span className="font-bold text-green-400 text-lg tracking-wider">Christian Ponce</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  asChild
                  variant="ghost"
                  className={cn(
                    "text-green-300 hover:text-green-100 hover:bg-green-900/30 btn-terminal border border-transparent hover:border-green-500/30",
                    pathname === item.href && "text-green-100 bg-green-900/50 border-green-400/50",
                  )}
                >
                  <Link href={item.href} onClick={handleNavClick}>
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-green-400 relative" style={{ zIndex: 20 }}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-green-500/30">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.name}
                      asChild
                      variant="ghost"
                      className={cn(
                        "justify-start text-green-300 hover:text-green-100 hover:bg-green-900/30",
                        pathname === item.href && "text-green-100 bg-green-900/50",
                      )}
                      onClick={handleNavClick}
                    >
                      <Link href={item.href}>
                        <Icon className="w-4 h-4 mr-2" />
                        {item.name}
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}