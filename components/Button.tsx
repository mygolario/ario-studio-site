"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300";
  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-primary-purple via-primary-violet to-primary-blue text-white shadow-lg hover:shadow-xl hover:shadow-primary-purple/50"
      : "backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  const buttonElement = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
    >
      {children}
    </motion.button>
  );
}

