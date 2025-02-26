'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  emotion: z.string().min(1, "请选择心情"),
  intensity: z.number().min(1).max(10),
  note: z.string().min(1, "请输入心情描述"),
  color: z.string(),
})

const emotions = [
  { name: "开心", color: "#FFD93D" },
  { name: "平静", color: "#6BCB77" },
  { name: "悲伤", color: "#4F98CA" },
  { name: "愤怒", color: "#FF6B6B" },
  { name: "焦虑", color: "#9B89B3" },
]

interface MoodFormProps {
  initialData?: z.infer<typeof formSchema>
  onSubmit: (data: z.infer<typeof formSchema>) => void
}

export function MoodForm({ initialData, onSubmit }: MoodFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      emotion: "",
      intensity: 5,
      note: "",
      color: "",
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? "编辑心情" : "记录新心情"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="emotion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>选择心情</FormLabel>
                  <div className="flex gap-2">
                    {emotions.map((emotion) => (
                      <Button
                        key={emotion.name}
                        type="button"
                        variant={field.value === emotion.name ? "default" : "outline"}
                        className="flex-1"
                        style={{
                          backgroundColor: field.value === emotion.name ? emotion.color : undefined,
                          color: field.value === emotion.name ? "white" : undefined,
                        }}
                        onClick={() => {
                          form.setValue("emotion", emotion.name)
                          form.setValue("color", emotion.color)
                        }}
                      >
                        {emotion.name}
                      </Button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="intensity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>心情强度 (1-10)</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>心情描述</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="写下你此刻的想法..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {initialData ? "更新" : "保存"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
