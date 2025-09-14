"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, MessageSquare, Send, ExternalLink } from "lucide-react"
import { MatrixBackground } from "@/components/matrix-background"
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactoPage() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const whatsappMessage = `Hola, mi nombre es ${nombre}.%0AEmail: ${email}%0ATeléfono: ${telefono}%0A%0AMensaje:%0A${mensaje}`
    const whatsappURL = `https://wa.me/51953594060?text=${whatsappMessage}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixBackground intensity={0.8} />
      <div className="container mx-auto px-4 py-8 sm:py-12 relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Button asChild variant="ghost" className="text-green-400 hover:text-green-300 mb-4 sm:mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> Volver al inicio
            </Link>
          </Button>

          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white animate-breathe break-words">
              Conecta{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 holographic animate-pulse">
                Conmigo
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed break-words px-4">
              Si mi visión resuena contigo, si quieres colaborar en construir el futuro, o si tu empresa necesita
              soluciones de IA, no dudes en escribirme. Cada conexión es una oportunidad de crear algo extraordinario.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Formulario de Contacto */}
            <Card className="card-terminal">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 flex-shrink-0" />
                  <CardTitle className="text-xl sm:text-2xl text-white break-words">Envíame un Mensaje</CardTitle>
                </div>
                <p className="text-gray-300 text-sm sm:text-base break-words">
                  Cuéntame sobre tu proyecto, idea o simplemente salúdame. Respondo personalmente a cada mensaje.
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-green-400 text-sm sm:text-base">
                        Nombre
                      </Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre completo"
                        className="bg-gray-800 border-green-700 text-white placeholder:text-gray-400 text-sm sm:text-base w-full"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-400 text-sm sm:text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-gray-800 border-green-700 text-white placeholder:text-gray-400 text-sm sm:text-base w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-green-400 text-sm sm:text-base">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      placeholder="Tu número de teléfono"
                      className="bg-gray-800 border-green-700 text-white placeholder:text-gray-400 text-sm sm:text-base w-full"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-green-400 text-sm sm:text-base">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntame tu historia, tu proyecto, o simplemente di hola..."
                      rows={4}
                      className="bg-gray-800 border-green-700 text-white placeholder:text-gray-400 resize-none text-sm sm:text-base w-full"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-terminal w-full bg-green-500 hover:bg-green-600 text-white">
                    <Send className="mr-2 w-4 h-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto y Redes */}
            <div className="space-y-6 sm:space-y-8">
              {/* Redes Sociales */}
              <Card className="card-terminal">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl text-green-400 break-words">Sígueme en Redes</CardTitle>
                  <p className="text-gray-300 text-sm sm:text-base break-words">
                    Documento mi viaje diario. Cada post es una página de mi diario como soñador con propósito.
                  </p>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <Button asChild variant="outline" size="lg" className="btn-terminal bg-transparent w-full">
                    <Link href="https://tiktok.com/@christianponce.me" target="_blank">
                      <MessageSquare className="mr-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                      <span className="break-words flex-1 text-left text-green-400">TikTok - @christianponce.me</span>
                      <ExternalLink className="ml-auto w-4 h-4 flex-shrink-0" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="btn-terminal bg-transparent w-full">
                    <Link href="https://www.youtube.com/@christianponceme" target="_blank">
                      <MessageSquare className="mr-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                      <span className="break-words flex-1 text-left text-green-400">YouTube - Mi Diario en Video</span>
                      <ExternalLink className="ml-auto w-4 h-4 flex-shrink-0" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="btn-terminal bg-transparent w-full">
                    <Link href="https://www.facebook.com/profile.php?id=61576684845974" target="_blank">
                      <MessageSquare className="mr-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                      <span className="break-words flex-1 text-left text-green-400">Facebook - Conexiones Personales</span>
                      <ExternalLink className="ml-auto w-4 h-4 flex-shrink-0" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="btn-terminal bg-transparent w-full">
                    <Link href="https://www.instagram.com/christianponce.me/" target="_blank">
                      <MessageSquare className="mr-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                      <span className="break-words flex-1 text-left text-green-400">Instagram - Mi Mundo Visual</span>
                      <ExternalLink className="ml-auto w-4 h-4 flex-shrink-0" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Para Empresas */}
                <Card className="card-terminal">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl text-white break-words">¿Eres una Empresa?</CardTitle>
                    <p className="text-gray-300 text-sm sm:text-base break-words">
                      Si necesitas soluciones de IA o chatbots para tu negocio, hablemos.
                    </p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 sm:p-4">
                      <h4 className="text-green-200 font-semibold mb-2 text-sm sm:text-base">Puedo ayudarte con:</h4>
                      <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
                        <li className="break-words">• Implementación de chatbots inteligentes</li>
                        <li className="break-words">• Automatización de procesos con IA</li>
                        <li className="break-words">• Consultoría en transformación digital</li>
                        <li className="break-words">• Desarrollo de soluciones personalizadas</li>
                      </ul>
                    </div>
                    <Button size="lg" className="btn-terminal w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                      <Link href="https://wa.me/51953594060?Hola,%20Soy%20una%20Empresa" 
                        target="_Blank"
                          rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-2 w-4 h-4" />
                       Contacto Empresarial
                      </Link>
                    </Button>            
                  </CardContent>
                </Card>

                {/* Colaboradores */}
                <Card className="card-terminal">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl text-white break-words">¿Quieres Colaborar?</CardTitle>
                    <p className="text-gray-300 text-sm sm:text-base break-words">
                      Si eres desarrollador, diseñador, o simplemente alguien que comparte mi visión.
                    </p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <p className="text-gray-300 text-xs sm:text-sm break-words">
                      Busco personas apasionadas que quieran construir el futuro conmigo. No importa tu nivel de
                      experiencia, lo que importa es tu dedicación y visión.
                    </p>
                    <Button size="lg" className="btn-terminal w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                      <Link href="https://wa.me/51953594060?Hola,%20te%20puedo%20proponer%20colaborar" 
                        target="_Blank"
                          rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-2 w-4 h-4" />
                       Proponer Colaboración
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje Final */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <Card className="card-terminal">
            <CardContent className="py-8 sm:py-12 px-4 sm:px-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 break-words">
                Cada Conexión es una Oportunidad
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto break-words">
                He aprendido que la vida es demasiado corta para desperdiciar oportunidades de conectar con personas
                extraordinarias. Si llegaste hasta aquí, ya eres una de ellas.
              </p>
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-4 sm:p-6">
                <p className="text-green-200 font-semibold text-base sm:text-lg break-words">
                  "No importa si vienes con un proyecto, una idea, o simplemente curiosidad. Lo que importa es que
                  decidiste dar el primer paso para conectar."
                </p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">- Christian Ponce</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
