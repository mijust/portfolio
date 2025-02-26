"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { smoothScroll } from "../utils/smoothScroll";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScroll(targetId);
  };
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="text-2xl font-bold text-blue-500">
            mijust
          </Link>
        </motion.div>
        
        <nav>
          <ul className="flex space-x-6">
            {["about", "projects", "resume", "contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.a 
                  href={`#${item}`}
                  onClick={(e) => handleClick(e, item)}
                  className="hover:text-blue-500 transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="capitalize">{item}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}