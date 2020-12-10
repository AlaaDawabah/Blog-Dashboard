import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2d1xavLkm7HBQdHxmY0hzoDn8RkDVPEw",
  authDomain: "blog-dashboard-30b5d.firebaseapp.com",
  projectId: "blog-dashboard-30b5d",
  storageBucket: "blog-dashboard-30b5d.appspot.com",
  messagingSenderId: "590471985207",
  appId: "1:590471985207:web:0789b83c1b3adf01e4e7b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
