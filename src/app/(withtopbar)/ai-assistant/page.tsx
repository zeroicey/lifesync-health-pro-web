"use client";

import { useState } from "react";
import { ChatWindow } from "@/components/ai-assistant/chat-window";
import { SettingsDialog } from "@/components/ai-assistant/settings-dialog";
import { models } from "@/components/ai-assistant/model-selector";
import { assistants } from "@/components/ai-assistant/assistant-selector";

export default function AIAssistantPage() {
  const [selectedAssistant, setSelectedAssistant] = useState("psychologist");
  const [selectedModel, setSelectedModel] = useState("gpt-4");

  const currentAssistant = assistants.find(a => a.id === selectedAssistant);
  const currentModel = models.find(m => m.id === selectedModel);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI 健康助手
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>当前助手：{currentAssistant?.name}</span>
            <span>•</span>
            <span>使用模型：{currentModel?.name}</span>
          </div>
        </div>
        <SettingsDialog
          selectedModel={selectedModel}
          selectedAssistant={selectedAssistant}
          onModelSelect={setSelectedModel}
          onAssistantSelect={setSelectedAssistant}
        />
      </div>

      <ChatWindow 
        assistantId={selectedAssistant}
        modelId={selectedModel}
      />
    </div>
  );
}
