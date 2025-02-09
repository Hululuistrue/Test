'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 导航栏 */}
      <nav className="fixed w-full backdrop-blur-lg bg-background/70 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold">Logo</div>
          <div className="hidden md:flex space-x-8">
            <a href="#product" className="hover:text-gray-600 transition-colors">产品</a>
            <a href="#features" className="hover:text-gray-600 transition-colors">特性</a>
            <a href="#specs" className="hover:text-gray-600 transition-colors">规格</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              重新定义<br/>
              产品体验
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              突破性能极限，开启智能新时代
            </motion.p>
            <motion.button 
              className="bg-foreground text-background px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              立即探索
            </motion.button>
          </div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* 这里可以放置产品主图 */}
            <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-800 rounded-2xl">
              {/* 替换为实际产品图片 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                产品展示图
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 产品特性 */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { title: "创新设计", desc: "突破传统界限，带来全新视觉体验" },
              { title: "卓越性能", desc: "强大的处理能力，流畅的操作体验" },
              { title: "智能交互", desc: "智能感知用户需求，提供个性化服务" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
