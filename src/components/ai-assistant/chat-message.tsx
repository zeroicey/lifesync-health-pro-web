"use client";

import { Card } from "@/components/ui/card";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp: string;
}

export function ChatMessage({ content, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className="flex-shrink-0">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? "bg-blue-500" : "bg-purple-500"
        }`}>
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>
      </div>
      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
        <Card className={`p-3 max-w-[80%] ${
          isUser ? "bg-blue-500 text-white" : "bg-white"
        }`}>
          <p className="whitespace-pre-wrap">{content}</p>
        </Card>
        <span className="text-xs text-gray-500 mt-1">{timestamp}</span>
      </div>
    </div>
  );
}
