"use client";
import React from "react";
import { motion } from "framer-motion";

const RefreshButton = () => {
  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <motion.button
      className="rounded-xl bg-neutral-100 bg-opacity-70 p-2 font-semibold shadow"
      whileHover={{ scale: 1.1 }}
      onClick={handleRefreshClick}
    >
      <p>Make a quote</p>
    </motion.button>
  );
};

export default RefreshButton;
