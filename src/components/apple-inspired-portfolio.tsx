import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { ChevronRight, Linkedin, Github, Instagram, Mail, Download, Home, User, Folder, Cpu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import proyecto2 from '@/assets/kanban.png'
import daniel from '@/assets/daniel.png'
import proyecto1 from '@/assets/proyecto1.jpg'
import proyecto3 from '@/assets/prepaes.png'
import proyecto4 from '@/assets/notas.png'
import proyecto5 from '@/assets/harvard.png'
import proyecto6 from '@/assets/subcargo.png'
import proyecto7 from '@/assets/minecraft.png'
import proyecto8 from '@/assets/deseos.png'
import star from '@/assets/star.gif'
import spiderman from '@/assets/spiderman.png'
import cv from '@/assets/cv.pdf'
import javascript from '@/assets/javascript.png'
import angularjs from '@/assets/angularjs.png'
import react from '@/assets/react.png'
import nodejs from '@/assets/nodejs.png'
import python from '@/assets/python.png'
import sql from '@/assets/sql.png'
import git from '@/assets/git.png'        
import DinoGame from './dinoGame'

export function AppleInspiredPortfolioComponent() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isMobile, setIsMobile] = useState(false);
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
 const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null)
 type Question = {
  question: string,
  options: string[],
  correctIndex: number
}

