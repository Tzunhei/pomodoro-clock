import React from "react";
import "./ConfigSection.css";

import Button from "./Button";

const ConfigSection = ({
  title,
  type,
  value,
  handleIncrement,
  handleDecrement
}) => {
  return (
    <div id={`${type}-label`}>
      <h4>{title}</h4>
      <div className="up-down-btn-container">
        <Button handleClick={handleDecrement} id={`${type}-decrement`}>
          Down
        </Button>
        <p className="nb-config" id={`${type}-length`}>
          {value}
        </p>
        <Button handleClick={handleIncrement} id={`${type}-increment`}>
          Up
        </Button>
      </div>
    </div>
  );
};

export default ConfigSection;
