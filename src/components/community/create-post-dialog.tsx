"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ImagePlus, X } from "lucide-react";

interface CreatePostDialogProps {
  onPostCreated?: (post: any) => void;
  children?: React.ReactNode;
}

export function CreatePostDialog({ onPostCreated, children }: CreatePostDialogProps) {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      author: {
        name: "当前用户",
        handle: "current_user",
        avatar: "https://picsum.photos/seed/user/300/300"
      },
      content,
      images,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "刚刚"
    };

    if (onPostCreated) {
      onPostCreated(newPost);
    }
    setContent("");
    setImages([]);
    setIsOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 在实际应用中，这里应该上传图片到服务器
      // 这里我们使用picsum作为示例
      const imageUrl = `https://picsum.photos/seed/${Math.random()}/800/600`;
      setImages([...images, imageUrl]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || <Button>发布新帖子</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>发布新帖子</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="content">内容</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="分享你的健康生活..."
              className="min-h-[150px]"
            />
          </div>
          <div className="grid gap-2">
            <Label>图片</Label>
            <div className="flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt="" className="w-20 h-20 object-cover rounded" />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
              <label className="w-20 h-20 border-2 border-dashed rounded flex items-center justify-center cursor-pointer hover:border-gray-400">
                <Input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <ImagePlus className="w-6 h-6 text-gray-400" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            取消
          </Button>
          <Button onClick={handleSubmit} disabled={!content.trim()}>
            发布
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
