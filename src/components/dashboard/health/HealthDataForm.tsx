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

const healthMetricTypes = [
  { id: 'weight', name: '体重', unit: 'kg' },
  { id: 'bloodPressure', name: '血压', unit: 'mmHg' },
  { id: 'bloodSugar', name: '血糖', unit: 'mmol/L' },
  { id: 'temperature', name: '体温', unit: '°C' },
  { id: 'heartRate', name: '心率', unit: 'bpm' },
  { id: 'oxygenSaturation', name: '血氧', unit: '%' },
]

export function HealthDataForm() {
  const [open, setOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [value, setValue] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 这里可以添加数据验证逻辑
    if (!selectedType || !value) {
      toast.error('请填写完整信息')
      return
    }

    // 模拟保存数据
    const metric = healthMetricTypes.find(m => m.id === selectedType)
    toast.success(`成功记录${metric?.name}: ${value}${metric?.unit}`)
    
    // 重置表单
    setSelectedType('')
    setValue('')
    setNote('')
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          记录健康数据
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>记录健康数据</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">指标类型</Label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="选择健康指标" />
              </SelectTrigger>
              <SelectContent>
                {healthMetricTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name} ({type.unit})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="value">数值</Label>
            <Input
              id="value"
              type="number"
              step="0.1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="输入数值"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">备注（可选）</Label>
            <Input
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="添加备注信息"
            />
          </div>

          <Button type="submit" className="w-full">
            保存记录
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
