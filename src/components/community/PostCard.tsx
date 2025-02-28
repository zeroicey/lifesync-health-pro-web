'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SlideIn } from "@/components/ui/animations"
import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface PostCardProps {
  post: {
    id: number
    author: {
      name: string
      avatar: string
    }
    content: string
    image?: string
    likes: number
    comments: number
    shares: number
    time: string
  }
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1)
    } else {
      setLikesCount(prev => prev + 1)
    }
    setLiked(!liked)
  }

  return (
    <SlideIn>
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.time}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>关注作者</DropdownMenuItem>
              <DropdownMenuItem>收藏帖子</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">举报</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="mb-4">{post.content}</p>

        {post.image && (
          <img
            src={post.image}
            alt=""
            className="rounded-lg mb-4 w-full object-cover"
            style={{ maxHeight: "400px" }}
          />
        )}

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className={liked ? "text-red-500" : ""}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
            {likesCount}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            {post.shares}
          </Button>
        </div>
      </Card>
    </SlideIn>
  )
}
