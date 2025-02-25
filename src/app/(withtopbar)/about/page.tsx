"use client";
import { Hero } from "@/components/about/Hero";
import { Features } from "@/components/about/Features";
import { Contact } from "@/components/about/Contact";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero teamName="Acacia Team" slogan="用科技创新改变健康管理方式" />
      <Features
        projectName="LifeSync Health Pro"
        projectType="创新型健康管理平台"
      />
      <Contact
        email="zeroicey.hp@outlook.com"
        github="github.com/zeroicey"
        year="2025"
        projectName="LifeSync Health Pro"
      />
    </main>
  );
}
