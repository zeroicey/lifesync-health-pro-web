"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const CallToAction = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    router.push("/community");
  };

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">开启您的健康之旅</h2>
        <p className="mb-8">立即加入我们，安全专业的健康管理服务</p>
        <Button 
          variant="secondary"
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100"
          onClick={handleJoinClick}
        >
          加入我们
        </Button>
      </div>
    </section>
  );
};
