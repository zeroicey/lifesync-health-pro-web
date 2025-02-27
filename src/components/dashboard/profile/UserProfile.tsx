'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Trophy, Star, Heart, Target, Sparkles } from "lucide-react"

const mockUserData = {
  name: "张三",
  email: "zhangsan@example.com",
  phone: "13800138000",
  address: "北京市朝阳区",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  role: "健康达人",
  joinDate: "2024-01-01",
  bio: "热爱运动和健康生活，希望通过LifeSync记录每一天的进步！",
  achievements: [
    { name: "运动达人", description: "连续运动30天", icon: Trophy },
    { name: "早起先锋", description: "坚持早起21天", icon: Star },
    { name: "健康卫士", description: "完成所有健康指标检测", icon: Heart }
  ],
  healthGoals: [
    "每天运动30分钟",
    "保持充足睡眠",
    "均衡饮食",
    "每周记录健康数据"
  ],
  stats: [
    { label: "健康积分", value: "1,280" },
    { label: "达标天数", value: "45" },
    { label: "完成目标", value: "12" }
  ]
}

export function UserProfile() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={mockUserData.avatar} />
                <AvatarFallback>{mockUserData.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-2xl">{mockUserData.name}</CardTitle>
                  <Badge variant="secondary" className="font-normal">
                    {mockUserData.role}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  加入时间 {mockUserData.joinDate}
                </p>
                <p className="text-sm mt-2 max-w-md">
                  {mockUserData.bio}
                </p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              编辑资料
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6">
            {/* 用户统计 */}
            <div className="grid grid-cols-3 gap-4">
              {mockUserData.stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center bg-primary/5 border-none">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* 个人信息表单 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <div className="relative">
                  <Input id="name" defaultValue={mockUserData.name} />
                  <Sparkles className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <div className="relative">
                  <Input id="email" defaultValue={mockUserData.email} type="email" />
                  <Mail className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">电话</Label>
                <div className="relative">
                  <Input id="phone" defaultValue={mockUserData.phone} />
                  <Phone className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">地址</Label>
                <div className="relative">
                  <Input id="address" defaultValue={mockUserData.address} />
                  <MapPin className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="bio">个人简介</Label>
                <Textarea
                  id="bio"
                  defaultValue={mockUserData.bio}
                  placeholder="写下你的健康生活宣言..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <Separator />

            {/* 成就展示 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">我的成就</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {mockUserData.achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <Card key={index} className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{achievement.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* 健康目标 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">健康目标</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {mockUserData.healthGoals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent transition-colors">
                    <Target className="h-5 w-5 text-primary" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline">取消</Button>
              <Button>保存更改</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 激励标语 */}
      <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-none">
        <CardContent className="flex items-center justify-center py-6">
          <p className="text-lg text-center text-muted-foreground">
            "健康不是目的地，而是一段旅程。让我们一起在 LifeSync 记录每一个精彩时刻！"
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
