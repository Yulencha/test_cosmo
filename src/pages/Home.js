import React from "react";
import GameLevel from "../components/gameLevel/GameLevel";
import { gameLevelList } from "../helpers/GameLevelList";
import pageBackground from "../img/background.svg";
import stars1 from "../img/Star 7.svg";
import stars2 from "../img//Star 8.svg";
import stars3 from "../img/Star 9.svg";
import stars4 from "../img/Star 10.svg";

const Home = () => {
  return (
    <div className="page">
      <div className="page__background">
        <img className="page__background-img" src={pageBackground} alt="" />
        <div class="shooting-stars shooting-stars_1"></div>
        <div class="shooting-stars shooting-stars_2"></div>
        <div class="shooting-stars shooting-stars_3"></div>
        <img class="star star_1" src={stars1} alt="" />
        <img class="star star_2" src={stars2} alt="" />
        <img class="star star_3" src={stars3} alt="" />
        <img class="star star_4" src={stars4} alt="" />
      </div>
      <div className="page__title">Описание игры</div>
      <div className="page__game-levels">
        {gameLevelList.map((item, index) => {
          return (
            <GameLevel
              key={index}
              price={item.price}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
