import { useState, useEffect } from 'react'
import { motion} from 'framer-motion'
import { ChevronRight, Linkedin, Github, Instagram, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import proyecto2 from '@/assets/kanban.png'
import daniel from '@/assets/daniel.jpg'
import proyecto1 from '@/assets/proyecto1.jpg'
import proyecto3 from '@/assets/prepaes.png'
import proyecto4 from '@/assets/notas.png'
export function AppleInspiredPortfolioComponent() {
  const [activeSection, setActiveSection] = useState('')


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  type Proyecto = {
    nombre: string;
    descripcion: string;
    url?: string
  };
  
  // Crear un arreglo con los proyectos
  const proyectos: Proyecto[] = [
    {
      nombre: 'Parkeate',
      descripcion: 'Servicio de estacionamientos por minuto.',
      url: 'https://www.parkeateapp.com/home'
    },
    {
      nombre: 'Simple Kanban •',
      descripcion: 'To do interactivo con drag and drop',
      url: 'https://simplekanbanfree.netlify.app/'
    },
    {
      nombre: 'PrePAES',
      descripcion: 'Aplicación web para preparar la PAES de matemáticas.',
      url: 'https://prepaesbeta.netlify.app/'
    },
    {
      nombre: 'Notas Dinámicas.',
      descripcion: 'Notas dinámicas con frente y back con solo HTML, CSS y JS',
      url: 'https://dynamicnotes.netlify.app/'
    },
  ];

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
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === item.id ? 'text-blue-500' : 'text-gray-900'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>

      <main className="pt-16">
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Daniel Duran 
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full"  onClick={() => window.open('https://www.linkedin.com/in/daniel-duran-6788382b7/', '_blank')}>
                <Linkedin className="h-5 w-5"/>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={() => window.open('https://github.com/danieladsa', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={() => window.open('https://www.instagram.com/daniel.ads0/', '_blank')}>
                <Instagram className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 transition-colors" onClick={() => {
                const projectsSection = document.getElementById('proyectos');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Explora mi trabajo <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-50" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
          </div>
        </section>

        <section id="sobre-mi" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sobre mí</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={daniel} alt="Tu foto" />
                  </div>
                  <div className="p-8">
                  <p className="mt-2 text-gray-600">
                    Soy Ingeniero Informático y, desde que descubrí el desarrollo web, quedé completamente atrapado en este campo.
                  </p>
                  <blockquote className="mt-2 text-gray-600 italic pl-4 border-l-4 border-gray-300">
                    “Hay que trabajar, hay que aprender, hay que comer, hay que descansar y también hay que jugar.”
                    <footer className="mt-1 text-gray-500 text-sm">— Maestro Roshi</footer>
                  </blockquote>

                    <div className="mt-4">
                    <Button variant="outline" size="sm" onClick={() => window.open('/public/cv.pdf', '_blank')}>
                      Descarga mi CV <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="py-20">
          <div className="container mx-auto lg:px-40 px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Proyectos Destacados</h2>
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
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={index  === 1 ? proyecto2 : index === 2 ? proyecto3 : index === 3 ? proyecto4 : proyecto1}
                      alt={`Proyecto ${project}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{project.nombre}</h3>
                    <p className="text-sm mb-4">{project.descripcion}</p>
                    <Button variant="outline" className="text-gray-900 border-white bg-white hover:bg-white hover:text-gray-900" onClick={()=> window.open(project.url)}>
                      Ver más <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-40">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AngularJS', 'Astro'].map((skill, index) => (
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

        <section id="contacto" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contacto</h2>
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
            navigator.clipboard.writeText('danielduran.ads@gmail.com');
            alert('Correo copiado al portapapeles');
          }}
        >
          <Mail className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" className="w-12 h-12"  onClick={() => window.open('https://www.linkedin.com/in/daniel-duran-6788382b7/', '_blank')}>
          <Linkedin className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" className="w-12 h-12">
          <Github className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" className="w-12 h-12">
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