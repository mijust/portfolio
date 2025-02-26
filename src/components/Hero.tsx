"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      
      <div className="text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          Hi, I'm <motion.span 
            className="text-blue-500"
            animate={{ 
              color: ["#3B82F6", "#2563EB", "#3B82F6"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >Michael Justus</motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-400"
        >
          Web Developer | Engineering Student
        </motion.p>
        
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
          }}
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
        >
          View My Work
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight className="ml-2" size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}