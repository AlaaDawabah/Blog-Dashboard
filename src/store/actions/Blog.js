import {
  GET_BLOGS_LIST,
  BLOGS_LIST_RECIEVE,
  ADD_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
  FILTER_BLOG
} from "../types/Blog";

export const getBlogsList = payload => ({
  type: GET_BLOGS_LIST,
  payload
});

export const blogsListRecieve = payload => ({
  type: BLOGS_LIST_RECIEVE,
  payload
});

export const addBlog = payload => ({
  type: ADD_BLOG,
  payload
});
export const editBlog = payload => ({
  type: EDIT_BLOG,
  payload
});
export const deleteBlog = payload => ({
  type: DELETE_BLOG,
  payload
});
export const filterBlog = payload => ({
  type: FILTER_BLOG,
  payload
});
