import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Zap, Target } from "lucide-react"
import Image from "next/image"
import { TypingEffect } from "@/components/typing-effect"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalText } from "@/components/terminal-text"
import { CodeBlock } from "@/components/code-block"

export default function HomePage() {
  const heroPhases = [
    "ayudar_a_mi_especie()",
    "construir_lo_imposible()",
    "cuestionar_limites_vida()",
    "encender_otras_chispas()",
    "dejar_mapa_en_oscuridad()",
    "reescribir_mi_codigo()",
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixBackground intensity={0.8} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 py-12 sm:py-20 lg:py-32" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-slide-up">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                  <span className="text-green-400 text-xs sm:text-sm">christian_ponce.exe</span>
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="text-green-400 text-xs sm:text-sm">
                    <span className="text-green-600">$</span> ./survival_mode --execute
                  </div>
                  <div className="text-green-400 text-xs sm:text-sm break-words">
                    <span className="text-green-600">&gt;</span> Inicializando segunda_oportunidad.py...
                  </div>
                  <div className="text-green-400 text-xs sm:text-sm">
                    <span className="text-green-600">&gt;</span> Estado: SOBREVIVIDO
                  </div>
                  <div className="text-green-400 text-xs sm:text-sm break-words">
                    <span className="text-green-600">&gt;</span> Objetivo:
                    <TypingEffect phrases={heroPhases} className="text-green-300 ml-2" />
                  </div>
                </div>
              </div>

              <CodeBlock>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="text-green-600">// Mi historia en código</div>
                  <div className="text-green-400">
                    <span className="text-green-600">const</span> christian = {"{"}
                  </div>
                  <div className="text-green-400 ml-4 break-words">
                    edad: <span className="text-green-300">29</span>,
                  </div>
                  <div className="text-green-400 ml-4 break-words">
                    estado: <span className="text-green-300">"programando_nueva_vida"</span>,
                  </div>
                  <div className="text-green-400 ml-4 break-words">
                    mision: <span className="text-green-300">"construir_el_futuro"</span>
                  </div>
                  <div className="text-green-400">{"}"}</div>
                </div>
              </CodeBlock>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="btn-terminal bg-transparent border border-green-500 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
                >
                  <Link href="/mi-historia">
                    <Code className="mr-2 w-4 h-4" />
                    <span className="break-words">./mi_historia.sh</span> <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="btn-terminal bg-transparent border border-green-500/50 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
                >
                  <Link href="/mi-vision">
                    <Zap className="mr-2 w-4 h-4" />
                    <span className="break-words">./vision_futura.py</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                  <span className="text-green-400 text-xs sm:text-sm">profile.webp</span>
                </div>
                <div className="p-4">
                  <div className="relative w-full h-64 sm:h-96 lg:h-[400px] rounded-lg overflow-hidden border border-green-500/30">
                    <Image
                      src="/i6.webp?height=400&width=350"
                      alt="Christian Ponce - Soñador con Propósito"
                      fill
                      className="object-cover filter brightness-75 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-green-400 font-mono text-xs sm:text-sm">
                        <div>Status: ONLINE</div>
                        <div>Mode: CONSTRUCTOR</div>
                        <div>Purpose: DEFINED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-12 sm:py-20 relative" style={{ zIndex: 5 }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <TerminalText text="// Módulos disponibles" className="text-green-600 text-lg sm:text-xl" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="card-terminal">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 animate-pulse flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-green-400 break-words">mi_historia.md</h3>
                    <div className="text-green-600 text-xs sm:text-sm font-mono">class Supervivencia</div>
                  </div>
                </div>
                <CodeBlock className="mb-4 text-xs sm:text-sm">
                  <div>tumor_cerebral = True</div>
                  <div>resultado = "SUPERADO"</div>
                  <div>nuevo_proposito = "ACTIVADO"</div>
                </CodeBlock>
                <Button
                  asChild
                  variant="ghost"
                  className="text-green-400 hover:text-green-300 p-0 btn-terminal w-full sm:w-auto"
                >
                  <Link href="/mi-historia">
                    <span className="break-words">./ejecutar --historia</span> <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-terminal">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 animate-pulse flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-green-400 break-words">vision_futura.py</h3>
                    <div className="text-green-600 text-xs sm:text-sm font-mono break-words">
                      import kardashev_scale
                    </div>
                  </div>
                </div>
                <CodeBlock className="mb-4 text-xs sm:text-sm">
                  <div className="break-words">def trascender_limites():</div>
                  <div className="ml-4">humanidad.evolucionar()</div>
                  <div className="ml-4">return "FUTURO_POSIBLE"</div>
                </CodeBlock>
                <Button
                  asChild
                  variant="ghost"
                  className="text-green-400 hover:text-green-300 p-0 btn-terminal w-full sm:w-auto"
                >
                  <Link href="/mi-vision">
                    <span className="break-words">python vision_futura.py</span> <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-terminal">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 animate-pulse flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-green-400 break-words">proyectos/</h3>
                    <div className="text-green-600 text-xs sm:text-sm font-mono break-words">SaaS chatbots.js</div>
                  </div>
                </div>
                <CodeBlock className="mb-4 text-xs sm:text-sm">
                  <div>status: "EN_DESARROLLO"</div>
                  <div>progreso: 85%</div>
                  <div>tiempo_aprendizaje: "2_meses"</div>
                </CodeBlock>
                <Button
                  asChild
                  variant="ghost"
                  className="text-green-400 hover:text-green-300 p-0 btn-terminal w-full sm:w-auto"
                >
                  <Link href="/mis-proyectos">
                    <span className="break-words">cd proyectos/ && ls -la</span> <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 relative" style={{ zIndex: 5 }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="terminal-window mb-6 sm:mb-8">
              <div className="terminal-header">
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
                <span className="text-green-400 text-xs sm:text-sm">invitacion.sh</span>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xl sm:text-2xl font-bold text-green-400 break-words">
                  <TerminalText text="// Únete a mi viaje de código" />
                </div>
                <div className="text-green-400 text-sm sm:text-base break-words">
                  Cada día es una nueva línea de código en el diario de un soñador con propósito.
                </div>
                <CodeBlock>
                  <div className="text-xs sm:text-sm">
                    <div className="text-green-600">// Mientras (vida == true) {"{"} </div>
                    <div className="text-green-400 ml-4">aprender();</div>
                    <div className="text-green-400 ml-4">compartir();</div>
                    <div className="text-green-400 ml-4 break-words">construir_futuro();</div>
                    <div className="text-green-600">{"}"}</div>
                  </div>
                </CodeBlock>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                asChild
                className="btn-terminal bg-green-500/20 border border-green-500 text-green-400 hover:bg-green-500/30 w-full sm:w-auto"
              >
                <Link href="/contacto">
                  <Target className="mr-2 w-4 h-4" />
                  <span className="break-words">./conectar.sh --conmigo</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-terminal bg-transparent border border-green-500/50 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
              >
                <Link href="https://tiktok.com/@christianponce.me" target="_blank">
                  <Code className="mr-2 w-4 h-4" />
                  <span className="break-words">open tiktok</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-terminal bg-transparent border border-green-500/50 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
              >
                <Link href="https://www.facebook.com/profile.php?id=61576684845974" target="_blank">
                  <Code className="mr-2 w-4 h-4" />
                  <span className="break-words">open facebook</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-terminal bg-transparent border border-green-500/50 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
              >
                <Link href="https://www.youtube.com/@christianponceme" target="_blank">
                  <Code className="mr-2 w-4 h-4" />
                  <span className="break-words">open youtube</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-terminal bg-transparent border border-green-500/50 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
              >
                <Link href="https://www.instagram.com/christianponce.me/" target="_blank">
                  <Code className="mr-2 w-4 h-4" />
                  <span className="break-words">open instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
