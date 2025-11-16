"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";

const services = [
  {
    title: "Website Design",
    description: "Next.js & WordPress",
    icon: "🌐",
  },
  {
    title: "E-commerce & Landing Pages",
    description: "High-converting online stores",
    icon: "🛒",
  },
  {
    title: "AI Automations & Chatbots",
    description: "Smart automation solutions",
    icon: "🤖",
  },
  {
    title: "Branding & Content Creation",
    description: "Complete brand identity",
    icon: "🎨",
  },
];

const projects = [
  {
    slug: "project-1",
    title: "Premium E-commerce Platform",
    description: "Modern Next.js store with AI recommendations",
    image: "/api/placeholder/600/400",
  },
  {
    slug: "project-2",
    title: "SaaS Dashboard",
    description: "Beautiful analytics dashboard with real-time data",
    image: "/api/placeholder/600/400",
  },
  {
    slug: "project-3",
    title: "AI-Powered Chatbot",
    description: "Intelligent customer support automation",
    image: "/api/placeholder/600/400",
  },
  {
    slug: "project-4",
    title: "Brand Identity & Website",
    description: "Complete rebrand with modern web presence",
    image: "/api/placeholder/600/400",
  },
];

const whyChooseUs = [
  {
    title: "Modern Tech Stack",
    description: "Built with Next.js, TypeScript, and cutting-edge tools",
  },
  {
    title: "Premium Design",
    description: "Agency-level UI/UX that converts visitors into customers",
  },
  {
    title: "AI-Powered Solutions",
    description: "Leverage AI to automate workflows and enhance experiences",
  },
  {
    title: "Fast & Scalable",
    description: "Optimized performance that grows with your business",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your goals, audience, and vision",
  },
  {
    step: "02",
    title: "Design",
    description: "Creating beautiful, user-centered designs",
  },
  {
    step: "03",
    title: "Development",
    description: "Building with modern tech and best practices",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy, optimize, and scale your digital presence",
  },
];

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ario Studio — Building Premium{" "}
            <span className="gradient-text">Websites & Digital Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            We specialize in web design, e-commerce solutions, AI automations,
            and creating digital experiences that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Showcasing our latest work and client success stories
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="aspect-video bg-gradient-to-br from-[#6A5CFF]/20 to-[#3A86FF]/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📱</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/portfolio" variant="secondary">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            What sets Ario Studio apart in the digital landscape
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From idea to launch, we guide you through every step
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <div className="text-4xl font-bold gradient-text mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss your project and bring your vision to life with
            premium design and modern technology.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}

