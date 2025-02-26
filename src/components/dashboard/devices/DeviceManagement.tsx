'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Watch, Smartphone, Battery, Signal, Bluetooth } from "lucide-react"

const mockDevices = [
  {
    id: 1,
    name: "Apple Watch Series 8",
    type: "智能手表",
    icon: Watch,
    status: "已连接",
    battery: 85,
    lastSync: "2024-02-26 15:30",
    metrics: ["心率", "血压", "运动步数", "睡眠"],
  },
  {
    id: 2,
    name: "Fitbit Sense 2",
    type: "智能手环",
    icon: Watch,
    status: "未连接",
    battery: 45,
    lastSync: "2024-02-26 10:15",
    metrics: ["心率", "运动步数", "睡眠质量"],
  },
  {
    id: 3,
    name: "Mi Band 8 Pro",
    type: "智能手环",
    icon: Watch,
    status: "已连接",
    battery: 92,
    lastSync: "2024-02-26 15:45",
    metrics: ["心率", "血氧", "运动步数"],
  },
]

function DeviceCard({ device }: { device: typeof mockDevices[0] }) {
  const Icon = device.icon;
  const isConnected = device.status === "已连接";

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{device.name}</h3>
              <p className="text-sm text-muted-foreground">{device.type}</p>
            </div>
          </div>
          <Badge variant={isConnected ? "default" : "secondary"}>
            {device.status}
          </Badge>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Battery className="h-4 w-4" />
            <span>电量: {device.battery}%</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Signal className="h-4 w-4" />
            <span>最后同步: {device.lastSync}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Bluetooth className="h-4 w-4" />
            <span>支持指标: {device.metrics.join(", ")}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Button variant={isConnected ? "destructive" : "default"} className="flex-1">
            {isConnected ? "断开连接" : "连接设备"}
          </Button>
          <Button variant="outline" className="flex-1">
            设备设置
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function DeviceManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">设备管理</h2>
          <p className="text-muted-foreground">管理您的健康监测设备</p>
        </div>
        <Button>
          <Smartphone className="mr-2 h-4 w-4" />
          添加新设备
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockDevices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>设备连接指南</CardTitle>
          <CardDescription>按照以下步骤连接您的设备</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4 list-decimal list-inside text-sm">
            <li>确保设备已开启并处于配对模式</li>
            <li>打开设备的蓝牙功能</li>
            <li>点击"添加新设备"按钮</li>
            <li>在搜索列表中选择您的设备</li>
            <li>按照屏幕提示完成配对过程</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
