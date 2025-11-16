"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/ui/Card";
import FadeInSection from "@/components/ui/FadeInSection";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (no backend for now)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", email: "", budget: "", message: "" });
    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Ready to start your project? Let&apos;s discuss how we can help bring
              your vision to life.
            </p>
          </div>
        </FadeInSection>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <FadeInSection>
            <Card className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-white/80"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/60 focus:outline-none transition-all text-white placeholder-white/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-white/80"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/60 focus:outline-none transition-all text-white placeholder-white/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium mb-2 text-white/80"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/60 focus:outline-none transition-all text-white"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-white/80"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/60 focus:outline-none transition-all text-white placeholder-white/40 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400"
                  >
                    Thank you! Your message has been sent. We&apos;ll get back to you
                    soon.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full text-lg py-4"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </FadeInSection>
        </div>
      </Section>

      {/* Social Links Section */}
      <Section>
        <FadeInSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-primary-purple mb-4 font-semibold">
              Connect
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Connect With Us
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card hover className="p-4 flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">LinkedIn</span>
                </Card>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card hover className="p-4 flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">Instagram</span>
                </Card>
              </a>
              <a
                href="mailto:hello@ariostudio.com"
                className="group"
              >
                <Card hover className="p-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">Email</span>
                </Card>
              </a>
            </div>
          </div>
        </FadeInSection>
      </Section>
    </div>
  );
}
