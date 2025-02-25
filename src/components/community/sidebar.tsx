"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

const trendingTopics = [
  { id: 1, name: "#健康饮食", posts: 1234 },
  { id: 2, name: "#运动健身", posts: 890 },
  { id: 3, name: "#心理健康", posts: 567 },
  { id: 4, name: "#睡眠质量", posts: 432 },
];

const suggestedUsers = [
  {
    id: 1,
    name: "营养师小王",
    handle: "nutritionist",
    avatar: "/avatars/nutritionist.jpg",
  },
  {
    id: 2,
    name: "健身教练阿强",
    handle: "fitness_coach",
    avatar: "/avatars/coach.jpg",
  },
  {
    id: 3,
    name: "心理咨询师小林",
    handle: "counselor",
    avatar: "/avatars/counselor.jpg",
  },
];

export function CommunitySidebar() {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <h2 className="font-semibold text-lg">热门话题</h2>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="group cursor-pointer">
              <div className="font-medium text-blue-600 group-hover:text-blue-700">
                {topic.name}
              </div>
              <div className="text-sm text-gray-500">
                {topic.posts} 条讨论
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-blue-500" />
          <h2 className="font-semibold text-lg">推荐关注</h2>
        </div>
        <div className="space-y-4">
          {suggestedUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">@{user.handle}</div>
                </div>
              </div>
              <button className="px-4 py-1 text-sm text-blue-500 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                关注
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
