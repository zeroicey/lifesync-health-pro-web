"use client";

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { QuickLinks } from "@/components/home/QuickLinks";
import { AIAssistants } from "@/components/home/AIAssistants";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <QuickLinks />
      <AIAssistants />
      <CallToAction />
      <Footer />
    </main>
  );
}
