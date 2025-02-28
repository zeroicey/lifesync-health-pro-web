'use client'

import { useState, useEffect } from "react"
import { CommunityHeader } from "@/components/community/CommunityHeader"
import { CommunityTabs } from "@/components/community/CommunityTabs"
import { PostCard } from "@/components/community/PostCard"
import { CommentList } from "@/components/community/CommentList"
import { TopicList } from "@/components/community/TopicList"
import { UserRecommendations } from "@/components/community/UserRecommendations"
import { PostCardSkeleton } from "@/components/ui/skeletons"
import { FadeIn } from "@/components/ui/animations"
import { mockPosts, mockTopics, mockUsers, mockComments, mockActivities } from "@/lib/mock-data"

export default function CommunityPage() {
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("hot")
  const [selectedPost, setSelectedPost] = useState<number | null>(null)
  const [posts, setPosts] = useState(mockPosts)

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query) {
      const filtered = mockPosts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
      setPosts(filtered)
    } else {
      setPosts(mockPosts)
    }
  }

  return (
    <FadeIn>
      <div className="container mx-auto py-6 space-y-6">
        <CommunityHeader 
          searchQuery={searchQuery}
          onSearch={handleSearch}
        />
        
        <CommunityTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 space-y-6">
            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <PostCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <div key={post.id} className="space-y-4">
                    <PostCard post={post} />
                    {selectedPost === post.id && (
                      <CommentList
                        postId={post.id}
                        comments={mockComments}
                        loading={false}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="col-span-4 space-y-6">
            <FadeIn delay={0.2}>
              <TopicList topics={mockTopics} loading={loading} />
            </FadeIn>

            <FadeIn delay={0.3}>
              <UserRecommendations users={mockUsers} loading={loading} />
            </FadeIn>

            {/* 健康活动日历 */}
            <FadeIn delay={0.4}>
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
            </FadeIn>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
