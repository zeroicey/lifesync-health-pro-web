"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Image, Smile, MapPin } from "lucide-react";

export function PostForm() {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: 实现发帖逻辑
    setTimeout(() => {
      setIsLoading(false);
      setContent("");
    }, 1000);
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
          </div>
          <div className="flex-grow">
            <textarea
              placeholder="分享您的健康生活..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px] p-2 border-none focus:outline-none resize-none bg-transparent"
            />
            <div className="flex items-center justify-between mt-2 border-t pt-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <Image className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                disabled={!content.trim() || isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "发布中..." : "发布"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}
