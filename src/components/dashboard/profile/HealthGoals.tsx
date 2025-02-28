'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target } from 'lucide-react'

interface HealthGoalsProps {
  goals: string[]
}

export function HealthGoals({ goals }: HealthGoalsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>健康目标</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <Target className="h-5 w-5 text-primary" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
