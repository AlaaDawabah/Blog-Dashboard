import React from "react";
import { useDispatch } from "react-redux";
import { addBlog, editBlog } from "../../store/actions/Blog";
import "./AddBlog.css";
const AddBlog = ({ location }) => {
  const blog = location?.state?.blog;
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    blog
      ? dispatch(
          editBlog({
            id: blog.id,
            title: e.target.blog_title.value,
            description: e.target.blog_desc.value,
            category:e.target.blog_category.value
          })
        )
      : dispatch(
          addBlog({
            title: e.target.blog_title.value,
            description: e.target.blog_desc.value,
            category:e.target.blog_category.value
          })
        );
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div class="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
          name="blog_title"
          defaultValue={blog ? blog.data.title : ""}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Category"
          name="blog_category"
          defaultValue={blog ? blog.data.category : ""}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          name="blog_desc"
          placeholder="Body"
          defaultValue={blog ? blog.data.description : ""}
        ></textarea>
      </div>
      <button type="submit" className="submit_blog_btn">Submit</button>
    </form>
  );
};

export default AddBlog;
