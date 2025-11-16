"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";

const services = [
  {
    title: "Website Design",
    subtitle: "Next.js & WordPress",
    description:
      "We create stunning, high-performance websites using Next.js for modern applications and WordPress for content-rich sites. Every design is mobile-first, SEO-optimized, and built to convert.",
    icon: "🌐",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Fast loading times",
      "Modern UI/UX",
    ],
  },
  {
    title: "E-commerce & Landing Pages",
    subtitle: "High-Converting Online Stores",
    description:
      "Build powerful e-commerce platforms and landing pages that turn visitors into customers. We focus on conversion optimization, user experience, and seamless checkout flows.",
    icon: "🛒",
    features: [
      "Shopping cart integration",
      "Payment gateway setup",
      "Product management",
      "Analytics & tracking",
    ],
  },
  {
    title: "AI Automations & Chatbots",
    subtitle: "Smart Automation Solutions",
    description:
      "Leverage AI to automate workflows, enhance customer support, and create intelligent chatbots that provide 24/7 assistance. We integrate cutting-edge AI tools to streamline your operations.",
    icon: "🤖",
    features: [
      "Custom chatbot development",
      "Workflow automation",
      "AI-powered analytics",
      "Integration with existing tools",
    ],
  },
  {
    title: "Branding & Content Creation",
    subtitle: "Complete Brand Identity",
    description:
      "From logo design to content strategy, we help you build a cohesive brand identity that resonates with your audience. Our approach combines creativity with strategic thinking.",
    icon: "🎨",
    features: [
      "Logo & visual identity",
      "Content strategy",
      "Social media assets",
      "Brand guidelines",
    ],
  },
];

export default function ServicesPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and
            drive business growth.
          </p>
        </motion.div>
      </Section>

      {/* Services List */}
      <Section>
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-lg">{service.subtitle}</p>
                </div>
                <div className="flex-1">
                  <p className="text-white/80 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-white/70"
                      >
                        <span className="text-[#6A5CFF]">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" variant="primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
            We&apos;re always open to discussing custom projects and unique
            requirements. Let&apos;s talk about how we can help.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Contact Us
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}

