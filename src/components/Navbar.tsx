import React, { useState, useLayoutEffect } from "react";
import { cn } from "@/utils/cn";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // 监听滚动事件，当滚动超过 50px 时切换为亚克力模式
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navItems = [
    { name: "首页", link: "/" },
    { name: "产品中心", link: "/products" },
    { name: "合作案例", link: "/cases" },
    { name: "关于我们", link: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 inset-x-0 z-[5000] flex items-center justify-between px-6 py-4 md:px-10 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/[0.1] shadow-lg" // 亚克力效果：半透明背景 + 模糊 + 边框
          : "bg-transparent border-transparent" // 顶部透明模式
      )}
    >
      {/* 左侧：企业 Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        {/* 这里可以使用 img 标签引入真实的 SVG Logo */}
        <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight hidden md:block">
          Astro Tech
        </span>
      </div>

      {/* 中间：导航标签 */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="relative text-sm font-medium text-neutral-300 hover:text-white transition-colors group"
          >
            {item.name}
            {/* 悬停时的底部光标动画 */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* 右侧：联系方式 */}
      <div className="flex items-center gap-4">
        {/* 移动端汉堡菜单入口可以预留在这里 */}
        <button className="px-5 py-2 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.1] text-white text-sm font-medium transition-all backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          联系方式
        </button>
      </div>
    </motion.nav>
  );
};