'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>账号安全</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">修改密码</h4>
              <p className="text-sm text-muted-foreground">定期更改密码以保护账号安全</p>
            </div>
            <Button variant="outline" className="mt-2 sm:mt-0">
              修改密码
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">双因素认证</h4>
              <p className="text-sm text-muted-foreground">启用双因素认证提高账号安全性</p>
            </div>
            <Button variant="outline" className="mt-2 sm:mt-0">
              设置
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
