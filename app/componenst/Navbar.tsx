"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" border-b-2 pt-20 font-mono">
      <div>
        <h1
          className="text-3xl
                      py-5
                        "
        >
          DoungChan Blogs
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-base opacity-70">Doungchan blog site</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/contact">Add Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
