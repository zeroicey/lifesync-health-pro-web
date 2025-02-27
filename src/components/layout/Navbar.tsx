"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Brain, Users, Heart, User, LogOut } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 清除之前的定时器
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // 立即根据滚动方向显示/隐藏导航栏
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // 向下滚动，隐藏
      } else {
        setIsVisible(true); // 向上滚动，显示
      }

      // 如果停止滚动3秒，则隐藏导航栏
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "首页", icon: Home },
    { href: "/ai-assistant", label: "AI助手", icon: Brain },
    { href: "/community", label: "社区", icon: Users },
    { href: "/mood", label: "心情记录", icon: Heart },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md shadow-lg z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* 桌面端导航栏 */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-20">
            {/* Logo区域 */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative overflow-hidden rounded-xl shadow-inner bg-gradient-to-br from-blue-500/20 via-primary/20 to-purple-500/20 p-1.5 group-hover:from-blue-500/30 group-hover:via-primary/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="LifeSync Logo"
                    width={36}
                    height={36}
                    className="rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-primary to-purple-600 bg-clip-text text-transparent">
                  LifeSync
                </span>
              </Link>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center space-x-10">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const gradients = [
                  "from-blue-500 to-blue-600",
                  "from-primary to-primary-dark",
                  "from-purple-500 to-purple-600",
                  "from-indigo-500 to-indigo-600",
                ];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center space-x-2 text-gray-600 hover:text-primary relative px-3 py-2"
                  >
                    <Icon
                      size={20}
                      className={`transform group-hover:scale-110 transition-transform duration-300 group-hover:text-${
                        gradients[index].split(" ")[1]
                      }`}
                    />
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${gradients[index]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* 用户操作区 */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/login"
                className="text-gray-600 hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-300"
              >
                登录
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-primary to-purple-600 text-white font-medium 
                  hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                注册
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary group px-4 py-2 rounded-lg 
                  hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-300"
              >
                <User
                  size={20}
                  className="transform group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">个人中心</span>
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-300"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端侧边栏遮罩 */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* 移动端侧边导航栏 */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-[85%] max-w-[380px] bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-lg shadow-2xl transition-transform duration-500 ease-out md:hidden z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                onClick={toggleMenu}
              >
                <div className="relative overflow-hidden rounded-xl shadow-inner bg-gradient-to-br from-blue-500/20 via-primary/20 to-purple-500/20 p-1.5 group-hover:from-blue-500/30 group-hover:via-primary/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="LifeSync Logo"
                    width={36}
                    height={36}
                    className="rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-primary to-purple-600 bg-clip-text text-transparent">
                  LifeSync
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-300"
              >
                <X size={26} />
              </button>
            </div>

            <div className="space-y-6">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const gradients = [
                  "hover:from-blue-50 hover:to-blue-100/50",
                  "hover:from-primary-50 hover:to-primary-100/50",
                  "hover:from-purple-50 hover:to-purple-100/50",
                  "hover:from-indigo-50 hover:to-indigo-100/50",
                ];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 text-gray-600 hover:text-primary group px-4 py-3 rounded-xl hover:bg-gradient-to-r ${gradients[index]} transition-all duration-300`}
                    onClick={toggleMenu}
                  >
                    <Icon
                      size={22}
                      className="transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-medium text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-auto p-6 border-t border-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
            <div className="space-y-4">
              <Link
                href="/login"
                className="block w-full px-6 py-3 text-center rounded-xl border-2 border-primary text-primary font-medium
                  hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:border-transparent transition-all duration-300"
                onClick={toggleMenu}
              >
                登录
              </Link>
              <Link
                href="/register"
                className="block w-full px-6 py-3 text-center rounded-xl bg-gradient-to-r from-blue-600 via-primary to-purple-600
                  text-white font-medium hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={toggleMenu}
              >
                注册
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center justify-center space-x-3 text-gray-600 hover:text-primary group px-4 py-3 rounded-xl 
                  hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-300"
                onClick={toggleMenu}
              >
                <User
                  size={22}
                  className="transform group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium text-lg">个人中心</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
