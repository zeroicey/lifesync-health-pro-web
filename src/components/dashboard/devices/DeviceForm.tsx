'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { toast } from "sonner"

const deviceTypes = [
  { id: 'smartwatch', name: '智能手表', brands: ['Apple', 'Samsung', 'Huawei', 'Xiaomi'] },
  { id: 'bloodPressure', name: '血压计', brands: ['Omron', 'Yuwell', 'Microlife'] },
  { id: 'glucoseMeter', name: '血糖仪', brands: ['Accu-Chek', 'OneTouch', 'Contour'] },
  { id: 'scale', name: '智能体重秤', brands: ['Xiaomi', 'Yunmai', 'Withings'] },
  { id: 'thermometer', name: '体温计', brands: ['Braun', 'Omron', 'Xiaomi'] }
]

export function DeviceForm() {
  const [open, setOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [deviceName, setDeviceName] = useState('')
  const [deviceId, setDeviceId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedType || !selectedBrand || !deviceName) {
      toast.error('请填写完整信息')
      return
    }

    // 模拟添加设备
    toast.success('设备添加成功，请按照说明进行配对')
    
    // 重置表单
    setSelectedType('')
    setSelectedBrand('')
    setDeviceName('')
    setDeviceId('')
    setOpen(false)
  }

  const selectedTypeObj = deviceTypes.find(t => t.id === selectedType)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          添加设备
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>添加新设备</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">设备类型</Label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="选择设备类型" />
              </SelectTrigger>
              <SelectContent>
                {deviceTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand">品牌</Label>
            <Select 
              value={selectedBrand} 
              onValueChange={setSelectedBrand}
              disabled={!selectedType}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择品牌" />
              </SelectTrigger>
              <SelectContent>
                {selectedTypeObj?.brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">设备名称</Label>
            <Input
              id="name"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              placeholder="为设备起个名字"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deviceId">设备ID（可选）</Label>
            <Input
              id="deviceId"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              placeholder="输入设备ID"
            />
          </div>

          <Button type="submit" className="w-full">
            添加设备
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
