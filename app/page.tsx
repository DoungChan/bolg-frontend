import Image from "next/image";
import Navbar from "./componenst/Navbar";
import Blogs from "./componenst/Blogs";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-24">
      <div className=" max-w-5xl w-full items-start font-mono text-sm lg:flex">
        <Blogs />
      </div>
    </main>
  );
}
