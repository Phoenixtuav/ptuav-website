import React from "react";
import { GridBackground } from "@/ui/GridBackground";
import { motion } from "framer-motion";

// 这里使用一个占位图，您可以替换为您实际的产品渲染图
// 推荐使用：深色背景、发光、等轴测视图(Isometric)的芯片、服务器或数据可视化仪表盘图片
const heroImage = "/products/test2.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* 背景网格特效 */}
      <div className="absolute inset-0 pointer-events-none">
        <GridBackground />
      </div>

      {/* 内容区域：采用双栏布局 */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 左侧：文案与行动号召 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center text-left"
          >
            <h2 className="text-sm md:text-base font-bold tracking-widest text-blue-500 uppercase mb-4">
              ► NEXT-GEN INFRASTRUCTURE
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-500 leading-tight mb-6">
              Astro Tech <br />
              <span className="text-4xl md:text-6xl">构建未来智能架构</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              我们提供全球领先的 AI 算力芯片与云原生解决方案，打破算力瓶颈，
              助力企业在数字化浪潮中实现指数级增长。
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]">
                探索产品
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-neutral-700 text-neutral-300 font-bold text-base hover:bg-neutral-800 hover:text-white transition-all">
                技术咨询
              </button>
            </div>
          </motion.div>

          {/* 右侧：产品样式图 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* 图片容器，增加一个微妙的浮动动画和发光效果 */}
            <div className="relative w-full max-w-lg xl:max-w-xl animate-slow-float">
                {/* 核心产品图 */}
                <img 
                    src={heroImage}
                    alt="Astro Tech AI Chip Processor" 
                    className="w-full h-auto object-contain rounded-2xl pointer-events-none relative z-10 "
                />
                {/* 底部发光光晕，增强科技感 */}
                <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}