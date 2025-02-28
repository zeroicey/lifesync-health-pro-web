'use client'

import { useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Footprints, Heart, Moon, Coffee, Utensils } from "lucide-react"
import { ActivityLogSkeleton } from "@/components/ui/skeletons"

type ActivityItem = {
  id: string
  type: string
  title: string
  time: string
  value: string
  unit: string
  icon: any
  color: string
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: '步行',
    title: '完成晨步',
    time: '07:30',
    value: '2,500',
    unit: '步',
    icon: Footprints,
    color: 'bg-green-100 text-green-700'
  },
  {
    id: '2',
    type: '心率',
    title: '心率偏高提醒',
    time: '09:15',
    value: '95',
    unit: 'bpm',
    icon: Heart,
    color: 'bg-red-100 text-red-700'
  },
  {
    id: '3',
    type: '睡眠',
    title: '睡眠报告',
    time: '06:00',
    value: '7.5',
    unit: '小时',
    icon: Moon,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: '4',
    type: '饮水',
    title: '喝水提醒',
    time: '10:00',
    value: '250',
    unit: 'ml',
    icon: Coffee,
    color: 'bg-cyan-100 text-cyan-700'
  },
  {
    id: '5',
    type: '饮食',
    title: '早餐记录',
    time: '08:00',
    value: '450',
    unit: '卡路里',
    icon: Utensils,
    color: 'bg-yellow-100 text-yellow-700'
  }
]

export function ActivityLog() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <ActivityLogSkeleton />
  }

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">今日活动</h3>
        <Activity className="h-5 w-5 text-gray-500" />
      </div>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-full ${activity.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{activity.title}</p>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {activity.type}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      {activity.value} {activity.unit}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>
    </Card>
  )
}
