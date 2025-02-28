'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SlideIn } from "@/components/ui/animations"
import { UserPlus } from "lucide-react"

interface User {
  id: number
  name: string
  avatar: string
  bio: string
  followers: number
  isFollowing?: boolean
}

interface UserRecommendationsProps {
  users: User[]
  loading?: boolean
}

export function UserRecommendations({ users, loading = false }: UserRecommendationsProps) {
  const [followingState, setFollowingState] = useState<{ [key: number]: boolean }>(
    users.reduce((acc, user) => ({ ...acc, [user.id]: user.isFollowing || false }), {})
  )

  const handleFollow = (userId: number) => {
    setFollowingState(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }))
  }

  const UserCard = ({ user }: { user: User }) => {
    const isFollowing = followingState[user.id]

    return (
      <SlideIn direction="left">
        <div className="flex items-center space-x-3 p-2 hover:bg-accent rounded-lg transition-colors">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.bio}</p>
          </div>
          <Button
            variant={isFollowing ? "outline" : "default"}
            size="sm"
            className="shrink-0"
            onClick={() => handleFollow(user.id)}
          >
            {isFollowing ? (
              "已关注"
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-1" />
                关注
              </>
            )}
          </Button>
        </div>
      </SlideIn>
    )
  }

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">推荐关注</h3>
      <div className="space-y-3">
        {loading ? (
          Array(3).fill(null).map((_, i) => (
            <div key={i} className="flex items-center space-x-3 animate-pulse">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-3 w-32 bg-gray-200 rounded" />
              </div>
              <div className="h-8 w-16 bg-gray-200 rounded" />
            </div>
          ))
        ) : (
          users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
    </Card>
  )
}
