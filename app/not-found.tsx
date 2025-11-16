import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          Go Home
        </Button>
      </div>
    </div>
  );
}

