import React from "react";
import { useRouter } from "next/router";
const BlogDetail = () => {
  // get the id from the url
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default BlogDetail;
