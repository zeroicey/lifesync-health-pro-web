"use client";

import { Card } from "@/components/ui/card";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp: string;
}

export function ChatMessage({ content, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3", isUser ? "flex-row-reverse" : "")}>
      <div className="flex-shrink-0">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          isUser ? "bg-blue-500" : "bg-purple-500"
        )}>
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>
      </div>
      <div className={cn("flex flex-col gap-1 max-w-[80%]", isUser ? "items-end" : "items-start")}>
        <div className={cn(
          "p-3 rounded-2xl",
          isUser 
            ? "bg-blue-500 text-white rounded-br-sm" 
            : "bg-gray-100 text-gray-900 rounded-bl-sm"
        )}>
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">{content}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{timestamp}</span>
          {!isUser && (
            <div className="flex gap-2">
              <button className="hover:text-blue-500 transition-colors">复制</button>
              <button className="hover:text-blue-500 transition-colors">朗读</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
