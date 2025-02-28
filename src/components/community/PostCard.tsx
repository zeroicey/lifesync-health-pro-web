'use client'

import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import { formatDistanceToNow } from "date-fns"
import { zhCN } from "date-fns/locale"

interface PostCardProps {
  post: {
    id: number
    title: string
    content: string
    images?: string[]
    author: {
      id: number
      name: string
      avatar: string
      badge?: string
    }
    stats: {
      likes: number
      comments: number
      shares: number
    }
    tags: string[]
    createdAt: string
  }
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.stats.likes)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{post.author.name}</h3>
                {post.author.badge && (
                  <Badge variant="secondary">{post.author.badge}</Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                  locale: zhCN
                })}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
        </div>

        {post.images && post.images.length > 0 && (
          <div className={`mt-4 grid gap-2 ${
            post.images.length === 1 ? 'grid-cols-1' :
            post.images.length === 2 ? 'grid-cols-2' :
            'grid-cols-3'
          }`}>
            {post.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Post image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className={`space-x-2 ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>{post.stats.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="space-x-2">
            <Share2 className="h-5 w-5" />
            <span>{post.stats.shares}</span>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
