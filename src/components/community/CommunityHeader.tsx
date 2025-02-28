'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface CommunityHeaderProps {
  onSearch: (query: string) => void
  searchQuery: string
}

export function CommunityHeader({ onSearch, searchQuery }: CommunityHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">健康社区</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="搜索帖子和话题..."
            className="pl-10 w-[300px]"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button>发布帖子</Button>
      </div>
    </div>
  )
}
