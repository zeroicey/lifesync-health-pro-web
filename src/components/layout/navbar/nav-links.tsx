"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Activity, Users, MessageSquareText, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    title: "首页",
    href: "/dashboard",
    icon: Home
  },
  {
    title: "健康数据",
    href: "/health-data",
    icon: Activity
  },
  {
    title: "社区",
    href: "/community",
    icon: Users,
    badge: "3"
  },
  {
    title: "AI 助手",
    href: "/ai-assistant",
    icon: MessageSquareText
  },
  {
    title: "预约",
    href: "/appointments",
    icon: Calendar
  }
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group",
              isActive
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="absolute -top-1 -right-1 bg-red-500 text-white">
                {item.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
