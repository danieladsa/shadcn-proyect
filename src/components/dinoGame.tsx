import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import dinoRun1 from "@/assets/dino_run1.png"; // corrida frame 1
import dinoRun2 from "@/assets/dino_run2.png"; // corrida frame 2
import cactusImg from "@/assets/cactus.png";
import groundImg from "@/assets/ground.png";

function DinoGame() {
  const gameRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);

  const [dinoY, setDinoY] = useState(0);
  const [cactusX, setCactusX] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameWidth, setGameWidth] = useState(300);
  const [speed, setSpeed] = useState(8);
  const [score, setScore] = useState(0);
  const [runFrame, setRunFrame] = useState(true); // para alternar frames corrida

  const hasScoredRef = useRef(false);

  // Medir ancho del contenedor
  useEffect(() => {
    if (gameRef.current) {
      setGameWidth(gameRef.current.offsetWidth);
      setCactusX(gameRef.current.offsetWidth);
    }
  }, []);

  // Saltar
  const jump = useCallback(() => {
    if (!isGameOver && !isJumping) {
      setIsJumping(true);
      setDinoY(-100);
      setTimeout(() => {
        setDinoY(0);
        setIsJumping(false);
      }, 300);
    }
  }, [isGameOver, isJumping]);

  // Listener teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  // Movimiento cactus + aceleración + puntaje + movimiento suelo + alternar frames corrida
useEffect(() => {
  if (!isGameOver && !isJumping) {
    const runInterval = setInterval(() => {
      setRunFrame((prev) => !prev);
    }, 100); // cambia más rápido, cada 100ms

    return () => clearInterval(runInterval);
  } else {
    // Si está saltando o game over, poner siempre runFrame true para resetear imagen
    setRunFrame(true);
  }
}, [isJumping, isGameOver]);

// Movimiento cactus y suelo en otro efecto, igual que antes pero sin alternar runFrame ahí
useEffect(() => {
  let groundOffset = 0;

  if (!isGameOver) {
    const interval = setInterval(() => {
      setCactusX((prev) => {
        const nextX = prev - speed;

        if (nextX < 40 && !hasScoredRef.current) {
          setScore((s) => s + 1);
          hasScoredRef.current = true;
        }
        if (nextX <= -40) {
          setSpeed((s) => Math.min(s + 0.5, 20));
          hasScoredRef.current = false;
          return gameWidth;
        }
        return nextX;
      });

      groundOffset -= speed;
      if (groundRef.current) {
        if (groundOffset <= -gameWidth) {
          groundOffset = 0;
        }
        groundRef.current.style.backgroundPositionX = groundOffset + "px";
      }
    }, 16);

    return () => clearInterval(interval);
  }
}, [isGameOver, gameWidth, speed]);

  // Detección de colisión
  useEffect(() => {
    if (cactusX < 80 && cactusX > 40 && dinoY >= 0) {
      setIsGameOver(true);
    }
  }, [cactusX, dinoY]);

  const restartGame = () => {
    setIsGameOver(false);
    setCactusX(gameWidth);
    setSpeed(8);
    setScore(0);
    hasScoredRef.current = false;
  };

  return (
    <div
      ref={gameRef}
      className="dino-game relative w-full h-52 overflow-hidden bg-transparent rounded-xl mt-8"
      onClick={jump}
      onTouchStart={jump}
    >
      {/* Fondo suelo */}
      <div
        ref={groundRef}
        className="absolute bottom-0 left-0 w-full h-10"
        style={{
          backgroundImage: `url(${groundImg})`,
          backgroundRepeat: "repeat-x",
          backgroundPositionX: "0px",
          backgroundSize: "contain",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Puntaje estilo pixel arriba derecha */}
      <div className="top-2 absolute inset-0 flex flex-col items-center text-white font-mono text-lg tracking-widest drop-shadow-[1px_1px_0_black]">
        {score.toString().padStart(5, "0")}
      </div>

      {/* Dino - cambia imagen según estado */}
      <motion.img
        src={ runFrame ? dinoRun1 : dinoRun2}
        alt="Dino"
        style={{ position: "absolute", left: 40, bottom: 20, width: "62px", zIndex: 12 }}
        animate={{ y: dinoY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Cactus */}
      <motion.img
        src={cactusImg}
        alt="Cactus"
        style={{ position: "absolute", bottom: 20, width: "48px", zIndex: 10,  backgroundColor: "transparent" }}
        animate={{ x: cactusX }}
        transition={{ duration: 0, ease: "linear" }}
      />

      {/* Botón de reinicio */}
      {isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <button
            onClick={restartGame}
            className="bg-white px-4 py-2 rounded shadow font-semibold hover:bg-gray-200 transition"
          >
            Jugar
          </button>
        </div>
      )}
    </div>
  );
}

export default DinoGame;
