"use client";
import React from "react";
import { motion } from "framer-motion";
const Blogs: React.FC = () => {
  return (
    <motion.div
      className="w-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <ul className="py-5">
        <li className="border-b-[1px]">
          <div>
            <h1 className="text-2xl py-5">. DoungChan Blogs</h1>
          </div>
          <div>
            <p className="text-base opacity-70">Doungchan blog site</p>
          </div>
        </li>
        <li className="border-b-[1px]">
          <div>
            <h1 className="text-2xl py-5">. DoungChan Blogs</h1>
          </div>
          <div>
            <p className="text-base opacity-70">Doungchan blog site</p>
          </div>
        </li>
        <li className="border-b-[1px]">
          <div>
            <h1 className="text-2xl py-5">. DoungChan Blogs</h1>
          </div>
          <div>
            <p className="text-base opacity-70">Doungchan blog site</p>
          </div>
        </li>
        <li className="border-b-[1px]">
          <div>
            <h1 className="text-2xl py-5">. DoungChan Blogs</h1>
          </div>
          <div>
            <p className="text-base opacity-70">Doungchan blog site</p>
          </div>
        </li>
        <li className="border-b-2">
          <div>
            <h1 className="text-2xl py-5">. DoungChan Blogs</h1>
          </div>
          <div>
            <p className="text-base opacity-70">Doungchan blog site</p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default Blogs;
