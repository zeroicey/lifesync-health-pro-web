'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface HealthStat {
  label: string
  value: string
}

interface HealthStatsProps {
  stats: HealthStat[]
}

export function HealthStats({ stats }: HealthStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>健康统计</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 text-center bg-primary/5 border-none">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
