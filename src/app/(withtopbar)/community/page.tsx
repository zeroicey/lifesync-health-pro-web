"use client";

import { useState, useEffect } from "react";
import { PostCard } from "@/components/community/post-card";
import { CommunityHeader } from "@/components/community/community-header";
import { CommunitySidebar } from "@/components/community/community-sidebar";
import { PostCardSkeleton } from "@/components/ui/skeletons";
import { FadeIn } from "@/components/ui/animations";

const initialPosts = [
  {
    id: "1",
    author: {
      name: "李医生",
      handle: "dr_li",
      avatar: "https://picsum.photos/seed/doctor1/300/300",
    },
    content:
      "今天和大家分享一个重要的健康小贴士：保持充足的睡眠对身体健康至关重要。研究表明，每晚7-9小时的优质睡眠可以增强免疫力，改善记忆力，促进身体修复。大家晚上要记得按时休息哦！💤",
    images: [
      "https://picsum.photos/seed/sleep1/800/600",
      "https://picsum.photos/seed/sleep2/800/600",
    ],
    likes: 156,
    comments: 32,
    shares: 18,
    timestamp: "2小时前",
  },
  {
    id: "2",
    author: {
      name: "营养师小王",
      handle: "nutritionist_wang",
      avatar: "https://picsum.photos/seed/nutritionist1/300/300",
    },
    content:
      "🥗 健康午餐打卡！\n\n今天给大家推荐一份营养均衡的午餐搭配：\n- 藜麦鸡胸沙拉\n- 牛油果\n- 混合坚果\n- 希腊酸奶\n\n不仅美味，还能提供持久能量！",
    images: [
      "https://picsum.photos/seed/lunch1/800/600",
      "https://picsum.photos/seed/lunch2/800/600",
    ],
    likes: 89,
    comments: 15,
    shares: 7,
    timestamp: "4小时前",
  },
  {
    id: "3",
    author: {
      name: "健身教练阿强",
      handle: "coach_strong",
      avatar: "https://picsum.photos/seed/coach1/300/300",
    },
    content:
      "💪 每日运动小课堂\n\n很多小伙伴问我如何在家也能保持运动。分享一组简单的居家训练动作：\n1. 开合跳 30下\n2. 俯卧撑 15个\n3. 下犬式 保持1分钟\n4. 战士一式 两侧各保持30秒\n\n每组做3遍，每天坚持，你也能收获好身材！",
    images: [
      "https://picsum.photos/seed/workout1/800/600",
      "https://picsum.photos/seed/workout2/800/600",
    ],
    likes: 245,
    comments: 56,
    shares: 34,
    timestamp: "6小时前",
  },
  {
    id: "4",
    author: {
      name: "心理咨询师小林",
      handle: "counselor_lin",
      avatar: "https://picsum.photos/seed/counselor1/300/300",
    },
    content:
      "📚 心理健康小知识\n\n压力不一定是坏事，适度的压力能够激发潜能，帮助我们成长。但如果感到压力过大，建议尝试：\n\n1. 深呼吸练习\n2. 正念冥想\n3. 运动放松\n4. 与朋友倾诉\n\n记住，寻求帮助是一种勇气，而不是软弱。❤️",
    likes: 178,
    comments: 42,
    shares: 23,
    timestamp: "8小时前",
  },
  {
    id: "5",
    author: {
      name: "中医师张医生",
      handle: "tcm_zhang",
      avatar: "https://picsum.photos/seed/tcm1/300/300",
    },
    content:
      "🌱 春季养生贴士\n\n春天万物复苏，是养生的好时节。推荐以下养生方法：\n\n1. 早起晨练，呼吸新鲜空气\n2. 适当增加运动量\n3. 饮食宜温补不宜寒凉\n4. 保持心情舒畅\n\n记得养生先养心，保持好心情才是养生之本！",
    images: [
      "https://picsum.photos/seed/spring1/800/600",
      "https://picsum.photos/seed/spring2/800/600",
    ],
    likes: 134,
    comments: 28,
    shares: 15,
    timestamp: "10小时前",
  },
  {
    id: "6",
    author: {
      name: "瑜伽导师美美",
      handle: "yoga_mei",
      avatar: "https://picsum.photos/seed/yoga1/300/300",
    },
    content:
      "🧘‍♀️ 早安！今天跟大家分享一套清晨瑜伽序列，帮助唤醒身体，激活能量：\n\n1. 太阳礼拜 × 3组\n2. 猫牛式 × 10次\n3. 下犬式 保持1分钟\n4. 战士一式 两侧各保持30秒\n\n记得要缓慢进入体式，感受呼吸和身体的连接～",
    images: [
      "https://picsum.photos/seed/yoga1/800/600",
      "https://picsum.photos/seed/yoga2/800/600",
    ],
    likes: 167,
    comments: 23,
    shares: 12,
    timestamp: "12小时前",
  },
  {
    id: "7",
    author: {
      name: "康复治疗师小陈",
      handle: "physio_chen",
      avatar: "https://picsum.photos/seed/physio1/300/300",
    },
    content:
      "🏃‍♂️ 办公室久坐的朋友们注意啦！\n\n分享几个简单的办公室拉伸动作：\n\n1. 颈部旋转\n2. 肩膀环绕\n3. 手腕拉伸\n4. 坐姿体侧伸展\n\n建议每工作1小时，起来活动5分钟，预防颈椎腰椎问题！",
    images: [
      "https://picsum.photos/seed/stretch1/800/600",
      "https://picsum.photos/seed/stretch2/800/600",
    ],
    likes: 201,
    comments: 45,
    shares: 38,
    timestamp: "14小时前",
  },
  {
    id: "8",
    author: {
      name: "运动营养师大卫",
      handle: "nutrition_david",
      avatar: "https://picsum.photos/seed/nutrition1/300/300",
    },
    content:
      "💪 运动前后的营养补充很重要！\n\n运动前：\n- 香蕉或能量棒（碳水）\n- 适量水分\n\n运动后30分钟内：\n- 蛋白质奶昔\n- 全麦面包\n- 补充电解质\n\n科学补充，效果翻倍！",
    images: [
      "https://picsum.photos/seed/nutrition1/800/600",
      "https://picsum.photos/seed/nutrition2/800/600",
    ],
    likes: 145,
    comments: 33,
    shares: 19,
    timestamp: "16小时前",
  },
  {
    id: "9",
    author: {
      name: "睡眠专家周博士",
      handle: "dr_sleep",
      avatar: "https://picsum.photos/seed/sleep_doc1/300/300",
    },
    content:
      "😴 失眠困扰着很多人，分享一些改善睡眠的小技巧：\n\n1. 固定作息时间\n2. 睡前1小时不看手机\n3. 卧室保持安静黑暗\n4. 睡前泡温和的花草茶\n5. 尝试白噪音\n\n坚持这些好习惯，慢慢就能改善睡眠质量！",
    images: [
      "https://picsum.photos/seed/sleep_tips1/800/600",
      "https://picsum.photos/seed/sleep_tips2/800/600",
    ],
    likes: 189,
    comments: 47,
    shares: 29,
    timestamp: "18小时前",
  },
  {
    id: "10",
    author: {
      name: "中医养生师兰兰",
      handle: "tcm_lan",
      avatar: "https://picsum.photos/seed/tcm2/300/300",
    },
    content:
      "🍵 今日养生茶饮推荐：\n\n玫瑰枸杞茶\n- 玫瑰花：理气解郁\n- 枸杞：滋养肝肾\n- 红枣：补气养血\n- 冰糖：中和调味\n\n适合都市人群日常饮用，改善亚健康状态～",
    images: [
      "https://picsum.photos/seed/tea1/800/600",
      "https://picsum.photos/seed/tea2/800/600",
    ],
    likes: 167,
    comments: 39,
    shares: 25,
    timestamp: "20小时前",
  },
  {
    id: "11",
    author: {
      name: "健康科普博主小杨",
      handle: "health_yang",
      avatar: "https://picsum.photos/seed/health1/300/300",
    },
    content:
      "🔍 今天来聊聊益生菌的那些事：\n\n益生菌的好处：\n1. 改善肠道健康\n2. 增强免疫力\n3. 帮助消化\n4. 改善皮肤状态\n\n选购建议：\n- 看菌株种类\n- 检查活性数量\n- 注意储存方式\n- 选择正规品牌",
    images: [
      "https://picsum.photos/seed/probiotics1/800/600",
      "https://picsum.photos/seed/probiotics2/800/600",
    ],
    likes: 134,
    comments: 28,
    shares: 15,
    timestamp: "22小时前",
  },
  {
    id: "12",
    author: {
      name: "运动康复师Tony",
      handle: "rehab_tony",
      avatar: "https://picsum.photos/seed/rehab1/300/300",
    },
    content:
      "🎾 网球肘困扰着很多办公室职员，今天教大家几个缓解动作：\n\n1. 手腕背伸拉伸\n2. 前臂按摩\n3. 冰敷热敷交替\n4. 等长收缩练习\n\n如果持续疼痛，建议及时就医！",
    images: [
      "https://picsum.photos/seed/rehab1/800/600",
      "https://picsum.photos/seed/rehab2/800/600",
    ],
    likes: 156,
    comments: 42,
    shares: 23,
    timestamp: "1天前",
  },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [activeTab, setActiveTab] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    let sortedPosts = [...posts];
    switch (value) {
      case "trending":
        sortedPosts.sort((a, b) => b.likes - a.likes);
        break;
      case "latest":
        sortedPosts.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        break;
      case "following":
        break;
    }
    setPosts(sortedPosts);
  };

  const handlePostCreated = (newPost: any) => {
    setPosts([newPost, ...posts]);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FadeIn>
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <CommunityHeader
              onSearch={handleSearch}
              onTabChange={handleTabChange}
              onCreatePost={handlePostCreated}
            />
            <div className="space-y-6">
              {loading ? (
                Array(5)
                  .fill(null)
                  .map((_, i) => <PostCardSkeleton key={i} />)
              ) : (
                filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              )}
            </div>
          </div>
          <aside className="space-y-6">
            <CommunitySidebar />
          </aside>
        </div>
      </div>
    </FadeIn>
  );
}
