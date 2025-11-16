import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/ui/Card";
import FadeInSection from "@/components/ui/FadeInSection";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 mb-8">{project.description}</p>
          </FadeInSection>
        </div>
      </Section>

      {/* Mockup Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <Card className="p-4 md:p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-purple/20 via-primary-violet/20 to-primary-blue/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="text-8xl opacity-50">📱</div>
              </div>
            </Card>
          </FadeInSection>
        </div>
      </Section>

      {/* Project Details */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About the Project */}
          <FadeInSection>
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
                Overview
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                About the Project
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </FadeInSection>

          {/* Role */}
          <FadeInSection delay={0.1}>
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
                Role
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">My Role</h2>
              <p className="text-white/80 text-lg">{project.role}</p>
            </div>
          </FadeInSection>

          {/* Technologies */}
          <FadeInSection delay={0.2}>
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
                Stack
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Technologies & Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Card key={tech} hover={false} className="px-4 py-2">
                    <span className="text-sm font-medium">{tech}</span>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Results */}
          <FadeInSection delay={0.3}>
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
                Results
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80 text-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-purple/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary-purple" />
                    </div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <Card className="p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Similar Project?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s discuss how we can bring your vision to life with premium
                design and modern technology.
              </p>
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Card>
          </FadeInSection>
        </div>
      </Section>
    </div>
  );
}
