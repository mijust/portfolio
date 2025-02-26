"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { EMAIL, LINKEDIN, GITHUB } from "../constants/links";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Get In Touch</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg mb-8 text-gray-400">
              I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to
              say hello, feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a 
                href={EMAIL} 
                whileHover={{ y: -5, color: "#3B82F6" }}
                className="text-blue-500 transition-colors"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mail size={24} />
                </motion.div>
              </motion.a>
              
              <motion.a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#3B82F6" }}
                className="text-blue-500 transition-colors"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                >
                  <Linkedin size={24} />
                </motion.div>
              </motion.a>
              
              <motion.a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#3B82F6" }}
                className="text-blue-500 transition-colors"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                >
                  <Github size={24} />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}