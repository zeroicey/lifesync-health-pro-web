"use client";
import { Card } from "@/components/ui/card";
import { Activity, Brain, Heart, LineChart, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-12 h-12 text-blue-500" />,
    title: "实时健康监测",
    description: "通过智能设备实时监测您的生理指标，及时预警潜在健康风险。",
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-500" />,
    title: "心理健康评估",
    description: "定期进行心理健康测评，提供专业的心理健康建议和干预方案。",
  },
  {
    icon: <LineChart className="w-12 h-12 text-green-500" />,
    title: "数据分析洞察",
    description: "利用AI技术分析健康数据，生成个性化的健康报告和改善建议。",
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: "专业社区支持",
    description: "连接专业医生和同路人，获取专业建议和经验分享。",
  },
  {
    icon: <Heart className="w-12 h-12 text-red-500" />,
    title: "生活方式指导",
    description: "根据个人情况提供饮食、运动、作息等方面的科学建议。",
  },
  {
    icon: <Shield className="w-12 h-12 text-indigo-500" />,
    title: "隐私数据保护",
    description: "采用先进的加密技术，确保您的健康数据安全。",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">全方位健康管理功能</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们提供完整的健康管理解决方案，帮助您实现身心健康的平衡发展
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
