"use client"
import { React, useEffect, useRef, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../globals.css'

export default function Card({ header, body }) {
  // Inicializar AOS para animaciones al cargar
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Efecto de rotación 3D y spotlight al mover el ratón
  const handleMouseMove = (e) => {
    if (!cardRef.current || !spotlightRef.current) return;
    
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calcular posición relativa del ratón
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcular rotación basada en la posición del ratón
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8; // Invertir eje Y para efecto natural
    const rotateY = ((x - centerX) / centerX) * 8;
    
    // Aplicar rotación
    setMousePos({ x: rotateY, y: rotateX });
    
    // Posicionar spotlight
    const spotlightX = x - (spotlight.offsetWidth / 2);
    const spotlightY = y - (spotlight.offsetHeight / 2);
    setSpotlightPos({ x: spotlightX, y: spotlightY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Reset de la rotación y spotlight al salir
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      className="card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-aos="custom-fade-up"
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.02)`
          : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: isHovered 
          ? "transform 0.1s ease-out" 
          : "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
      }}
    >
      <div 
        className="spotlight" 
        ref={spotlightRef} 
        style={{
          transform: `translate(${spotlightPos.x}px, ${spotlightPos.y}px)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease"
        }}
      />
      
      <div className="card-content">
        <h3>{header}</h3>
        <div className="card-body">
          {body}
        </div>
      </div>
      
      <div className="card-border"></div>
    </div>
  );
}
