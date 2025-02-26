'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"

interface MoodCardProps {
  mood: {
    id: string
    date: Date
    emotion: string
    intensity: number
    note: string
    color: string
  }
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function MoodCard({ mood, onEdit, onDelete }: MoodCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: mood.color }}
            />
            {mood.emotion}
          </CardTitle>
          <CardDescription>
            {new Date(mood.date).toLocaleDateString()}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{mood.note}</p>
        <div className="mt-2">
          <div className="text-sm text-gray-500">心情强度</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${mood.intensity * 10}%`,
                backgroundColor: mood.color,
              }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={() => onEdit(mood.id)}>
          <Pencil className="h-4 w-4 mr-1" />
          编辑
        </Button>
        <Button variant="outline" size="sm" onClick={() => onDelete(mood.id)}>
          <Trash className="h-4 w-4 mr-1" />
          删除
        </Button>
      </CardFooter>
    </Card>
  )
}
