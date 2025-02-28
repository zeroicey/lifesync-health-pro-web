'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, Lightbulb, Award, Target, TrendingUp } from "lucide-react"

const insights = [
  {
    title: "睡眠质量提升",
    description: "本周平均睡眠时长增加45分钟，深度睡眠比例提高8%",
    trend: "positive",
    change: "+15%",
    suggestion: "保持规律的作息时间，继续保持良好的睡眠习惯",
    tags: ["睡眠", "生活习惯"]
  },
  {
    title: "运动强度需调整",
    description: "高强度运动时心率经常超出安全范围",
    trend: "negative",
    change: "-8%",
    suggestion: "建议降低运动强度，或增加热身时间",
    tags: ["运动", "心率", "安全提醒"]
  },
  {
    title: "达成月度目标",
    description: "连续30天完成每日10000步目标",
    trend: "achievement",
    suggestion: "可以尝试增加每日目标步数至12000步",
    tags: ["里程碑", "活动", "成就"]
  }
]

const weeklyReport = {
  highlights: [
    "心肺功能持续改善",
    "静息心率降低",
    "活动量稳定增长"
  ],
  recommendations: [
    "增加有氧运动时间",
    "注意补充水分",
    "适当增加蛋白质摄入"
  ]
}

export function HealthInsights() {
  return (
    <div className="space-y-6">
      {/* 健康洞察卡片 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {insight.title}
                    </h3>
                    {insight.trend === 'positive' && (
                      <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        {insight.change}
                      </Badge>
                    )}
                    {insight.trend === 'negative' && (
                      <Badge className="bg-rose-50 text-rose-700 hover:bg-rose-100">
                        <ArrowDown className="h-3 w-3 mr-1" />
                        {insight.change}
                      </Badge>
                    )}
                    {insight.trend === 'achievement' && (
                      <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        <Award className="h-3 w-3 mr-1" />
                        达成
                      </Badge>
                    )}
                  </div>
                  <p className="mt-2 text-gray-600">
                    {insight.description}
                  </p>
                  <div className="mt-4 flex items-start space-x-2">
                    <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      {insight.suggestion}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {insight.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-gray-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 周报总结 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-primary" />
            本周健康报告
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Award className="h-4 w-4 mr-2 text-amber-500" />
                本周亮点
              </h4>
              <ul className="space-y-2">
                {weeklyReport.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2 text-blue-500" />
                建议改进
              </h4>
              <ul className="space-y-2">
                {weeklyReport.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="outline" className="text-sm">
              查看完整报告
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
