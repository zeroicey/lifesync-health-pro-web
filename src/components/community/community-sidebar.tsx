"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Newspaper } from "lucide-react";

const popularTopics = [
  { name: "健康饮食", posts: 328, color: "from-green-500 to-emerald-500" },
  { name: "运动健身", posts: 245, color: "from-blue-500 to-cyan-500" },
  { name: "心理健康", posts: 189, color: "from-purple-500 to-pink-500" },
  { name: "医疗咨询", posts: 156, color: "from-orange-500 to-yellow-500" },
];

const upcomingEvents = [
  {
    title: "健康讲座：科学饮食指南",
    date: "2025年3月1日",
    attendees: 45,
    image: "https://source.unsplash.com/800x600/?healthy-food"
  },
  {
    title: "社区运动会",
    date: "2025年3月15日",
    attendees: 89,
    image: "https://source.unsplash.com/800x600/?sports"
  }
];

export function CommunitySidebar() {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-yellow-500" />
          热门话题
        </h3>
        <div className="space-y-3">
          {popularTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${topic.color}`} />
                <span className="text-gray-700">{topic.name}</span>
              </div>
              <span className="text-sm text-gray-500">{topic.posts} 帖子</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-blue-500" />
          即将举行的活动
        </h3>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="space-y-2">
              <div 
                className="h-24 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <h4 className="font-medium">{event.title}</h4>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{event.date}</span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {event.attendees}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          查看所有活动
        </Button>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Newspaper className="w-5 h-5 text-purple-500" />
          健康资讯
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-blue-600 hover:text-blue-700">
              最新研究：每天步行8000步可显著降低心血管疾病风险
            </h4>
            <p className="text-sm text-gray-500">发布于 2小时前 · 阅读 1.2k</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-blue-600 hover:text-blue-700">
              春季养生指南：中医专家教你调理身体
            </h4>
            <p className="text-sm text-gray-500">发布于 5小时前 · 阅读 856</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full mt-4">
          更多资讯
        </Button>
      </Card>
    </div>
  );
}
