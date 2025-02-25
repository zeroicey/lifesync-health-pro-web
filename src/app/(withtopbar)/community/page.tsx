import { PostForm } from "@/components/community/post-form";
import { PostCard } from "@/components/community/post-card";
import { CommunitySidebar } from "@/components/community/sidebar";

const mockPosts = [
  {
    id: "1",
    author: {
      name: "张医生",
      handle: "dr_zhang",
      avatar: "/avatars/doctor.jpg",
    },
    content:
      "今天和大家分享一个健康小贴士：每天保持8小时优质睡眠对身体健康非常重要。以下是一些改善睡眠质量的建议：1. 保持规律的作息时间 2. 睡前避免使用电子设备 3. 营造舒适的睡眠环境 4. 睡前做些放松的活动",
    likes: 128,
    comments: 32,
    shares: 12,
    timestamp: "2小时前",
  },
  {
    id: "2",
    author: {
      name: "营养师小王",
      handle: "nutritionist",
      avatar: "/avatars/nutritionist.jpg",
    },
    content:
      "分享一道健康美味的沙拉食谱！🥗\n\n材料：生菜、小番茄、牛油果、藜麦、烤鸡胸肉\n调味料：橄榄油、柠檬汁、黑胡椒\n\n营养价值：富含蛋白质、维生素、膳食纤维和健康脂肪，热量适中，非常适合减重期间食用！",
    images: ["/images/salad1.jpg", "/images/salad2.jpg"],
    likes: 256,
    comments: 45,
    shares: 23,
    timestamp: "4小时前",
  },
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PostForm />
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-6">
            <CommunitySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
