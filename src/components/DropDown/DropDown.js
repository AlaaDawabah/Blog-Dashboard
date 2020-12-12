import React from "react";
import { Dropdown as ReactBootstrapDropDown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = ({ dropDownArr, onSelect }) => {
  return (
    <ReactBootstrapDropDown>
      <DropdownButton
        id="dropdown-basic-button"
        title="Dropdown button"
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
