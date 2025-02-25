"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export const models = [
  {
    id: "gpt-4",
    name: "ChatGPT-4",
    description: "OpenAI 最强大的语言模型，在健康咨询领域经过专业微调",
    icon: "/images/chatgpt-icon.png",
    features: ["强大的推理能力", "专业医疗知识", "更自然的对话"],
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek-R1",
    description: "DeepSeek 开源大模型，在中文健康领域表现出色",
    icon: "/images/deepseek-icon.png",
    features: ["优秀的中文理解", "开源透明", "快速响应"],
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

interface ModelSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ModelSelector({ selectedId, onSelect }: ModelSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {models.map((model) => {
        const isSelected = selectedId === model.id;
        
        return (
          <Card
            key={model.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md border-2 ${
              isSelected ? model.borderColor : "border-transparent"
            }`}
            onClick={() => onSelect(model.id)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${model.bgColor}`}>
                <div className="w-12 h-12 relative">
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
