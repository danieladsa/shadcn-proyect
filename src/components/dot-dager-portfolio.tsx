import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import heroImage from "../assets/heroImage.png"
import heroImage2 from "../assets/heroImage2.png"
import lamber from "../assets/lamber.png"
import { ChevronRight, Github, Youtube, Twitter, Twitch } from 'lucide-react'
import { Cat, Code, Music, Leaf} from 'lucide-react'

export default function DotDagerPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [animatedText, setAnimatedText] = useState("") // Updated state initialization
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setIsLoaded(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = [heroRef, aboutRef, projectsRef, contactRef]
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const texts = ["Content Creator", "Programmer", "Philosopher"]
    let currentIndex = 0
    let isDeleting = false
    let charIndex = 0
    const typingSpeed = 100 // Reduced from 150
    const deletingSpeed = 50 // Reduced from 100
    const pauseBeforeDelete = 3000
    const pauseBeforeType = 500

    const animateText = () => {
      const fullText = texts[currentIndex]
      
      if (isDeleting) {
        setAnimatedText(fullText.substring(0, charIndex - 1))
        charIndex--
      } else {
        setAnimatedText(fullText.substring(0, charIndex + 1))
        charIndex++
      }

      let timer = typingSpeed

      if (isDeleting) {
        timer = deletingSpeed
      }

      if (!isDeleting && charIndex === fullText.length) {
        timer = pauseBeforeDelete
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        currentIndex = (currentIndex + 1) % texts.length
        timer = pauseBeforeType
      }

      setTimeout(animateText, timer)
    }

    animateText()
  }, [])
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={`min-h-screen bg-black text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
     <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
  <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
    {/* Logo */}
    <div className="flex flex-row justify-center items-center space-x-3">
    <img
              src={heroImage}
              alt="Dot Dager"
              width={35}
              height={35}
              className="rounded-full"
            />
    <h1 className="text-2xl font-bold">Dot Dager</h1>

    </div>
    
    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-4">
      <Button variant="link" className="text-white"  onClick={() => handleScroll('about')}  >
        About
      </Button>
      <Button variant="link" className="text-white"  onClick={() => handleScroll('projects')}>
        Projects
      </Button>
      <Button variant="link" className="text-white" onClick={() => handleScroll('contact')}>
        Contact
      </Button>
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black text-white">
          <DropdownMenuItem>
            <a href="#about" className="w-full">
              About
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#projects" className="w-full">
              Projects
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#contact" className="w-full">
              Contact
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
</header>


      <main>
        <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black" >
          <div className="text-center justify-center flex flex-col items-center space-y-8">
          <div className="hero-image-container">
        <div className="hero-image">
          {/* Cara frontal */}
          <div className="front">
            <img
              src={heroImage}
              alt="Dot Dager"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          {/* Cara trasera */}
          <div className="back">
          <img
              src={heroImage2}
              alt="Dot Dager"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

            <h2 className="text-6xl font-bold">Dot Dager</h2>
            <p className="text-2xl text-gray-300">I'm a <span className="font-semibold">{animatedText}</span></p>
            <div
              className="flex justify-center align-middle items-center space-x-4 mb-8"
            >

              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit"  onClick={() => window.open('https://www.youtube.com/@DotDager', '_blank')}>
                <Youtube className="h-5 w-5"/>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit" onClick={() => window.open('https://x.com/Dager_32', '_blank')}>
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit" onClick={() => window.open('https://github.com/MarianoVilla', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit" onClick={() => window.open('https://www.twitch.tv/dagerxiv', '_blank')}>
                <Twitch className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        <section ref={aboutRef} className="py-24  bg-gradient-to-br from-gray-900 to-black" id="about">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold mb-12 text-center">About Me</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl">
                  I'm a multifaceted content creator with a passion for programming, philosophy, and the finer things in life - like cats, guitars, and pickles.
                </p>
                <p className="text-xl">
                  My journey is a blend of technology and creativity, always seeking to push boundaries and explore new ideas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
              <Card className="relative bg-cover bg-black bg-opacity-50 bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dohtxxlbe/image/upload/v1732378378/este_w5oje0.jpg")' }}>
              <div className="absolute inset-0 bg-black bg-opacity-35"></div> {/* Sombreado negro */}
                  <CardContent className=" relative  flex flex-col items-center justify-center h-full p-6 text-white">
                    <Code size={48} className="mb-4" />
                    <h4 className="text-xl font-semibold">Programming</h4>
                  </CardContent>
                </Card>
                <Card className="relative bg-cover bg-black bg-opacity-50 bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dohtxxlbe/image/upload/v1732377450/cat_wyrb0q.jpg")' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Sombreado negro */}
                  <CardContent className="relative flex flex-col items-center justify-center h-full p-6 text-white">
                    <Cat size={48} className="mb-4" />
                    <h4 className="text-xl font-semibold">Cats</h4>
                  </CardContent>
                </Card>
                <Card className="relative bg-cover bg-black bg-opacity-50 bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dohtxxlbe/image/upload/v1732378381/guitar_ouxaq0.jpg")' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Sombreado negro */}
                  <CardContent className="relative flex flex-col items-center justify-center h-full p-6 text-white">
                    <Music size={48} className="mb-4" />
                    <h4 className="text-xl font-semibold">Guitars</h4>
                  </CardContent>
                </Card>
                <Card className="relative bg-cover bg-black bg-opacity-50 bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dohtxxlbe/image/upload/v1732378385/pepino_ykig7p.webp")' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-35"></div> {/* Sombreado negro */}
                  <CardContent className="relative flex flex-col items-center justify-center h-full p-6 text-white">
                    <Leaf size={48} className="mb-4" />
                    <h4 className="text-xl font-semibold">Pickles</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="py-24 bg-black"  id="projects">
          <div className="container mx-auto lg:px-40 px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1].map((project) => (
                  <div
                    key={project}
                    className="group relative overflow-hidden rounded-2xl shadow-lg"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={lamber}
                        alt={`Proyecto ${project}`}
                      
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">Lumberjack</h3>
                      <p className="text-sm mb-4">Jueguito que se juega jugando</p>
                      <Button variant="outline" className="text-gray-900 border-white bg-white hover:bg-white hover:text-gray-900"  onClick={openModal}>
                        Ver más <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                     
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>

        <section ref={contactRef} className="py-24 bg-gradient-to-br from-purple-900 to-black"  id="contact">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-12">Get in Touch</h3>
            <p className="text-xl mb-8">Interested in collaborating or just want to say hi? I'd love to hear from you!</p>
            <div
              className="flex justify-center align-middle items-center space-x-4 mb-8"
            >

              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit"  onClick={() => window.open('https://www.youtube.com/@DotDager', '_blank')}>
                <Youtube className="h-5 w-5"/>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit" onClick={() => window.open('https://x.com/Dager_32', '_blank')}>
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit" onClick={() => window.open('https://github.com/MarianoVilla', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-inherit" onClick={() => window.open('https://www.twitch.tv/dagerxiv', '_blank')}>
                <Twitch className="h-5 w-5" />
              </Button>
            </div>
            <Button size="lg" variant="secondary">
              Contact Me
            </Button>
            <div className="mt-12 flex justify-center space-x-6">
              <Button variant="ghost" size="icon">
            
              </Button>
              <Button variant="ghost" size="icon">
             
              </Button>
              <Button variant="ghost" size="icon">
           
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Dot Dager. All rights reserved.</p>
      </footer>
      {isModalOpen && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-xl">
                          <button
                            onClick={closeModal}
                            className="absolute top-4 right-20 bg-white text-black p-2 rounded-full"
                          >
                            Cerrar
                          </button>
                          <iframe
                            title="Lumber Jack Game"
                            src="https://tbot.xyz/lumber/" 
                            width="100%"
                            height="600"
                            className="border-none"
                          ></iframe>
                        </div>
                      </div>
                    )}
    </div>
  )
}

