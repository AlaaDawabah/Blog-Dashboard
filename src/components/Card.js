import React from "react";

const Card = ({blog}) => {
  return (
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">{blog.title}</h5>
        <p class="card-text">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
