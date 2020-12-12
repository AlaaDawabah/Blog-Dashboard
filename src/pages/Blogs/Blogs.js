import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogsList, filterBlog } from "../../store/actions/Blog";
import Blog from "../../components/Blog/Blog";
import history from "../../routes/History";
import DropDown from "../../components/DropDown/DropDown";
import "./Blogs.css";
const Blogs = () => {
  const dispatch = useDispatch();
  const {
    blogs: { blogsList }
  } = useSelector(state => state);
  useEffect(() => {
    dispatch(getBlogsList());
  }, []);
  const blogCategories = [
    "All",
    "Science",
    "Health",
    "Cosmetic",
    "Architecture",
    "Technology",
    "Development",
    "Fiction"
  ];
  const handleSelect = e => {
    e === "All" ? dispatch(getBlogsList()) : dispatch(filterBlog(e));
  };
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <button
            onClick={() => history.push(`/add-blog`)}
            className="add_blog_btn mb-4"
          >
            <span>Add Blog</span>
          </button>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <DropDown
            dropDownArr={blogCategories}
            onSelect={handleSelect}
            title={"Filter By Category"}
          />
        </div>
      </div>
      <div>
        {blogsList.length ? (
          blogsList.map((blog, i) => <Blog blog={blog} key={i} />)
        ) : (
          <p className="text-center mt-5">
            <b>There is no blogs right now</b>
          </p>
        )}
      </div>
    </>
  );
};

export default Blogs;
