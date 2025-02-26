import { UserProfile } from "@/components/dashboard/profile/UserProfile"
import { HealthMetrics } from "@/components/dashboard/health/HealthMetrics"
import { DeviceManagement } from "@/components/dashboard/devices/DeviceManagement"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Activity, Watch } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">个人中心</h1>
        <p className="text-sm text-muted-foreground">
          上次更新: {new Date().toLocaleString('zh-CN')}
        </p>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            个人信息
          </TabsTrigger>
          <TabsTrigger value="health" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            健康数据
          </TabsTrigger>
          <TabsTrigger value="devices" className="flex items-center gap-2">
            <Watch className="h-4 w-4" />
            设备管理
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <UserProfile />
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <HealthMetrics />
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <DeviceManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}
