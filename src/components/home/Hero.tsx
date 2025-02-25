"use client";
import { Button } from "@/components/ui/button";
import { Activity, Brain, Users, Shield, ChevronDown, ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img src="/logo.png" alt="LifeSync Logo" className="w-24 h-24 mx-auto" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">心身同调·全维健康</h1>

          {/* Typewriter Effect */}
          <div className="text-xl md:text-2xl mb-8 h-20">
            <Typewriter
              options={{
                strings: [
                  "用科技守护健康，用数据改善生活",
                  "智能数据分析，定制健康方案",
                  "专业社区支持，全方位健康管理",
                  "24/7 AI健康助手，随时守护您的健康",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Activity className="w-6 h-6" />, text: "智能数据追踪" },
              { icon: <Brain className="w-6 h-6" />, text: "心理健康守护" },
              { icon: <Users className="w-6 h-6" />, text: "专业社区支持" },
              { icon: <Shield className="w-6 h-6" />, text: "隐私数据保护" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg py-3 px-4"
              >
                {feature.icon}
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <Button size="lg" variant="secondary" className="group">
              立即开始
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white/20 transition-colors"
            >
              了解更多 <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-80">日活用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-sm opacity-80">用户评分</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-sm opacity-80">AI模型迭代</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};
