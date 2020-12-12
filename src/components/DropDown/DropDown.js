import React from "react";
import { Dropdown as ReactBootstrapDropDown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DropDown.css";
const DropDown = ({ dropDownArr, onSelect,title }) => {
  return (
    <ReactBootstrapDropDown>
      <DropdownButton
        id="dropdown-basic-button"
        title={title}
        onSelect={onSelect}
      >
        {dropDownArr.length &&
          dropDownArr.map((item, i) => (
            <ReactBootstrapDropDown.Item eventKey={item} key={i}>
              {item}
            </ReactBootstrapDropDown.Item>
          ))}
      </DropdownButton>
    </ReactBootstrapDropDown>
  );
};

export default DropDown;
