"use client";

import Section from "@/components/Section";
import Card from "@/components/ui/Card";
import FadeInSection from "@/components/ui/FadeInSection";

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
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              About
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="gradient-text">Ario Studio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              We&apos;re passionate about building premium digital experiences that
              drive results.
            </p>
          </div>
        </FadeInSection>
      </Section>

      {/* Introduction Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-purple/20 via-primary-violet/20 to-primary-blue/20 flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <Card className="p-8 md:p-12">
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
              </Card>
            </FadeInSection>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Technologies and disciplines we excel in
            </p>
          </div>
        </FadeInSection>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <FadeInSection key={skill} delay={index * 0.05}>
                <Card hover={false} className="p-4 text-center font-medium">
                  {skill}
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Section>

      {/* Values & Mission Section */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values & Mission
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              What drives us and how we approach every project
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <FadeInSection key={value.title} delay={index * 0.1}>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 md:p-16 text-center">
              <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
                Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                To empower businesses with premium digital experiences that
                combine exceptional design, modern technology, and strategic
                thinking. We&apos;re committed to helping our clients succeed in the
                digital landscape.
              </p>
            </Card>
          </div>
        </FadeInSection>
      </Section>
    </div>
  );
}
