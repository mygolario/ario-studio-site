"use client";

import Section from "@/components/Section";
import FadeInSection from "@/components/ui/FadeInSection";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Rocket } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Explore our latest projects and see how we&apos;ve helped businesses
              achieve their digital goals.
            </p>
          </div>
        </FadeInSection>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeInSection key={project.slug} delay={index * 0.05}>
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
      </Section>
    </div>
  );
}
