"use client";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "项目简介", href: "#项目简介" },
  { title: "核心功能", href: "#核心功能" },
  { title: "技术架构", href: "#技术架构" },
  { title: "快速开始", href: "#快速开始" },
  { title: "页面说明", href: "#页面说明" },
  { title: "项目结构", href: "#项目结构" },
  { title: "开发团队", href: "#开发团队" },
  { title: "相关项目", href: "#相关项目" },
  { title: "许可证", href: "#许可证" },
];

export function DocsNav() {
  return (
    <nav className="hidden lg:block w-64 fixed h-screen overflow-y-auto border-r p-6">
      <div className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
