"use client";
import { Github } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "快速链接",
    links: [
      { name: "关于我们", href: "/about" },
      { name: "功能介绍", href: "/feature" },
      { name: "联系我们", href: "/contact" },
    ],
  },
  {
    title: "帮助支持",
    links: [
      { name: "使用文档", href: "/docs" },
      { name: "隐私政策", href: "/privacy" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#020817] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="LifeSync Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold text-white">
                心身同调·全维健康
              </h3>
            </div>
            <p className="mb-6">
              我们打开了解每个人的生命健康和心理需求的新方式，让每个人都能享受科技带来的健康生活。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/zeroicey/lifesync-health-pro-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>2024 LifeSync Health Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
