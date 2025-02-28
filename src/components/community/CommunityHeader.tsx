'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Plus } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface CommunityHeaderProps {
  onSearch: (query: string) => void
  searchQuery: string
}

export function CommunityHeader({ onSearch, searchQuery }: CommunityHeaderProps) {
  return (
    <div className="w-full space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
      <h1 className="text-2xl sm:text-3xl font-bold">健康社区</h1>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="relative flex-1 sm:flex-none">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="搜索帖子和话题..."
            className="pl-10 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="hidden sm:flex">
              <Plus className="h-4 w-4 mr-2" />
              发布帖子
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>发布新帖子</SheetTitle>
            </SheetHeader>
            <div className="h-full py-6">
              {/* 这里将添加发帖表单 */}
            </div>
          </SheetContent>
        </Sheet>
        <Button size="icon" className="sm:hidden">
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
