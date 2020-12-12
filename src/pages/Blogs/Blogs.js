import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogsList, filterBlog } from "../../store/actions/Blog";
import Blog from "../../components/Blog";
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
    "Science",
    "Health",
    "Cosmetic",
    "Architecture",
    "Technology",
    "Development",
    "Fiction"
  ];
  const handleSelect = e => {
    console.log("e", e);
    dispatch(filterBlog(e))
  };
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <button
            onClick={() => history.push(`/add-blog`)}
            className="add_blog_btn mb-4"
          >
            <span>
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-plus"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="pr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
              Add Blog
            </span>
          </button>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <DropDown dropDownArr={blogCategories} onSelect={handleSelect} />
        </div>
      </div>
      <div>
        {blogsList && blogsList.map((blog, i) => <Blog blog={blog} key={i} />)}
      </div>
    </>
  );
};

export default Blogs;
