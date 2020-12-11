import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogsList } from "../store/actions/Blog";
import Blog from "../components/Blog";
import history from "../routes/History";

const Blogs = () => {
  const dispatch = useDispatch();
  const {
    blogs: { blogsList }
  } = useSelector(state => state);
  useEffect(() => {
    dispatch(getBlogsList());
  }, []);
  return (
    <>
      <button onClick={() => history.push(`/add-blog`)}>Add Blog</button>
      {blogsList && blogsList.map((blog, i) => <Blog blog={blog} key={i} />)}
    </>
  );
};

export default Blogs;
