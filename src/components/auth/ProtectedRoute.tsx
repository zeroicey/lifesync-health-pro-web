'use client'

import { useAuthStore } from "@/store/useAuthStore"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isAuthenticated) {
      const publicPaths = ['/', '/login', '/register']
      const isPublicPath = publicPaths.some(path => pathname === path)
      
      if (!isPublicPath) {
        router.push('/login')
      }
    }
  }, [isAuthenticated, router, pathname, mounted])

  // 在客户端渲染之前不显示内容，避免闪烁
  if (!mounted) {
    return null
  }

  // 对于需要保护的路由，未登录时不显示内容
  const protectedPaths = ['/dashboard', '/profile', '/ai-assistant']
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  
  if (!isAuthenticated && isProtectedPath) {
    return null
  }

  return <>{children}</>
}
