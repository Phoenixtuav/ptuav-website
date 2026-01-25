import React from "react";
import { motion } from "framer-motion";

interface Product {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const Features = ({ products }: { products: Product[] }) => {
  if (!products || products.length === 0) {
    return (
      <section className="py-20 bg-neutral-950 text-center text-neutral-400">
        暂无展示产品，请在 src/pages/products/ 下添加带有 feature: true 的文档。
      </section>
    );
  }

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            核心技术与产品
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            基于前沿架构打造的硬件与软件生态，为您的业务提供指数级增长引擎。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* 修改1: 改为3列布局，这样单张卡片会变窄 */}
          {products.map((product, idx) => (
            <motion.a
              key={idx}
              href={product.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group block relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* 修改2: 将 aspect-video 改为 aspect-[4/3] */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
              </div>

              <div className="p-6 absolute bottom-0 left-0 w-full">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mt-4 flex items-center text-blue-500 text-xs font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  了解详情 <span className="ml-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};