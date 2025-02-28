'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export function MetricCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-8 w-1/2" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </Card>
  )
}

export function ChartSkeleton() {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </Card>
  )
}

export function DeviceCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <div className="flex space-x-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export function ActivityLogSkeleton() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function GoalsListSkeleton() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-2 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function PostCardSkeleton() {
  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-3 w-[150px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  )
}

export function CommunityTopicSkeleton() {
  return (
    <div className="flex items-center space-x-2 p-2 border rounded-lg bg-card">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-4 w-[120px]" />
      <Skeleton className="h-4 w-[60px] ml-auto" />
    </div>
  )
}

export function CommentSkeleton() {
  return (
    <div className="space-y-2 p-3 border-b">
      <div className="flex items-center space-x-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-3 w-[60px] ml-auto" />
      </div>
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[70%]" />
    </div>
  )
}
