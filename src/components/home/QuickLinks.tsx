"use client";
import { MessageCircle, Award, BookOpen } from "lucide-react";

const quickLinks = [
  {
    icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
    title: "互助问答",
    description: "与心同道者分享经验和故事，共同进步",
  },
  {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    title: "健康达人",
    description: "分享成功经验，激励更多人加入健康",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-blue-500" />,
    title: "专家专栏",
    description: "权威专家分享健康知识，提供专业建议",
  },
];

export const QuickLinks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">活力社区</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold">{link.title}</h3>
                <p className="text-gray-600">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
