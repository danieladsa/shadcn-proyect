import { useState, useCallback, useEffect, CSSProperties } from 'react'
import { Button } from "@/components/ui/button"
import { Flower2 } from 'lucide-react'
import glasses from '../assets/glasses-confuse.gif'
import happy from '../assets/mochi-peachcat-cute-cat.gif'

interface Flower {
  id: number
  x: number
  y: number
  speed: number
  size: number
  rotation: number
}

export function BurgerInvitation() {
  const [noButtonStyle, setNoButtonStyle] = useState<CSSProperties>({})
  const [showSecondGif, setShowSecondGif] = useState(false)
  const [positiveAnswer, setPositiveAnswer] = useState(false)
  const [flowers, setFlowers] = useState<Flower[]>([])

  // Mueve el botón "No" a una posición aleatoria
  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 100
    const maxY = window.innerHeight - 40
    const newX = Math.random() * maxX
    const newY = Math.random() * maxY
    setNoButtonStyle({ position: 'fixed', left: `${newX}px`, top: `${newY}px` })
  }, [])

  // Maneja el clic en "Sí"
  const handleYesClick = () => {
    setPositiveAnswer(true)
    setShowSecondGif(true)
  }

  // Crea y anima las flores
  useEffect(() => {
    const createFlower = () => {
      const newFlower: Flower = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -50,
        speed: 1 + Math.random() * 3,
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360
      }
      setFlowers(prevFlowers => [...prevFlowers, newFlower])
    }

    const animateFlowers = () => {
      setFlowers(prevFlowers =>
        prevFlowers
          .map(flower => ({
            ...flower,
            y: flower.y + flower.speed,
            rotation: flower.rotation + 2
          }))
          .filter(flower => flower.y < window.innerHeight)
      )
    }

    const flowerInterval = setInterval(createFlower, 1000)
    const animationInterval = setInterval(animateFlowers, 50)

    return () => {
      clearInterval(flowerInterval)
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
      {flowers.map(flower => (
        <Flower2
          key={flower.id}
          style={{
            position: 'absolute',
            left: `${flower.x}px`,
            top: `${flower.y}px`,
            fontSize: `${flower.size}px`,
            color: 'rgba(255, 255, 255, 0.6)',
            transform: `rotate(${flower.rotation}deg)`,
          }}
        />
      ))}
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl font-bold mb-6 text-shadow">Annette!!! Quiero Hamburguesas  😭😬🍔</h1>

        <div className="mb-8">
          {showSecondGif ? (
            <img src={happy} alt="Celebración" className="rounded-full mx-auto shadow-lg" />
          ) : (
            <img src={glasses} alt="Hamburguesa tentadora" className="rounded-full mx-auto shadow-lg" />
          )}
        </div>

        {!positiveAnswer && (
          <div>
            <p className="text-2xl font-semibold mb-8 text-shadow">
              ¿Quieres ir a comer conmigo 😁?
            </p>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleYesClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
              >
                ¡Sí, por favor! 😋
              </Button>

              <Button
                style={noButtonStyle}
                onClick={moveNoButton}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
              >
                No, gracias 😅
              </Button>
            </div>
          </div>
        )}

        {positiveAnswer && (
          <p className="text-2xl font-semibold mb-8 text-shadow">
            Ya sabía 😎
          </p>
        )}
      </div>
    </div>
  )
}

// Estilos adicionales para el texto con sombra
const styles = `
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`

export { styles }