// Definimos preguntas por habilidad
const quizData: Record<string, Question[]> = {
  JavaScript: [
    {
      question: "¿Qué es una closure en JavaScript?",
      options: [
        "Una función que recuerda su contexto léxico",
        "Una variable global",
        "Un tipo de dato primitivo",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Para qué sirve 'use strict'?",
      options: [
        "Evitar errores silenciosos y malas prácticas",
        "Hacer que el código corra más rápido",
        "Declarar variables globales automáticamente",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Cuál es el resultado de '2' + 2 en JavaScript?",
      options: ["'4'", "'22'", "4"],
      correctIndex: 1,
    },
  ],
  React: [
    {
      question: "¿Qué es un Hook en React?",
      options: [
        "Una función para manejar estado y ciclo de vida en componentes funcionales",
        "Un componente especial de React",
        "Una librería externa",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Qué hace useState?",
      options: [
        "Permite agregar estado a componentes funcionales",
        "Maneja rutas en React",
        "Renderiza JSX",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Qué es JSX?",
      options: ["Una sintaxis para escribir HTML en JavaScript", "Un tipo de CSS", "Una base de datos"],
      correctIndex: 0,
    },
  ],
  Nodejs: [
    {
      question: "¿Qué es Node.js?",
      options: [
        "Un entorno para ejecutar JavaScript en el servidor",
        "Una librería para el frontend",
        "Un sistema operativo",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Qué módulo se usa para manejar archivos en Node.js?",
      options: ["fs", "http", "path"],
      correctIndex: 0,
    },
    {
      question: "¿Qué es npm?",
      options: ["Un gestor de paquetes para Node.js", "Un framework", "Un editor de código"],
      correctIndex: 0,
    },
  ],
  Python: [
    {
      question: "¿Cómo se declara una función en Python?",
      options: ["def mi_funcion():", "function mi_funcion(){}", "func mi_funcion()"],
      correctIndex: 0,
    },
    {
      question: "¿Para qué sirve la indentación en Python?",
      options: ["Define bloques de código", "No tiene importancia", "Solo es estilo"],
      correctIndex: 0,
    },
    {
      question: "¿Cuál es la extensión usual de archivos Python?",
      options: [".py", ".js", ".java"],
      correctIndex: 0,
    },
  ],
  SQL: [
    {
      question: "¿Qué comando se usa para obtener datos en SQL?",
      options: ["SELECT", "INSERT", "UPDATE"],
      correctIndex: 0,
    },
    {
      question: "¿Qué significa SQL?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Sequential Query List",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Cuál sentencia elimina datos?",
      options: ["DELETE", "DROP", "REMOVE"],
      correctIndex: 0,
    },
  ],
  Git: [
    {
      question: "¿Qué comando crea un repositorio Git nuevo?",
      options: ["git init", "git clone", "git commit"],
      correctIndex: 0,
    },
    {
      question: "¿Qué hace 'git commit'?",
      options: ["Guarda cambios en el historial", "Descarga repositorio", "Actualiza remoto"],
      correctIndex: 0,
    },
    {
      question: "¿Qué comando envía los cambios a un remoto?",
      options: ["git push", "git pull", "git fetch"],
      correctIndex: 0,
    },
  ],
  Angular: [
    {
      question: "¿Qué es Angular?",
      options: ["Un framework para aplicaciones web", "Un lenguaje de programación", "Una base de datos"],
      correctIndex: 0,
    },
    {
      question: "¿Qué archivo define un componente en Angular?",
      options: [".ts", ".html", ".css"],
      correctIndex: 0,
    },
    {
      question: "¿Qué es un servicio en Angular?",
      options: [
        "Una clase para lógica y datos compartidos",
        "Una librería externa",
        "Un tipo de componente",
      ],
      correctIndex: 0,
    },
  ],
  Astro: [
    {
      question: "¿Qué es Astro?",
      options: [
        "Un framework para crear sitios web estáticos",
        "Un sistema operativo",
        "Un lenguaje de programación",
      ],
      correctIndex: 0,
    },
    {
      question: "¿Qué lenguaje usa Astro para crear componentes?",
      options: ["JSX, TSX y HTML", "PHP", "Python"],
      correctIndex: 0,
    },
    {
      question: "¿Qué ventaja tiene Astro?",
      options: [
        "Entrega sitios con menos JavaScript en el cliente",
        "Es solo para backend",
        "No usa HTML",
      ],
      correctIndex: 0,
    },
  ],
};

  // Inicializar motor de partículas
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (currentSection) setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
// Reemplaza tu useEffect actual con este:
useEffect(() => {
  const checkMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Lista de palabras clave para detectar dispositivos móviles
    const mobileKeywords = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];
    
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.match(keyword));
    const isSmallScreen = window.innerWidth <= 768;
    
    setIsMobile(isMobileDevice || isSmallScreen);
  };

  // Verificar al montar
  checkMobile();
  
  // Verificar en cambios de tamaño
  window.addEventListener("resize", checkMobile);
  
  // Verificar en cambios de orientación (para tablets)
  window.addEventListener("orientationchange", checkMobile);

  return () => {
    window.removeEventListener("resize", checkMobile);
    window.removeEventListener("orientationchange", checkMobile);
  };
}, []);

// Para el renderizado condicional de DinoGame, reemplaza:
{isMobile ? (<DinoGame />) : (
  <div className="hidden md:block">
    <DinoGame />
  </div>
)}

// Con esta versión más limpia:
{isMobile && <DinoGame />}
{!isMobile && (
  <div className="hidden md:block">
    <DinoGame />
  </div>
)}

  type Proyecto = { nombre: string; descripcion: string; url?: string; img?: string }

  const proyectos: Proyecto[] = [
    { nombre: 'Subcargo', descripcion: 'Monitoreo y digitalización de procesos logísticos de la empresa subcargo.', url: 'https://play.google.com/store/apps/details?id=com.subcargo.app&hl=es_CL', img: proyecto6 },
    { nombre: 'Parkeate', descripcion: 'Servicio de estacionamientos por minuto.', url: 'https://www.parkeateapp.com/home', img: proyecto1 },
    { nombre: 'Simple Kanban', descripcion: 'To do interactivo con drag and drop', url: 'https://simplekanbanfree.netlify.app/', img: proyecto2 },
    { nombre: 'WishMaker', descripcion: 'App web para crear y compartir listas de deseos de cumpleaños.', url: 'https://v0-fork-of-birthday-wishlist.vercel.app/', img: proyecto8 },
    { nombre: 'Servidor minecraft', descripcion: 'App web para gestionar servidor y usuarios de minecraft', url: 'https://v0-servidor-epico.vercel.app/', img: proyecto7 },
    { nombre: 'Harvard CV app', descripcion: 'Aplicación web para generar curriculums con el formato harvard.', url: 'https://gzmpx5t73vji81md.vercel.app/', img: proyecto5 },
    { nombre: 'PrePAES', descripcion: 'Aplicación web para preparar la PAES de matemáticas.', url: 'https://prepaesbeta.netlify.app/', img: proyecto3 },
    { nombre: 'Notas Dinámicas', descripcion: 'Notas dinámicas con frente y back con solo HTML, CSS y JS', url: 'https://dynamicnotes.netlify.app/', img: proyecto4 },
  ]
 const [quizOpen, setQuizOpen] = useState(false)
  const [currentSkill, setCurrentSkill] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answered, setAnswered] = useState(false)

  // Cuando hacen clic en una habilidad
  function openQuiz(skill: string) {
    setCurrentSkill(skill)
    setCurrentQuestionIndex(0)
    setAnswered(false)
    setQuizOpen(true)
    setQuizFinished(false)
  }

  function answerQuestion(optionIndex: number) {
  setSelectedOptionIndex(optionIndex)
  setAnswered(true)
}

  function nextQuestion() {
  if (!answered) return // no avanzar si no respondió
  if (currentSkill === null) return

  const totalQuestions = quizData[currentSkill].length

  if (currentQuestionIndex + 1 < totalQuestions) {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setAnswered(false) // reset para siguiente pregunta
  } else {
    // Terminó el quiz
    setQuizFinished(true)
  }
}
  const [quizFinished, setQuizFinished] = useState(false)
  return (
    <div className="min-h-screen bg-white text-gray-900">
<header
  className={`
    fixed z-50 
    bottom-4 left-1/2 -translate-x-1/2   /* abajo en móvil */
    md:top-1/2 md:right-10 md:left-auto md:-translate-x-0 md:-translate-y-1/2 /* a la derecha en escritorio */
  `}
>
  <nav
    className="
      flex flex-row items-center space-x-4 
      md:flex-col md:space-x-0 md:space-y-4
      bg-slate-50/70 backdrop-blur-lg p-2 rounded-full shadow-lg border
    "
  >
    {[
      { id: 'inicio', icon: <Home className="w-5 h-5" /> },
      { id: 'sobre-mi', icon: <User className="w-5 h-5" /> },
      { id: 'proyectos', icon: <Folder className="w-5 h-5" /> },
      { id: 'habilidades', icon: <Cpu className="w-5 h-5" /> },
      { id: 'contacto', icon: <Mail className="w-5 h-5" /> },
    ].map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className={`group flex items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
          activeSection === item.id
            ? 'bg-slate-300/40 rounded-full'
            : 'text-gray-700'
        }`}
      >
        {item.icon}
      </a>
    ))}
  </nav>
