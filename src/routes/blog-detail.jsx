import "./blog-detail.css";
import { useLoaderData } from "react-router-dom";
import { blogs } from "../blog-data.js";

export function oneBlogLoader({ params }) {
  return blogs.find((b) => b.id == params.blogId);
}

export default function Blog() {
  const blog = useLoaderData();
  return (
    <div>
      {blog.title} {blog.description}
    </div>
  );
}
