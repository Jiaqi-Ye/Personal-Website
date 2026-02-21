import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

/* ========================
   动画系统（统一节奏）
======================== */

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 22
    }
  }
};

const sideSpring = {
  type: "spring",
  stiffness: 90,
  damping: 20
};

/* ========================
   Header
======================== */

const Header = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-screen-2xl mx-auto h-screen flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12"
    >
      {/* 左侧图片（同步进入） */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={sideSpring}
        className="hidden lg:block lg:w-[350px] xl:w-[450px] shrink-0 will-change-transform"
      >
        <Image
          src={assets.art_cs}
          alt="Art CS"
          className="w-full h-auto rounded-3xl"
          priority
        />
      </motion.div>

      {/* 中间内容 */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center gap-4 flex-1 text-center min-w-[320px] z-10"
      >
        {/* 头像 */}
        <motion.div
          variants={fadeUp}
          className="will-change-transform"
        >
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="rounded-full w-32 border-2 border-white shadow-md"
            priority
          />
        </motion.div>

        {/* 姓名 */}
        <motion.h3
          variants={fadeUp}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        >
          Hi! I'm Jiaqi Ye
          <Image src={assets.hand_icon} alt="" className="w-8" />
        </motion.h3>

        {/* 主标题 */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[50px] font-Ovo leading-tight"
        >
          Let's explore code and creativity together.
        </motion.h1>

        {/* 描述 */}
        <motion.p
          variants={fadeUp}
          className="max-w-lg mx-auto font-Ovo text-gray-700 text-sm md:text-base leading-relaxed"
        >
          I'm currently studying Computer Science at UW-Madison,
          with three years of Media Art studies at a university in Beijing, China.
        </motion.p>

        {/* 按钮 */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <a
            href="#contact"
            className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/CV.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-50 transition-colors duration-300"
          >
            My CV
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* 右侧图片（同步进入） */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={sideSpring}
        className="hidden lg:block lg:w-[350px] xl:w-[450px] shrink-0 will-change-transform"
      >
        <Image
          src={assets.oc}
          alt="OC"
          className="w-full h-auto rounded-3xl"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Header;