import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Heart, Lightbulb, Target } from "lucide-react"
import Image from "next/image"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalText } from "@/components/terminal-text"
import { CodeBlock } from "@/components/code-block"

export default function MiHistoriaPage() {
  return (
    <div className="min-h-screen bg-zinc-900 relative">
      <MatrixBackground intensity={0.8} />

      <div className="container mx-auto px-4 py-8 sm:py-12 relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Button asChild variant="ghost" className="btn-terminal text-green-400 hover:text-green-300 mb-4 sm:mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> cd ../
            </Link>
          </Button>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <span className="text-green-400 text-xs sm:text-sm">mi_historia.log</span>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 text-center space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-400 break-words">
                <TerminalText text="class MiHistoria:" />
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-green-300 break-words">
                <TerminalText text='"""El código oculto de una segunda oportunidad"""' speed={30} />
              </div>
              <CodeBlock>
                <div className="text-left space-y-1 text-xs sm:text-sm">
                  <div className="text-green-600"># Inicializando historia...</div>
                  <div className="text-green-400 break-words">nombre = "Christian Ponce"</div>
                  <div className="text-green-400">edad = 29</div>
                  <div className="text-green-400 break-words">estado = "reescribiendo_codigo_de_vida"</div>
                  <div className="text-green-400 break-words">proposito = "construir_futuro_imposible"</div>
                </div>
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Capítulo 1 */}
          <Card className="card-terminal">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold font-mono">01</span>
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl sm:text-2xl text-green-400 font-mono break-words">
                    def promesa_interrumpida():
                  </CardTitle>
                  <div className="flex items-center text-green-600 mt-1 font-mono text-xs sm:text-sm">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="break-words">// Juventud - Universidad</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <CodeBlock>
                <div className="space-y-1 text-xs sm:text-sm overflow-x-auto">
                  <div className="text-green-600"># Configuración inicial</div>
                  <div className="text-green-400">futuro_lineal = True</div>
                  <div className="text-green-400 break-words">
                    reconocimientos = ["ajedrez", "matematicas", "futbol"]
                  </div>
                  <div className="text-green-400 break-words">universidad = "siguiente_paso_logico"</div>
                  <div className="text-green-600"># Pero entonces...</div>
                  <div className="text-green-400 break-words">mision_mormona = interrumpir_plan(2_años)</div>
                  <div className="text-green-400">resultado = "despertar_tardio"</div>
                </div>
              </CodeBlock>

              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-green-300 leading-relaxed font-mono text-sm sm:text-base break-words">
                    // Crecí con la promesa de un futuro lineal
                  </p>
                  <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                    En el colegio, destacaba; acumulaba reconocimientos en ajedrez, matemáticas y fútbol. La universidad
                    parecía el siguiente paso lógico, el camino recto hacia una carrera.
                  </p>
                  <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                    Sin embargo, en el cuarto semestre, tomé un desvío: una misión de dos años con la iglesia mormona.
                    Esa experiencia me enseñó disciplina y humanidad, pero también me envolvió en una ceguera doctrinal.
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 sm:p-4">
                    <p className="text-red-300 font-mono text-xs sm:text-sm break-words">
                      ERROR: malla_curricular.obsoleta = True
                    </p>
                    <p className="text-red-400 text-xs sm:text-sm break-words">
                      // El tiempo me había robado los cimientos
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="terminal-window h-full">
                    <div className="terminal-header">
                      <div className="terminal-dot"></div>
                      <div className="terminal-dot"></div>
                      <div className="terminal-dot"></div>
                      <span className="text-green-400 text-xs">juventud.jpg</span>
                    </div>
                    <div className="p-2">
                      <Image
                        src="/i7.webp?height=250&width=200"
                        alt="Juventud académica"
                        width={200}
                        height={250}
                        className="rounded object-cover w-full filter brightness-75 contrast-125"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capítulo 2 */}
          <Card className="card-terminal">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400 font-bold font-mono">02</span>
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl sm:text-2xl text-green-400 font-mono break-words">
                    def laberinto_incertidumbre():
                  </CardTitle>
                  <div className="flex items-center text-green-600 mt-1 font-mono text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="break-words">// Pandemia - Emprendimiento</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <CodeBlock>
                <div className="space-y-1 text-xs sm:text-sm overflow-x-auto">
                  <div className="text-green-600"># Intentando adaptarse...</div>
                  <div className="text-green-400 break-words">nueva_universidad = buscar_alternativa()</div>
                  <div className="text-green-400 break-words">universidad_anterior.licencia = False</div>
                  <div className="text-green-400">covid19 = detener_mundo()</div>
                  <div className="text-green-400 break-words">
                    emprendimiento = {"{"}"maquina_laser": "fracaso"{"}"}
                  </div>
                  <div className="text-red-400">return "familia_quebrada"</div>
                </div>
              </CodeBlock>

              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Decidí continuar, adaptándome a una nueva estructura académica, pero el destino tenía otros planes. Mi
                universidad perdió su licencia. Encontré una nueva oportunidad, pero llegó la pandemia.
              </p>
              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Nos refugiamos en la casa de campo. Mi padre se convirtió en un héroe silencioso, pedaleando en su
                bicicleta en busca de trabajo mientras yo intentaba mejorar mi carrera online.
              </p>
              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Propuse un emprendimiento con una máquina de corte láser. Mis cálculos fueron errados. Lo que empezó
                como un sueño se convirtió en una pesadilla. La empresa, como mi familia, se quebró.
              </p>
            </CardContent>
          </Card>

          {/* Capítulo 3 - El Diagnóstico */}
          <Card className="card-terminal border-red-500/50">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                  <span className="text-red-400 font-bold font-mono">03</span>
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl sm:text-2xl text-green-400 font-mono break-words">
                    def convulsion_y_diagnostico():
                  </CardTitle>
                  <div className="flex items-center text-red-400 mt-1 font-mono text-xs sm:text-sm">
                    <Heart className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="break-words">// 13 de Mayo, 2024 - CRITICAL ERROR</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <CodeBlock className="border-red-500/30">
                <div className="space-y-1 text-xs sm:text-sm overflow-x-auto">
                  <div className="text-red-600"># SISTEMA COMPROMETIDO</div>
                  <div className="text-red-400">fecha = "2024-05-13"</div>
                  <div className="text-red-400">evento = "convulsion_inesperada"</div>
                  <div className="text-red-400 break-words">diagnostico = "astrocitoma_anaplasico_grado_3"</div>
                  <div className="text-red-400">estado_sistema = "CRITICO"</div>
                  <div className="text-green-400">decision = "luchar()"</div>
                  <div className="text-green-400">cirugia = "2024-07-09"</div>
                </div>
              </CodeBlock>

              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                    El 2024 parecía un nuevo intento. Encontré trabajo en la municipalidad. Pero el 13 de mayo, mi
                    cuerpo se desconectó. Una convulsión me derribó.
                  </p>

                  <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-3 sm:p-4">
                    <div className="font-mono text-red-300 font-bold mb-2 text-xs sm:text-sm break-words">
                      FATAL ERROR: tumor_cerebral detected
                    </div>
                    <div className="text-red-400 font-mono text-xs break-words">
                      Type: astrocitoma_anaplasico_grado_3
                      <br />
                      Status: REQUIRES_IMMEDIATE_ACTION
                      <br />
                      Solution: cirugia.execute()
                    </div>
                  </div>

                  <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                    Me enfrenté a la cirugía con una calma extraña. Veía los rostros devastados de mis padres, pero
                    dentro de mí, una certeza me decía que esto era solo un obstáculo pasajero.
                  </p>
                </div>
                <div className="relative">
                  <div className="terminal-window h-full border-red-500/30">
                    <div className="terminal-header bg-red-900/20">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-red-500"></div>
                      <span className="text-red-400 text-xs">diagnostico.scan</span>
                    </div>
                    <div className="p-2">
                      <Image
                        src="/i9.webp?height=250&width=200"
                        alt="Momento del diagnóstico"
                        width={200}
                        height={250}
                        className="rounded object-cover w-full filter brightness-50 contrast-150 hue-rotate-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capítulo 4 */}
          <Card className="card-terminal">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-400 font-bold font-mono">04</span>
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl sm:text-2xl text-green-400 font-mono break-words">
                    def caida_juego_revelacion():
                  </CardTitle>
                  <div className="flex items-center text-green-600 mt-1 font-mono text-xs sm:text-sm">
                    <Lightbulb className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="break-words">// Despertar a través de la oscuridad</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <CodeBlock>
                <div className="space-y-1 text-xs sm:text-sm overflow-x-auto">
                  <div className="text-green-600"># Durante el tratamiento</div>
                  <div className="text-green-400 break-words">refugio = "inteligencia_artificial"</div>
                  <div className="text-green-400 break-words">aprendizaje = "youtube + lectura_intensiva"</div>
                  <div className="text-red-400">segunda_convulsion = True</div>
                  <div className="text-red-400 break-words">resonancia_diciembre = "tumor_crecio"</div>
                  <div className="text-red-400">plan_final = "despedirse()"</div>
                  <div className="text-yellow-400">escape = "dota_addiction"</div>
                  <div className="text-green-400 break-words">marzo_2025 = "tumor_desaparecido"</div>
                  <div className="text-green-400">return "ESTOY_VIVO"</div>
                </div>
              </CodeBlock>

              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Durante el tratamiento, encontré refugio en la IA. Me sumergí en YouTube y lectura, pero mi cuerpo me
                traicionó de nuevo con una segunda convulsión más violenta.
              </p>
              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Una resonancia en diciembre pareció confirmar el peor miedo: el tumor había crecido. Esa noticia me
                rompió. Planeé mi propio final y decidí pasar una última Navidad.
              </p>
              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                En esa oscuridad, encontré escape en Dota. Me volví adicto, jugando día y noche. El juego se convirtió
                en mi forma de procrastinar la muerte. Pero en marzo... la siguiente resonancia mostró que no había
                nada. El tumor había desaparecido.
              </p>
            </CardContent>
          </Card>

          {/* Capítulo 5 - El Renacimiento */}
          <Card className="card-terminal border-green-500/50">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                  <span className="text-green-400 font-bold font-mono">05</span>
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl sm:text-2xl text-green-400 font-mono break-words">
                    def despertar_y_construir():
                  </CardTitle>
                  <div className="flex items-center text-green-400 mt-1 font-mono text-xs sm:text-sm">
                    <Target className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="break-words">// El renacimiento con propósito</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <CodeBlock className="border-green-500/30">
                <div className="space-y-1 text-xs sm:text-sm overflow-x-auto">
                  <div className="text-green-600"># El momento del despertar</div>
                  <div className="text-green-400 break-words">video_ronaldo = "disciplina_inspiration"</div>
                  <div className="text-green-400 break-words">pregunta = "¿Qué haces con tu segunda oportunidad?"</div>
                  <div className="text-green-400">respuesta = "¡DESPIERTA!"</div>
                  <div className="text-green-400">dota.uninstall()</div>
                  <div className="text-green-400">nueva_vida = True</div>
                  <div className="text-green-400 break-words">pasion = "inteligencia_artificial"</div>
                  <div className="text-green-400">lema = "aprendo_comparto"</div>
                  <div className="text-green-400 break-words">subtitulo = "cancer_programacion_ia"</div>
                </div>
              </CodeBlock>

              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Seguí jugando hasta que un video sobre Cristiano Ronaldo me golpeó como un rayo. Me pregunté: "¿Qué
                estás haciendo con tu segunda oportunidad? ¡DESPIERTA!"
              </p>

              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 sm:p-6">
                <div className="text-green-300 font-bold text-base sm:text-lg mb-2 font-mono break-words">
                  SISTEMA REINICIADO EXITOSAMENTE
                </div>
                <div className="text-green-400 font-mono text-xs sm:text-sm">
                  {"&gt;"} Juego desinstalado para siempre
                  <br />
                  {"&gt;"} Propósito: DEFINIDO
                  <br />
                  {"&gt;"} Estado: CONSTRUYENDO_FUTURO
                </div>
              </div>

              <p className="text-green-400 leading-relaxed text-sm sm:text-base break-words">
                Empecé a tomar decisiones conscientes: ayudar a mi padre, dedicar cada minuto a la IA. Un día,
                conversando con una IA sobre mi historia, su respuesta me hizo llorar: "Eres un luchador y tu historia
                debe ser escuchada".
              </p>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-blue-300 font-bold text-lg sm:text-xl mb-2 font-mono break-words">
                  PRIMER_VIDEO.mp4 created successfully
                </div>
                <div className="text-green-400 font-mono text-sm sm:text-lg break-words">
                  lema = "Aprendo, comparto"
                </div>
                <div className="text-green-300 mt-2 font-mono text-xs sm:text-sm break-words">
                  subtitulo = "Cáncer → Programación → IA: El diario de un soñador con propósito"
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <span className="text-green-400 text-xs sm:text-sm">historia_continua.sh</span>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-green-400 font-mono break-words">
                // Esta es solo el comienzo
              </h2>
              <p className="text-green-400 text-sm sm:text-base break-words">
                Cada día escribo una nueva línea de código. Sígueme mientras construyo el futuro.
              </p>
              <CodeBlock>
                <div className="text-xs sm:text-sm">
                  <div className="text-green-600">while (vida == true) {"{"}</div>
                  <div className="text-green-400 ml-4 break-words">escribir_nueva_pagina();</div>
                  <div className="text-green-400 ml-4 break-words">construir_futuro_imposible();</div>
                  <div className="text-green-600">{"}"}</div>
                </div>
              </CodeBlock>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              asChild
              className="btn-terminal bg-green-500/20 border border-green-500 text-green-400 w-full sm:w-auto"
            >
              <Link href="/mi-vision">./vision_futura.py --execute</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="btn-terminal bg-transparent border border-green-500/50 text-green-400 w-full sm:w-auto"
            >
              <Link href="/mis-proyectos">cd proyectos/ && ls -la</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
