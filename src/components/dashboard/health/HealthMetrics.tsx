'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { Activity, Heart, Moon, Scale, Footprints, Thermometer, Droplet } from "lucide-react"
import { StatsCard } from "../stats/StatsCard"

const generateMockData = (startValue: number, variance: number, days: number) => {
  return Array.from({ length: days }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - index));
    return {
      date: date.toISOString().split('T')[0],
      value: +(startValue + (Math.random() - 0.5) * variance * 2).toFixed(1)
    };
  });
};

const mockHealthData = {
  bloodPressure: {
    current: { systolic: 120, diastolic: 80 },
    trend: { value: -2.5, isPositive: false },
    history: generateMockData(120, 5, 30).map(item => ({
      date: item.date,
      systolic: item.value,
      diastolic: item.value - 40 + (Math.random() - 0.5) * 4
    }))
  },
  heartRate: {
    current: { value: 72 },
    trend: { value: 1.5, isPositive: true },
    history: generateMockData(72, 5, 30)
  },
  sleep: {
    current: { hours: 7.5 },
    trend: { value: 5, isPositive: true },
    history: generateMockData(7.5, 1, 30)
  },
  weight: {
    current: { value: 65.5 },
    trend: { value: -1.2, isPositive: true },
    history: generateMockData(65.5, 0.5, 30)
  },
  steps: {
    current: { value: 8500 },
    trend: { value: 15, isPositive: true },
    history: generateMockData(8500, 2000, 30)
  },
  bloodSugar: {
    current: { value: 5.5 },
    trend: { value: -3, isPositive: true },
    history: generateMockData(5.5, 0.5, 30)
  },
  temperature: {
    current: { value: 36.5 },
    trend: { value: 0.2, isPositive: false },
    history: generateMockData(36.5, 0.3, 30)
  }
}

export function HealthMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="血压"
          value={`${mockHealthData.bloodPressure.current.systolic}/${mockHealthData.bloodPressure.current.diastolic}`}
          description="收缩压/舒张压 (mmHg)"
          icon={<Activity className="h-6 w-6 text-primary" />}
          trend={mockHealthData.bloodPressure.trend}
        />
        <StatsCard
          title="心率"
          value={`${mockHealthData.heartRate.current.value}`}
          description="每分钟心跳次数 (BPM)"
          icon={<Heart className="h-6 w-6 text-primary" />}
          trend={mockHealthData.heartRate.trend}
        />
        <StatsCard
          title="睡眠时长"
          value={`${mockHealthData.sleep.current.hours}`}
          description="小时/天"
          icon={<Moon className="h-6 w-6 text-primary" />}
          trend={mockHealthData.sleep.trend}
        />
        <StatsCard
          title="体重"
          value={`${mockHealthData.weight.current.value}`}
          description="公斤 (kg)"
          icon={<Scale className="h-6 w-6 text-primary" />}
          trend={mockHealthData.weight.trend}
        />
        <StatsCard
          title="运动步数"
          value={`${mockHealthData.steps.current.value}`}
          description="步/天"
          icon={<Footprints className="h-6 w-6 text-primary" />}
          trend={mockHealthData.steps.trend}
        />
        <StatsCard
          title="血糖"
          value={`${mockHealthData.bloodSugar.current.value}`}
          description="mmol/L"
          icon={<Droplet className="h-6 w-6 text-primary" />}
          trend={mockHealthData.bloodSugar.trend}
        />
        <StatsCard
          title="体温"
          value={`${mockHealthData.temperature.current.value}`}
          description="摄氏度 (°C)"
          icon={<Thermometer className="h-6 w-6 text-primary" />}
          trend={mockHealthData.temperature.trend}
        />
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>健康趋势分析（近30天）</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="bloodPressure">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="bloodPressure">血压</TabsTrigger>
              <TabsTrigger value="heartRate">心率</TabsTrigger>
              <TabsTrigger value="sleep">睡眠</TabsTrigger>
              <TabsTrigger value="weight">体重</TabsTrigger>
              <TabsTrigger value="steps">步数</TabsTrigger>
              <TabsTrigger value="bloodSugar">血糖</TabsTrigger>
              <TabsTrigger value="temperature">体温</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bloodPressure">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData.bloodPressure.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="systolic" stroke="#8884d8" name="收缩压" strokeWidth={2} />
                    <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" name="舒张压" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="heartRate">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData.heartRate.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" name="心率" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="sleep">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData.sleep.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" name="睡眠时长" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="weight">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData.weight.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" name="体重" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="steps">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockHealthData.steps.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="步数" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="bloodSugar">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData.bloodSugar.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" name="血糖" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="temperature">
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData.temperature.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" name="体温" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
