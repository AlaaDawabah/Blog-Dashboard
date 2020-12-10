import React from "react";
import {useDispatch} from "react-redux";
import {addBlog} from "../store/actions/Blog"

const AddBlog = () => {
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("e",e.target.blog_title.value)
        dispatch(addBlog({
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
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="blog_desc"
          placeholder="Body"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBlog;
