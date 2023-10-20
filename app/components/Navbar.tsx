"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.nav
      className=" border-b-2 pt-20 font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div>
        <h1 className="text-3xl py-5">DoungChan Blogs</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-base opacity-70">Doungchan blog site</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="/">
                {" "}
                <p className=" border-b-2 p-2 hover:bg-slate-800 duration-500">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <Link href="/addBlog">
                {" "}
                <p className=" border-b-2 hover:bg-slate-800 p-2 duration-500">
                  Create
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
