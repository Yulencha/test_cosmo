import React from "react";
import "./style.css";

export const BurgerButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`header__menu-button
        ${isActive === true ? "active" : ""}
        ${isActive === false ? "unactive" : ""}
      `}
    >
      <span></span>
    </button>
  );
};

export default BurgerButton;
