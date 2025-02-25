"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-blue-50/50 to-purple-50/50">
      <Card className="max-w-4xl mx-auto border-t-4 border-t-blue-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            隐私政策
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-2"></span>
              版权声明
            </h2>
            <p className="text-gray-700 pl-4 border-l-2 border-blue-200">
              Copyright (c) 2024 zeroicey。保留所有权利。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-purple-700">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full mr-2"></span>
              使用条款
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-purple-200">
              <p className="text-gray-700">本软件的使用受以下条件的约束：</p>
              <ul className="list-none space-y-3 text-gray-700">
                {[
                  "本软件仅限于获得 zeroicey 书面同意的用户使用。",
                  "所有使用、修改或分发本软件的行为，必须保留版权声明，并获得明确的书面授权。",
                  "本软件按原样提供，不附带任何明示或暗示的保证。",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-2"></span>
              免责声明
            </h2>
            <div className="pl-4 border-l-2 border-blue-200">
              <p className="text-gray-700 mb-3">
                本软件不提供任何形式的保证，包括但不限于：
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "适销性保证", icon: "💼" },
                  { title: "适合特定用途的保证", icon: "🎯" },
                  { title: "非侵权保证", icon: "⚖️" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center"
                  >
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <span className="text-gray-700">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-purple-700">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full mr-2"></span>
              法律责任
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
              <p className="text-gray-700">
                未经授权的任何使用、复制或分发行为均为非法，并可能导致法律追诉。如有任何疑问，请联系我们获取授权。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-2"></span>
              联系方式
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-2 border-blue-200">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-700 mb-2">📧 电子邮箱</p>
                <p className="text-gray-700">zeroicey@gmail.com</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium text-purple-700 mb-2">🌐 Github</p>
                <p className="text-gray-700">github.com/zeroicey</p>
              </div>
            </div>
          </section>

          <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-100">
            最后更新时间：2024年2月25日
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
