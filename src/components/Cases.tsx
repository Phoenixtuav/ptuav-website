import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Cases() {
  return (
    <section id="cases" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          客户成功案例
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CaseCard 
            title="智慧城市大脑"
            category="政府 / 公共服务"
            description="利用 AI 视觉识别优化城市交通流量，拥堵率下降 35%。"
            imgUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
          />
          <CaseCard 
            title="FinTech 核心交易系统"
            category="金融科技"
            description="为全球前十银行构建高频交易系统，延迟降低至微秒级。"
            imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}

const CaseCard = ({ title, category, description, imgUrl }: any) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {category}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imgUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="div"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {description}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            查看详情
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};