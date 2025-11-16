import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";

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
          <Link
            href="/portfolio"
            className="text-white/60 hover:text-white mb-6 inline-block transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-white/70 mb-8">{project.description}</p>
        </div>
      </Section>

      {/* Mockup Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="aspect-video bg-gradient-to-br from-[#6A5CFF]/20 to-[#3A86FF]/20 rounded-xl flex items-center justify-center">
              <div className="text-8xl opacity-50">📱</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About the Project */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              About the Project
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Role */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">My Role</h2>
            <p className="text-white/80 text-lg">{project.role}</p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Technologies & Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="glass px-4 py-2 rounded-xl text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/80 text-lg"
                >
                  <span className="text-[#6A5CFF] text-xl">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 md:p-16 text-center">
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
          </div>
        </div>
      </Section>
    </div>
  );
}

