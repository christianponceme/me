import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "../styles/chatbot.css";
import { Navigation } from "@/components/navigation"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christian Ponce - Soñador con Propósito",
  description:
    "Cáncer → Programación → IA: El diario de un soñador con propósito. Mi historia de superación y visión del futuro.",
  keywords: ["Christian Ponce", "programador", "inteligencia artificial", "cáncer", "superación", "chatbots", "SaaS"],
    generator: 'cp.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Chatbot />
      </body>
    </html>
  )
}
