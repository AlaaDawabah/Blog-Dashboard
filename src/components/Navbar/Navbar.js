import React from "react";
import { Navbar as ReactBootstrapNavBar } from "react-bootstrap";
import "./Navbar.css";
const Navbar = ({ pageTitle }) => {
  return (
    <ReactBootstrapNavBar className="navbar justify-content-between">
      <div className="text-white"><b>{pageTitle}</b></div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-person-circle text-white"
          viewBox="0 0 16 16"
        >
          <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
          <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fillRule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
          />
        </svg>
        <span className="ml-3 text-white">Alaa Dawabah</span>
      </div>
    </ReactBootstrapNavBar>
  );
};

export default Navbar;
