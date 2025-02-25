"use client";
import { Hero } from "@/components/about/Hero";
import { Features } from "@/components/about/Features";
import { Team } from "@/components/about/Team";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero teamName="Acacia Team" slogan="用科技创新改变健康管理方式" />
      <Features
        projectName="LifeSync Health Pro"
        projectType="创新型健康管理平台"
      />
      <Team />
    </main>
  );
}
