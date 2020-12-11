import db from "../firebase.config";
import { Link } from "react-router-dom";

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
  console.log("add")
  return await db
    .collection("blogs")
    .add(payload)
    .then(res => <Link to="/" />);
};
const editBlog = async payload => {
  console.log("edit")
  return await db
    .collection("blogs")
    .doc(payload.id)
    .set({ title: payload.title, description: payload.description })
    .then(res => <Link to="/" />);
};
export { getBlogsList, addBlog,editBlog };
