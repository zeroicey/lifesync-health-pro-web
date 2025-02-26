"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, Clock, Star } from "lucide-react";

export function CommunityHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="搜索社区内容..."
            className="pl-9"
          />
        </div>
        <Button>发布帖子</Button>
      </div>

      <div className="flex items-center justify-between">
        <Tabs defaultValue="trending" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="trending" className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              热门
            </TabsTrigger>
            <TabsTrigger value="latest" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              最新
            </TabsTrigger>
            <TabsTrigger value="following" className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              关注
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>排序方式:</span>
          <select className="bg-transparent border-none outline-none">
            <option>最热门</option>
            <option>最新发布</option>
            <option>最多评论</option>
          </select>
        </div>
      </div>
    </div>
  );
}
