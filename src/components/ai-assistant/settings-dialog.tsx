"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { ModelSelector } from "./model-selector";
import { AssistantSelector } from "./assistant-selector";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsDialogProps {
  selectedModel: string;
  selectedAssistant: string;
  onModelSelect: (id: string) => void;
  onAssistantSelect: (id: string) => void;
}

export function SettingsDialog({
  selectedModel,
  selectedAssistant,
  onModelSelect,
  onAssistantSelect,
}: SettingsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="w-9 h-9">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>AI 助手设置</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="model" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="model">选择语言模型</TabsTrigger>
            <TabsTrigger value="assistant">选择专业助手</TabsTrigger>
          </TabsList>
          <TabsContent value="model" className="mt-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">语言模型</h3>
                <p className="text-gray-600 text-sm mb-4">
                  我们使用经过专业医疗知识微调的大语言模型，确保回答的准确性和专业性
                </p>
              </div>
              <ModelSelector
                selectedId={selectedModel}
                onSelect={onModelSelect}
              />
            </div>
          </TabsContent>
          <TabsContent value="assistant" className="mt-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">专业助手</h3>
                <p className="text-gray-600 text-sm mb-4">
                  每位助手都经过特定领域的专业训练，能够为您提供针对性的建议
                </p>
              </div>
              <AssistantSelector
                selectedId={selectedAssistant}
                onSelect={onAssistantSelect}
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
