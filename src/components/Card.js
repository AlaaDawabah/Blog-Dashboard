import React from "react";
import History from "../routes/History";
// import {useHistory} from "react-router-dom";

const Card = ({blog}) => {
  console.log("blooo",blog)
  // const History = useHistory()
  return (
    <div class="card mb-4" onClick={()=>History.push({pathname:"/edit-blog",state:{blog}})}>
      <div class="card-body">
        <h5 class="card-title">{blog.data.title}</h5>
        <p class="card-text">
          {blog.data.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
