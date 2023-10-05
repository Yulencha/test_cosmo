import React from "react";
import "./style.css";

const Button = ({ text, color }) => {
  return (
    <button className={color ? `button button_${color}` : "button"}>
      {text}
    </button>
  );
};

export default Button;
