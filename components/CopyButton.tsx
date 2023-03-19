"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCopy } from "react-icons/ai";

interface CopyButtonProps {
  content: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <motion.button
        className="rounded-full bg-neutral-100 bg-opacity-70 p-2.5 font-semibold shadow"
        whileHover={{ scale: 1.1 }}
        onClick={handleCopy}
      >
        <AiFillCopy className="text-neutral-600 text-2xl" />
      </motion.button>
      {showNotification && (
        <div className="bg-green-400 text-white text-sm px-3 py-2 rounded absolute top-0 right-0 mt-3 mr-3">
          Copied successfully!
        </div>
      )}
    </>
  );
};

export default CopyButton;
