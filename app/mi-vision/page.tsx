import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, Brain, Rocket, Eye, Target } from "lucide-react"
import Image from "next/image"
import { MatrixBackground } from "@/components/matrix-background"

export default function MiVisionPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixBackground intensity={0.8} />
      <div className="container mx-auto px-4 py-12 relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="ghost" className="text-purple-400 hover:text-purple-300 mb-6 btn-terminal">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> Volver al inicio
            </Link>
          </Button>

          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white animate-breathe">
              Soñando con las{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 holographic animate-pulse">
                Escalas de Kardashev
              </span>{" "}
              y Más Allá
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Mi visión del futuro no es solo optimista, es necesaria. Creo en un mañana donde la humanidad trasciende
              sus limitaciones actuales y se convierte en una civilización verdaderamente cósmica.
            </p>
          </div>
        </div>

        {/* Vision Cards */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Energía y Planeta */}
          <Card className="card-terminal border-green-500/50 hover:border-green-400 transition-all duration-500 shadow-lg shadow-green-500/20 animate-pulse-border">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-white">Energía y Planeta</CardTitle>
                  <p className="text-green-200">Optimizando nuestro hogar cósmico</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Mi primera meta es ayudar a la humanidad a optimizar el uso de la energía solar y mejorar la salud
                    de nuestro planeta. Inspirado en la Escala de Kardashev, creo que debemos dominar completamente la
                    energía de nuestra estrella antes de pensar en expandirnos.
                  </p>
                  <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-200 font-semibold mb-2">Objetivos Concretos:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Desarrollar IA para optimización energética planetaria</li>
                      <li>• Crear sistemas de distribución inteligente de energía solar</li>
                      <li>• Implementar soluciones de almacenamiento energético avanzado</li>
                      <li>• Restaurar ecosistemas usando tecnología y datos</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/i0.webp?height=300&width=400"
                    alt="Energía solar planetaria"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Simbiosis con la IA */}
          <Card className="card-terminal border-blue-500/50 hover:border-blue-400 transition-all duration-500 shadow-lg shadow-blue-500/20 animate-pulse-border">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-white">Simbiosis con la IA</CardTitle>
                  <p className="text-blue-200">Colaboración, no competencia</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <Image
                    src="/i2.webp?height=300&width=400"
                    alt="Simbiosis humano-IA"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Creo firmemente en un futuro donde los humanos y la inteligencia artificial colaboren como
                    simbiontes para acelerar el progreso. No se trata de que la IA nos reemplace, sino de que trabajemos
                    juntos para superar las limitaciones de ambos.
                  </p>
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-200 font-semibold mb-2">Mi Visión de la Simbiosis:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• IA que amplifica la creatividad humana</li>
                      <li>• Sistemas que aprenden de nuestras emociones y intuición</li>
                      <li>• Colaboración en tiempo real para resolver problemas complejos</li>
                      <li>• Interfaces cerebro-computadora éticas y accesibles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trascendencia del Cuerpo */}
          <Card className="card-terminal border-purple-500/50 hover:border-purple-400 transition-all duration-500 shadow-lg shadow-purple-500/20 animate-pulse-border">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-white">La Trascendencia del Cuerpo</CardTitle>
                  <p className="text-purple-200">Preservando lo esencial</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Mi experiencia con el tumor cerebral me enseñó algo fundamental: somos más que nuestro cuerpo. Creo
                    que el futuro de la conciencia no depende de un cuerpo físico, sino de la preservación de lo más
                    importante: el cerebro y la mente.
                  </p>
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="text-purple-200 font-semibold mb-2">Explorando Posibilidades:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Preservación digital de la conciencia</li>
                      <li>• Cuerpos robóticos como vehículos temporales</li>
                      <li>• Exploración espacial sin limitaciones biológicas</li>
                      <li>• Continuidad de la experiencia humana más allá de la muerte</li>
                    </ul>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    No se trata de abandonar nuestra humanidad, sino de expandir las posibilidades de lo que significa
                    ser humano en un universo infinito.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/i3.webp?height=300&width=400"
                    alt="Trascendencia digital"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Manifiesto */}
        <div className="mt-20">
          <Card className="card-terminal border-orange-500/50 hover:border-orange-400 transition-all duration-500 shadow-lg shadow-orange-500/20 animate-breathe">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-4xl text-white">Manifiesto de un Soñador Consciente</CardTitle>
              <p className="text-orange-200 text-lg">Mi filosofía personal nacida de la experiencia</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">Soy consciente de nuestra fragilidad.</strong> Somos materia
                      terrestre, finitos, y nuestro cuerpo es un vehículo temporal que apenas nos permite soñar con
                      explorar las estrellas.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">
                        Soy consciente de que el pensamiento es un producto de nuestro entorno,
                      </strong>
                      creando desigualdades que debemos esforzarnos por comprender y superar.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">
                        Soy consciente de la herida que le infligimos a nuestro planeta,
                      </strong>
                      un átomo diminuto en la inmensidad del cosmos, actuando por un instinto de supervivencia que nos
                      ciega.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">Soy consciente del vasto océano de conocimiento</strong> que
                      apenas podemos rozar como especie y de la vida no humana a la que a menudo negamos su derecho a
                      existir.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">
                        Soy consciente de que somos pocos los que vemos el destino que parece inevitable,
                      </strong>
                      pero esta conciencia no me paraliza.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-lg p-4">
                    <p className="text-orange-200 leading-relaxed font-semibold">
                      Al contrario, es el combustible que me impulsa cada mañana a intentar cambiar el rumbo, a
                      construir un futuro donde la extinción no sea nuestra única opción.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Misión y Visión */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Card className="card-terminal border-blue-500/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-blue-400" />
                <CardTitle className="text-2xl text-white">Mi Misión</CardTitle>
              </div>
              <p className="text-blue-200">Lo que hago hoy</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Documentar mi viaje diario de aprendizaje en programación e inteligencia artificial, compartiendo
                conocimiento de manera transparente y humana. Mi objetivo es inspirar a otros a través de mi historia de
                resiliencia y demostrar que es posible construir un futuro tecnológico y con propósito, sin importar los
                obstáculos.
              </p>
            </CardContent>
          </Card>

          <Card className="card-terminal border-purple-500/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Rocket className="w-8 h-8 text-purple-400" />
                <CardTitle className="text-2xl text-white">Mi Visión</CardTitle>
              </div>
              <p className="text-purple-200">El futuro que quiero construir</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Ser un catalizador para un futuro en el que la humanidad trascienda sus limitaciones biológicas y
                planetarias. Aspiro a contribuir en la creación de una simbiosis real entre humanos e IA, optimizar el
                uso de la energía a escala planetaria y explorar la posibilidad de una conciencia que no dependa de un
                cuerpo físico, asegurando que nuestro legado como especie no tenga fin.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-white">El futuro no es inevitable, es una elección</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada línea de código que escribo, cada proyecto que construyo, es un voto por el futuro que quiero ver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-terminal"
            >
              <Link href="/mis-proyectos">Ver Cómo Construyo el Futuro</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white bg-transparent btn-terminal"
            >
              <Link href="/contacto">Únete a Mi Visión</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
