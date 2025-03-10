"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Brain, Code, Lightbulb, Heart, Gamepad, Zap, Rocket } from "lucide-react"

export default function CursoIAProgramacion() {
  const [activeTab, setActiveTab] = useState("overview")
  console.log(activeTab)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Badge className="mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700">
              ¡Nuevo Curso!
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
              IA y Programación Web: <span className="block">Creando el Futuro</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Propuesta de curso para incentivar a jóvenes a aprender programación
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-sm bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-full shadow-sm">
                <Clock className="h-4 w-4 text-violet-600" />
                <span>3 meses (4-6 hrs/semana)</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-full shadow-sm">
                <Users className="h-4 w-4 text-violet-600" />
                <span>Para estudiantes de educación media</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
            <img
              src="https://res.cloudinary.com/dohtxxlbe/image/upload/v1740951112/40823b92-26e1-46c1-9765-1962af336de7.png"
              alt="IA y Programación"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-4 py-4">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-violet-200 dark:border-violet-800">
            <TabsList className="w-full justify-start bg-violet-100/50 dark:bg-violet-900/50">
              <TabsTrigger
                value="overview"
                className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
              >
                Descripción
              </TabsTrigger>
              <TabsTrigger
                value="modules"
                className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
              >
                Módulos
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
              >
                Proyectos
              </TabsTrigger>
              <TabsTrigger
                value="instructors"
                className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
              >
                Profe
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="pt-6 pb-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">
                    ¿De qué trata este curso?
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 text-lg">
                    Curso dirigido a estudiantes de educación media, diseñado para brindar una introducción previa a la
                    informática. A lo largo del curso, los participantes aprenderán conceptos básicos de programación
                    web y descubrirán cómo la inteligencia artificial puede mejorar sus habilidades como
                    desarrolladores.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-violet-800 dark:text-violet-300">Lo que aprenderás</h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    <li className="flex gap-2 bg-white/70 dark:bg-slate-800/70 p-3 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-fuchsia-600 shrink-0" />
                      <span>Fundamentos de programación que te servirán para cualquier lenguaje</span>
                    </li>
                    <li className="flex gap-2 bg-white/70 dark:bg-slate-800/70 p-3 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-fuchsia-600 shrink-0" />
                      <span>Cómo usar la IA para crear apps</span>
                    </li>
                    <li className="flex gap-2 bg-white/70 dark:bg-slate-800/70 p-3 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-fuchsia-600 shrink-0" />
                      <span>Desarrollo de aplicaciones web que puedes mostrar a tus amigos</span>
                    </li>
                    <li className="flex gap-2 bg-white/70 dark:bg-slate-800/70 p-3 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-fuchsia-600 shrink-0" />
                      <span>Cómo crear proyectos que ayuden a resolver problemas reales</span>
                    </li>
                    <li className="flex gap-2 bg-white/70 dark:bg-slate-800/70 p-3 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-fuchsia-600 shrink-0" />
                      <span>Trabajo en equipo para crear soluciones tecnológicas</span>
                    </li>
                    <li className="flex gap-2 bg-white/70 dark:bg-slate-800/70 p-3 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-fuchsia-600 shrink-0" />
                      <span>Cómo presentar tus ideas y proyectos como un profesional</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-white to-violet-50 dark:from-slate-900 dark:to-violet-950 border-violet-200 dark:border-violet-800 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-violet-800 dark:text-violet-300">Detalles del curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1 text-violet-700 dark:text-violet-400">Duración</h4>
                    <p className="text-slate-700 dark:text-slate-300">3 meses (4-6 horas semanales)</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-violet-700 dark:text-violet-400">Para quién es</h4>
                    <p className="text-slate-700 dark:text-slate-300">Estudiantes de enseñanza media</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-violet-700 dark:text-violet-400">Requisitos</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      ¡Solo necesitas curiosidad y ganas de aprender!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-violet-700 dark:text-violet-400">Incluye</h4>
                    <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                      <li className="flex items-center gap-2">
                        <Gamepad className="h-4 w-4 text-fuchsia-600" />
                        Actividades interactivas
                      </li>
                      <li className="flex items-center gap-2">
                        <Rocket className="h-4 w-4 text-fuchsia-600" />
                        Proyectos prácticos
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-fuchsia-600" />
                        Contenido universitario
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-fuchsia-600" />
                        Herramientas web gratuitas
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="modules" className="pt-6 pb-8">
            <h2 className="text-2xl font-bold mb-6 text-violet-800 dark:text-violet-300">
              Estructura del curso (3 meses)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-violet-200 dark:border-violet-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-fuchsia-900/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white">
                        1
                      </span>
                      Introducción a la Programación y la IA
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-white/80 dark:bg-slate-800/80 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700"
                    >
                      Mes 1
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 text-violet-700 dark:text-violet-400">¿Qué haremos?</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>
                        Reflexionaremos sobre qué es la programación, qué te gustaría crear, y si la IA reemplazará a
                        los programadores (¡spoiler: no lo hará!)
                      </span>
                    </li>
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>
                        Aprenderemos los conceptos básicos de programación y descubriremos cómo la IA está transformando
                        el mundo digital
                      </span>
                    </li>
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>
                        Discutiremos si la programación es difícil o fácil, y cómo la IA puede ser tu aliada para crear
                        cosas increíbles
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-violet-200 dark:border-violet-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-fuchsia-900/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white">
                        2
                      </span>
                      Buenas Prácticas y Herramientas de IA
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-white/80 dark:bg-slate-800/80 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700"
                    >
                      Mes 2
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 text-violet-700 dark:text-violet-400">¿Qué haremos?</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Code className="h-5 w-5 text-cyan-500 shrink-0" />
                      <span>
                        Aprenderemos a escribir código limpio y eficiente que cualquiera pueda entender (¡incluso tú
                        mismo en el futuro!)
                      </span>
                    </li>
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Code className="h-5 w-5 text-cyan-500 shrink-0" />
                      <span>
                        Exploraremos herramientas de IA que te ayudarán a crear aplicaciones web más rápido y mejor
                      </span>
                    </li>
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Code className="h-5 w-5 text-cyan-500 shrink-0" />
                      <span>
                        Descubriremos cómo usar la IA para mejorar la experiencia de los usuarios en tus aplicaciones
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-violet-200 dark:border-violet-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-fuchsia-900/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white">
                        3
                      </span>
                      Proyecto con Impacto Social
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-white/80 dark:bg-slate-800/80 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700"
                    >
                      Mes 3 (Parte 1)
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 text-violet-700 dark:text-violet-400">¿Qué haremos?</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Users className="h-5 w-5 text-green-500 shrink-0" />
                      <span>
                        ¡Trabajaremos en equipos para crear un proyecto que pueda ayudar a resolver un problema real en
                        tu comunidad!
                      </span>
                    </li>
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Users className="h-5 w-5 text-green-500 shrink-0" />
                      <span>
                        Aprenderemos a colaborar, dividir tareas y combinar nuestras habilidades para crear algo
                        increíble
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-violet-200 dark:border-violet-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-fuchsia-900/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white">
                        4
                      </span>
                      Presentación de Proyectos
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-white/80 dark:bg-slate-800/80 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700"
                    >
                      Mes 3 (Parte 2)
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 text-violet-700 dark:text-violet-400">¿Qué haremos?</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Brain className="h-5 w-5 text-pink-500 shrink-0" />
                      <span>
                        ¡Presentaremos nuestros proyectos como verdaderos profesionales! Mostraremos cómo usamos la IA
                        para crear soluciones innovadoras
                      </span>
                    </li>
                    <li className="flex gap-2 bg-violet-50/50 dark:bg-violet-900/20 p-3 rounded-lg">
                      <Brain className="h-5 w-5 text-pink-500 shrink-0" />
                      <span>
                        Reflexionaremos sobre cómo nuestros proyectos pueden ayudar a resolver problemas reales y qué
                        hemos aprendido durante el curso
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="pt-6 pb-8">
            <h2 className="text-2xl font-bold mb-6 text-violet-800 dark:text-violet-300">
              Proyectos con Impacto Social
            </h2>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              Ideas de proyectos con impacto social que los estudiantes pueden elegir:
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-red-400 to-pink-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <Heart className="h-5 w-5 text-red-500" />
                    Salud 🏥
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>📱 MediRural:</strong> Una app donde los usuarios pueden registrar síntomas comunes y
                    recibir consejos básicos de salud. También incluye una agenda comunitaria para coordinar visitas de
                    médicos a zonas rurales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                    Educación 📚
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>🎮 EduGameQuest:</strong> Un juego estilo RPG donde los estudiantes avanzan respondiendo
                    preguntas y completando retos educativos. Se pueden desbloquear personajes y recompensas según el
                    progreso.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-500"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m16 12-4-4-4 4M12 8v8" />
                    </svg>
                    Inclusión Social 👐
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>🔠 SeñasGo:</strong> Una app con un diccionario interactivo de lenguaje de señas, con videos
                    cortos y minijuegos para aprender de forma fácil y rápida.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M2 12h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2h2" />
                      <path d="M16 8h-2a2 2 0 0 0-2 2v4" />
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M18 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                      <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                    </svg>
                    Medio Ambiente 🌿
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>🚯 EcoPuntos:</strong> Una app de retos ecológicos donde los usuarios pueden ganar puntos
                    por reciclar, ahorrar agua o plantar árboles. Los puntos pueden canjearse por insignias o
                    reconocimientos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    Seguridad Pública 🚸
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>🚦 Camino Seguro:</strong> Una app en la que los estudiantes marcan rutas seguras para ir y
                    volver de la escuela, compartiendo alertas sobre calles peligrosas o poco iluminadas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-indigo-400 to-violet-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-500"
                    >
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Bienestar Social ❤️
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>🤝 VoluntApp:</strong> Una plataforma sencilla donde organizaciones pueden publicar
                    necesidades y los estudiantes pueden inscribirse para ayudar en proyectos comunitarios.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border-violet-200 dark:border-violet-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cyan-500"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1" />
                      <rect width="7" height="5" x="14" y="3" rx="1" />
                      <rect width="7" height="9" x="14" y="12" rx="1" />
                      <rect width="7" height="5" x="3" y="16" rx="1" />
                    </svg>
                    Empleabilidad 💼
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    <strong>🎭 Descubre tu Talento:</strong> Un test interactivo donde los estudiantes exploran
                    diferentes profesiones mediante juegos de simulación y reciben recomendaciones de carreras afines.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="instructors">
            {/* Professional Profile Section */}
            <section className="container mx-auto px-4 py-11 md:py-22">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-[2fr,3fr] gap-8 items-center">
                  {/* Profile Image and Basic Info */}
                  <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
                    <div className="relative group">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-violet-200 dark:border-violet-700 transition-transform duration-300 ease-in-out group-hover:scale-105">
                        <img
                          src="https://res.cloudinary.com/dohtxxlbe/image/upload/v1722110763/Imagen_de_WhatsApp_2024-07-27_a_las_16.04.35_8df2622b_zlhaog.jpg"
                          alt="Daniel Duran Saavedra"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Full Stack Dev
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-violet-800 dark:text-violet-300">Daniel Duran Saavedra</h2>
                      <p className="text-fuchsia-600 dark:text-fuchsia-400 font-medium">Ingeniero Informático, PUCV</p>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="group relative border-2 d-flex flex-col border-violet-300 hover:border-violet-500 hover:bg-violet-50 dark:border-violet-700 dark:hover:border-violet-500 dark:hover:bg-violet-900/30"
                      >
                        <a
        href="https://www.linkedin.com/in/daniel-dur%C3%A1n-6788382b7/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-violet-600 transition-transform duration-300 hover:scale-110"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
        <span className="text-primary">LinkedIn</span>
      </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="group relative border-2 border-violet-300 hover:border-violet-500 hover:bg-violet-50 dark:border-violet-700 dark:hover:border-violet-500 dark:hover:bg-violet-900/30"
                      >
                        <a href="https://danieldurans.vercel.app" className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-violet-600 transition-transform duration-300 group-hover:scale-110"
                          >
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                            <path d="M18 14h-8" />
                            <path d="M15 18h-5" />
                            <path d="M10 6h8v4h-8V6Z" />
                          </svg>
                          <span className="text-primary">Portafolio</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Career Information */}
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 space-y-6 shadow-lg backdrop-blur-sm border border-violet-100 dark:border-violet-800">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-violet-800 dark:text-violet-300">Sobre mí</h3>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Apasionado por la programación web y la innovación tecnológica. Como Full Stack Developer en
                        Subcargo, me especializo en crear soluciones robustas y escalables que combinan lo mejor del
                        desarrollo frontend y backend.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-violet-800 dark:text-violet-300">
                        Experiencia y Habilidades
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-violet-700 dark:text-violet-400">Frontend</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              React
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              Next.js
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              TypeScript
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              Tailwind
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-violet-700 dark:text-violet-400">Backend</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              Node.js
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              Python
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              SQL
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-slate-900/50">
                              APIs
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-violet-800 dark:text-violet-300">Educación</h3>
                      <div className="bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 p-4 rounded-lg">
                        <h4 className="font-medium text-violet-800 dark:text-violet-300">
                          Pontificia Universidad Católica de Valparaíso
                        </h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300">Ingeniería Informática</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

