"use client";

import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  Dumbbell, 
  Apple, 
  Moon, 
  Smile, 
  Baby, 
  Flower2, 
  Pill 
} from "lucide-react";

export const assistants = [
  {
    id: "psychologist",
    name: "心理咨询师 - 小林",
    description: "专业心理咨询师，帮助您解决心理困扰，提供情感支持和建议。",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    status: "online", // online, offline, busy
    lastActive: "刚刚在线",
  },
  {
    id: "fitness",
    name: "健身教练 - 阿强",
    description: "专业健身教练，为您定制运动计划，提供饮食建议和训练指导。",
    icon: Dumbbell,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    status: "online",
    lastActive: "刚刚在线",
  },
  {
    id: "doctor",
    name: "健康医生 - 张医生",
    description: "专业医生，解答健康问题，提供日常保健和疾病预防建议。",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    status: "busy",
    lastActive: "10分钟前",
  },
  {
    id: "nutritionist",
    name: "营养师 - 王营养",
    description: "专业营养师，为您定制健康饮食计划，平衡营养摄入。",
    icon: Apple,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    status: "online",
    lastActive: "刚刚在线",
  },
  {
    id: "sleep",
    name: "睡眠专家 - 周博士",
    description: "睡眠质量专家，帮助您改善睡眠，建立健康作息。",
    icon: Moon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    status: "offline",
    lastActive: "1小时前",
  },
  {
    id: "emotion",
    name: "情绪管理师 - 李老师",
    description: "情绪管理专家，教您调节情绪，保持心理健康。",
    icon: Smile,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    status: "online",
    lastActive: "刚刚在线",
  },
  {
    id: "pediatrician",
    name: "儿科医生 - 陈医生",
    description: "儿科专家，关注儿童健康，提供育儿建议。",
    icon: Baby,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    status: "busy",
    lastActive: "5分钟前",
  },
  {
    id: "yoga",
    name: "瑜伽导师 - 美美",
    description: "专业瑜伽教练，指导体式练习，促进身心健康。",
    icon: Flower2,
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    status: "online",
    lastActive: "刚刚在线",
  },
  {
    id: "tcm",
    name: "中医师 - 吴医生",
    description: "中医养生专家，融合传统智慧，调理身体机能。",
    icon: Pill,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    status: "online",
    lastActive: "刚刚在线",
  }
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
              <div className={`p-3 rounded-full ${assistant.bgColor} relative`}>
                <Icon className={`w-6 h-6 ${assistant.color}`} />
                <span 
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    assistant.status === 'online' ? 'bg-green-500' :
                    assistant.status === 'busy' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`} 
                />
              </div>
              <div>
                <h3 className="font-semibold">{assistant.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{assistant.lastActive}</p>
              </div>
              <p className="text-sm text-gray-600">{assistant.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
