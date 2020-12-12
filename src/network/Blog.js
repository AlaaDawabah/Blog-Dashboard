import db from "../firebase.config";
import { Link } from "react-router-dom";
import history from "../routes/History";

const getBlogsList = async () =>
  await db
    .collection("blogs")
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => {
        return { data: doc.data(), id: doc.id };
      })
    );
const addBlog = async payload => {
  return await db
    .collection("blogs")
    .add(payload)
    .then(history.push(`/`));
};
const editBlog = async payload => {
  return await db
    .collection("blogs")
    .doc(payload.id)
    .set({ title: payload.title, description: payload.description })
    .then(history.push(`/`));
};
const deleteBlog = async payload => {
  return await db
    .collection("blogs")
    .doc(payload.id)
    .delete()
    .then(history.push(`/`));
};
const filterBlog = async payload => {
  return await db
    .collection("blogs")
    .where("category", "==", payload)
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => {
        return { data: doc.data(), id: doc.id };
      })
    );
};
export { getBlogsList, addBlog, editBlog, deleteBlog, filterBlog };
