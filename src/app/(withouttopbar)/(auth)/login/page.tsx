'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuthStore } from "@/store/useAuthStore"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const login = useAuthStore(state => state.login)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000))

      // 模拟验证
      if (email === '' || password === '') {
        throw new Error('请填写所有必填字段')
      }

      // 模拟成功响应
      const mockResponse = {
        user: {
          id: '1',
          name: '张三',
          email: email,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
          role: '健康达人',
          joinDate: '2024-01-01'
        },
        token: 'mock_token_' + Date.now()
      }

      login(mockResponse.user, mockResponse.token)
      toast.success('登录成功')
      
      // 使用 replace 而不是 push，这样用户不能返回到登录页
      router.replace('/dashboard')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '登录失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">欢迎回来</CardTitle>
          <CardDescription className="text-center">
            登录您的账户继续使用
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? '登录中...' : '登录'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link 
              href="/register" 
              className="text-primary hover:underline"
              tabIndex={loading ? -1 : 0}
            >
              还没有账号？立即注册
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
