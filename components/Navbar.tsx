"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="sticky top-0 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <div className="flex flex-row items-centerr">
          {/* Social Icons */}
          <p className="text-xl font-bold text-gray-400">Motivio</p>
        </div>

        <div className="flex flex-row items-center cursor-pointer">
          <motion.div whileHover={{ scale: 1.2 }}>
            <SocialIcon
              url="https://github.com/yifeiw701"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <SocialIcon
              url="https://www.linkedin.com/in/yifei-wang01/"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
