"use client";

import { Mail, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GitHubIcon } from "@/components/icons/social";

const teamMembers = [
  {
    name: "Zero",
    role: "全栈开发工程师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zero",
    description: "负责项目的架构设计和核心功能开发，专注于AI技术在健康领域的应用。",
    links: {
      github: "github.com/zeroicey",
      email: "zeroicey.hp@outlook.com",
    },
  },
  {
    name: "Alice",
    role: "UI/UX 设计师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
    description: "负责产品的用户界面设计和交互体验优化，追求简洁优雅的设计风格。",
    links: {
      github: "github.com/alice-design",
      email: "alice.design@outlook.com",
    },
  },
  {
    name: "Bob",
    role: "AI 算法工程师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
    description: "专注于机器学习算法研究，负责健康数据分析和预测模型的开发。",
    links: {
      github: "github.com/bob-ai",
      email: "bob.ai@outlook.com",
    },
  },
];

export function Team() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">团队成员</h2>
          <p className="text-gray-600 text-lg">
            我们是一群充满激情的技术爱好者，致力于用创新技术改变健康管理方式
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm text-center mb-4">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={`https://${member.links.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.links.email}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            想要加入我们？发送简历至{" "}
            <a
              href="mailto:join@acaciahealth.dev"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              join@acaciahealth.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
