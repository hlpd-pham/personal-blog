import { useLoaderData } from "react-router-dom";
import { blogs } from "../blog-data.js";

export function oneBlogLoader({ params }) {
  return blogs.find((b) => b.id == params.blogId);
}

export default function Blog() {
  const blog = useLoaderData();
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
}
