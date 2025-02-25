"use client";
import { Card } from "@/components/ui/card";
import {
  Code,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "技术创新",
    description:
      "采用前沿技术栈，打造高性能的健康管理解决方案。",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "用户至上",
    description:
      "以用户需求为中心，提供直观、易用的健康管理工具。",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "数据安全",
    description:
      "严格保护用户隐私，确保数据安全和合规使用。",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "持续创新",
    description:
      "不断探索和优化，为用户带来更好的使用体验。",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "开放合作",
    description:
      "欢迎志同道合的伙伴加入，共同推进项目发展。",
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "快速响应",
    description:
      "及时处理用户反馈，持续改进产品功能。",
  },
];

interface FeaturesProps {
  projectName: string;
  projectType: string;
}

export const Features = ({ projectName, projectType }: FeaturesProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">团队特色</h2>
          <p className="text-gray-600 text-lg">
            {projectName} 是一个{projectType}，
            由 Acacia 团队倾心打造。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gray-50 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
