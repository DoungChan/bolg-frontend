"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

interface Blog {
  title: string;
  snippet: string;
  body: string;
}

const AddBlog: React.FC = () => {
  // useState
  const [title, setTitle] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [body, setBody] = React.useState("");

  //onChange
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSnippetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSnippet(e.target.value);
  };
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  // handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { title, snippet, body };
    console.log(blog);
  };

  // post data to server
  const postData = async (blog: Blog) => {
    try {
      const res = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        body: JSON.stringify(blog),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
      className="w-fit p-10 border-2 m-auto mt-32 
                    rounded-md shadow-md 
                    font-mono"
    >
      <form onSubmit={handleSubmit}>
        <div>
          <h1> Blog title:</h1>
          <input
            required
            onChange={handleTitleChange}
            value={title}
            type="text"
            name="title"
            id="title"
            size={50}
            className="bg-gray-300 rounded-md h-10 focus:border-orange-50 
                      px-5 w-[350px]       
                      focus:ring-2 focus:ring-orange-50 focus:outline-none focus:bg-slate-400
                      text-gray-800 text-opacity-70 
                      duration-700"
          />
        </div>
        <div className="py-5">
          <h1> Blog snippet:</h1>
          <input
            required
            onChange={handleSnippetChange}
            value={snippet}
            type="text"
            name="snippet"
            id="snippet"
            className="bg-gray-300 rounded-md h-10 focus:border-orange-50 
                      px-5 w-[350px]   
                      focus:ring-2 focus:ring-orange-50 focus:outline-none focus:bg-slate-400
                      text-gray-800 text-opacity-70 
                      duration-700"
          />
        </div>
        <div>
          <h1> Blog body:</h1>
          <textarea
            required
            onChange={handleBodyChange}
            value={body}
            name="body"
            id="body"
            className="bg-gray-300 rounded-md h-40 focus:border-orange-50 
                      px-5 w-[350px]   
                      focus:ring-2 focus:ring-orange-50 focus:outline-none focus:bg-slate-400
                      text-gray-800 text-opacity-70
                      duration-700"
          />
        </div>
        <div>
          <button
            onClick={() => postData({ title, snippet, body })}
            className="bg-gray-500 
                            p-3 m-auto mt-4 
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
