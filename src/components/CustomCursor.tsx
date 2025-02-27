"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we're on a touch device (mobile)
    const isTouchDevice = () => 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      (navigator as any).msMaxTouchPoints > 0;
    
    // Don't show custom cursor on touch devices
    if (isTouchDevice()) {
      document.body.style.cursor = 'auto';
      return;
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (!isVisible) {
        setIsVisible(true);
        document.body.style.cursor = 'none';
      }
      
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.tagName.toLowerCase() === 'input' ||
        target.classList.contains('interactive');
      
      setIsHovering(Boolean(isInteractive));
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      if (isVisible) {
        document.body.style.cursor = 'none';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);
  
  if (!isVisible) return null;
  
  // Calculate size for the outer ring based on state
  const outerRingSize = isHovering ? 30 : 48; // 48px default, 30px when hovering (smaller when hovering)
  
  return (
    <>
      {/* Main cursor dot */}
      <motion.div 
        className="fixed rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: position.x - 5,
          y: position.y - 5,
          width: '10px',
          height: '10px',
          backgroundColor: isHovering ? '#3B82F6' : '#ffffff',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      />
      
      {/* Outer cursor ring with dynamic size */}
      <motion.div 
        className="fixed rounded-full border-2 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          borderColor: isHovering ? '#3B82F6' : '#ffffff',
          opacity: isHovering ? 0.8 : 1,
        }}
        animate={{
          width: outerRingSize,
          height: outerRingSize,
          x: position.x - outerRingSize/2,
          y: position.y - outerRingSize/2,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 1
        }}
      />
      
      {/* Optional tracer effect */}
      <motion.div 
        className="fixed rounded-full bg-blue-500 pointer-events-none z-[9997]"
        style={{
          x: position.x - 2.5,
          y: position.y - 2.5,
          width: '5px',
          height: '5px',
          opacity: 0.3,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "linear"
        }}
      />
    </>
  );
}