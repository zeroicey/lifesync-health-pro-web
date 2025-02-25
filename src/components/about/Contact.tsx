"use client";
import { Mail, Github, Globe, MessageCircle } from "lucide-react";

interface ContactProps {
  email: string;
  github: string;
  year: string;
  projectName: string;
}

export const Contact = ({
  email,
  github,
  year,
  projectName,
}: ContactProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">联系我们</h2>
          <p className="text-gray-600 text-lg mb-8">
            如果您对我们的项目感兴趣，或有任何建议，欢迎通过以下方式联系我们
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
            <Mail className="w-6 h-6 text-blue-500" />
            <div>
              <h3 className="font-semibold text-gray-700">电子邮箱</h3>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
            <Github className="w-6 h-6 text-gray-700" />
            <div>
              <h3 className="font-semibold text-gray-700">GitHub</h3>
              <p className="text-gray-600">{github}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
            <Globe className="w-6 h-6 text-green-500" />
            <div>
              <h3 className="font-semibold text-gray-700">官方网站</h3>
              <p className="text-gray-600">lifesync.health.pro</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
            <MessageCircle className="w-6 h-6 text-purple-500" />
            <div>
              <h3 className="font-semibold text-gray-700">技术交流</h3>
              <p className="text-gray-600">加入我们的开源社区</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500">
          <p> {year} {projectName}</p>
          <p className="mt-2 text-sm">Acacia Team. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
