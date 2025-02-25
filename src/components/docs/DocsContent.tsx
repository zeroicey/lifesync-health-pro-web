"use client";
import { Card } from "@/components/ui/card";

export function DocsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section id="项目简介" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">📖 项目简介</h2>
        <Card className="p-6">
          <p className="text-gray-700 leading-relaxed">
            心身同调·全维健康是一款创新健康管理平台的 Web 前端项目，通过智能数据管理与活力社区双引擎驱动，
            打造「数据可视化+社交支持」的全新健康体验。平台以直观的交互设计和科学的健康洞察，
            帮助用户建立个性化健康管理方案，同时连接志同道合的健康同路人。
          </p>
        </Card>
      </section>

      <section id="核心功能" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">🚀 核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">🌱 健康社区生态</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>创建健康话题讨论圈</li>
              <li>分享个性化健康方案</li>
              <li>参与互助问答广场</li>
              <li>达人经验图文直播</li>
              <li>专家在线互动专栏</li>
              <li>健康挑战打卡计划</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">📊 智能健康中枢</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>多维度体征数据追踪</li>
              <li>动态健康热力图谱</li>
              <li>AI 健康风险评估</li>
              <li>个性化改善建议生成</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">🧘 心灵守护站</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>情绪波动光谱分析</li>
              <li>正念冥想资源库</li>
              <li>心理自测量表</li>
              <li>智能情绪急救包</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">🔄 设备智联中心</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>跨品牌设备即插即用</li>
              <li>实时数据驾驶舱</li>
              <li>设备健康度诊断</li>
              <li>智能场景联动</li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="技术架构" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">💻 技术架构</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">核心框架</h3>
              <ul className="space-y-2 text-gray-700">
                <li>⚛️ Next.js 14</li>
                <li>🔷 TypeScript</li>
                <li>🎨 Tailwind CSS</li>
                <li>📊 Recharts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">UI 组件</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🎨 Shadcn UI</li>
                <li>🎨 Lucide React</li>
                <li>🌙 next-themes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">开发工具</h3>
              <ul className="space-y-2 text-gray-700">
                <li>📝 ESLint</li>
                <li>🎨 Prettier</li>
                <li>🔍 TypeScript</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section id="快速开始" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">🚀 快速开始</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. 克隆项目</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>git clone https://gitee.com/zeroicey/life-sync-health-pro-web.git
cd life-sync-health-web</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">2. 安装依赖</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>bun install</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">3. 启动项目</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>bun dev</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      <section id="开发团队" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">👥 开发团队</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">ACACIA 团队</h3>
              <ul className="space-y-2 text-gray-700">
                <li>👨‍💻 张开鑫 - 全栈开发</li>
                <li>👨‍💻 汪宁 - 文档编写</li>
                <li>👨‍💻 郭嘉荣 - 代码测试</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">指导老师</h3>
              <ul className="space-y-2 text-gray-700">
                <li>👨‍🏫 欧凯曈</li>
                <li>👨‍🏫 李伟梁</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section id="相关项目" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">🔗 相关项目</h2>
        <Card className="p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="https://gitee.com/zeroicey/life-sync-health-api.git" className="text-blue-600 hover:underline">
                🌐 后端 API
              </a>
            </li>
            <li>
              <a href="https://gitee.com/zeroicey/life-sync-health-ai.git" className="text-blue-600 hover:underline">
                🤖 AI 服务
              </a>
            </li>
          </ul>
        </Card>
      </section>

      <section id="许可证" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">📄 许可证</h2>
        <Card className="p-6">
          <p className="text-gray-700 mb-4">版权所有 © 2024 ACACIA 团队</p>
          <p className="text-gray-700">
            本项目采用修改版 MIT 许可证。详见{" "}
            <a href="/license" className="text-blue-600 hover:underline">
              LICENSE
            </a>{" "}
            文件。
          </p>
        </Card>
      </section>
    </div>
  );
}
