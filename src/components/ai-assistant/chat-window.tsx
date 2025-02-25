"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { assistants } from "./assistant-selector";
import { models } from "./model-selector";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  assistantId: string;
  modelId: string;
}

export function ChatWindow({ assistantId, modelId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const assistant = assistants.find((a) => a.id === assistantId);
  const model = models.find((m) => m.id === modelId);

  useEffect(() => {
    // 清空聊天记录并添加欢迎消息
    setMessages([
      {
        id: "welcome",
        content: `您好！我是${assistant?.name}，正在使用${model?.name}模型为您服务。${assistant?.description}请问有什么我可以帮您的吗？`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, [assistantId, modelId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    // 模拟AI回复
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(assistantId, modelId, content),
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <div className="p-3 border-b bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium">{assistant?.name}</span>
            <span className="text-sm text-gray-500">使用 {model?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isTyping ? "bg-green-500 animate-pulse" : "bg-gray-300"}`} />
            <span className="text-sm text-gray-500">{isTyping ? "正在输入..." : "在线"}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {isTyping && (
          <div className="flex gap-2 items-center text-gray-500">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="animate-pulse">...</span>
            </div>
            <span>正在输入...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </Card>
  );
}

// 模拟AI回复逻辑
function getAIResponse(assistantId: string, modelId: string, message: string): string {
  const responses: { [key: string]: { [key: string]: string[] } } = {
    psychologist: {
      "gpt-4": [
        "作为一个经过专业心理健康训练的GPT-4模型，我建议我们可以这样思考这个问题...",
        "从心理学的角度来看，这种情况通常与以下因素有关...",
        "让我们一起探索一下这种感受背后的深层原因...",
      ],
      "deepseek-r1": [
        "基于我的中文心理咨询训练，我理解您现在的感受...",
        "从专业的心理健康角度，我们可以这样分析...",
        "这确实是一个值得关注的心理状态，让我们一起探讨...",
      ],
    },
    fitness: {
      "gpt-4": [
        "基于最新的运动科学研究，我建议您的训练计划可以这样调整...",
        "从专业健身的角度，这个动作的要领是...",
        "让我为您详细分析一下这个训练方案的优化空间...",
      ],
      "deepseek-r1": [
        "根据我对中国健身爱好者的研究，这种训练方式很适合您...",
        "考虑到您的具体情况，我建议可以这样安排训练...",
        "从科学健身的角度，我们需要注意以下几个要点...",
      ],
    },
    doctor: {
      "gpt-4": [
        "根据最新的医学研究数据，这种症状通常表明...",
        "从预防医学的角度，我建议您可以采取以下措施...",
        "让我们系统地分析一下您的健康状况...",
      ],
      "deepseek-r1": [
        "结合中国居民的健康特点，我建议您可以这样调整...",
        "从中医和西医的角度，我们都需要注意以下几点...",
        "基于我的医疗数据库，这种情况的改善建议是...",
      ],
    },
  };

  const modelResponses = responses[assistantId]?.[modelId] || [];
  return modelResponses[Math.floor(Math.random() * modelResponses.length)] || "我理解您的问题，让我们继续探讨...";
}
