'use client'

import { useState, useEffect } from "react"
import { DeviceCard } from "./DeviceCard"
import { DeviceForm } from "./DeviceForm"
import { DeviceCardSkeleton } from "@/components/ui/skeletons"

// 模拟设备数据
const mockDevices = [
  {
    id: '1',
    name: 'Apple Watch Series 8',
    type: '智能手表',
    brand: 'Apple',
    status: 'connected' as const,
    battery: 85,
    signal: 92,
    lastSync: '10分钟前'
  },
  {
    id: '2',
    name: 'Omron 血压计',
    type: '血压计',
    brand: 'Omron',
    status: 'disconnected' as const,
    battery: 65,
    signal: 0,
    lastSync: '2小时前'
  },
  {
    id: '3',
    name: '小米体重秤',
    type: '智能体重秤',
    brand: 'Xiaomi',
    status: 'connected' as const,
    battery: 90,
    signal: 88,
    lastSync: '30分钟前'
  },
  {
    id: '4',
    name: 'Accu-Chek 血糖仪',
    type: '血糖仪',
    brand: 'Accu-Chek',
    status: 'pairing' as const,
    battery: 100,
    signal: 45,
  }
]

export function DeviceList() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">我的设备</h2>
        <DeviceForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading ? (
          // 显示骨架屏
          Array(4).fill(null).map((_, i) => (
            <DeviceCardSkeleton key={i} />
          ))
        ) : (
          // 显示实际设备列表
          mockDevices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))
        )}
      </div>
    </div>
  )
}
