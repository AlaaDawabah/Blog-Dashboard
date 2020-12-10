import db from "../firebase.config";

const getBlogsList = async () =>
  await db
    .collection("blogs")
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()));
const addBlog = async payload => {
  console.log("payload",payload)
  return await db.collection("blogs").add(payload)
};
export { getBlogsList, addBlog };
