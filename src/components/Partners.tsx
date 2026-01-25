import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Partners() {
  return (
    <section className="py-20 rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-400 mb-10">
          深受行业领袖信赖
        </h2>
      <InfiniteMovingCards
        items={partners}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const partners = [
  {
    quote: "Astro Tech 的云架构帮助我们实现了全球业务的无缝扩展。",
    name: "Global Dynamics",
    title: "全球物流巨头",
  },
  {
    quote: "在网络安全领域，他们是我们最值得信赖的防火墙。",
    name: "Nebula Finance",
    title: "数字银行独角兽",
  },
  {
    quote: "AI 算力引擎的效率令人惊叹，研发周期缩短了一半。",
    name: "Orion Biotech",
    title: "医药研发先锋",
  },
  {
    quote: "非常专业的团队，交付质量远超预期。",
    name: "Vertex Energy",
    title: "新能源领军者",
  },
  {
    quote: "数字化转型的最佳合作伙伴。",
    name: "Quantum Auto",
    title: "智能汽车制造商",
  },
];