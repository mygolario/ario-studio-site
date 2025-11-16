export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  technologies: string[];
  results: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Premium E-commerce Platform",
    description: "Modern Next.js store with AI recommendations",
    longDescription:
      "A fully-featured e-commerce platform built with Next.js, featuring AI-powered product recommendations, seamless checkout, and advanced analytics. The platform handles thousands of products and provides an exceptional shopping experience.",
    role: "Full-stack Development, UI/UX Design, AI Integration",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "OpenAI"],
    results: [
      "300% increase in conversion rate",
      "50% reduction in cart abandonment",
      "2x faster page load times",
    ],
  },
  {
    slug: "project-2",
    title: "SaaS Dashboard",
    description: "Beautiful analytics dashboard with real-time data",
    longDescription:
      "A comprehensive SaaS analytics dashboard that provides real-time insights into user behavior, revenue metrics, and business performance. Built with modern data visualization and interactive charts.",
    role: "Frontend Development, Data Visualization, UX Design",
    technologies: ["Next.js", "React", "Chart.js", "TypeScript", "TailwindCSS"],
    results: [
      "Real-time data updates",
      "Improved user engagement by 40%",
      "Streamlined analytics workflow",
    ],
  },
  {
    slug: "project-3",
    title: "AI-Powered Chatbot",
    description: "Intelligent customer support automation",
    longDescription:
      "An advanced AI chatbot solution that handles customer inquiries 24/7, integrates with multiple platforms, and learns from interactions to provide increasingly accurate responses.",
    role: "AI Development, Integration, Backend Architecture",
    technologies: ["Next.js", "OpenAI API", "Node.js", "PostgreSQL"],
    results: [
      "80% reduction in support tickets",
      "24/7 customer availability",
      "95% customer satisfaction rate",
    ],
  },
  {
    slug: "project-4",
    title: "Brand Identity & Website",
    description: "Complete rebrand with modern web presence",
    longDescription:
      "A complete brand transformation including logo design, visual identity, and a stunning new website. The project involved extensive research, design iterations, and a modern web implementation.",
    role: "Branding, Web Design, Development",
    technologies: ["Next.js", "Framer Motion", "TailwindCSS", "Figma"],
    results: [
      "Complete brand refresh",
      "200% increase in website traffic",
      "Enhanced brand recognition",
    ],
  },
  {
    slug: "project-5",
    title: "Landing Page Suite",
    description: "High-converting landing pages for multiple products",
    longDescription:
      "A collection of high-converting landing pages designed for different product launches. Each page is optimized for conversion with A/B testing capabilities and integrated analytics.",
    role: "Design, Development, Conversion Optimization",
    technologies: ["Next.js", "TailwindCSS", "Vercel Analytics"],
    results: [
      "Average 15% conversion rate",
      "Fast loading times (< 2s)",
      "Mobile-optimized experience",
    ],
  },
  {
    slug: "project-6",
    title: "WordPress E-commerce Site",
    description: "Custom WooCommerce store with premium design",
    longDescription:
      "A custom WordPress e-commerce site built with WooCommerce, featuring a premium design, custom plugins, and seamless payment integration. The site handles inventory, orders, and customer management.",
    role: "WordPress Development, Theme Customization, Plugin Development",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    results: [
      "Fully functional online store",
      "Custom admin dashboard",
      "Integrated payment solutions",
    ],
  },
  {
    slug: "project-7",
    title: "AI Content Automation",
    description: "Automated content generation and publishing system",
    longDescription:
      "An intelligent content automation system that generates, schedules, and publishes content across multiple platforms. Uses AI to create engaging copy and optimize posting times.",
    role: "AI Integration, Backend Development, Automation",
    technologies: ["Next.js", "OpenAI", "Node.js", "MongoDB"],
    results: [
      "90% time savings on content creation",
      "Consistent brand voice",
      "Increased social media engagement",
    ],
  },
  {
    slug: "project-8",
    title: "Portfolio Website",
    description: "Stunning portfolio site for creative professional",
    longDescription:
      "A beautiful, interactive portfolio website showcasing creative work with smooth animations, image galleries, and a contact system. Built with attention to detail and performance.",
    role: "Design, Development, Animation",
    technologies: ["Next.js", "Framer Motion", "TailwindCSS"],
    results: [
      "Showcase of creative work",
      "Smooth user experience",
      "Increased client inquiries",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

