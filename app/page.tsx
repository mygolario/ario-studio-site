"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/ui/Card";
import FadeInSection from "@/components/ui/FadeInSection";
import Link from "next/link";
import { Globe, ShoppingCart, Bot, Palette, Zap, Sparkles, Rocket, Code } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description: "Next.js & WordPress",
    icon: Globe,
  },
  {
    title: "E-commerce & Landing Pages",
    description: "High-converting online stores",
    icon: ShoppingCart,
  },
  {
    title: "AI Automations & Chatbots",
    description: "Smart automation solutions",
    icon: Bot,
  },
  {
    title: "Branding & Content Creation",
    description: "Complete brand identity",
    icon: Palette,
  },
];

const projects = [
  {
    slug: "project-1",
    title: "Premium E-commerce Platform",
    description: "Modern Next.js store with AI recommendations",
  },
  {
    slug: "project-2",
    title: "SaaS Dashboard",
    description: "Beautiful analytics dashboard with real-time data",
  },
  {
    slug: "project-3",
    title: "AI-Powered Chatbot",
    description: "Intelligent customer support automation",
  },
  {
    slug: "project-4",
    title: "Brand Identity & Website",
    description: "Complete rebrand with modern web presence",
  },
];

const whyChooseUs = [
  {
    title: "Modern Tech Stack",
    description: "Built with Next.js, TypeScript, and cutting-edge tools",
    icon: Code,
  },
  {
    title: "Premium Design",
    description: "Agency-level UI/UX that converts visitors into customers",
    icon: Sparkles,
  },
  {
    title: "AI-Powered Solutions",
    description: "Leverage AI to automate workflows and enhance experiences",
    icon: Bot,
  },
  {
    title: "Fast & Scalable",
    description: "Optimized performance that grows with your business",
    icon: Zap,
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
      <Section className="pt-20 md:pt-32 min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-violet/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ario Studio — Building Premium{" "}
              <span className="gradient-text">Websites & Digital Experiences</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            We specialize in web design, e-commerce solutions, AI automations,
            and creating digital experiences that drive results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.title} delay={index * 0.1}>
                <Card className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-white/60">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Showcasing our latest work and client success stories
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeInSection key={project.slug} delay={index * 0.1}>
              <Card hover className="overflow-hidden">
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary-purple/20 via-primary-violet/20 to-primary-blue/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <Rocket className="w-16 h-16 text-white/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{project.description}</p>
                    <span className="text-sm text-primary-purple font-medium inline-flex items-center gap-2">
                      View Project <span>→</span>
                    </span>
                  </div>
                </Link>
              </Card>
            </FadeInSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/portfolio" variant="secondary">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Why Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              What sets Ario Studio apart in the digital landscape
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInSection key={item.title} delay={index * 0.1}>
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-purple" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              From idea to launch, we guide you through every step
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <FadeInSection key={step.step} delay={index * 0.1}>
              <Card className="p-6 relative">
                <div className="text-4xl font-bold gradient-text mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <FadeInSection>
          <Card className="p-12 md:p-16 text-center">
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
          </Card>
        </FadeInSection>
      </Section>
    </div>
  );
}
