import React from "react";
import { useDispatch } from "react-redux";
import History from "../../routes/History";
import { deleteBlog } from "../../store/actions/Blog";
import "./Card.css";
import { setLoader } from "../../store/actions/Spinner";
const Card = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-4">
      <div className="card_overlay">
        <div className="row no-gutters justify-content-end">
          <div
            className="col-md-1 px-2 edit_icon"
            onClick={() =>
              History.push({ pathname: "/edit-blog", state: { blog } })
            }
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-pencil-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
          <div
            className="col-md-1 px-2 delete_icon"
            onClick={() => {
              dispatch(deleteBlog({ id: blog.id }))
              dispatch(setLoader(true))
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-trash-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <b>{blog.data.title}</b>
        </h5>
        <p
          className="card-text"
          className="ml-2 px-2"
          style={{ borderLeft: "3px solid #dcd7d7" }}
        >
          {blog.data.description}
        </p>
        <footer className="blockquote-footer">{blog.data.category}</footer>
      </div>
    </div>
  );
};

export default Card;
