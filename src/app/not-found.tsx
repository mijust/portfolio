"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const particleCount = 40;

// Ein kleines Spiel/Interaktion für die 404-Seite
export default function NotFound() {
  const [showHint, setShowHint] = useState(false);
  const [particles, setParticles] = useState<Array<{x: number, y: number, vx: number, vy: number, size: number, color: string}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [collectedParticles, setCollectedParticles] = useState(0);
  
  // Initialisiere die Partikel
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 10 + 5,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`
    }));
    
    setParticles(newParticles);
    
    // Zeige Hinweis nach 3 Sekunden
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Update Mausposition
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animation der Partikel und Kollisionsüberprüfung
  useEffect(() => {
    if (particles.length === 0) return;
    
    const animationId = requestAnimationFrame(() => {
      setParticles(prevParticles => {
        const newParticles = [...prevParticles];
        let newCollectedParticles = collectedParticles;
        
        for (let i = 0; i < newParticles.length; i++) {
          const p = newParticles[i];
          
          // Bewege Partikel
          p.x += p.vx;
          p.y += p.vy;
          
          // Abprallen von den Rändern
          if (p.x <= 0 || p.x >= window.innerWidth) p.vx *= -1;
          if (p.y <= 0 || p.y >= window.innerHeight) p.vy *= -1;
          
          // Überprüfe Kollision mit Mauszeiger
          const dx = p.x - mousePosition.x;
          const dy = p.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < p.size + 20) { // Mauszeiger + Partikelgröße
            // Partikel wurde "gesammelt"
            newParticles.splice(i, 1);
            newCollectedParticles++;
            setScore(prev => prev + Math.floor(p.size));
            i--; // Anpassen des Index nach Entfernen
            
            // Füge neuen Partikel hinzu, um die Gesamtzahl konstant zu halten
            if (newParticles.length < particleCount - 10) {
              newParticles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                size: Math.random() * 10 + 5,
                color: `hsl(${Math.random() * 360}, 80%, 60%)`
              });
            }
          }
        }
        
        setCollectedParticles(newCollectedParticles);
        return newParticles;
      });
    });
    
    return () => cancelAnimationFrame(animationId);
  }, [particles, mousePosition, collectedParticles]);
  
  return (
    <div className="relative min-h-screen w-full bg-gray-900 overflow-hidden flex items-center justify-center flex-col">
      {/* Hintergrundelemente - sich bewegende Partikel */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          animate={{
            x: particle.x,
            y: particle.y,
          }}
          transition={{
            duration: 0,
            ease: "linear"
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
        />
      ))}
      
      {/* 404 Hauptinhalt */}
      <motion.div 
        className="text-center z-10 bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-8xl font-bold text-blue-500 mb-4"
          animate={{ 
            scale: [1, 1.05, 1],
            rotateZ: [0, -2, 2, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4 
          }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-2xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Oops! Diese Seite wurde nicht gefunden.
        </motion.p>
        
        {/* Spielergebnis */}
        <motion.div 
          className="mb-8 text-xl text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Partikel gesammelt: {collectedParticles}
          <br />
          Punkte: {score}
        </motion.div>
        
        {/* Tipp-Text */}
        <motion.p 
          className="text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Tipp: Sammle die schwebenden Partikel mit deinem Mauszeiger!
        </motion.p>
        
        {/* Zurück-Buttons */}
        <div className="flex space-x-4 justify-center">
          <motion.button 
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} className="mr-2" />
            Zurück
          </motion.button>
          
          <Link href="/" passHref>
            <motion.span 
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={18} className="mr-2" />
              Startseite
            </motion.span>
          </Link>
        </div>
      </motion.div>
      
      {/* Folgende Cursor */}
      <motion.div 
        className="hidden sm:block absolute w-24 h-24 rounded-full border-2 border-blue-500 pointer-events-none z-50 opacity-30"
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          damping: 10,
          stiffness: 100,
        }}
      />
    </div>
  );
}