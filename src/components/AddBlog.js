import React from "react";
import {useDispatch} from "react-redux";
import {addBlog, editBlog} from "../store/actions/Blog"

const AddBlog = ({location}) => {
    const blog = location?.state?.blog;
    console.log("blog",location)
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        blog?dispatch(editBlog({
            id:blog.id,
            title:e.target.blog_title.value,
            description:e.target.blog_desc.value
        })):dispatch(addBlog({
            title:e.target.blog_title.value,
            description:e.target.blog_desc.value
        }))
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
          name="blog_title"
          defaultValue={blog?blog.data.title:""}
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="blog_desc"
          placeholder="Body"
          defaultValue={blog?blog.data.description:""}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBlog;
