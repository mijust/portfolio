"use client";
import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    console.log("ParticleBackground mounted"); // Debug-Log
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Could not get 2D context");
      return;
    }
    
    console.log("Canvas initialized with dimensions:", canvas.width, "x", canvas.height);
    
    let particles: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      console.log("Resizing canvas to:", window.innerWidth, "x", window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      console.log("Creating", particleCount, "particles");
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1, // Leicht größere Partikel für bessere Sichtbarkeit
          vx: Math.random() * 0.4 - 0.2, // Schnellere Bewegung
          vy: Math.random() * 0.4 - 0.2,
          color: `rgba(59, 130, 246, ${Math.random() * 0.7 + 0.3})` // Höhere Sichtbarkeit
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Optional: Zeichne einen semi-transparenten Hintergrund
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
      
      // Connect particles that are close
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          if (distance < 120) { // Größerer Verbindungsradius
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8; // Dickere Linie
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
    
    return () => {
      console.log("ParticleBackground unmounting");
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        display: 'block', // Ensure it's displayed as block
        background: 'transparent',
        zIndex: -10 // Backup z-index in addition to the className
      }}
    />
  );
}