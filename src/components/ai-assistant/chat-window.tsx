"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  assistant: {
    id: string;
    name: string;
    description: string;
    status: string;
    lastActive: string;
  };
  model: {
    id: string;
    name: string;
    description: string;
  };
  onClose: () => void;
}

export function ChatWindow({ assistant, model, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 添加欢迎消息
    setMessages([
      {
        id: "welcome",
        content: `您好！我是${assistant.name}，正在使用${model.name}模型为您服务。${assistant.description}请问有什么我可以帮您的吗？`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, [assistant, model]);

  useEffect(() => {
    // 滚动到最新消息
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content.trim()),
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getAIResponse = (message: string): string => {
    // 这里可以根据不同的助手和模型返回不同的回复
    const responses = [
      "我理解您的问题，让我为您详细解答...",
      "这是一个很好的问题，根据专业建议...",
      "从健康角度来看，我建议您...",
      "根据最新的研究表明...",
      "让我们一起分析这个情况...",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Card className={`flex flex-col transition-all duration-300 ${
      isFullscreen ? 'fixed inset-4 z-50' : 'h-[600px]'
    }`}>
      {/* 头部 */}
      <div className="p-3 border-b bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{assistant.name}</span>
                <span className={`w-2 h-2 rounded-full ${
                  assistant.status === "online" ? "bg-green-500" :
                  assistant.status === "busy" ? "bg-yellow-500" :
                  "bg-gray-500"
                } ${isTyping ? "animate-pulse" : ""}`} />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>使用 {model.name}</span>
                <span>•</span>
                <span>{assistant.lastActive}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* 消息列表 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="animate-pulse text-white">...</span>
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入框 */}
      <div className="border-t">
        <ChatInput onSend={handleSendMessage} disabled={isTyping} />
      </div>
    </Card>
  );
}
