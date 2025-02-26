'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'

interface MoodStatsProps {
  moods: Array<{
    date: Date
    emotion: string
    intensity: number
    color: string
  }>
}

export function MoodStats({ moods }: MoodStatsProps) {
  // 计算情绪分布
  const emotionDistribution = moods.reduce((acc, mood) => {
    acc[mood.emotion] = (acc[mood.emotion] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const pieData = Object.entries(emotionDistribution).map(([name, value]) => ({
    name,
    value,
    color: moods.find(m => m.emotion === name)?.color || "#000",
  }))

  // 计算每日平均强度
  const dailyIntensity = moods.reduce((acc, mood) => {
    const date = new Date(mood.date).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = { total: 0, count: 0 }
    }
    acc[date].total += mood.intensity
    acc[date].count += 1
    return acc
  }, {} as Record<string, { total: number, count: number }>)

  const lineData = Object.entries(dailyIntensity)
    .map(([date, { total, count }]) => ({
      date,
      intensity: total / count,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>情绪分布</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>情绪强度趋势</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="date" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="intensity"
                  stroke="#8884d8"
                  name="情绪强度"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
