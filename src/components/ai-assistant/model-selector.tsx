"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export const models = [
  {
    id: "deepseek-r1",
    name: "DeepSeek-R1",
    description: "DeepSeek开源大模型，在中文健康领域表现出色，响应速度快，性价比高",
    icon: "/images/deepseek-icon.png",
    size: 50,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: ["优秀的中文理解", "快速响应", "开源透明", "专业医疗知识"],
    isRecommended: true,
  },
  {
    id: "gpt-4",
    name: "ChatGPT-4",
    description: "OpenAI最强大的语言模型，提供全面的健康咨询服务",
    icon: "/images/chatgpt-icon.png",
    size: 48,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    features: ["强大的推理能力", "专业医疗知识", "多语言支持"],
    isRecommended: false,
  },
  {
    id: "claude-2",
    name: "Claude 2",
    description: "Anthropic的AI助手，擅长医疗健康领域的专业分析",
    icon: "/images/claude-icon.png",
    size: 48,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    features: ["专业医疗分析", "安全可靠", "详细解答"],
    isRecommended: false,
  },
];

interface ModelSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ModelSelector({ selectedId, onSelect }: ModelSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {models.map((model) => {
        const isSelected = selectedId === model.id;
        
        return (
          <Card
            key={model.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md border-2 relative ${
              isSelected ? model.borderColor : "border-transparent"
            }`}
            onClick={() => onSelect(model.id)}
          >
            {model.isRecommended && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                推荐
              </span>
            )}
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${model.bgColor}`}>
                <div className="relative" style={{ width: model.size, height: model.size }}>
                  <Image
                    src={model.icon}
                    alt={model.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{model.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{model.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {model.features.map((feature, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${model.bgColor} ${model.color}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
