import React from "react";
import "./style.css";

const ForwardBtn = () => {
  const scrollToElement = () => {
    const targetElement = document.querySelector(".page__title");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button className="forward-btn" onClick={scrollToElement}>
      <div className="forward-btn__outer-circle"></div>
      <div className="forward-btn__middle-circle"></div>
      <div className="forward-btn__inner-circle"></div>
      <div className="forward-btn__title">ВПЕРЕД!</div>
      <svg
        className="forward-btn__arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2787 2.5C17.2787 1.11929 16.1594 0 14.7787 0C13.398 0 12.2787 1.11929 12.2787 2.5V20.836L4.26777 12.8251C3.29146 11.8487 1.70854 11.8487 0.732233 12.8251C-0.244078 13.8014 -0.244078 15.3843 0.732233 16.3606L12.7551 28.3835L14.5229 30.1512L16.2906 28.3835L16.5341 28.14C16.5423 28.1319 16.5506 28.1236 16.5587 28.1154L28.3135 16.3606C29.2898 15.3843 29.2898 13.8014 28.3135 12.8251C27.3372 11.8487 25.7543 11.8487 24.778 12.8251L17.2787 20.3244V2.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ForwardBtn;
