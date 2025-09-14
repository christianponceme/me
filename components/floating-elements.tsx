"use client"

import { Brain, Code, Zap, Rocket, Target, Eye } from "lucide-react"

export function FloatingElements() {
  const elements = [
    { Icon: Brain, delay: "0s", duration: "20s", x: "10%", y: "20%" },
    { Icon: Code, delay: "2s", duration: "25s", x: "80%", y: "30%" },
    { Icon: Zap, delay: "4s", duration: "18s", x: "15%", y: "70%" },
    { Icon: Rocket, delay: "6s", duration: "22s", x: "85%", y: "80%" },
    { Icon: Target, delay: "8s", duration: "24s", x: "50%", y: "10%" },
    { Icon: Eye, delay: "10s", duration: "26s", x: "70%", y: "60%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {elements.map(({ Icon, delay, duration, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
      ))}
    </div>
  )
}
