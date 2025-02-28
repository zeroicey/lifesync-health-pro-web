'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Settings2, Battery, Signal, Bluetooth, Smartphone, Watch, Activity } from "lucide-react"

interface DeviceCardProps {
  device: {
    id: string
    name: string
    type: string
    status: string
    battery: number
    lastSync: string
    connected: boolean
  }
}

export function DeviceCard({ device }: DeviceCardProps) {
  const [isConfiguring, setIsConfiguring] = useState(false)

  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'smartphone':
        return <Smartphone className="h-5 w-5" />
      case 'watch':
        return <Watch className="h-5 w-5" />
      default:
        return <Activity className="h-5 w-5" />
    }
  }

  const getBatteryColor = (level: number) => {
    if (level > 60) return 'text-green-500'
    if (level > 20) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold flex items-center space-x-2">
          {getDeviceIcon(device.type)}
          <span>{device.name}</span>
        </CardTitle>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings2 className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] sm:w-[440px]">
            <SheetHeader>
              <SheetTitle>设备设置</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">设备名称</h4>
                    <p className="text-sm text-muted-foreground">{device.name}</p>
                  </div>
                  <Button variant="outline" className="mt-2 sm:mt-0">
                    重命名
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">同步频率</h4>
                    <p className="text-sm text-muted-foreground">每15分钟</p>
                  </div>
                  <Button variant="outline" className="mt-2 sm:mt-0">
                    调整
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">解除配对</h4>
                    <p className="text-sm text-muted-foreground">将设备从账号中移除</p>
                  </div>
                  <Button variant="destructive" className="mt-2 sm:mt-0">
                    解除配对
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium">状态</span>
              <Badge variant={device.connected ? "default" : "secondary"}>
                {device.connected ? "已连接" : "未连接"}
              </Badge>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium">电量</span>
              <div className="flex items-center space-x-2">
                <Battery className={`h-4 w-4 ${getBatteryColor(device.battery)}`} />
                <span className="text-sm">{device.battery}%</span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 col-span-2 sm:col-span-1">
              <span className="text-sm font-medium">最后同步</span>
              <span className="text-sm text-muted-foreground">{device.lastSync}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button className="flex-1" variant="outline">
              <Signal className="h-4 w-4 mr-2" />
              同步数据
            </Button>
            <Button className="flex-1" variant="outline">
              <Bluetooth className="h-4 w-4 mr-2" />
              重新连接
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
