import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { PARTNERS_CONFIG } from "../config/partners"; // 导入配置

export function Partners() {
  // 将配置数据转换为组件需要的 items 格式
  // 既然你只想显示图片，我们将 logo 映射到组件预期的内容字段
  const partnerItems = PARTNERS_CONFIG.map((partner) => ({
    image: partner.logo,
    name: partner.name,
    // 如果底层组件需要 quote/title 字段，可传空字符串
    quote: "", 
    title: "",
  }));

  return (
    <section className="py-20 rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-400 mb-10">
          合作伙伴
        </h2>
      <InfiniteMovingCards
        items={partnerItems}
        direction="left"
        speed="normal"
      />
    </section>
  );
}