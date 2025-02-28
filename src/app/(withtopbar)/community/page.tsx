'use client'

import { useState, useEffect } from "react"
import { CommunityHeader } from "@/components/community/CommunityHeader"
import { CommunityTabs } from "@/components/community/CommunityTabs"
import { PostCard } from "@/components/community/PostCard"
import { CommentList } from "@/components/community/CommentList"
import { CommunitySidebar } from "@/components/community/CommunitySidebar"
import { PostCardSkeleton } from "@/components/ui/skeletons"
import { FadeIn } from "@/components/ui/animations"
import { mockPosts, mockComments } from "@/lib/mock-data"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

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
      <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 space-y-4 sm:space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CommunityHeader 
              searchQuery={searchQuery}
              onSearch={handleSearch}
            />
          </div>
          
          {/* 移动端侧边栏按钮 */}
          <div className="lg:hidden ml-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>社区菜单</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <CommunitySidebar loading={loading} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="px-4 sm:px-0">
            <CommunityTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {loading ? (
              <div className="space-y-4 sm:space-y-6">
                {[1, 2, 3].map((i) => (
                  <PostCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
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
          
          {/* 桌面端侧边栏 */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            <CommunitySidebar loading={loading} />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
