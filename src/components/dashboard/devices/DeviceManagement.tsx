'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Watch, Smartphone, Scale, Heart, Plus, RefreshCw, Trash2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const mockDevices = [
  {
    id: "1",
    name: "小米手环 7",
    type: "activity-tracker",
    icon: Watch,
    status: "connected",
    battery: 85,
    lastSync: "10分钟前",
    features: ["心率监测", "睡眠追踪", "运动记录"]
  },
  {
    id: "2",
    name: "LifeSync App",
    type: "smartphone",
    icon: Smartphone,
    status: "connected",
    lastSync: "实时同步",
    features: ["数据同步", "健康提醒", "运动规划"]
  },
  {
    id: "3",
    name: "体重秤 Pro",
    type: "scale",
    icon: Scale,
    status: "disconnected",
    lastSync: "2天前",
    features: ["体重测量", "体脂率", "BMI计算"]
  },
  {
    id: "4",
    name: "心率带",
    type: "heart-monitor",
    icon: Heart,
    status: "low-battery",
    battery: 15,
    lastSync: "1小时前",
    features: ["实时心率", "运动强度", "卡路里消耗"]
  }
];

export function DeviceManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">已连接设备</h3>
          <p className="text-sm text-muted-foreground">管理您的健康监测设备</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          添加设备
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockDevices.map((device) => {
          const Icon = device.icon;
          return (
            <Card key={device.id} className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{device.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">上次同步: {device.lastSync}</p>
                    </div>
                  </div>
                  <Switch checked={device.status === 'connected'} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap mt-2">
                    {device.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {device.battery && (
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`w-16 h-2 rounded-full ${
                        device.battery > 20 ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        <div
                          className="h-full rounded-full bg-background"
                          style={{ width: `${100 - device.battery}%` }}
                        />
                      </div>
                      <span>{device.battery}%</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      同步
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      设置
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">设备使用建议</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Watch className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">保持设备清洁</p>
                <p className="text-sm text-muted-foreground">
                  定期清洁传感器和接触面，确保数据准确性
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <RefreshCw className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">定期同步数据</p>
                <p className="text-sm text-muted-foreground">
                  建议每天同步一次数据，保持健康记录的连续性
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">正确佩戴</p>
                <p className="text-sm text-muted-foreground">
                  确保设备与皮肤紧密接触，但不要过紧，以免影响血液循环
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
