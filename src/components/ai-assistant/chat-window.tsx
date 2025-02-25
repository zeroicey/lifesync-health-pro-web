"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { assistants } from "./assistant-selector";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  assistantId: string;
}

export function ChatWindow({ assistantId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const assistant = assistants.find((a) => a.id === assistantId);

  useEffect(() => {
    // 清空聊天记录并添加欢迎消息
    setMessages([
      {
        id: "welcome",
        content: `您好！我是${assistant?.name}。${assistant?.description}请问有什么我可以帮您的吗？`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, [assistantId]);

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
        content: getAIResponse(assistantId, content),
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-[600px]">
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
function getAIResponse(assistantId: string, message: string): string {
  const responses: { [key: string]: string[] } = {
    psychologist: [
      "我理解您的感受，让我们一起来分析这个问题。",
      "您说得对，这确实是一个需要重视的心理状况。",
      "保持积极的心态很重要，我们可以一起探讨解决方案。",
    ],
    fitness: [
      "这是一个很好的训练计划，我建议您可以这样调整...",
      "注意运动强度要循序渐进，让我为您详细说明。",
      "合理的饮食搭配能让训练效果更好，建议您...",
    ],
    doctor: [
      "根据您描述的症状，我建议您可以这样调整作息...",
      "保持规律的生活习惯对健康很重要，具体来说...",
      "这种情况比较常见，不用太担心，我们可以这样改善...",
    ],
  };

  const assistantResponses = responses[assistantId] || [];
  return assistantResponses[Math.floor(Math.random() * assistantResponses.length)] || "我明白了，让我们继续探讨这个问题。";
}
