"use client";
import { Mail, Github, MessageCircle, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8 text-blue-500" />,
    title: "电子邮件",
    description: "发送邮件给我们",
    primary: "zeroicey.hp@outlook.com",
    action: "mailto:zeroicey.hp@outlook.com",
    actionText: "发送邮件",
  },
  {
    icon: <Github className="w-8 h-8 text-gray-700" />,
    title: "GitHub",
    description: "在 GitHub 上关注我们",
    primary: "github.com/zeroicey",
    action: "https://github.com/zeroicey",
    actionText: "访问主页",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-500" />,
    title: "技术交流",
    description: "加入我们的开发者社区",
    primary: "Discord / Slack",
    action: "#",
    actionText: "加入社区",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "官方网站",
    description: "访问我们的官方网站",
    primary: "lifesync.health.pro",
    action: "https://lifesync.health.pro",
    actionText: "访问网站",
  },
];

export function ContactInfo() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method) => (
            <Card key={method.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="text-gray-800 font-medium mb-4">{method.primary}</p>
                    <a
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      {method.actionText}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
