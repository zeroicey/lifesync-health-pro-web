"use client";

import { PostCard } from "@/components/community/post-card";
import { CommunityHeader } from "@/components/community/community-header";
import { CommunitySidebar } from "@/components/community/community-sidebar";

const posts = [
  {
    id: "1",
    author: {
      name: "李医生",
      handle: "dr_li",
      avatar: "https://source.unsplash.com/300x300/?doctor"
    },
    content: "今天和大家分享一个重要的健康小贴士：保持充足的睡眠对身体健康至关重要。研究表明，每晚7-9小时的优质睡眠可以增强免疫力，改善记忆力，促进身体修复。大家晚上要记得按时休息哦！💤",
    images: [
      "https://source.unsplash.com/800x600/?sleep",
      "https://source.unsplash.com/800x600/?bedroom"
    ],
    likes: 156,
    comments: 32,
    shares: 18,
    timestamp: "2小时前"
  },
  {
    id: "2",
    author: {
      name: "营养师小王",
      handle: "nutritionist_wang",
      avatar: "https://source.unsplash.com/300x300/?nutritionist"
    },
    content: "🥗 健康午餐打卡！\n\n今天给大家推荐一份营养均衡的午餐搭配：\n- 藜麦鸡胸沙拉\n- 牛油果\n- 混合坚果\n- 希腊酸奶\n\n不仅美味，还能提供持久能量！",
    images: [
      "https://source.unsplash.com/800x600/?healthy-lunch",
      "https://source.unsplash.com/800x600/?salad"
    ],
    likes: 89,
    comments: 15,
    shares: 7,
    timestamp: "4小时前"
  },
  {
    id: "3",
    author: {
      name: "健身教练阿强",
      handle: "coach_strong",
      avatar: "https://source.unsplash.com/300x300/?fitness-coach"
    },
    content: "💪 每日运动小课堂\n\n很多小伙伴问我如何在家也能保持运动。分享一组简单的居家训练动作：\n1. 开合跳 30下\n2. 俯卧撑 15个\n3. 深蹲 20个\n4. 平板支撑 1分钟\n\n每组做3遍，每天坚持，你也能收获好身材！",
    images: [
      "https://source.unsplash.com/800x600/?workout",
      "https://source.unsplash.com/800x600/?exercise"
    ],
    likes: 245,
    comments: 56,
    shares: 34,
    timestamp: "6小时前"
  },
  {
    id: "4",
    author: {
      name: "心理咨询师小林",
      handle: "counselor_lin",
      avatar: "https://source.unsplash.com/300x300/?counselor"
    },
    content: "📚 心理健康小知识\n\n压力不一定是坏事，适度的压力能够激发潜能，帮助我们成长。但如果感到压力过大，建议尝试：\n\n1. 深呼吸练习\n2. 正念冥想\n3. 运动放松\n4. 与朋友倾诉\n\n记住，寻求帮助是一种勇气，而不是软弱。❤️",
    likes: 178,
    comments: 42,
    shares: 23,
    timestamp: "8小时前"
  },
  {
    id: "5",
    author: {
      name: "中医师张医生",
      handle: "tcm_zhang",
      avatar: "https://source.unsplash.com/300x300/?chinese-medicine"
    },
    content: "🌱 春季养生贴士\n\n春天万物复苏，是养生的好时节。推荐以下养生方法：\n\n1. 早起晨练，呼吸新鲜空气\n2. 适当增加运动量\n3. 饮食宜温补不宜寒凉\n4. 保持心情舒畅\n\n记得养生先养心，保持好心情才是养生之本！",
    images: [
      "https://source.unsplash.com/800x600/?spring-nature",
      "https://source.unsplash.com/800x600/?herbal-tea"
    ],
    likes: 134,
    comments: 28,
    shares: 15,
    timestamp: "10小时前"
  }
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CommunityHeader />
          <div className="space-y-4">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <CommunitySidebar />
        </div>
      </div>
    </div>
  );
}
