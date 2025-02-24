import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Brain,
  Calendar,
  ChevronDown,
  Smartphone,
  Heart,
  Lock,
  PenLine,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            心身同调·全维健康
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            用科技守护健康，用数据改善生活
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              立即开始
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              了解更多 <ChevronDown className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quotes Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              {[
                "健康是人生最大的财富。",
                "身心的平衡是健康的基石。",
                "预防胜于治疗，关注健康从现在开始。",
              ].map((quote, index) => (
                <p
                  key={index}
                  className="text-xl text-center italic text-gray-700"
                >
                  {quote}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "健康数据管理",
                description: "全方位记录和分析您的健康指标",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "心理健康追踪",
                description: "关注心理健康，提供专业分析",
              },
              {
                icon: <PenLine className="w-8 h-8" />,
                title: "心路笔记",
                description: "记录每一天的心情变化",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "设备集成",
                description: "支持多种智能设备数据同步",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">健康小贴士</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "规律作息",
                tip: "保持规律的作息时间，提升身体机能",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "适度运动",
                tip: "每天30分钟适度运动，强健体魄",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "心理调节",
                tip: "学会调节心理，保持积极心态",
              },
            ].map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-center mb-4 text-blue-600">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-center">{tip.tip}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">平台优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "数据可视化",
                description: "直观展示健康数据趋势",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "多端同步",
                description: "随时随地查看健康数据",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "数据安全",
                description: "严格保护个人隐私数据",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">开始您的健康之旅</h2>
          <Button size="lg" variant="secondary" className="mr-4">
            免费注册
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              2024 LifeSync Health Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400">
                文档
              </a>
              <a href="#" className="hover:text-blue-400">
                许可证
              </a>
              <a href="#" className="hover:text-blue-400">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
