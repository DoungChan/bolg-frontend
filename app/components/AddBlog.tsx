"use client";
import React from "react";
import { motion } from "framer-motion";
const AddBlog: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-fit p-10 border-2 m-auto mt-32 
                    rounded-md shadow-md 
                    font-mono"
    >
      <form>
        <div>
          <h1> Blog title:</h1>
          <input
            required
            type="text"
            name="title"
            id="title"
            size={50}
            className="bg-gray-300 rounded-md h-10 focus:border-orange-50 
                      px-5 w-[350px]       
                      focus:ring-2 focus:ring-orange-50 focus:outline-none focus:bg-slate-400
                      text-gray-700 text-opacity-70 
                      duration-700"
          />
        </div>
        <div className="py-5">
          <h1> Blog snippet:</h1>
          <input
            required
            type="text"
            name="snippet"
            id="snippet"
            className="bg-gray-300 rounded-md h-10 focus:border-orange-50 
                      px-5 w-[350px]   
                      focus:ring-2 focus:ring-orange-50 focus:outline-none focus:bg-slate-400
                      text-gray-700 text-opacity-70 
                      duration-700"
          />
        </div>
        <div>
          <h1> Blog body:</h1>
          <input
            required
            type="text"
            name="body"
            id="body"
            className="bg-gray-300 rounded-md h-40 focus:border-orange-50 
                      px-5 w-[350px]   
                      focus:ring-2 focus:ring-orange-50 focus:outline-none focus:bg-slate-400
                      text-gray-700k text-opacity-70
                      duration-700"
          />
        </div>
        <div>
          <button
            className="bg-gray-500 
                            p-4 m-auto mt-4 
                            rounded-md shadow-md
                            hover:bg-gray-700 hover:text-white duration-700 "
          >
            Create
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddBlog;
