import "./root.css";
import { Outlet, useLoaderData } from "react-router-dom";
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
          <div>
            {blogs.map((blog) => (
              <div key={blog.id} className="card">
                <div className="card-title">{blog.title}</div>
                <div className="card-summary">{blog.description}</div>
                <button className="card-button">Read More</button>
              </div>
            ))}
          </div>
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
