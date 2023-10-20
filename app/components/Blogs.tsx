"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Blogs = ({ data }: { data: any }) => {
  const router = useRouter();
  return (
    <motion.div
      className="w-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <ul className="py-5">
        {data.props.data.map((blog: any, index: any) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delayChildren: 0.5,
            }}
            className="border-b-[1px] cursor-pointer"
            key={index}
            onClick={() => router.push(`/${blog._id}`)}
          >
            <div>
              <h1 className="text-2xl py-5">. {blog.title}</h1>
            </div>
            <div>
              <p className="text-base opacity-70">{blog.snippet}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Blogs;
