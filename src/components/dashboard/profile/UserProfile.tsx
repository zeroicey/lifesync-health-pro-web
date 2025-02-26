'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const mockUserData = {
  name: "张三",
  email: "zhangsan@example.com",
  phone: "13800138000",
  address: "北京市朝阳区",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  role: "普通会员",
  joinDate: "2024-01-01",
}

export function UserProfile() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={mockUserData.avatar} />
            <AvatarFallback>{mockUserData.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{mockUserData.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {mockUserData.role} · 加入时间 {mockUserData.joinDate}
            </p>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input id="name" defaultValue={mockUserData.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">邮箱</Label>
            <Input id="email" defaultValue={mockUserData.email} type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">电话</Label>
            <Input id="phone" defaultValue={mockUserData.phone} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">地址</Label>
            <Input id="address" defaultValue={mockUserData.address} />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button>保存修改</Button>
        </div>
      </CardContent>
    </Card>
  )
}
