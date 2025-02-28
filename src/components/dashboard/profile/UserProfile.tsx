'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Edit2, Camera } from 'lucide-react'
import { mockUserData } from '@/lib/mock-data'
import { AchievementsList } from './AchievementsList'
import { HealthStats } from './HealthStats'
import { HealthGoals } from './HealthGoals'
import { SecuritySettings } from './SecuritySettings'

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-2xl font-bold">个人资料</CardTitle>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="mt-2 sm:mt-0">
                  <Edit2 className="h-4 w-4 mr-2" />
                  编辑资料
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[90vw] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>编辑个人资料</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={mockUserData.avatar} />
                        <AvatarFallback>{mockUserData.name[0]}</AvatarFallback>
                      </Avatar>
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="absolute bottom-0 right-0 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      点击更换头像
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input id="name" defaultValue={mockUserData.name} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">邮箱</Label>
                      <Input id="email" type="email" defaultValue={mockUserData.email} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">手机号码</Label>
                      <Input id="phone" type="tel" defaultValue={mockUserData.phone} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">地址</Label>
                      <Input id="address" defaultValue={mockUserData.address} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">个人简介</Label>
                      <Textarea
                        id="bio"
                        defaultValue={mockUserData.bio}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button className="flex-1">保存更改</Button>
                    <Button variant="outline" className="flex-1" onClick={() => setIsEditing(false)}>
                      取消
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center sm:justify-start">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={mockUserData.avatar} />
                  <AvatarFallback>{mockUserData.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold">{mockUserData.name}</h3>
                <p className="text-sm text-muted-foreground">加入时间：{mockUserData.joinDate}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <Label>邮箱</Label>
                  <p className="text-sm">{mockUserData.email}</p>
                </div>
                <div className="space-y-1">
                  <Label>手机号码</Label>
                  <p className="text-sm">{mockUserData.phone}</p>
                </div>
                <div className="space-y-1">
                  <Label>地址</Label>
                  <p className="text-sm">{mockUserData.address}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <SecuritySettings />
      <HealthStats stats={mockUserData.stats} />
      <AchievementsList achievements={mockUserData.achievements} />
      <HealthGoals goals={mockUserData.healthGoals} />
    </div>
  )
}
