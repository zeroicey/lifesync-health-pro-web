'use client'

import { TopicList } from "@/components/community/TopicList"
import { UserRecommendations } from "@/components/community/UserRecommendations"
import { mockTopics, mockUsers, mockActivities } from "@/lib/mock-data"

interface CommunitySidebarProps {
  loading: boolean
}

export function CommunitySidebar({ loading }: CommunitySidebarProps) {
  return (
    <div className="space-y-6">
      <TopicList topics={mockTopics} loading={loading} />
      <UserRecommendations users={mockUsers} loading={loading} />
      <div className="bg-card p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">近期活动</h3>
        <div className="space-y-3">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 p-2 hover:bg-accent rounded-lg cursor-pointer">
              <div className="text-2xl">{activity.emoji}</div>
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500">
                  {activity.date} {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
