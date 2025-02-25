"use client";
import { Card } from "@/components/ui/card";
import { Stethoscope, Brain, Heart } from "lucide-react";

const assistants = [
  {
    icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
    name: "健康助手",
    role: "AI健康管理助手",
    description:
      "帮助记录和整理您的健康数据，提供基础的健康建议参考。",
    features: ["健康数据记录", "生活习惯提醒", "健康知识科普"],
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-500" />,
    name: "运动助手",
    role: "AI运动规划助手",
    description:
      "根据您的运动习惯和身体状况，提供运动建议和计划参考。",
    features: ["运动计划建议", "运动记录统计", "运动知识分享"],
  },
  {
    icon: <Heart className="w-12 h-12 text-pink-500" />,
    name: "心理助手",
    role: "AI心理关怀助手",
    description:
      "提供基础的心理健康资讯，帮助您更好地了解自己的心理状态。",
    features: ["心理健康知识", "情绪记录", "放松技巧推荐"],
  },
];

export const AIAssistants = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI健康助手</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们的AI助手可以帮助您更好地管理健康数据，获取健康知识
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assistants.map((assistant, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
                  {assistant.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{assistant.name}</h3>
                <p className="text-gray-500 mb-4">{assistant.role}</p>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                {assistant.description}
              </p>
              <div className="space-y-2">
                {assistant.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-center justify-center bg-gray-50 rounded-lg py-2"
                  >
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* 简单的说明 */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">温馨提示</h3>
            <p className="text-gray-600 mb-6">
              AI助手仅提供基础的健康管理功能和建议参考，不能替代专业医生的诊断和建议。
              如有健康问题，请及时就医咨询。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-600">数据记录整理</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-purple-600">健康知识参考</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-sm text-pink-600">生活习惯提醒</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
