"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const skills = [
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "AI Tools",
  "UX Thinking",
  "Framer Motion",
  "WordPress",
  "E-commerce",
  "React",
  "Node.js",
  "UI Design",
  "Branding",
];

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on quality. Every project is built with attention to detail and best practices.",
  },
  {
    title: "Modern Solutions",
    description:
      "We stay ahead of the curve, using the latest technologies and design trends to create cutting-edge solutions.",
  },
  {
    title: "Client-Focused",
    description:
      "Your success is our success. We work closely with clients to understand their goals and deliver results.",
  },
  {
    title: "Continuous Learning",
    description:
      "The digital landscape evolves rapidly. We continuously learn and adapt to bring you the best solutions.",
  },
];

export default function AboutPage() {
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
            About <span className="gradient-text">Ario Studio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We&apos;re passionate about building premium digital experiences that
            drive results.
          </p>
        </motion.div>
      </Section>

      {/* Introduction Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Welcome to Ario Studio
            </h2>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Ario Studio is a digital agency founded by{" "}
                <span className="font-semibold text-white">Ario Kaveh</span>,
                specializing in creating premium websites and digital experiences
                that combine beautiful design with cutting-edge technology.
              </p>
              <p>
                Our focus is on Next.js development, AI-powered solutions, and
                modern web experiences that not only look stunning but also
                perform exceptionally. We believe in the power of great design
                and smart technology to transform businesses.
              </p>
              <p>
                Whether you need a custom website, an e-commerce platform, AI
                automations, or a complete brand identity, we bring expertise,
                creativity, and dedication to every project.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Technologies and disciplines we excel in
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center font-medium hover:bg-white/10 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values & Mission Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Values & Mission
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            What drives us and how we approach every project
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              To empower businesses with premium digital experiences that
              combine exceptional design, modern technology, and strategic
              thinking. We&apos;re committed to helping our clients succeed in the
              digital landscape.
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

