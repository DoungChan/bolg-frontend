import Image from "next/image";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import { env } from "process";

// Types
type Blog = {
  id: number;
  title: string;
  snippet: string;
};

type Props = {
  blogs: Blog[];
};

// get data from server
async function getStaticProps() {
  const URL = process.env.API_URL;
  try {
    const res = await fetch("http://localhost:3000");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data: Blog[] = await res.json();
    console.log(data);
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default async function Home() {
  // call getStaticProps
  const getBlog = await getStaticProps();

  return (
    <main className="flex flex-col items-center pt-24">
      <div className=" max-w-5xl w-full items-start font-mono lg:flex ">
        <Blogs data={getBlog} />
      </div>
    </main>
  );
}
