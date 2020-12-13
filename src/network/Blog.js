import db from "../firebase.config";
import history from "../routes/History";
import store from "../store/index"
import { setLoader } from "../store/actions/Spinner";

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
    .then(()=>{
      store.dispatch(setLoader(false))
      history.push("/")
    })
};
const editBlog = async payload => {
  return await db
    .collection("blogs")
    .doc(payload.id)
    .set({ title: payload.title, description: payload.description, category:payload.category })
    .then(()=>{
      store.dispatch(setLoader(false))
      history.push("/")
    })
};
const deleteBlog = async payload => {
  return await db
    .collection("blogs")
    .doc(payload.id)
    .delete()
    .then(()=>{
      store.dispatch(setLoader(false))
      history.push("/")
    })
};
const filterBlog = async payload => {
  return await db
    .collection("blogs")
    .where("category", "==", payload)
    .get()
    .then((snapshot) =>
      snapshot.docs.map(doc => {
        return { data: doc.data(), id: doc.id };
      })
      // store.dispatch(setLoader(false))
    
    );
};
export { getBlogsList, addBlog, editBlog, deleteBlog, filterBlog };
