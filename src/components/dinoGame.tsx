import { useRef, useEffect, useState } from "react";
import dinoImg from "@/assets/trex.png";
import cactusImg from "@/assets/cactus.png";

function DinoGame() {
  const dinoRef = useRef<HTMLImageElement>(null);
  const cactusRef = useRef<HTMLImageElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const jump = () => {
    if (!isGameOver && dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        if (dinoRef.current) {
          dinoRef.current.classList.remove("jump");
        }
      }, 300);
    }
  };

  const restartGame = () => {
    setIsGameOver(false);
    if (cactusRef.current) {
      cactusRef.current.style.animation = "moveCactus 1.5s infinite linear";
      cactusRef.current.style.left = "100%";
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        jump();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const isAlive = setInterval(() => {
      if (!isGameOver && dinoRef.current && cactusRef.current) {
        const dinoTop = parseInt(
          window.getComputedStyle(dinoRef.current).getPropertyValue("top")
        );
        const cactusLeft = parseInt(
          window.getComputedStyle(cactusRef.current).getPropertyValue("left")
        );

        // Detección de colisión
        if (cactusLeft < 80 && cactusLeft > 40 && dinoTop >= 60) {
          setIsGameOver(true);
          if (cactusRef.current) {
            cactusRef.current.style.animation = "none"; // detener cactus
          }
        }
      }
    }, 10);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(isAlive);
    };
  }, [isGameOver]);

  return (
    <div className="dino-game relative w-full h-48 overflow-hidden bg-transparent rounded-xl mt-8">
      {/* Dino */}
      <img
        ref={dinoRef}
        src={dinoImg}
        alt="Dino"
        className="absolute w-16"
        style={{ left: "40px", top: "117px" }}
      />

      {/* Cactus */}
      <img
        ref={cactusRef}
        src={cactusImg}
        alt="Cactus"
        className={`absolute bottom-0 w-12 bg-transparent ${
          !isGameOver ? "animate-cactus" : ""
        }`}
        style={{ left: "100%", top: "100px" }}
      />

      {/* Botón de reinicio estilo Google */}
      {isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
        
          <button
            onClick={restartGame}
            className="bg-white px-4 py-2 rounded shadow font-semibold hover:bg-gray-200 transition"
          >
            Jugar
          </button>
        </div>
      )}

      <style>{`
        .dino-game img {
          user-select: none;
          pointer-events: none;
        }
        .jump {
          animation: jump 0.3s linear;
        }
        @keyframes jump {
          0% { top: 118px; }
          50% { top: 20px; }
          100% { top: 118px; }
        }
        .animate-cactus {
          animation: moveCactus 2s infinite linear;
        }
        @keyframes moveCactus {
          0% { left: 100%; }
          100% { left: -50px; }
        }
      `}</style>
    </div>
  );
}

export default DinoGame;
