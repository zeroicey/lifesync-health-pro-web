"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      handle: string;
      avatar: string;
    };
    content: string;
    images?: string[];
    likes: number;
    comments: number;
    shares: number;
    timestamp: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold">{post.author.name}</span>
              <span className="text-gray-500 ml-2">@{post.author.handle}</span>
              <span className="text-gray-500 mx-2">·</span>
              <span className="text-gray-500">{post.timestamp}</span>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-gray-900">{post.content}</p>
          {post.images && post.images.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {post.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Post image"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              ))}
            </div>
          )}
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 text-gray-500 hover:text-red-500 ${
                liked ? "text-red-500" : ""
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
              <span>{likesCount}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
              <MessageCircle className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-green-500">
              <Share2 className="w-5 h-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
