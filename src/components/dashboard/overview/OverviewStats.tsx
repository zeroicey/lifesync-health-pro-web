'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Activity, Heart, Footprints, Moon } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const stats = [
  {
    id: 1,
    name: "今日活动",
    value: "6,280",
    unit: "步",
    progress: 75,
    icon: Footprints,
    trend: "+12%",
    color: "text-orange-500",
    description: "距离目标还差1,720步"
  },
  {
    id: 2,
    name: "平均心率",
    value: "72",
    unit: "bpm",
    progress: 85,
    icon: Heart,
    trend: "-3%",
    color: "text-rose-500",
    description: "心率处于正常范围"
  },
  {
    id: 3,
    name: "活动热量",
    value: "385",
    unit: "千卡",
    progress: 60,
    icon: Activity,
    trend: "+8%",
    color: "text-emerald-500",
    description: "运动消耗热量达标"
  },
  {
    id: 4,
    name: "睡眠时长",
    value: "7.5",
    unit: "小时",
    progress: 90,
    icon: Moon,
    trend: "+5%",
    color: "text-blue-500",
    description: "睡眠质量良好"
  }
]

export function OverviewStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className={`p-2 rounded-lg ${stat.color.replace('text', 'bg')}/10`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium ${
                    stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'
                  }`}>
                    {stat.trend}
                  </span>
                  <span className="text-xs text-gray-500">较昨日</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <span className="text-sm text-gray-500">{stat.unit}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{stat.name}</p>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{stat.description}</span>
                  <span>{stat.progress}%</span>
                </div>
                <Progress value={stat.progress} className="h-1" />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
