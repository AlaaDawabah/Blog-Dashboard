import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog, editBlog } from "../../store/actions/Blog";
import "./AddBlog.css";
import { setLoader } from "../../store/actions/Spinner";
const AddBlog = ({ location }) => {
  const blog = location?.state?.blog;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(blog?blog.data.title:null);
  const [category, setCategory] = useState(blog?blog.data.category:null);
  const [description, setDescription] = useState(blog?blog.data.description:null);
  const handleSubmit = e => {
    e.preventDefault();
    if(blog){
      dispatch(
        editBlog({
          id: blog.id,
          title: e.target.blog_title.value,
          description: e.target.blog_desc.value,
          category: e.target.blog_category.value
        })
      )
      dispatch(setLoader(true))
    }else{
      dispatch(
        addBlog({
          title: e.target.blog_title.value,
          description: e.target.blog_desc.value,
          category: e.target.blog_category.value
        })
      );
      dispatch(setLoader(true))
    }
  };
  const categoryClicked = category => setCategory(category);
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div class="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          name="blog_title"
          autoComplete={"off"}
          onChange={(e)=>setTitle(e.target.value)}
          defaultValue={title}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          id="category"
          placeholder="Ex: Health"
          name="blog_category"
          disabled={true}
          style={{
            backgroundColor:"#fff"
          }}
          autoComplete={"off"}
          value={category}
        />
        <div className="mt-2">
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Science")}>
            Science
          </button>
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Technology")}>
            Technology
          </button>
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Architecture")}>
            Architecture
          </button>
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Development")}>
            Development
          </button>
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Cosmetic")}>
            Cosmetic
          </button>
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Fiction")}>
            Fiction
          </button>
          <button type="button" className="tag_btn" onClick={() => categoryClicked("Health")}>
            Health
          </button>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="body"
          rows="10"
          name="blog_desc"
          placeholder="Body"
          onChange={(e)=>setDescription(e.target.value)}
          defaultValue={description}
        ></textarea>
      </div>
      <button type="submit" className="submit_blog_btn mb-5" disabled={
        (title&&category&&description)?false:true
      }>
        Submit
      </button>
    </form>
  );
};

export default AddBlog;
