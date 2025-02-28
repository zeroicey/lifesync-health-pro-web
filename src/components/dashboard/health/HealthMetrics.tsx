'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Activity, Scale, Brain, Droplets, Thermometer } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { HealthDataForm } from "./HealthDataForm"

const mockHeartRateData = [
  { time: '00:00', value: 62 },
  { time: '04:00', value: 58 },
  { time: '08:00', value: 75 },
  { time: '12:00', value: 82 },
  { time: '16:00', value: 78 },
  { time: '20:00', value: 68 },
  { time: '23:59', value: 65 }
]

const healthMetrics = [
  {
    title: "心率",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    current: "72",
    unit: "bpm",
    range: "60-100",
    status: "正常"
  },
  {
    title: "血压",
    icon: Activity,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    current: "120/80",
    unit: "mmHg",
    range: "90/60-140/90",
    status: "正常"
  },
  {
    title: "体重",
    icon: Scale,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    current: "65.5",
    unit: "kg",
    range: "60-70",
    status: "达标"
  },
  {
    title: "血氧",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    current: "98",
    unit: "%",
    range: "95-100",
    status: "优秀"
  },
  {
    title: "血糖",
    icon: Droplets,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    current: "5.6",
    unit: "mmol/L",
    range: "4.4-7.0",
    status: "正常"
  },
  {
    title: "体温",
    icon: Thermometer,
    color: "text-red-500",
    bgColor: "bg-red-50",
    current: "36.5",
    unit: "°C",
    range: "36.3-37.2",
    status: "正常"
  }
]

const latestMetrics = [
  {
    name: "心率",
    value: 72,
    unit: "bpm",
    time: "2023-02-20 14:30",
    change: "+2",
    color: "text-rose-500"
  },
  {
    name: "血压",
    value: "120/80",
    unit: "mmHg",
    time: "2023-02-20 14:30",
    change: "-5",
    color: "text-blue-500"
  },
  {
    name: "体重",
    value: 65.5,
    unit: "kg",
    time: "2023-02-20 14:30",
    change: "+0.5",
    color: "text-emerald-500"
  },
  {
    name: "血氧",
    value: 98,
    unit: "%",
    time: "2023-02-20 14:30",
    change: "+1",
    color: "text-purple-500"
  },
  {
    name: "血糖",
    value: 5.6,
    unit: "mmol/L",
    time: "2023-02-20 14:30",
    change: "-0.2",
    color: "text-amber-500"
  },
  {
    name: "体温",
    value: 36.5,
    unit: "°C",
    time: "2023-02-20 14:30",
    change: "+0.1",
    color: "text-red-500"
  }
]

const healthData = {
  heartRate: [
    { date: "2023-02-16", value: 60, min: 50, max: 70 },
    { date: "2023-02-17", value: 62, min: 52, max: 72 },
    { date: "2023-02-18", value: 65, min: 55, max: 75 },
    { date: "2023-02-19", value: 68, min: 58, max: 78 },
    { date: "2023-02-20", value: 72, min: 62, max: 82 }
  ],
  bloodPressure: [
    { date: "2023-02-16", systolic: 120, diastolic: 80 },
    { date: "2023-02-17", systolic: 122, diastolic: 82 },
    { date: "2023-02-18", systolic: 125, diastolic: 85 },
    { date: "2023-02-19", systolic: 128, diastolic: 88 },
    { date: "2023-02-20", systolic: 130, diastolic: 90 }
  ],
  bloodSugar: [
    { date: "2023-02-16", value: 5.2 },
    { date: "2023-02-17", value: 5.4 },
    { date: "2023-02-18", value: 5.6 },
    { date: "2023-02-19", value: 5.8 },
    { date: "2023-02-20", value: 6.0 }
  ]
}

export function HealthMetrics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">健康指标</h2>
        <HealthDataForm />
      </div>

      {/* 最新指标卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestMetrics.map((metric, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{metric.name}</p>
                <h3 className={`text-2xl font-bold ${metric.color}`}>
                  {metric.value}
                  <span className="text-sm font-normal ml-1">{metric.unit}</span>
                </h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{metric.time}</p>
                <p className={`text-sm ${metric.change.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 心率趋势图 */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">心率趋势</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={healthData.heartRate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="min" stroke="#94a3b8" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="max" stroke="#94a3b8" strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 血压趋势图 */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">血压趋势</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={healthData.bloodPressure}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="systolic" stroke="#ef4444" name="收缩压" strokeWidth={2} />
              <Line type="monotone" dataKey="diastolic" stroke="#3b82f6" name="舒张压" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 血糖趋势图 */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">血糖趋势</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={healthData.bloodSugar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
