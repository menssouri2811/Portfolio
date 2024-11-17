"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useRef, useState } from 'react'

export default function Card({ header, body }) {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
          anchorPlacement: 'top-bottom',
          componentDidMount() {
            AOS.init();
          },
        });})

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);
    const spotlightRef = useRef(null);
   
    const handleMouseMove = (e) => {
      const spotlight  = spotlightRef.current
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.6) * 1;
      const y = ((e.clientY - rect.top) / rect.height - 0.6) * -1;
      setMousePos({ x: x * 11, y: y * 11 });

      const spotlightx = e.clientX - (spotlight.offsetHeight / 2) - rect.left;
      const spotlighty = e.clientY - (spotlight.offsetWidth / 2) - rect.top;
      setSpotlightPos({ x: spotlightx, y: spotlighty }); 
      spotlight.style.display = "block";
    };
  
    const handleMouseLeave = () => {
        const spotlight  = spotlightRef.current
        setMousePos({ x: 0, y: 0 });
        spotlight.style.display = "none";
    };

 

  return (
    <div className="card" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
        transform: ` perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}>
      <div className="spotlight" ref={spotlightRef} style={{transform: `translate(${spotlightPos.x}px, ${spotlightPos.y}px)`}}></div>
      <h3>{header}</h3>
      {body}
    </div>
  );
}
