import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { ChevronRight, Linkedin, Github, Instagram, Mail, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import proyecto2 from '@/assets/kanban.png'
import daniel from '@/assets/daniel.jpg'
import proyecto1 from '@/assets/proyecto1.jpg'
import proyecto3 from '@/assets/prepaes.png'
import proyecto4 from '@/assets/notas.png'
import proyecto5 from '@/assets/harvard.png'
import proyecto6 from '@/assets/subcargo.png'
import proyecto7 from '@/assets/minecraft.png'
import proyecto8 from '@/assets/deseos.png'
import cv from '@/assets/cv.pdf'

export function AppleInspiredPortfolioComponent() {
  const [activeSection, setActiveSection] = useState('')
  const [isMobile, setIsMobile] = useState(false);
  // Inicializar motor de partículas
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades']
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
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // menos de 768px es móvil/tablet
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8">
            {[
              { label: 'Inicio', id: 'inicio' },
              { label: 'Sobre mí', id: 'sobre-mi' },
              { label: 'Proyectos', id: 'proyectos' },
              { label: 'Habilidades', id: 'habilidades' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.id ? 'text-blue-500' : 'text-gray-900'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
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
                number: { value: isMobile ? 20 : 60 }, // menos partículas en móvil
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } },
              },
            }}
            className="absolute inset-0 z-0"
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
        </section>

      <section id="sobre-mi" className="py-24 bg-gray-100 relative z-30">
  <div className="container mx-auto px-6 md:px-12 max-w-3xl">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Sobre mí</h2>

    <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center md:flex-row md:items-start gap-8">
      
      <img 
        src={daniel} 
        alt="Foto de Daniel Duran"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        loading="lazy"
      />

      <div className="text-center md:text-left">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Soy Ingeniero Informático y, desde que descubrí el desarrollo web, quedé completamente atrapado en este campo.
        </p>

        <blockquote className="italic text-gray-800 border-l-4 border-blue-400 pl-6 mb-8 text-lg font-semibold">
          “Hay que trabajar, hay que aprender, hay que comer, hay que descansar y también hay que jugar.”
          <footer className="mt-3 text-gray-600 font-normal not-italic">— Maestro Roshi</footer>
        </blockquote>

        <Button
          variant="default"
          size="default"
          className="bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={() => window.open(cv, '_blank')}
        >
          Descargar CV <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>
</section>

        <section id="proyectos" className="py-20 bg-white z-30 relative">
          <div className="container mx-auto lg:px-40 px-4">
               <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Algunos proyectos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proyectos.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video min-h-[200px]">
                    <img
                      src={project.img}
                      alt={`Proyecto ${project.nombre}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{project.nombre}</h3>
                    <p className="text-sm mb-4">{project.descripcion}</p>
                    <Button variant="outline" className="text-gray-900 border-white bg-white hover:bg-white hover:text-gray-900" onClick={() => window.open(project.url)}>
                      Ver más <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="py-20 bg-gray-50 relative z-30">
          <div className="container mx-auto px-4 lg:px-40">
            <h2 className="text-4xl  font-bold mb-12 text-center">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Angular', 'Astro'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-lg font-medium text-gray-800">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-white relative z-30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl  font-bold mb-12 text-center">Contacto</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="text-xl mb-8 text-gray-600">
                ¿Interesado en trabajar juntos? ¡Contáctame!
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12"
                  onClick={() => {
                    navigator.clipboard.writeText('danielduran.ads@gmail.com')
                    alert('Correo copiado al portapapeles')
                  }}
                >
                  <Mail className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12" onClick={() => window.open('https://www.linkedin.com/in/daniel-duran-6788382b7/', '_blank')}>
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12" onClick={() => window.open('https://github.com/danieladsa', '_blank')}>
                  <Github className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12" onClick={() => window.open('https://www.instagram.com/daniel.ads0/', '_blank')}>
                  <Instagram className="h-6 w-6" />
                </Button>
              </div>
              <p className="mt-4 text-gray-600">Correo: danielduran.ads@gmail.com</p>
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
