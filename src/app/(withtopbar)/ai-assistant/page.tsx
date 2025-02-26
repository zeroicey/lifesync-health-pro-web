"use client";

import { useState } from "react";
import { ChatWindow } from "@/components/ai-assistant/chat-window";
import { SettingsDialog } from "@/components/ai-assistant/settings-dialog";
import { AssistantSelector } from "@/components/ai-assistant/assistant-selector";
import { models } from "@/components/ai-assistant/model-selector";
import { assistants } from "@/components/ai-assistant/assistant-selector";
import { Button } from "@/components/ui/button";

export default function AIAssistantPage() {
  const [selectedAssistant, setSelectedAssistant] = useState("psychologist");
  const [selectedModel, setSelectedModel] = useState("deepseek-r1");
  const [showChat, setShowChat] = useState(false);

  const currentAssistant = assistants.find((a) => a.id === selectedAssistant);
  const currentModel = models.find((m) => m.id === selectedModel);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI 健康助手
          </h1>
          <p className="text-gray-600 max-w-2xl">
            您的24/7健康顾问，提供专业的健康建议、心理咨询和生活指导。我们的AI助手采用先进的
            {currentModel?.name}模型，
            结合多位专家的知识，为您提供全面的健康服务。
          </p>
        </div>
        <div className="flex items-center gap-4">
          <SettingsDialog
            selectedModel={selectedModel}
            selectedAssistant={selectedAssistant}
            onModelSelect={setSelectedModel}
            onAssistantSelect={setSelectedAssistant}
          />
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            onClick={() => setShowChat(true)}
          >
            开始对话
          </Button>
        </div>
      </div>

      {!showChat ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistants.map((assistant) => (
              <div
                key={assistant.id}
                className={`p-6 rounded-lg border-2 transition-all cursor-pointer hover:shadow-lg ${
                  selectedAssistant === assistant.id
                    ? assistant.borderColor
                    : "border-transparent"
                } ${assistant.bgColor}`}
                onClick={() => setSelectedAssistant(assistant.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-full ${assistant.bgColor} relative`}
                  >
                    {assistant.icon && (
                      <assistant.icon
                        className={`w-6 h-6 ${assistant.color}`}
                      />
                    )}
                    <span
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        assistant.status === "online"
                          ? "bg-green-500"
                          : assistant.status === "busy"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{assistant.name}</h3>
                    <p className="text-xs text-gray-500">
                      {assistant.lastActive}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{assistant.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">
              当前助手：{currentAssistant?.name}
              <span
                className={`ml-2 inline-block w-2 h-2 rounded-full ${
                  currentAssistant?.status === "online"
                    ? "bg-green-500"
                    : currentAssistant?.status === "busy"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                }`}
              />
            </h2>
            <p className="text-gray-600 mb-4">
              {currentAssistant?.description}
            </p>
            <p className="text-sm text-gray-500">
              最后活跃：{currentAssistant?.lastActive}
            </p>
          </div>
        </div>
      ) : (
        <ChatWindow
          assistant={currentAssistant!}
          model={currentModel!}
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}
