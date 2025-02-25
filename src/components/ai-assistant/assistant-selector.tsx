"use client";

import { Card } from "@/components/ui/card";
import { Brain, Heart, Dumbbell } from "lucide-react";

export const assistants = [
  {
    id: "psychologist",
    name: "心理咨询师 - 小林",
    description: "专业心理咨询师，帮助您解决心理困扰，提供情感支持和建议。",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    id: "fitness",
    name: "健身教练 - 阿强",
    description: "专业健身教练，为您定制运动计划，提供饮食建议和训练指导。",
    icon: Dumbbell,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "doctor",
    name: "健康医生 - 张医生",
    description: "专业医生，解答健康问题，提供日常保健和疾病预防建议。",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

interface AssistantSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function AssistantSelector({ selectedId, onSelect }: AssistantSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {assistants.map((assistant) => {
        const Icon = assistant.icon;
        const isSelected = selectedId === assistant.id;
        
        return (
          <Card
            key={assistant.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md border-2 ${
              isSelected ? assistant.borderColor : "border-transparent"
            }`}
            onClick={() => onSelect(assistant.id)}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`p-3 rounded-full ${assistant.bgColor}`}>
                <Icon className={`w-6 h-6 ${assistant.color}`} />
              </div>
              <h3 className="font-semibold">{assistant.name}</h3>
              <p className="text-sm text-gray-600">{assistant.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
