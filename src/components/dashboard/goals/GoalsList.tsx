'use client'

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, Trophy, Dumbbell, Apple, Heart } from "lucide-react"

type Goal = {
  id: string
  title: string
  target: string
  current: number
  total: number
  unit: string
  icon: any
  color: string
  dueTime?: string
}

const goals: Goal[] = [
  {
    id: '1',
    title: '每日步数目标',
    target: '达到10000步',
    current: 6500,
    total: 10000,
    unit: '步',
    icon: Target,
    color: 'text-blue-600',
    dueTime: '今天 23:59'
  },
  {
    id: '2',
    title: '连续运动打卡',
    target: '连续运动7天',
    current: 5,
    total: 7,
    unit: '天',
    icon: Trophy,
    color: 'text-yellow-600',
    dueTime: '本周日'
  },
  {
    id: '3',
    title: '健身目标',
    target: '完成30分钟力量训练',
    current: 15,
    total: 30,
    unit: '分钟',
    icon: Dumbbell,
    color: 'text-purple-600'
  },
  {
    id: '4',
    title: '饮食目标',
    target: '摄入2000卡路里',
    current: 1200,
    total: 2000,
    unit: '卡路里',
    icon: Apple,
    color: 'text-green-600'
  },
  {
    id: '5',
    title: '心率区间训练',
    target: '中强度运动30分钟',
    current: 20,
    total: 30,
    unit: '分钟',
    icon: Heart,
    color: 'text-red-600'
  }
]

export function GoalsList() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">健康目标</h3>
        <Target className="h-5 w-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {goals.map((goal) => {
          const Icon = goal.icon
          const progress = (goal.current / goal.total) * 100
          return (
            <div
              key={goal.id}
              className="space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className={`h-5 w-5 ${goal.color}`} />
                  <div>
                    <h4 className="font-medium">{goal.title}</h4>
                    <p className="text-sm text-gray-500">{goal.target}</p>
                  </div>
                </div>
                {goal.dueTime && (
                  <span className="text-xs text-gray-500">
                    截止: {goal.dueTime}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    {goal.current} / {goal.total} {goal.unit}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