</header>


      <main >
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  onClick: { enable: true, mode: "push" },
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                  push: { quantity: 4 },
                },
              },
              particles: {
                color: { value: ["#3b82f6", "#9333ea", "#06b6d4"] },
                links: { enable: true, color: "#999", distance: 150 },
                move: { enable: true, speed: 1 },
                number: { 
                  value: isMobile ? 20 : 60, // Partículas iniciales
                  limit: isMobile ? 40 : 100 // Límite máximo total de partículas
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } },
              },
            }}
            className="fixed inset-0 z-0 pointer-events-none"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-700/30 z-10 pointer-events-none" />

          <motion.div
            className="text-center z-20 relative max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-purple-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Daniel Duran
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Full Stack Developer — Apasionado por crear soluciones digitales funcionales, escalables y con diseño atractivo.
            </motion.p>
            <div className="flex justify-center gap-4 mb-6">
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => window.open(cv, '_blank')}>
                <Download className="mr-2 h-4 w-4" /> Descargar CV
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Más sobre mí
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={() => window.open('https://www.linkedin.com/in/daniel-durán-s/', '_blank')}>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={() => window.open('https://github.com/danieladsa', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={() => window.open('https://www.instagram.com/daniel.ads0/', '_blank')}>
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
                
  {isMobile ? (
             <motion.div
    className="absolute -bottom-7 left-0 z-10"
     initial={{ x: '500%' }}
  animate={{ x: '-50%' }}
    transition={{  duration:7  , repeat: Infinity , ease: 'linear', repeatType: 'loop' }}
    style={{ width: 160 }} // para que el contenedor tenga ancho fijo y el movimiento sea consistente
  >
    <img
      src={star}
      alt="star caminando"
      className="w-full object-contain select-none pointer-events-none scale-x-[-1]"
      draggable={false}
    />
  </motion.div>
  ) : (
    <motion.div
      className="absolute -bottom-7 left-0 z-10"
      initial={{ x: '1300%' }}
      animate={{ x: '-50%' }}
      transition={{ duration:  12, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      style={{ width: 160 }} // para que el contenedor tenga ancho fijo y el movimiento sea consistente
    >
      <img
        src={star}
        alt="star caminando"
        className="w-full object-contain select-none pointer-events-none scale-x-[-1]"
        draggable={false}
      />
    </motion.div>
  )}
        </section>
<section id="sobre-mi" className="py-24 bg-gray-50 relative z-30 overflow-hidden">
  
  <div className="container mx-auto px-6 md:px-12 max-w-6xl">
    <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Sobre mí</h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* FOTO */}
      <motion.img
        src={daniel}
        alt="Daniel Duran"
        className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-blue-200/30 object-cover shadow-xl mx-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Soy Ingeniero Informático egresado de la PUCV y desde que descubrí el desarrollo web quedé atrapado por completo.
        </p>
        <blockquote className="italic text-gray-800 border-l-4 border-blue-400 pl-6 mb-6 text-lg font-semibold">
          “Hay que trabajar, hay que aprender, hay que comer, hay que descansar y también hay que jugar.”
          <footer className="mt-2 text-gray-600 font-normal not-italic">— Maestro Roshi</footer>
        </blockquote>
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => window.open(cv, '_blank')}
        >
          Descargar CV <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
       
    </div>

    {/* EXPERIENCIA */}
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center md:text-left">Experiencia</h3>
      <div className="space-y-8">
        {[
          { puesto: "Full Stack Developer", empresa: "Subcargo", periodo: "2024 - Presente", desc: "Desarrollo de plataforma logística y optimización de procesos." },
          { puesto: "Frontend Developer", empresa: "Parkeate", periodo: "2023 - 2024", desc: "Implementación de UI y mejoras de rendimiento en app de estacionamientos." },
          { puesto: "Freelance", empresa: "Proyectos varios", periodo: "2021 - 2023", desc: "Aplicaciones web y móviles para clientes de diferentes rubros." },
        ].map((exp, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">{exp.puesto}</h4>
            <p className="text-sm text-gray-500">{exp.empresa} • {exp.periodo}</p>
            <p className="mt-3 text-gray-700">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

</section>

  <section id="proyectos" className="relative min-h-screen py-24 text-white">
      <motion.img
    src={spiderman}
    alt="Spiderman colgando"
    className="absolute top-0 left-16 w-24 z-20 pointer-events-none select-none"
    initial={{ y: -170 }}
    animate={{ y: [ -170, -20,-20, -170] }} // baja y sube
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    draggable={false}
  />
      <div className="container max-w-6xl mx-auto px-6">
       <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Proyectos destacados</h2>


        <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {proyectos.map((project, i) => {
            const isHovered = hoveredIndex === i
            return (
              <motion.div
                key={project.nombre}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(i)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
                className="relative z-30 rounded-xl border-2 border-transparent cursor-pointer shadow-lg transition-transform transform will-change-transform bg-gray-50"
                style={{
                  borderImageSlice: 1,
                  boxShadow: isHovered
                    ? "0 0 15px 2px rgba(59,130,246,0.6), 0 0 20px 2px rgba(147,51,234,0.5), 0 0 30px 5px rgba(6,182,212,0.4)"
                    : "0 5px 15px rgba(0,0,0,0.3)",
                  scale: isHovered ? 1.02 : 1,
                  zIndex: 30,
                  transition: "all 0.3s ease",
                  outline: "none",
                  position: "relative",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => project.url && window.open(project.url, "_blank")}
              >
                <img
                  src={project.img}
                  alt={project.nombre}
                  className="w-full h-48 rounded-t-xl object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="p-5 relative z-30">
                  <h3 className="text-xl text-gray-900 font-semibold mb-2">{project.nombre}</h3>
                  <p className="text-gray-800 text-sm line-clamp-3 mb-4 relative z-30">{project.descripcion}</p>
    
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
   <section
  id="habilidades"
  className="relative z-30 bg-white py-24  bg-gradient-to-br from-gray-900 to-blue-950"
>
  <div className="container mx-auto px-4 lg:px-20 max-w-4xl">
  <h2 className="text-4xl font-bold text-white mb-12 text-center">Habilidades</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-y-8 gap-x-6 pt-10 justify-items-center mx-auto">
    {[
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: react },
      { name: "Nodejs", icon: nodejs },
      { name: "Python", icon: python },
      { name: "SQL", icon: sql },
      { name: "Git", icon: git },
      { name: "Angular", icon: angularjs },
    ].map((skill, index) => (
      <motion.div
        key={skill.name}
        onClick={() => openQuiz(skill.name)}
        className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-xl   hover:shadow-lg transition-all cursor-pointer p-3 text-white bg-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.07 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/60 transition-all pointer-events-none"></div>

        <div className="flex items-center justify-center w-full h-full">
          <img
            src={skill.icon}
            alt={skill.name}
            className="max-w-20 max-h-20 object-fill"
            draggable={false}
          />
        </div>
        <h3 className="mt-2 text-sm sm:text-lg font-semibold select-none text-center">{skill.name}</h3>
      </motion.div>
    ))}
  </div>
</div>

</section>


   {quizOpen && currentSkill && (
  <motion.div
    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="relative max-w-md w-full bg-black/50 rounded-xl p-6 shadow-lg"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {!quizFinished ? (
        <>
          <h3 className="text-3xl font-semibold text-white mb-5 select-none">
            Quiz de {currentSkill}
          </h3>

          <p className="text-white text-lg mb-6 font-medium">
            {quizData[currentSkill][currentQuestionIndex].question}
          </p>

          <div className="flex flex-col gap-3 mb-6">
            {quizData[currentSkill][currentQuestionIndex].options.map((option, i) => {
              const correct = i === quizData[currentSkill][currentQuestionIndex].correctIndex
              const isAnswered = answered
              const selected = isAnswered && correct
              const wrongSelected = isAnswered && !correct && i === selectedOptionIndex
              return (
                <button
                  key={i}
                  onClick={() => answerQuestion(i)}
                  disabled={isAnswered}
                  className={`
                    rounded-md py-2 px-4 text-left text-white text-base font-medium transition
                    ${
                      !isAnswered
                        ? "bg-black/40 hover:bg-blue-600"
                        : selected
                        ? "bg-blue-700"
                        : wrongSelected
                        ? "bg-red-600"
                        : "bg-black/30 text-gray-300 cursor-default"
                    }
                  `}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {/* Barra de progreso */}
          <div className="flex justify-center gap-2 mb-6">
            {quizData[currentSkill].map((_, idx) => (
              <span
                key={idx}
                className={`block w-3 h-3 rounded-full transition-colors
                  ${
                    idx === currentQuestionIndex
                      ? "bg-blue-400"
                      : idx < currentQuestionIndex
                      ? "bg-blue-700"
                      : "bg-white/50"
                  }
                `}
              />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                setQuizOpen(false)
                setCurrentSkill(null)
              }}
              className="text-white hover:text-white bg-black/30 transition font-medium"
            >
              Cancelar
            </button>

            <button
              onClick={nextQuestion}
              disabled={!answered}
              className={`
                px-5 py-2 rounded-md font-semibold text-white transition
                ${!answered ? "bg-blue-900/50 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
              `}
            >
              {currentQuestionIndex + 1 < quizData[currentSkill].length ? "Siguiente" : "Finalizar"}
            </button>
          </div>
        </>
      ) : (
        // Contenido al terminar el quiz
        <div className="text-center text-white">
          <h3 className="text-3xl font-semibold mb-4">¡Felicidades!</h3>
          <p className="mb-6 text-lg">Has terminado el quiz de {currentSkill}.</p>
          <button
            onClick={() => {
              setQuizOpen(false)
              setCurrentSkill(null)
            }}
            className="px-6 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Cerrar
          </button>
        </div>
      )}
    </motion.div>
  </motion.div>
)}


<section id="contacto" className="py-20 bg-white relative z-30">
  <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contacto</h2>
    <div className="text-center">
      <p className="text-lg mb-10 text-gray-700 max-w-md mx-auto leading-relaxed">
        ¿Interesado en trabajar juntos? ¡Contáctame!
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full border-gray-300 hover:border-gray-500 transition-colors"
          onClick={() => {
            navigator.clipboard.writeText('danielduran.ads@gmail.com');
            alert('Correo copiado al portapapeles');
          }}
          aria-label="Copiar correo"
          title="Copiar correo"
        >
          <Mail className="h-7 w-7 text-gray-700" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full border-gray-300 hover:border-blue-600 transition-colors"
          onClick={() => window.open('https://www.linkedin.com/in/daniel-duran-6788382b7/', '_blank')}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin className="h-7 w-7 text-blue-700" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full border-gray-300 hover:border-gray-800 transition-colors"
          onClick={() => window.open('https://github.com/danieladsa', '_blank')}
          aria-label="GitHub"
          title="GitHub"
        >
          <Github className="h-7 w-7 text-gray-800" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full border-gray-300 hover:border-pink-500 transition-colors"
          onClick={() => window.open('https://www.instagram.com/daniel.ads0/', '_blank')}
          aria-label="Instagram"
          title="Instagram"
        >
          <Instagram className="h-7 w-7 text-pink-600" />
        </Button>
      </div>

      <p className="text-gray-600 text-sm select-text">
        Correo: <span className="font-mono">danielduran.ads@gmail.com</span>
      </p>
    </div>

      <div className="mt-24 mb-24">
        <DinoGame />
      </div>
      </div>
</section>


      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Daniel Duran. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
