import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getBlogsList } from '../store/actions/Blog';
import Blog from '../components/Blog';
// import History from '../routes/History';
import {
    Switch,
    Redirect,
    useLocation,
    useHistory,
    Route
  } from "react-router-dom";

const Blogs = () => {
    const History = useHistory()
    const dispatch = useDispatch()
    const {blogs:{blogsList}} = useSelector(state=>state)
    useEffect(() => {
        dispatch(getBlogsList())
    }, [])
    return (
        <>
        <button onClick={()=>History.push('/add-blog')}>Add Blog</button>
           {blogsList&&blogsList.map((blog,i)=><Blog blog={blog} key={i}/>)} 
        </>
    )
}

export default Blogs
