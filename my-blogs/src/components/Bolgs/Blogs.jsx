import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelBookMark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl ">Total Blogs: {blogs.length}</h2>
      <div className="grid grid-cols-2 gap-20">
        {blogs.map((blog) => (
          <Blog handelBookMark={handelBookMark} blog={blog} key={blog.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
