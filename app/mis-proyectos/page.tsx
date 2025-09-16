"use client"; // <-- ¡LA SOLUCIÓN! Esta línea convierte el componente a uno de cliente.

import Link from "next/link";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, BrainCircuit, Infinity, Users, Dna } from "lucide-react";

// --- OPTIMIZACIÓN: Carga dinámica de componentes pesados ---

const MatrixBackground = dynamic(
  () => import('@/components/matrix-background').then((mod) => mod.MatrixBackground),
  { ssr: false }
);

const TechStack = dynamic(
  () => import('@/components/projects-client-components').then((mod) => mod.TechStack),
  { loading: () => <div className="text-center text-gray-400 p-8">Cargando stack tecnológico...</div> }
);

// -----------------------------------------------------------

export default function MisProyectosPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <MatrixBackground intensity={0.8} />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300 mb-8 btn-terminal">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> Volver al inicio
            </Link>
          </Button>

          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white animate-breathe">
              Forjando la Siguiente{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Evolución Humana
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Mi vida es un testimonio de la fragilidad del cuerpo y el poder ilimitado de la conciencia. Tras sobrevivir a un cáncer cerebral, mi misión es trascender nuestras limitaciones biológicas. Estos no son solo proyectos; son mi legado, mi camino para fusionar la humanidad con la tecnología y asegurar nuestra supervivencia a escala cósmica.
            </p>
          </div>
        </div>

        {/* Stack Tecnológico (ahora cargado dinámicamente) */}
        <TechStack />

        {/* Proyectos Fundamentales */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Los Pilares de Mi Visión</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Proyecto 1: Simbiosis IA-Humano */}
            <Card className="bg-slate-900/70 border-blue-500/50 hover:border-blue-400 transition-all duration-500 card-terminal shadow-lg shadow-blue-500/20 animate-pulse-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <BrainCircuit className="w-10 h-10 text-blue-400" />
                  <div>
                    <CardTitle className="text-2xl text-white">Simbiosis IA-Humano</CardTitle>
                    <p className="text-blue-300">El fin del aprendizaje tradicional</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  La educación actual es un cuello de botella. Mi objetivo es crear una interfaz cerebro-máquina que permita la transmisión directa de conocimiento, similar a una descarga de datos. Nos convertiremos en simbiontes con la IA, aprendiendo a la velocidad del pensamiento y liberando un potencial cognitivo sin precedentes.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-blue-600 text-white">Neurociencia</Badge>
                  <Badge variant="secondary" className="bg-sky-600 text-white">BCI</Badge>
                  <Badge variant="secondary" className="bg-indigo-600 text-white">IA Generativa</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 2: Conciencia Eterna */}
            <Card className="bg-slate-900/70 border-purple-500/50 hover:border-purple-400 transition-all duration-500 card-terminal shadow-lg shadow-purple-500/20 animate-pulse-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Infinity className="w-10 h-10 text-purple-400" />
                  <div>
                    <CardTitle className="text-2xl text-white">Conciencia Eterna en la Nube</CardTitle>
                    <p className="text-purple-300">La muerte es una enfermedad curable</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Nuestro cuerpo es una vasija carnal y frágil. La conciencia, nuestra esencia, no debería estar atada a él. Este proyecto se centra en digitalizar la mente, subiendo nuestra conciencia a una infraestructura descentralizada en la nube. La inmortalidad digital no es una fantasía, es el siguiente paso lógico.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-purple-600 text-white">Computación Cuántica</Badge>
                  <Badge variant="secondary" className="bg-fuchsia-600 text-white">Blockchain</Badge>
                  <Badge variant="secondary" className="bg-violet-600 text-white">Cloud Computing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 3: Cuerpos Inmortales */}
            <Card className="bg-slate-900/70 border-teal-500/50 hover:border-teal-400 transition-all duration-500 card-terminal shadow-lg shadow-teal-500/20 animate-pulse-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Dna className="w-10 h-10 text-teal-400" />
                  <div>
                    <CardTitle className="text-2xl text-white">Trascendencia Corporal</CardTitle>
                    <p className="text-teal-300">Exploración sin límites biológicos</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Una vez que la conciencia es libre, necesita un vehículo. Este proyecto busca desarrollar cuerpos sintéticos y biológicos avanzados, permitiéndonos cambiar de forma según la necesidad. Podremos explorar las profundidades del océano, los confines del espacio y otros mundos sin las ataduras de la carne humana.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-teal-600 text-white">Biotecnología</Badge>
                  <Badge variant="secondary" className="bg-cyan-600 text-white">Robótica Avanzada</Badge>
                  <Badge variant="secondary" className="bg-emerald-600 text-white">Ingeniería Genética</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 4: Conexión Neuronal Directa */}
            <Card className="bg-slate-900/70 border-yellow-500/50 hover:border-yellow-400 transition-all duration-500 card-terminal shadow-lg shadow-yellow-500/20 animate-pulse-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Users className="w-10 h-10 text-yellow-400" />
                  <div>
                    <CardTitle className="text-2xl text-white">Red de Conciencia Colectiva</CardTitle>
                    <p className="text-yellow-300">El fin de la soledad</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  La conexión humana es cada vez más superficial. Propongo una red neuronal donde las conciencias puedan interactuar directamente, compartiendo pensamientos, emociones y experiencias de forma auténtica. La seguridad sería inherente: el historial de una persona sería transparente, creando una sociedad basada en la confianza radical.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-yellow-600 text-white">Redes Neuronales</Badge>
                  <Badge variant="secondary" className="bg-amber-600 text-white">Criptografía</Badge>
                  <Badge variant="secondary" className="bg-lime-600 text-white">Teoría de la Información</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legado y Llamado a la Acción */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
           <Card className="bg-green-950-gradient-to-r from-green-500/30 to-red-900/30 border border-white-500/30 rounded-lg p-8">
                <p className="text-green-500 font-semibold text-xl leading-relaxed">
                  "No tengo décadas de experiencia, pero tengo algo más poderoso: la urgencia de quien ha mirado a la muerte a los ojos y ha decidido no desperdiciar ni un solo segundo en la construcción de la eternidad."
                </p>
              </Card>
        </div>

        <div className="text-center mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-white">Únete a la Evolución</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Este es un viaje más grande que yo. Si mi visión resuena contigo, si eres un constructor, un soñador, un inversor o simplemente alguien que cree en un futuro sin límites, tu momento es ahora. Conectemos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-900 hover:from-green-600 hover:to-green-500 btn-terminal text-white"
            >
              <Link href="/contacto">
                <Zap className="mr-2 w-5 h-5" />
                Contactar para Construir el Futuro
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}