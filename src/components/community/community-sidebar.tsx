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
    location: "线上直播",
    image: "https://picsum.photos/seed/health1/800/600"
  },
  {
    title: "社区运动会",
    date: "2025年3月15日",
    attendees: 89,
    location: "市体育中心",
    image: "https://picsum.photos/seed/sports1/800/600"
  },
  {
    title: "冥想工作坊",
    date: "2025年3月20日",
    attendees: 32,
    location: "和谐瑜伽中心",
    image: "https://picsum.photos/seed/meditation1/800/600"
  },
  {
    title: "营养师面对面",
    date: "2025年3月25日",
    attendees: 50,
    location: "健康生活馆",
    image: "https://picsum.photos/seed/nutrition1/800/600"
  },
  {
    title: "春季徒步活动",
    date: "2025年4月1日",
    attendees: 120,
    location: "森林公园",
    image: "https://picsum.photos/seed/hiking1/800/600"
  }
];

const healthNews = [
  {
    title: "最新研究：每天步行8000步可显著降低心血管疾病风险",
    time: "2小时前",
    reads: "1.2k",
    tag: "研究报告"
  },
  {
    title: "春季养生指南：中医专家教你调理身体",
    time: "5小时前",
    reads: "856",
    tag: "养生保健"
  },
  {
    title: "新发现：地中海饮食可能延缓大脑衰老",
    time: "8小时前",
    reads: "1.5k",
    tag: "营养学"
  },
  {
    title: "世卫组织发布最新睡眠指南：这样睡才健康",
    time: "12小时前",
    reads: "2.3k",
    tag: "睡眠健康"
  },
  {
    title: "运动科学：高强度间歇训练的优势与注意事项",
    time: "1天前",
    reads: "987",
    tag: "运动健康"
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
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{event.date}</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  地点：{event.location}
                </div>
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
          {healthNews.map((news, index) => (
            <div key={index} className="space-y-2 pb-3 border-b last:border-b-0">
              <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                {news.tag}
              </span>
              <h4 className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
                {news.title}
              </h4>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>发布于 {news.time}</span>
                <span>阅读 {news.reads}</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4">
          更多资讯
        </Button>
      </Card>
    </div>
  );
}
