import Link from "next/link";
import { ReactNode } from "react";

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
      ? "bg-gradient-to-r from-[#6A5CFF] to-[#8338EC] hover:from-[#8338EC] hover:to-[#3A86FF] text-white shadow-lg hover:shadow-xl hover:scale-105"
      : "glass text-white hover:bg-white/10 border border-white/20";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

