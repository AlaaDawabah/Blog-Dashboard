import { GET_BLOGS_LIST,BLOGS_LIST_RECIEVE,ADD_BLOG } from "../types/Blog";

export const getBlogsList = payload => ({
  type: GET_BLOGS_LIST,
  payload
});

export const blogsListRecieve = payload => ({
  type: BLOGS_LIST_RECIEVE,
  payload
});

export const addBlog = payload => {
  console.log("action",payload)
  return({
  type:ADD_BLOG,
  payload
})};