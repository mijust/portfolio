"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  tags: string[];
  isInternal: boolean;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
  tags,
  isInternal,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300"
    >
      <div className="relative overflow-hidden h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center"
        >
          {!isInternal && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-4 py-2 rounded-full m-2 hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Preview
            </motion.a>
          )}
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-500">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, tagIndex) => (
            <motion.span 
              key={tagIndex} 
              whileHover={{ y: -2, backgroundColor: "#2563EB" }}
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-between">
          {isInternal ? (
            <span className="text-gray-500 inline-flex items-center">
              Internal Project
            </span>
          ) : (
            <>
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink size={18} className="mr-1" /> Live Demo
              </motion.a>
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Github size={18} className="mr-1" /> GitHub
              </motion.a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}