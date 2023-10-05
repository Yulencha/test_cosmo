import React from "react";
import "./style.css";
import Button from "../button/Button";

const GameLevel = ({ price, img, title, description }) => {
  return (
    <div className="game-level">
      <div className="game-level__image">
        <img src={img} alt={title} className="game-level__img" />
      </div>
      <div className="game-level__content">
        <div className="game-level__title">{title}</div>
        <div className="game-level__description">{description}</div>
        <div className="game-level__button">
          {price === "free" ? (
            <Button text={"Бесплатный доступ"} color={"blue"} />
          ) : (
            <Button text={"Доступ по подписке"} color={"red"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameLevel;
