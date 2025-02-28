'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface Achievement {
  name: string
  description: string
  icon: LucideIcon
}

interface AchievementsListProps {
  achievements: Achievement[]
}

export function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>成就展示</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
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
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
