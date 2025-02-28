"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Mail, Lock, User, Home } from "lucide-react";
import { GitHubIcon, GoogleIcon } from "@/components/icons/social";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: 实现注册逻辑
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Card className="w-full max-w-md p-8">
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Home className="h-5 w-5 mr-1" />
          返回主页
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          加入 LifeSync
        </h1>
        <p className="text-gray-600 mt-2">创建账号开启您的健康管理之旅</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            用户名
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="username"
              type="text"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请输入用户名"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            邮箱地址
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="email"
              type="email"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请输入邮箱地址"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            密码
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="password"
              type="password"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请输入密码（至少8位）"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            确认密码
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="confirmPassword"
              type="password"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请再次输入密码"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            我同意{" "}
            <Link href="/terms" className="text-blue-600 hover:text-blue-800">
              服务条款
            </Link>{" "}
            和{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
              隐私政策
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "注册中..." : "注册"}
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              或使用以下方式注册
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <GitHubIcon className="h-5 w-5 mr-2" />
            GitHub
          </button>
          <button
            type="button"
            className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <GoogleIcon className="h-5 w-5 mr-2" />
            Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          已有账号？{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            立即登录
          </Link>
        </p>
      </form>
    </Card>
  );
}
