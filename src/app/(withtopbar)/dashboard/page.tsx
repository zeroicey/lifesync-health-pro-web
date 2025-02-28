'use client'

import { OverviewStats } from "@/components/dashboard/overview/OverviewStats"
import { HealthMetrics } from "@/components/dashboard/health/HealthMetrics"
import { DeviceList } from "@/components/dashboard/devices/DeviceList"
import { HealthInsights } from "@/components/dashboard/insights/HealthInsights"
import { UserProfile } from "@/components/dashboard/profile/UserProfile"
import { ActivityLog } from "@/components/dashboard/activity/ActivityLog"
import { GoalsList } from "@/components/dashboard/goals/GoalsList"
import { HealthTips } from "@/components/dashboard/tips/HealthTips"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Heart, Brain, Battery, User } from "lucide-react"
import { useAuthStore } from "@/store/useAuthStore"
import { FadeIn, TabTransition } from "@/components/ui/animations"

export default function DashboardPage() {
  const user = useAuthStore(state => state.user)

  return (
    <FadeIn>
      <div className="py-8">
        {/* 欢迎信息 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            欢迎回来, {user?.name || '用户'}
          </h1>
          <p className="text-gray-500 mt-1">
            今天是 {new Date().toLocaleDateString('zh-CN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary/5">
              <Activity className="h-4 w-4 mr-2" />
              总览
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-primary/5">
              <Heart className="h-4 w-4 mr-2" />
              健康数据
            </TabsTrigger>
            <TabsTrigger value="devices" className="data-[state=active]:bg-primary/5">
              <Battery className="h-4 w-4 mr-2" />
              设备管理
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-primary/5">
              <Brain className="h-4 w-4 mr-2" />
              健康洞察
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary/5">
              <User className="h-4 w-4 mr-2" />
              个人中心
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <TabTransition isActive={true}>
              <OverviewStats />
            </TabTransition>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FadeIn delay={0.2}>
                <ActivityLog />
              </FadeIn>
              <FadeIn delay={0.3}>
                <GoalsList />
              </FadeIn>
            </div>
            <FadeIn delay={0.4}>
              <HealthTips />
            </FadeIn>
          </TabsContent>

          <TabsContent value="health" className="mt-6">
            <TabTransition isActive={true}>
              <HealthMetrics />
            </TabTransition>
          </TabsContent>

          <TabsContent value="devices" className="mt-6">
            <TabTransition isActive={true}>
              <DeviceList />
            </TabTransition>
          </TabsContent>

          <TabsContent value="insights" className="mt-6">
            <TabTransition isActive={true}>
              <HealthInsights />
            </TabTransition>
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <TabTransition isActive={true}>
              <UserProfile />
            </TabTransition>
          </TabsContent>
        </Tabs>
      </div>
    </FadeIn>
  )
}
