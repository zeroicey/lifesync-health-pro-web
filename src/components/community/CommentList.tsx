'use client'

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FadeIn, SlideIn } from "@/components/ui/animations"
import { CommentSkeleton } from "@/components/ui/skeletons"
import { Heart, Reply } from "lucide-react"

interface Comment {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  likes: number
  time: string
  replies?: Comment[]
}

interface CommentListProps {
  postId: number
  comments: Comment[]
  loading?: boolean
}

export function CommentList({ postId, comments, loading = false }: CommentListProps) {
  const [newComment, setNewComment] = useState("")
  const [showReply, setShowReply] = useState<number | null>(null)

  const handleSubmitComment = () => {
    if (!newComment.trim()) return
    // 处理提交评论的逻辑
    setNewComment("")
  }

  const CommentItem = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(comment.likes)

    const handleLike = () => {
      if (liked) {
        setLikesCount(prev => prev - 1)
      } else {
        setLikesCount(prev => prev + 1)
      }
      setLiked(!liked)
    }

    return (
      <SlideIn direction="up">
        <div className={`space-y-2 ${isReply ? 'ml-12' : ''}`}>
          <div className="flex items-start space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-sm text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm mt-1">{comment.content}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-0 ${liked ? 'text-red-500' : ''}`}
                  onClick={handleLike}
                >
                  <Heart className={`h-4 w-4 mr-1 ${liked ? 'fill-current' : ''}`} />
                  {likesCount}
                </Button>
                {!isReply && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0"
                    onClick={() => setShowReply(showReply === comment.id ? null : comment.id)}
                  >
                    <Reply className="h-4 w-4 mr-1" />
                    回复
                  </Button>
                )}
              </div>
              {showReply === comment.id && (
                <FadeIn>
                  <div className="mt-2">
                    <Textarea
                      placeholder="回复评论..."
                      className="min-h-[60px]"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div className="flex justify-end space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowReply(null)}
                      >
                        取消
                      </Button>
                      <Button size="sm" onClick={handleSubmitComment}>
                        回复
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
          {comment.replies?.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      </SlideIn>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">评论 ({comments.length})</h3>
      </div>

      <div className="space-y-2">
        <Textarea
          placeholder="写下你的评论..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmitComment}>发表评论</Button>
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          Array(3).fill(null).map((_, i) => (
            <CommentSkeleton key={i} />
          ))
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  )
}
