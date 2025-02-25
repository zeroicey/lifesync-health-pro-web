"use client";

import { useState } from "react";
import { AssistantSelector } from "@/components/ai-assistant/assistant-selector";
import { ChatWindow } from "@/components/ai-assistant/chat-window";

export default function AIAssistantPage() {
  const [selectedAssistant, setSelectedAssistant] = useState("psychologist");

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AI 健康助手
      </h1>
      <div className="mb-8">
        <AssistantSelector
          selectedId={selectedAssistant}
          onSelect={setSelectedAssistant}
        />
      </div>
      <ChatWindow assistantId={selectedAssistant} />
    </div>
  );
}
