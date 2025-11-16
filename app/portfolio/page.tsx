"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
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
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses
            achieve their digital goals.
          </p>
        </motion.div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                    📱
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm">{project.description}</p>
                  <div className="mt-4 text-sm text-[#6A5CFF] font-medium">
                    View Project →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

