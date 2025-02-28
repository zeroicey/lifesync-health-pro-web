'use client'

import { Card } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, Heart, Brain, Battery, Activity, Moon } from "lucide-react"

const healthTips = [
  {
    category: '每日健康提醒',
    tips: [
      {
        title: '运动建议',
        description: '今天还差3000步达到目标，建议傍晚散步30分钟',
        icon: Activity,
        color: 'text-green-600'
      },
      {
        title: '心率提醒',
        description: '静息心率较往常偏高，建议适当放松，避免剧烈运动',
        icon: Heart,
        color: 'text-red-600'
      },
      {
        title: '睡眠建议',
        description: '昨晚睡眠质量偏低，建议今晚提前半小时休息',
        icon: Moon,
        color: 'text-blue-600'
      }
    ]
  },
  {
    category: '营养饮食提示',
    tips: [
      {
        title: '补水提醒',
        description: '今日饮水量不足，请及时补充水分',
        icon: Info,
        color: 'text-cyan-600'
      },
      {
        title: '营养均衡',
        description: '本周蛋白质摄入偏低，建议适当增加鱼类、蛋类等食物',
        icon: Brain,
        color: 'text-purple-600'
      }
    ]
  }
]

export function HealthTips() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">健康提示</h2>
      
      {healthTips.map((category, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">{category.category}</h3>
          <div className="grid grid-cols-1 gap-4">
            {category.tips.map((tip, tipIndex) => {
              const Icon = tip.icon
              return (
                <Alert key={tipIndex}>
                  <Icon className={`h-4 w-4 ${tip.color}`} />
                  <AlertTitle>{tip.title}</AlertTitle>
                  <AlertDescription>
                    {tip.description}
                  </AlertDescription>
                </Alert>
              )
            })}
          </div>
        </div>
      ))}

      <Card className="p-4 bg-blue-50">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">设备使用建议</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Battery className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-900">电池维护</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-800">
                <li>• 保持设备电量在20%以上</li>
                <li>• 避免频繁充放电</li>
                <li>• 建议在10%-90%电量范围内使用</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Activity className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-900">数据同步</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-800">
                <li>• 每天同步一次数据</li>
                <li>• 保持蓝牙连接稳定</li>
                <li>• 同步时设备需在有效范围内</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Heart className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-900">佩戴建议</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-800">
                <li>• 保持设备清洁干燥</li>
                <li>• 运动时适当调整松紧度</li>
                <li>• 定期消毒传感器区域</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
