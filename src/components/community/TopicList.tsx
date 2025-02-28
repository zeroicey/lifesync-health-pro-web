'use client'

import { Card } from "@/components/ui/card"
import { SlideIn } from "@/components/ui/animations"
import { CommunityTopicSkeleton } from "@/components/ui/skeletons"

interface Topic {
  id: number
  name: string
  icon: string
  posts: number
}

interface TopicListProps {
  topics: Topic[]
  loading?: boolean
}

export function TopicList({ topics, loading = false }: TopicListProps) {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">热门话题</h3>
      <div className="space-y-2">
        {loading ? (
          Array(5).fill(null).map((_, i) => (
            <CommunityTopicSkeleton key={i} />
          ))
        ) : (
          topics.map((topic) => (
            <SlideIn key={topic.id} direction="left">
              <div className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg cursor-pointer transition-colors">
                <span className="text-2xl">{topic.icon}</span>
                <span className="font-medium">{topic.name}</span>
                <span className="text-sm text-gray-500 ml-auto">
                  {topic.posts}个帖子
                </span>
              </div>
            </SlideIn>
          ))
        )}
      </div>
    </Card>
  )
}
