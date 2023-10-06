import React from "react";
import "./style.css";
import pageBackground from "./background.svg";
import stars1 from "./Star 7.svg";
import stars2 from "./Star 8.svg";
import stars3 from "./Star 9.svg";
import stars4 from "./Star 10.svg";

const PageBackground = ({ galaxy }) => {
  return (
    <div className="page__background">
      {galaxy === "width" ? (
        <img className="page__background-img2" src={pageBackground} alt="" />
      ) : (
        <img className="page__background-img" src={pageBackground} alt="" />
      )}
      <div class="shooting-stars shooting-stars_1"></div>
      <div class="shooting-stars shooting-stars_2"></div>
      <div class="shooting-stars shooting-stars_3"></div>
      <img class="star star_1" src={stars1} alt="" />
      <img class="star star_2" src={stars2} alt="" />
      <img class="star star_3" src={stars3} alt="" />
      <img class="star star_4" src={stars4} alt="" />
    </div>
  );
};

export default PageBackground;
