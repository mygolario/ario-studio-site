"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = "", 
  hover = true,
  onClick 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -4, 
        scale: 1.01,
        transition: { duration: 0.2 }
      } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-lg
        transition-all duration-300
        ${hover ? "hover:bg-white/8 hover:border-white/15 hover:shadow-xl" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

