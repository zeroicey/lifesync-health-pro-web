# 心身同调·全维健康 Pro Web 前端 

LifeSync · Holistic Health Pro Web Frontend

<p align="center">
  <img src="public/logo.png" alt="LifeSync Logo" width="200"/>
</p>

<p align="center">
  <a href="#项目简介">简介</a> •
  <a href="#核心功能">功能</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#技术架构">架构</a> •
  <a href="#页面说明">页面</a> •
  <a href="#贡献指南">贡献</a>
</p>

## 项目简介

心身同调·全维健康是一款创新健康管理平台的 Web 前端项目，通过智能数据管理与活力社区双引擎驱动，打造「数据可视化+社交支持」的全新健康体验。平台以直观的交互设计和科学的健康洞察，帮助用户建立个性化健康管理方案，同时连接志同道合的健康同路人。

## 核心功能

- 健康社区生态

  - 创建健康话题讨论圈
  - 分享个性化健康方案
  - 参与互助问答广场
  - 达人经验图文直播
  - 专家在线互动专栏
  - 健康挑战打卡计划

- 智能健康中枢（原健康数据管理升级）

  - 多维度体征数据追踪
  - 动态健康热力图谱
  - AI 健康风险评估
  - 个性化改善建议生成

- 心灵守护站（原心理健康管理升级）

  - 情绪波动光谱分析
  - 正念冥想资源库
  - 心理自测量表
  - 智能情绪急救包

- 设备智联中心

  - 跨品牌设备即插即用
  - 实时数据驾驶舱
  - 设备健康度诊断
  - 智能场景联动

- 我的健康空间
  - 三维健康档案
  - 隐私安全锁
  - 数据主权管理
  - 多端无缝漫游

## 技术栈

### 核心框架与库

- Next.js 15.1.7 - React 框架，支持 SSR/SSG，使用 App Router
- TypeScript - 类型安全的 JavaScript 超集
- React 19 - 用户界面构建库
- Tailwind CSS 3.4 - 原子化 CSS 框架
- Recharts 2.15 - 响应式图表库
- Zustand 5.0 - 轻量级状态管理
- React Hook Form 7.54 - 表单处理
- Zod 3.24 - 类型验证
- Framer Motion 12.4 - 动画库
- Typewriter Effect 2.21 - 打字机效果

### UI 组件库

- Shadcn UI - 基于 Radix UI 的现代化组件库
  - @radix-ui/react-avatar
  - @radix-ui/react-dialog
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-tabs
  - @radix-ui/react-tooltip
  - 等多个 Radix 组件
- Lucide React 0.475 - 现代图标库
- next-themes 0.4.4 - 主题切换
- Sonner 2.0 - 现代化通知组件
- TanStack Table 8.21 - 表格组件

### 工具库

- class-variance-authority 0.7 - 条件样式管理
- clsx 2.1 & tailwind-merge 3.0 - 类名合并工具
- date-fns 4.1 - 日期处理
- tailwindcss-animate 1.0 - Tailwind 动画

### 开发工具

- ESLint - 代码检查
- Prettier - 代码格式化
- TypeScript 5 - 静态类型检查
- Bun - 包管理器和运行时
- Turbopack - 开发服务器

### 项目结构

```
src/
├── app/                 # Next.js App Router 页面
├── components/         # React 组件
│   ├── ai-assistant/   # AI 助手相关组件
│   ├── auth/          # 认证相关组件
│   ├── dashboard/     # 仪表盘组件
│   └── home/          # 首页相关组件
├── hooks/             # 自定义 React Hooks
├── lib/               # 工具函数和配置
└── store/            # Zustand 状态管理
```

## 系统要求

- Bun >= 1.0.0 (推荐)

## 快速开始

### 1. 克隆项目

```bash
git clone https://gitee.com/zeroicey/life-sync-health-pro-web.git
cd life-sync-health-web
```

### 2. 安装依赖

```bash
bun install
```

### 3. 环境配置

```bash
bun dev
# 或
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 页面说明

### 主要页面

- `/` - 首页
- `/login` 登录
- `/register` 注册
- `/dashboard` - 用户仪表盘
- `/mood` - 心情记录
- `/ai-assistant` - AI 健康助手
- `/devices` - 设备管理

### 功能页面

- `/auth/login` - 登录
- `/auth/register` - 注册
- `/contact` - 联系我们
- `/docs` - 使用文档
- `/license` - 许可证
- `/sponsor` - 支持项目

## 项目结构

```
life-sync-health-web/
├── src/
│   ├── app/                 # 页面组件
│   │   ├── auth/           # 认证相关页面
│   │   ├── dashboard/      # 仪表盘
│   │   ├── health/         # 健康数据
│   │   ├── mood/           # 心情记录
│   │   ├── memo/           # 心路笔记
│   │   └── devices/        # 设备管理
│   ├── components/         # 通用组件
│   │   ├── auth/          # 认证组件
│   │   ├── common/        # 公共组件
│   │   ├── health/        # 健康相关组件
│   │   ├── mood/          # 心情相关组件
│   │   └── layout/        # 布局组件
│   ├── contexts/          # 上下文
│   ├── lib/              # 工具函数
│   ├── services/         # API 服务
│   └── styles/           # 样式文件
├── public/               # 静态资源
└── package.json
```

## 开发团队

### ACACIA 团队

- 张开鑫 - 全栈开发
- 汪宁 - 文档编写
- 郭嘉荣 - 代码测试

### 指导老师

- 欧凯曈
- 李伟梁

## 相关项目

- 后端 API
- AI 服务

## 许可证

版权所有 2024 ACACIA 团队

本项目采用修改版 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系我们

- Email: zeroicey.hp@outlook.com
- Wechat: Y3245632373

---

<p align="center">用科技守护健康，用数据改善生活 </p>
