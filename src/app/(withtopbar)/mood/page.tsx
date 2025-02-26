'use client'

import { useState, useEffect } from "react"
import { MoodCard } from "@/components/mood/MoodCard"
import { MoodForm } from "@/components/mood/MoodForm"
import { MoodStats } from "@/components/mood/MoodStats"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

export default function MoodPage() {
  const [moods, setMoods] = useState<Array<{
    id: string
    date: Date
    emotion: string
    intensity: number
    note: string
    color: string
  }>>([])

  const [editingMood, setEditingMood] = useState<string | null>(null)

  // 生成模拟数据
  const generateMockData = () => {
    const emotions = [
      { name: "开心", color: "#FFD93D", notes: [
        "今天完成了一个重要的项目",
        "和朋友们一起吃饭，聊得很开心",
        "收到了期待已久的包裹",
        "运动后感觉神清气爽",
        "学会了一个新技能"
      ]},
      { name: "平静", color: "#6BCB77", notes: [
        "安静地读了一会书",
        "冥想了20分钟",
        "在公园散步",
        "听着轻音乐工作",
        "整理了房间"
      ]},
      { name: "悲伤", color: "#4F98CA", notes: [
        "想起了一些不开心的事",
        "工作遇到了困难",
        "和朋友产生了误会",
        "天气阴沉",
        "感觉有点孤单"
      ]},
      { name: "愤怒", color: "#FF6B6B", notes: [
        "遇到了不讲理的人",
        "计划被打乱了",
        "设备突然故障",
        "堵车迟到了",
        "工作压力很大"
      ]},
      { name: "焦虑", color: "#9B89B3", notes: [
        "担心明天的演讲",
        "项目截止日期临近",
        "等待重要的结果",
        "对未来感到不确定",
        "睡眠质量不好"
      ]}
    ];

    const mockData = [];
    // 生成最近30天的数据
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      // 每天生成1-3条记录
      const recordsCount = Math.floor(Math.random() * 3) + 1;
      
      for (let j = 0; j < recordsCount; j++) {
        const emotion = emotions[Math.floor(Math.random() * emotions.length)];
        mockData.push({
          id: Math.random().toString(36).substr(2, 9),
          date: new Date(date.setHours(
            Math.floor(Math.random() * 24),
            Math.floor(Math.random() * 60)
          )),
          emotion: emotion.name,
          intensity: Math.floor(Math.random() * 10) + 1,
          note: emotion.notes[Math.floor(Math.random() * emotion.notes.length)],
          color: emotion.color
        });
      }
    }

    return mockData.sort((a, b) => b.date.getTime() - a.date.getTime());
  };

  useEffect(() => {
    setMoods(generateMockData());
  }, []);

  const handleSubmit = (data: any) => {
    if (editingMood) {
      setMoods(moods.map(mood => 
        mood.id === editingMood 
          ? { ...mood, ...data }
          : mood
      ))
      setEditingMood(null)
    } else {
      setMoods([
        ...moods,
        {
          id: Math.random().toString(36).substr(2, 9),
          date: new Date(),
          ...data,
        },
      ])
    }
  }

  const handleDelete = (id: string) => {
    setMoods(moods.filter(mood => mood.id !== id))
  }

  const handleEdit = (id: string) => {
    setEditingMood(id)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">心情记录</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              记录心情
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle>记录新心情</DialogTitle>
            <MoodForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>

      {moods.length > 0 && (
        <>
          <MoodStats moods={moods} />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">最近记录</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {moods.slice(0, 9).map(mood => (
                <Dialog key={mood.id} open={editingMood === mood.id} onOpenChange={(open) => !open && setEditingMood(null)}>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogTitle>编辑心情记录</DialogTitle>
                    <MoodForm
                      initialData={mood}
                      onSubmit={handleSubmit}
                    />
                  </DialogContent>
                  <MoodCard
                    mood={mood}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </Dialog>
              ))}
            </div>
            
            {moods.length > 9 && (
              <>
                <h2 className="text-2xl font-semibold mt-8">历史记录</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {moods.slice(9).map(mood => (
                    <Dialog key={mood.id} open={editingMood === mood.id} onOpenChange={(open) => !open && setEditingMood(null)}>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogTitle>编辑心情记录</DialogTitle>
                        <MoodForm
                          initialData={mood}
                          onSubmit={handleSubmit}
                        />
                      </DialogContent>
                      <MoodCard
                        mood={mood}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    </Dialog>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}

      {moods.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          还没有记录任何心情，点击右上角按钮开始记录吧！
        </div>
      )}
    </div>
  )
}
