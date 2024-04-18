import { Link, Outlet, useLoaderData } from "react-router-dom";
import { blogs } from "../blog-data.js";

export function blogsLoader() {
  return blogs;
}

function Root() {
  const blogs = useLoaderData();
  return (
    <>
      <nav>
        {blogs.length ? (
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Link to={`blogs/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No Blogs</i>
          </p>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
