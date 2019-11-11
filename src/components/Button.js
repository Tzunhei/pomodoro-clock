import React from "react";
import "./Button.css";

const Button = ({ handleClick, id, children }) => {
  return (
    <button onClick={handleClick} className="main-btn" id={id}>
      {children}
    </button>
  );
};

export default Button;
