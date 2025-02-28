'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Battery, Signal, MoreVertical, Bluetooth, RefreshCcw, Settings, Trash2, Power } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

type DeviceCardProps = {
  device: {
    id: string
    name: string
    type: string
    brand: string
    status: 'connected' | 'disconnected' | 'pairing'
    battery: number
    signal: number
    lastSync?: string
  }
}

export function DeviceCard({ device }: DeviceCardProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const handleConnect = () => {
    setIsConnecting(true)
    // 模拟连接过程
    setTimeout(() => {
      setIsConnecting(false)
      toast.success('设备连接成功')
    }, 2000)
  }

  const handleDisconnect = () => {
    toast.success('设备已断开连接')
  }

  const handleSync = () => {
    toast.success('正在同步数据...')
  }

  const handleReset = () => {
    toast.success('设备已重置')
  }

  const handleDelete = () => {
    toast.success('设备已删除')
  }

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{device.name}</h3>
          <p className="text-sm text-gray-500">{device.type} - {device.brand}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>设备操作</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {device.status === 'connected' ? (
              <DropdownMenuItem onClick={handleDisconnect}>
                <Power className="h-4 w-4 mr-2" />
                断开连接
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={handleConnect}>
                <Bluetooth className="h-4 w-4 mr-2" />
                连接设备
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={handleSync}>
              <RefreshCcw className="h-4 w-4 mr-2" />
              同步数据
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setShowSettings(true)}>
              <Settings className="h-4 w-4 mr-2" />
              设备设置
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleReset} className="text-yellow-600">
              <RefreshCcw className="h-4 w-4 mr-2" />
              重置设备
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="text-red-600">
              <Trash2 className="h-4 w-4 mr-2" />
              删除设备
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <Badge variant={
            device.status === 'connected' ? 'default' :
            device.status === 'disconnected' ? 'secondary' :
            'outline'
          }>
            {device.status === 'connected' ? '已连接' :
             device.status === 'disconnected' ? '未连接' :
             '配对中'}
          </Badge>
          {device.lastSync && (
            <span className="text-xs text-gray-500">
              上次同步: {device.lastSync}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Battery className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{device.battery}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <Signal className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{device.signal}%</span>
          </div>
        </div>
      </div>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>设备设置 - {device.name}</DialogTitle>
            <DialogDescription>
              配置设备参数和同步选项
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">同步设置</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success('自动同步已开启')}>
                  自动同步数据
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success('已设置同步间隔')}>
                  设置同步间隔
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">设备参数</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success('设备名称已更新')}>
                  修改设备名称
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success('测量单位已更新')}>
                  设置测量单位
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">通知设置</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success('电量提醒已开启')}>
                  低电量提醒
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success('同步提醒已开启')}>
                  同步状态提醒
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
